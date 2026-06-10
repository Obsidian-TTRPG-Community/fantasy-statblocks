<script lang="ts">
    import { createEventDispatcher, getAllContexts, getContext } from "svelte";
    import { onMount } from "svelte";

    const dispatch = createEventDispatcher();

    export let columns: number = 1;
    export let targets: HTMLElement[];
    export let columnWidth = "400px";

    export let heights: number[] = [];
    export let split: number = Infinity;
    export let classes: string[];
    let maxHeight = split;

    const buildStatblock = (node: HTMLElement) => {
        node.empty();

        const columnEls = [];
        const temp = document.body.createDiv({
            cls: "statblock-detached markdown-preview-view",
            attr: {
                style: `width: ${columnWidth}`
            }
        });
        const contentContainer = temp.createDiv({
            cls: [
                "statblock-detached",
                "obsidian-statblock-plugin",
                "statblock",
                ...classes
            ]
        });
        let tempColumnContainer = contentContainer
            .createDiv({
                cls: "statblock-content-container",
                attr: {
                    style: `width: ${columnWidth}`
                }
            })
            .createDiv("statblock-content");
        let columnEl = tempColumnContainer.createDiv("column");
        columnEls.push(columnEl);

        for (let i = 0; i < targets.length; i++) {
            const target = targets[i];
            const remainingHeight = heights
                .slice(i + 1)
                .reduce((a, b) => a + b, 0);
            if (
                columnEls.length < columns &&
                heights[i] + columnEl.scrollHeight > maxHeight &&
                remainingHeight < columnEl.scrollHeight
            ) {
                maxHeight = Math.max(maxHeight, columnEl.scrollHeight);
                tempColumnContainer.empty();
                columnEl = tempColumnContainer.createDiv("column");
                columnEls.push(columnEl);
            }
            columnEl.appendChild(target);

            if (
                columnEls.length < columns &&
                columnEl.scrollHeight > maxHeight &&
                (columns <= 2 ||
                    columnEls.length > 1 ||
                    remainingHeight /
                        ((columns - columnEls.length - 1) *
                            columnEl.scrollHeight) <
                        1.5)
            ) {
                maxHeight = Math.max(maxHeight, columnEl.scrollHeight);

                tempColumnContainer.empty();
                columnEl = tempColumnContainer.createDiv("column");
                columnEls.push(columnEl);
            }
        }
        for (const column of columnEls) {
            node.appendChild(column);
            /** Detach elements that had all of their children removed (group, inline, ifelse, etc) */
            column
                .querySelectorAll(".statblock-item-container:empty")
                .forEach((node) => node.detach());
        }
        temp.detach();
    };

    let content: HTMLElement;

    onMount(() => {
        dispatch("mounted");
        if (content) {
            buildStatblock(content);
            dispatch("built");
        }
    });
</script>

<div
    class="statblock-content-container"
    style="--statblock-column-width: {columnWidth};"
>
    <div class="statblock-content" bind:this={content} />
</div>

<style>
    .statblock-content {
        font-family: var(--active-content-font);
        font-size: var(--active-content-font-size);
        color: var(--active-font-color);
        background-color: var(--active-background-color);
        padding: 0.5em;
        border: var(--active-border-size) var(--active-border-color) solid;
        box-shadow: var(--active-box-shadow-x-offset)
            var(--active-box-shadow-y-offset) var(--active-box-shadow-blur)
            var(--active-box-shadow-color);
        margin-left: 2px;
        margin-right: 2px;
        display: flex;
        gap: 1rem;
    }
    .statblock-content > :global(.column) {
        width: var(--statblock-column-width);
    }

    @media screen and (max-width: 400px) {
        .statblock-content > :global(.column) {
            width: 75vw;
        }
    }
</style>
