<script lang="ts">
    import type { SpellsItem, TraitsItem } from "src/layouts/layout.types";
    import { slugify } from "src/util/util";

    import TextContentHolder from "./TextContentHolder.svelte";
    import type { Monster, Trait } from "index";
    import { Notice } from "obsidian";

    export let trait: Trait;

    export let name: string;
    export let desc: string;
    export let property: string = "";
    export let item: TraitsItem | SpellsItem;
    export let monster: Monster;
    if (item.callback) {
        try {
            const frame = document.body.createEl("iframe");
            const funct = (frame.contentWindow as any).Function;
            const func = new funct("monster", "property", item.callback);
            desc = func.call(undefined, monster, trait) ?? desc;
            document.body.removeChild(frame);
        } catch (e) {
            new Notice(
                `There was an error executing the provided callback for [${item.properties.join(
                    ", "
                )}]\n\n${e.message}`
            );
            console.error(e);
        }
    }

    $: cssClasses = item.doNotAddClass
        ? []
        : [slugify(name), slugify(property)].join(" ");
</script>

<div class="property {cssClasses} trait">
    {#if name}
        <div class="property-name trait-name">
            <TextContentHolder property={name} />
        </div>
    {/if}

    <TextContentHolder property={desc} />
    {#if trait?.traits}
        <div class="statblock-nested-traits">
            {#each trait.traits as nested}
                <svelte:self
                    name={nested.name}
                    desc={nested.desc}
                    {property}
                    {item}
                    {nested}
                />
            {/each}
        </div>
    {/if}
</div>

<style>
    .trait {
        font-family: var(--active-traits-font);
        color: var(--active-traits-font-color);
        font-size: var(--active-traits-font-size);
        font-weight: var(--active-traits-font-weight);
        font-style: var(--active-traits-font-style);
    }
    .trait-name {
        font-family: var(--active-traits-name-font);
        color: var(--active-traits-name-font-color);
        font-size: var(--active-traits-name-font-size);
        font-weight: var(--active-traits-name-font-weight);
        font-style: var(--active-traits-name-font-style);
    }
    .property-name {
        margin: 0;
        margin-right: 0.25em;
        display: inline;
    }
    .statblock-nested-traits {
        margin-left: 1rem;
    }
</style>
