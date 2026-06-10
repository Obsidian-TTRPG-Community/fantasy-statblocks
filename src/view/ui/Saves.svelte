<script lang="ts">
    import type { Monster } from "index";
    import { Notice } from "obsidian";
    import type { SavesItem } from "src/layouts/layout.types";
    import { slugify, toTitleCase } from "src/util/util";
    import TextContentHolder from "./TextContentHolder.svelte";

    export let monster: Monster;
    export let item: SavesItem;

    function getMod(value: number) {
        return `${value >= 0 ? "+" : ""}${value}`;
    }

    let arr: any[] = monster[item.properties[0]] as any[];
    if (!Array.isArray(arr)) {
        arr = [];
    }

    if (item.callback) {
        try {
            const frame = document.body.createEl("iframe");
            const funct = (frame.contentWindow as any).Function;
            const func = new funct("monster", "property", item.callback);
            arr = arr.map((save) => func.call(undefined, monster, save) ?? save);
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

    const saves = arr
        .map((ability) => {
            if (!ability || typeof ability !== "object") return null;

            if (ability.desc) {
                // Trait with a description
                return [ability.name || "_", ability.desc];
            }

            let key = Object.keys(ability)[0];
            if (!key) return null;
            const value = Object.values(ability)[0];
            if (typeof value == "string" && isNaN(Number(value)))
                return [toTitleCase(key), value];
            if (value != 0 && (!value || isNaN(Number(value)))) return null;
            return [toTitleCase(key), getMod(value as number)];
        })
        .filter((m) => m);

    $: cssClasses = item.doNotAddClass
        ? []
        : [slugify(item.display), slugify(item.properties[0])].join(" ");
</script>

<div class="info">
    <div class="line {cssClasses}">
        <span class="property-name"
            >{item.display ?? toTitleCase(item.properties[0])}</span
        >
        <div class="property-text">
            {#each saves as [name, value]}
                <div class="save-entry save-{slugify(name)}-entry">
                    {#if !name.startsWith('_')}
                    <div class="save-name">
                        <TextContentHolder property={name} />
                    </div>
                    {/if}
                    <div class="save-value">
                        <TextContentHolder property={value} />
                    </div>
                </div>
            {/each}
        </div>
    </div>
</div>

<style>
    .line {
        line-height: var(--active-saves-line-height);
        display: block;
        color: var(--active-font-color);
    }
    .property-name {
        color: var(--active-property-name-font-color);
        margin: 0;
        margin-right: 0.25em;
        display: inline;
        font-weight: bold;
    }
    .property-text {
        display: inline;
        margin: 0;
    }
    .save-entry,
    .save-name,
    .save-value {
        display: inline;
    }
    .save-entry:not(:last-child) .save-value::after {
        content: ", ";
    }
</style>
