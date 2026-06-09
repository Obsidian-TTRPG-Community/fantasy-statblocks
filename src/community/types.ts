import type { Layout } from "types/layout";

/**
 * Default location of the official community template registry.
 *
 * This is the `index.json` manifest. It can be overridden by the user in
 * settings (`communityTemplateSource`) so that individuals or organizations
 * can point at their own template registries.
 */
export const DEFAULT_COMMUNITY_SOURCE =
    "https://raw.githubusercontent.com/Obsidian-TTRPG-Community/fantasy-statblocks-templates/main/index.json";

/**
 * Top-level shape of a community template registry's `index.json`.
 */
export interface CommunityManifest {
    /** Manifest schema version. Currently always `1`. */
    version: number;
    /** Human-friendly name of the registry. */
    name?: string;
    /** Short description of the registry. */
    description?: string;
    /** The templates offered by this registry. */
    templates: CommunityTemplateEntry[];
}

/**
 * A single entry in a community template registry.
 *
 * Paths (`layout`, `example`, `preview`) may be either:
 *  - relative to the directory containing the manifest, or
 *  - absolute `http(s)` URLs.
 */
export interface CommunityTemplateEntry {
    /** Stable, unique identifier for the template within the registry. */
    id: string;
    /** Display name, e.g. "Starfinder Monster". */
    name: string;
    /** Game system this template targets, e.g. "Starfinder". Used for filtering. */
    system?: string;
    /** Template author / maintainer. */
    author?: string;
    /** A short description of what the template renders. */
    description?: string;
    /** Free-form tags for searching/filtering. */
    tags?: string[];
    /** Path or URL to the layout definition JSON (the visual template). */
    layout: string;
    /** Path or URL to an example note demonstrating the in-note statblock format. */
    example?: string;
    /** Path or URL to a preview image. */
    preview?: string;
    /** Optional link to documentation or source. */
    homepage?: string;
    /**
     * Path(s)/URL(s) to a CSS snippet that styles this layout. Installed into
     * the vault's snippets folder and enabled on install. May embed assets as
     * base64 data URIs (textures, logos, glyph fonts) so it stays self-contained.
     */
    css?: string | string[];
    /**
     * Free-text requirements that the plugin cannot install automatically
     * (e.g. "Dataview plugin", "Trajan Pro font"). Shown on the detail view.
     */
    requires?: string[];
}

/**
 * A template entry whose remote assets have been fetched and parsed.
 */
export interface ResolvedTemplate {
    entry: CommunityTemplateEntry;
    /** The parsed (but not yet id-assigned) layout. */
    layout: Layout;
    /** Raw markdown of the example note, if one was provided. */
    example?: string;
}

/** Normalize an arbitrary string into a safe CSS snippet file basename. */
export function snippetNameFor(entry: CommunityTemplateEntry): string {
    const base = (entry.id || entry.name || "template")
        .toLowerCase()
        .replace(/[^a-z0-9_-]+/g, "-")
        .replace(/^-+|-+$/g, "");
    return `fantasy-statblocks-${base}`;
}

/**
 * Returns true if the parsed object looks like a usable layout.
 */
export function isValidLayout(layout: unknown): layout is Layout {
    return (
        !!layout &&
        typeof layout === "object" &&
        typeof (layout as Layout).name === "string" &&
        Array.isArray((layout as Layout).blocks)
    );
}

/**
 * Deep-scan a layout for any `javascript` block, including blocks nested inside
 * groups, inline groups, and if/else conditions. Used to decide whether
 * installing or previewing a layout should run untrusted code.
 */
export function layoutHasJavaScript(layout: Layout): boolean {
    const stack: unknown[] = [layout.blocks];
    while (stack.length) {
        const cur = stack.pop();
        if (Array.isArray(cur)) {
            stack.push(...cur);
        } else if (cur && typeof cur === "object") {
            if ((cur as { type?: string }).type === "javascript") return true;
            stack.push(...Object.values(cur));
        }
    }
    return false;
}
