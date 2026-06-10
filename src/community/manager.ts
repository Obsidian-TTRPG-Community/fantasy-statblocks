import { requestUrl } from "obsidian";
import type StatBlockPlugin from "src/main";
import {
    COMMUNITY_REPO,
    DEFAULT_COMMUNITY_CDN,
    DEFAULT_COMMUNITY_RAW,
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

    /** The official registry manifest URL. */
    get source(): string {
        return DEFAULT_COMMUNITY_SOURCE;
    }

    /**
     * Resolve a (possibly relative) asset path against the jsDelivr CDN.
     * Used only for the layout download so that jsDelivr records the fetch and
     * drives the "Most popular" sort. Absolute http(s) URLs are returned
     * unchanged.
     */
    resolveUrl(relativeOrAbsolute: string): string {
        if (/^https?:\/\//i.test(relativeOrAbsolute)) {
            return relativeOrAbsolute;
        }
        const clean = relativeOrAbsolute.replace(/^\.?\//, "");
        return `${DEFAULT_COMMUNITY_CDN}/${clean}`;
    }

    /**
     * Resolve a (possibly relative) asset path against raw GitHub. Used for
     * assets that must always be fresh (CSS, example note, preview image) so
     * they bypass the CDN cache and cold-start. Absolute http(s) URLs are
     * returned unchanged.
     */
    resolveRawUrl(relativeOrAbsolute: string): string {
        if (/^https?:\/\//i.test(relativeOrAbsolute)) {
            return relativeOrAbsolute;
        }
        const clean = relativeOrAbsolute.replace(/^\.?\//, "");
        return `${DEFAULT_COMMUNITY_RAW}/${clean}`;
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
        return this.#fetchText(this.resolveRawUrl(entry.example));
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
            parts.push(await this.#fetchText(this.resolveRawUrl(path)));
        }
        return parts.join("\n\n");
    }

    /**
     * Best-effort per-file download counts from jsDelivr's public stats API,
     * keyed by repo-relative file path (e.g. "templates/<id>/layout.json").
     * Returns an empty map on any failure so callers degrade gracefully to the
     * manifest's curated numbers.
     */
    async getDownloadStats(period = "month"): Promise<Map<string, number>> {
        const map = new Map<string, number>();
        const url = `https://data.jsdelivr.com/v1/stats/packages/gh/${COMMUNITY_REPO}/files?period=${period}`;
        try {
            const data = JSON.parse(await this.#fetchText(url));
            // The API may return a flat list or a nested file tree; handle both.
            const walk = (nodes: any[], prefix: string) => {
                for (const node of nodes ?? []) {
                    const name = `${prefix}${node.name ?? ""}`;
                    if (Array.isArray(node.files)) {
                        walk(node.files, `${name}/`);
                    }
                    const hits =
                        node.hits?.total ??
                        (typeof node.hits === "number" ? node.hits : undefined) ??
                        node.total;
                    if (typeof hits === "number") {
                        map.set(name.replace(/^\/+/, ""), hits);
                    }
                }
            };
            const list = Array.isArray(data) ? data : data?.files;
            walk(list ?? [], "");
        } catch (e) {
            /* stats unavailable — fall back to curated numbers */
        }
        return map;
    }

    /** Clear the cached manifest(s). */
    clearCache() {
        this.#cache.clear();
    }

    async #fetchText(url: string): Promise<string> {
        let res;
        try {
            res = await requestUrl({ url, throw: false });
        } catch (e) {
            throw new Error(
                `Network error fetching ${url}. Check your connection.`
            );
        }
        if (res.status < 200 || res.status >= 300) {
            throw new Error(
                `Request to ${url} failed with status ${res.status}.`
            );
        }
        return res.text;
    }
}
