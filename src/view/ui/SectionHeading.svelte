<script lang="ts">
    import type { Monster } from "index";
    import type {
        TextItem,
        TraitsItem,
        GroupItem,
        InlineItem
    } from "src/layouts/layout.types";
    import { stringify } from "src/util/util";
    import TextContent from "./TextContent.svelte";

    export let monster: Monster;
    export let item: TraitsItem | TextItem | GroupItem | InlineItem;

    let header: string;

    if (item.headingProp) {
        if (item.heading in monster) {
            let monsterProp = stringify(monster[item.heading as keyof Monster]);
            if (monsterProp.length) header = monsterProp;
        }
    } else if (item.heading?.length) {
        header = item.heading;
    }
    const slugify = (header: string) =>
        header
            .toLowerCase()
            .replace(/[^A-Za-z0-9\s]/g, "")
            .replace(/\s+/g, "-");
</script>

{#if header && header.length}
    <h3 class="section-header {slugify(header)}">
        <TextContent textToRender={header} />
    </h3>
{/if}

<style>
    .section-header {
        border-bottom: var(--active-section-heading-border-size) solid
            var(--active-section-heading-border-color);
        color: var(--active-section-heading-font-color);
        font-size: var(--active-section-heading-font-size);
        font-variant: var(--active-section-heading-font-variant);
        font-weight: var(--active-section-heading-font-weight);
        font-family: var(--active-section-heading-font);
        letter-spacing: 1px;
        margin: 0;
        margin-bottom: 0.3em;
        break-inside: avoid-column;
        break-after: avoid-column;
    }
</style>
