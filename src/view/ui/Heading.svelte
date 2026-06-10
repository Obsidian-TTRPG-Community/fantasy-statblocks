<script lang="ts">
    import type { Monster } from "index";
    import type { HeadingItem } from "src/layouts/layout.types";
    import { stringify } from "src/util/util";
    import TextContent from "./TextContent.svelte";

    export let monster: Monster;
    export let item: HeadingItem;
</script>

<div class="flex-container">
    {#each item.properties as property}
        {#if property in monster}
            {#if !item.size || item.size == 1}
                <h1 class="heading statblock-heading {stringify(property)}">
                    <TextContent textToRender={stringify(monster[property])} />
                </h1>
            {:else if item.size == 2}
                <h2 class="heading statblock-heading {stringify(property)}">
                    <TextContent textToRender={stringify(monster[property])} />
                </h2>
            {:else if item.size == 3}
                <h3 class="heading statblock-heading {stringify(property)}">
                    <TextContent textToRender={stringify(monster[property])} />
                </h3>
            {:else if item.size == 4}
                <h4 class="heading statblock-heading {stringify(property)}">
                    <TextContent textToRender={stringify(monster[property])} />
                </h4>
            {:else if item.size == 5}
                <h5 class="heading statblock-heading {stringify(property)}">
                    <TextContent textToRender={stringify(monster[property])} />
                </h5>
            {:else}
                <h6 class="heading statblock-heading {stringify(property)}">
                    <TextContent textToRender={stringify(monster[property])} />
                </h6>
            {/if}
        {/if}
    {/each}
</div>

<style>
    .flex-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .heading {
        font-family: var(--active-heading-font);
        color: var(--active-heading-font-color);
        font-weight: var(--active-heading-font-weight);
        font-variant: var(--active-heading-font-variant);
        font-size: var(--active-heading-font-size);
        line-height: var(--active-heading-line-height);
        margin: 0px;
        letter-spacing: 1px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>
