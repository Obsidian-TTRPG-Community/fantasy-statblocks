<script lang="ts">
    import type { Monster } from "index";
    import type { ImageItem } from "src/layouts/layout.types";
    import type StatBlockPlugin from "src/main";
    import { getContext } from "svelte";
    import { Platform, TFile } from "obsidian";
    import { Linkifier } from "src/parser/linkify";

    export let monster: Monster;
    export let item: ImageItem;

    const plugin = getContext<StatBlockPlugin>("plugin");
    const context = getContext<string>("context");

    let file: TFile;
    function getLink(url: string) {
        url = decodeURIComponent(url);
        let link: string;
        try {
            if (/https?:/.test(url)) {
                //url
                const [linkpath] = Linkifier.stringifyLinks(url).split("|");
                link = linkpath;
            } else {
                const [linkpath] = Linkifier.stringifyLinks(url)
                    .replace(/(^\[\[|\]\]$)/g, "")
                    .split("|");

                file = plugin.app.metadataCache.getFirstLinkpathDest(
                    linkpath,
                    context
                );
                if (!file) throw new Error();
                link = plugin.app.vault.getResourcePath(file);
            }
        } catch (e) {
            console.warn("No image could be loaded");
        }
        return link;
    }
    const getImage = (): string => {
        if (
            item.properties.length &&
            item.properties.some(
                (p) => p in monster && typeof monster[p] == "string"
            )
        ) {
            const props = item.properties.filter(
                (p) => p in monster && typeof monster[p] == "string"
            );
            if (props.length > 1) {
                console.log(
                    "Fantasy Statblocks: Multiple image properties provided, using first."
                );
            }
            const path = monster[props[0]] as string;

            return getLink(path);
        }
    };
    let image = getImage();

    const modifier = Platform.isMacOS ? "Meta" : "Control";
    function open(evt: MouseEvent) {
        if (!file) return;
        const leaf = plugin.app.workspace.getLeaf(
            evt.getModifierState(modifier) ? "window" : "split"
        );
        leaf.openFile(file);
    }
    function popover(evt: MouseEvent & { currentTarget: HTMLDivElement }) {
        if (!file) return;
        plugin.app.workspace.trigger("hover-link", {
            event: evt,
            source: plugin.manifest.id,
            hoverParent: plugin.app.workspace.getMostRecentLeaf(),
            targetEl: evt.currentTarget,
            linktext: file.path
        });
    }
</script>

{#if image}
    <div
        class="image"
        class:pointer={file != null}
        on:click={(evt) => open(evt)}
        on:mouseenter={(evt) => popover(evt)}
    >
        <img src={image} alt={monster.name} />
    </div>
{/if}

<style>
    .image {
        width: var(--active-image-width);
        height: var(--active-image-height);
    }
    .image.pointer {
        cursor: pointer;
    }
    img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        border-radius: 100%;
        border: var(--active-image-border-size) solid
            var(--active-image-border-color);
        object-position: center;
    }
</style>
