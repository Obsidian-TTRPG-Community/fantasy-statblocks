import { stringify } from "src/util/util";

type SplitLink = { text: string; isLink: boolean };

export const WIKILINK = "STATBLOCK-WIKI-LINK";
export const WIKILINK_REGEX = new RegExp(
    `<${WIKILINK}>([\\s\\S]+?)<${WIKILINK}>`
);
export const MARKDOWN = "STATBLOCK-MARKDOWN-LINK";
export const MARKDOWN_REGEX = new RegExp(
    `<${MARKDOWN}>([\\s\\S]+?)(?:\\|([\\s\\S]+?))?<${MARKDOWN}>`
);
export const GENERIC_REGEX =
    /(<STATBLOCK-(?:WIKI|MARKDOWN)-LINK>[\s\S]+?<STATBLOCK-(?:WIKI|MARKDOWN)-LINK>)/;
export class LinkStringifier {
    static isStatblockLink(link: string) {
        return GENERIC_REGEX.test(link);
    }

    static replaceWikiLink(link: string) {
        return `<${WIKILINK}>${link}<${WIKILINK}>`;
    }
    static replaceMarkdownLink(link: string, alias?: string) {
        return `<${MARKDOWN}>${link}${alias ? "|" + alias : ""}<${MARKDOWN}>`;
    }
    /**
     * This method can be used to replace any markdown or wikilinks in a source, so that it
     * can safely be transformed into YAML.
     *
     * @param {string} source The string to be transformed.
     * @returns {string} A transformed source, with links replaced.
     */
    static transformSource(source: string) {
        return source
            .replace(/\[\[([^\]]+?)\]\]/g, (_, $1) =>
                LinkStringifier.replaceWikiLink($1)
            )
            .replace(
                /\[([^\]]*?)\]\(([^)]+?)\)/g,
                (_, alias: string, path: string) =>
                    LinkStringifier.replaceMarkdownLink(path, alias)
            );
    }
    /**
     * This can be used to transform a source coming from frontmatter, that could possibly
     * have wikilinks defined as an array.
     * @param source Source to transform.
     * @returns {string} A transformed source, with links replaced.
     */
    static transformYamlSource(source: string) {
        return LinkStringifier.transformSource(source);
    }

    /**
     * Replaces any already transformed links back into their original link type.
     * @param source
     * @returns {string} The corrected string.
     */
    static stringifyLinks(source: string): string {
        return source
            .replace(new RegExp(WIKILINK_REGEX, "g"), (_, $1) => `[[${$1}]]`)
            .replace(
                new RegExp(MARKDOWN_REGEX, "g"),
                (_, path, alias) => `[${alias ? alias : ""}](${path})`
            );
    }
}
