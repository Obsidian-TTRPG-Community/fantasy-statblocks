import { normalizePath, requestUrl } from "obsidian";
import type StatBlockPlugin from "src/main";
import {
    DEFAULT_COMMUNITY_SOURCE,
    isValidLayout,
    type CommunityManifest,
    type CommunityTemplateEntry,
    type ResolvedTemplate
} from "./types";

/**
 * Handles all network access for the community template registry.
 *
 * Uses Obsidian's `requestUrl` (rather than `fetch`) so requests are made from
 * the desktop process and are not subject to browser CORS restrictions.
 *
 * Nothing here mutates plugin settings or the vault — that is the caller's
 * responsibility — so this manager is safe to construct eagerly and reuse.
 */
export default class CommunityTemplateManager {
    /** Cached manifest, keyed by the source URL it was fetched from. */
    #cache: Map<string, CommunityManifest> = new Map();

    constructor(private plugin: StatBlockPlugin) {}

    /** The manifest URL currently configured (user override or default). */
    get source(): string {
        const configured = this.plugin.settings.communityTemplateSource;
        return configured && configured.trim().length
            ? configured.trim()
            : DEFAULT_COMMUNITY_SOURCE;
    }

    /**
     * True when the registry is read from the vault / local disk rather than
     * fetched over http(s). Lets users host a registry in their own vault or on
     * a shared drive, and makes the feature usable fully offline.
     */
    get isLocal(): boolean {
        return !/^https?:\/\//i.test(this.source);
    }

    /**
     * Resolve a (possibly relative) asset path against the manifest URL.
     * Absolute http(s) URLs are returned unchanged.
     */
    resolveUrl(relativeOrAbsolute: string): string {
        if (/^https?:\/\//i.test(relativeOrAbsolute)) {
            return relativeOrAbsolute;
        }
        const base = this.source;
        const dir = base.slice(0, base.lastIndexOf("/") + 1);
        // Strip any leading "./" or "/" from the relative path.
        const clean = relativeOrAbsolute.replace(/^\.?\//, "");
        return `${dir}${clean}`;
    }

    /**
     * Fetch and validate the registry manifest.
     * @param force Bypass the in-memory cache.
     */
    async getManifest(force = false): Promise<CommunityManifest> {
        const url = this.source;
        if (!force && this.#cache.has(url)) {
            return this.#cache.get(url)!;
        }
        const text = await this.#fetchText(url);
        let manifest: CommunityManifest;
        try {
            manifest = JSON.parse(text);
        } catch (e) {
            throw new Error(
                `Could not parse the template registry at ${url}. Is it a valid index.json?`
            );
        }
        if (!manifest || !Array.isArray(manifest.templates)) {
            throw new Error(
                `The template registry at ${url} is missing a "templates" array.`
            );
        }
        this.#cache.set(url, manifest);
        return manifest;
    }

    /**
     * Fetch and parse the layout JSON referenced by a template entry.
     */
    async getLayout(entry: CommunityTemplateEntry) {
        const url = this.resolveUrl(entry.layout);
        const text = await this.#fetchText(url);
        let layout: unknown;
        try {
            layout = JSON.parse(text);
        } catch (e) {
            throw new Error(`Could not parse the layout file at ${url}.`);
        }
        if (!isValidLayout(layout)) {
            throw new Error(
                `The layout at ${url} is invalid (it must have a name and a blocks array).`
            );
        }
        return layout;
    }

    /**
     * Fetch the example note markdown referenced by a template entry, if any.
     */
    async getExample(
        entry: CommunityTemplateEntry
    ): Promise<string | undefined> {
        if (!entry.example) return undefined;
        return this.#fetchText(this.resolveUrl(entry.example));
    }

    /**
     * Fetch both the layout and (optional) example for a template entry.
     */
    async resolve(entry: CommunityTemplateEntry): Promise<ResolvedTemplate> {
        const [layout, example] = await Promise.all([
            this.getLayout(entry),
            this.getExample(entry)
        ]);
        return { entry, layout, example };
    }

    /**
     * Fetch and concatenate the CSS snippet(s) referenced by a template entry,
     * if any. Returns undefined when the entry ships no CSS.
     */
    async getCss(entry: CommunityTemplateEntry): Promise<string | undefined> {
        if (!entry.css) return undefined;
        const paths = Array.isArray(entry.css) ? entry.css : [entry.css];
        const parts: string[] = [];
        for (const path of paths) {
            parts.push(await this.#fetchText(this.resolveUrl(path)));
        }
        return parts.join("\n\n");
    }

    /** Clear the cached manifest(s). */
    clearCache() {
        this.#cache.clear();
    }

    async #fetchText(target: string): Promise<string> {
        // Local / vault-relative sources are read through the file adapter;
        // only http(s) targets go over the network. A local manifest may still
        // reference absolute http(s) assets, which are fetched normally.
        if (!/^https?:\/\//i.test(target)) {
            const path = normalizePath(target);
            const adapter = this.plugin.app.vault.adapter;
            if (!(await adapter.exists(path))) {
                throw new Error(
                    `Local registry file not found in vault: ${path}`
                );
            }
            return adapter.read(path);
        }
        let res;
        try {
            res = await requestUrl({ url: target, throw: false });
        } catch (e) {
            throw new Error(
                `Network error fetching ${target}. Check your connection and the registry URL.`
            );
        }
        if (res.status < 200 || res.status >= 300) {
            throw new Error(
                `Request to ${target} failed with status ${res.status}.`
            );
        }
        return res.text;
    }
}
