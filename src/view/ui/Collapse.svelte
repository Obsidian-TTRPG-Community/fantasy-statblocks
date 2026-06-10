<script lang="ts">
    import type { CollapseItem } from "src/layouts/layout.types";
    import { onMount } from "svelte";

    export let block: CollapseItem;
    export let elements: HTMLElement[];
    let detail: HTMLDetailsElement;
    onMount(() => {
        for (const element of elements) {
            detail.append(element);
        }
    });
</script>

<details bind:this={detail} bind:open={block.open}>
    <summary>
        {block.heading ?? ""}
        <div class="collapser">
            <div class="handle" />
        </div>
    </summary>
</details>

<style scoped>
    details > summary {
        outline: none;
        display: block !important;
        list-style: none !important;
        list-style-type: none !important;
        min-height: 1rem;
        border-top-left-radius: 0.1rem;
        border-top-right-radius: 0.1rem;
        cursor: pointer;
        position: relative;
        margin-bottom: 1rem;
    }
    details > summary::-webkit-details-marker,
    details > summary::marker {
        display: none !important;
    }

    details > summary > .collapser {
        position: absolute;
        top: 50%;
        right: 8px;
        transform: translateY(-50%);
        content: "";
    }

    details > summary > .collapser > .handle {
        transform: rotate(0deg);
        transition: transform 0.25s;
        background-color: currentColor;
        -webkit-mask-repeat: no-repeat;
        mask-repeat: no-repeat;
        -webkit-mask-size: contain;
        mask-size: contain;
        -webkit-mask-image: url("data:image/svg+xml;charset=utf-8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M8.59 16.58L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.42z'/></svg>");
        mask-image: url("data:image/svg+xml;charset=utf-8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M8.59 16.58L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.42z'/></svg>");
        width: 20px;
        height: 20px;
    }

    details[open] > summary > .collapser > .handle {
        transform: rotate(90deg);
    }
</style>
