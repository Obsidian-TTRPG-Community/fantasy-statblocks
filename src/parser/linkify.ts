import {
    type App,
    type TFile,
    Component,
    normalizePath,
    parseFrontMatterAliases,
    MetadataCache
} from "obsidian";
import {
    GENERIC_REGEX,
    LinkStringifier,
    MARKDOWN_REGEX,
    WIKILINK_REGEX
} from "src/parser/stringifier";
import { stringify } from "src/util/util";

class LinkifierClass extends Component {
    #cache: Map<string, string> = new Map();
    app: App;
    #addAliasesToCache(aliases: string[], file: TFile) {
        for (const alias of aliases) {
            this.#cache.set(alias, file.name);
            this.#cache.set(alias.toLowerCase(), file.name);
        }
    }
    buildCache() {
        //defer this
        setTimeout(() => {
            const links = this.metadataCache.getLinkSuggestions();
            for (const { alias, file } of links) {
                if (!alias) continue;
                this.#addAliasesToCache([alias], file);
            }
        }, 0);
    }
    getResolvedFile(
        input: string,
        context: string
    ): { alias: string | null; file: TFile | null } {
        input = input.trim();
        let filePath =
            this.#cache.get(input) ??
            this.#cache.get(input.toLowerCase()) ??
            input;
        let alias =
            this.#cache.has(input) || this.#cache.has(input.toLowerCase())
                ? input
                : null;
        return {
            alias,
            file: this.app.metadataCache.getFirstLinkpathDest(filePath, context)
        };
    }
    metadataCache: MetadataCache;

    initialize(metadataCache: MetadataCache, app: App) {
        this.load();
        this.app = app;
        this.metadataCache = metadataCache;
        if (metadataCache.initialized) {
            this.buildCache();
        } else {
            const ref = app.metadataCache.on("resolved", () => {
                this.buildCache();
                this.metadataCache.offref(ref);
            });
            this.registerEvent(ref);
        }
        this.registerEvent(
            this.metadataCache.on("changed", (file) => {
                const { frontmatter } =
                    app.metadataCache.getFileCache(file) ?? {};
                if (!frontmatter) return;
                const aliases = parseFrontMatterAliases(frontmatter) ?? [];
                this.#addAliasesToCache(aliases, file);
            })
        );
    }

    /** Attempt to convert a string into a link, while maintaining any whitespace. **/
    linkify(input: string, context: string = ""): string {
        let trimmed = input.trim();
        const { file, alias } = this.getResolvedFile(trimmed, context);
        if (file != null) {
            return input.replace(
                trimmed,
                LinkStringifier.replaceWikiLink(
                    `${file.basename}${alias ? "|" + alias : ""}`
                )
            );
        }
        return input;
    }
    linkifySpells(spells: string, context: string = ""): string {
        return spells.replace(
            /(.+?)(\*?,|\*?$)/g,
            (_, spell, splitter) => `${this.linkify(spell, context)}${splitter}`
        );

        /*  return spells
            .split(",")
            .map((spell) => this.linkify(spell, context))
            .join(","); */
    }

    /**
     * This method can be used to replace any markdown or wikilinks in a source, so that it
     * can safely be transformed into YAML.
     *
     * @param {string} source The string to be transformed.
     * @returns {string} A transformed source, with links replaced.
     */
    transformSource(source: string) {
        return LinkStringifier.transformSource(source);
    }
    /**
     * This can be used to transform a source coming from frontmatter, that could possibly
     * have wikilinks defined as an array.
     * @param source Source to transform.
     * @returns {string} A transformed source, with links replaced.
     */
    transformYamlSource(source: string) {
        return LinkStringifier.transformYamlSource(source);
    }

    stringifyLinks(source: string) {
        return LinkStringifier.stringifyLinks(source);
    }

    splitByLinks(text: string, context: string, render?: boolean): SplitLink[] {
        return stringify(text)
            .split(GENERIC_REGEX)
            .filter((s) => s && s.length)
            .map((str) => {
                if (WIKILINK_REGEX.test(str)) {
                    let link = str.match(WIKILINK_REGEX)[1];
                    return {
                        isLink: render,
                        text: `[[${normalizePath(link)}]]`
                    };
                }
                if (MARKDOWN_REGEX.test(str)) {
                    const [_, path, alias] = str.match(MARKDOWN_REGEX);

                    return {
                        isLink: render,
                        text: `[${alias ? alias : ""}](${path})`
                    };
                }
                return { isLink: false, text: str };
            });
    }
}
type SplitLink = { text: string; isLink: boolean };

export const Linkifier = new LinkifierClass();
