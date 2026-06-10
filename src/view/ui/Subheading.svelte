<script lang="ts">
    import type { Monster } from "index";
    import type { SubHeadingItem } from "src/layouts/layout.types";
    import { stringify } from "../../util/util";
    import TextContent from "./TextContent.svelte";

    export let monster: Monster;
    export let item: SubHeadingItem;
    const subheading: string[] = [];

    for (let property of item.properties) {
        if (property in monster) {
            subheading.push(`${stringify(monster[property], 0, ", ", false)}`);
        }
    }
</script>

{#if subheading.length}
    <div class="subheading">
        <TextContent textToRender={subheading.join(item.separator)} />
    </div>
{/if}

<style>
    .subheading {
        font-weight: var(--active-subheading-font-weight);
        font-style: var(--active-subheading-font-style);
        font-size: var(--active-subheading-font-size);
        font-family: var(--active-subheading-font-family);
        color: var(--active-subheading-font-color);
        margin: 0;
    }
</style>
