<script lang="ts">
    import { Component, MarkdownRenderer } from "obsidian";
    import { Linkifier } from "src/parser/linkify";
    import { stringify } from "src/util/util";

    //Note: All final rendered text should be wrapped in this element.
    import { getContext } from "svelte";

    export let textToRender: string;
    /* export let inline: boolean; */

    const tryToRenderLinks = getContext<boolean>("tryToRenderLinks");
    const context = getContext<string>("context");

    const linkComponent = new Component();

    const splitLinks = Linkifier.splitByLinks(
        textToRender,
        context,
        tryToRenderLinks
    );
    const renderLink = async (link: string) => {
        const el = createDiv();
        await MarkdownRenderer.render(app, link, el, context, linkComponent);
        const linkEl = el.querySelector<HTMLAnchorElement>("a");
        return linkEl.outerHTML;
    };
</script>

<div class="statblock-rendered-text-content inline">
    <!-- Don't expand this as it messes with inline whitespace. -->
    {#each splitLinks as split}{#if split.isLink}{#await renderLink(split.text) then linkEl}{@html linkEl}{/await}{:else}{split.text}{/if}{/each}
</div>

<style>
    .inline {
        display: inline;
    }
</style>
