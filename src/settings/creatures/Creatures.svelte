<script lang="ts">
    import { Bestiary } from "src/bestiary/bestiary";
    import Pagination from "./Pagination.svelte";
    import Creature from "./Creature.svelte";
    import type StatBlockPlugin from "src/main";
    import { setContext } from "../layout/context";
    import Filters from "./filters/Filters.svelte";
    import { NONE, NameFilter, SourcesFilter } from "./filters/filters";
    import { prepareSimpleSearch } from "obsidian";
    import type { Monster } from "index";
    import { derived, writable } from "svelte/store";
    import { onDestroy } from "svelte";
    import { confirmWithModal } from "src/view/statblock";
    import { t, translate } from "src/i18n/i18n";

    export let plugin: StatBlockPlugin;

    setContext("plugin", plugin);

    export let backgroundColor: string;
    export let paddingTop: string;

    const creatures = writable(Bestiary.getBestiaryCreatures());
    let ref = Bestiary.onSortedBy("name", (values) => {
        $creatures = values;
    });

    onDestroy(() => {
        ref();
    });

    const slice = writable(50);
    const page = writable(1);
    const filtered = derived(
        [creatures, NameFilter, SourcesFilter],
        ([creatures, name, sources]) => {
            let toConsider: Monster[] = [];
            for (const creature of creatures) {
                let should = true;
                if (name.length) {
                    const search = prepareSimpleSearch(name);
                    if (!search(creature.name)) {
                        should = false;
                    }
                }
                if (
                    sources.length &&
                    ![creature.source].flat().some((s) => s && sources.includes(s))
                ) {
                    should = false;
                }
                if (!creature.source && sources.includes(NONE)) {
                    should = true;
                }
                if (should) {
                    toConsider.push(creature);
                }
            }

            return toConsider;
        }
    );

    const remove = async () => {
        if (!$filtered.length) return;
        const count = $filtered.length;
        const plural = count === 1 ? "" : "s";
        const msg = translate("creatures.deleteConfirm")
            .replace("{count}", String(count))
            .replace("{plural}", plural);
        if (await confirmWithModal(plugin.app, msg)) {
            await plugin.deleteMonsters(...$filtered.map((m) => m.name));
        }
    };

    const pages = derived([slice, filtered], ([slice, filtered]) =>
        Math.ceil(filtered.length / slice)
    );
    const sliced = derived(
        [filtered, slice, page],
        ([filtered, slice, page]) => {
            return filtered.slice((page - 1) * slice, page * slice);
        }
    );

    $: creatureCountText = $filtered.length === 0
        ? $t("creatures.noCreatures")
        : $filtered.length === 1
        ? $t("creatures.count").replace("{count}", String($filtered.length))
        : $t("creatures.countPlural").replace("{count}", String($filtered.length));
</script>

<div class="bestiary-container">
    <div
        class="filters-container"
        style="background-color: {backgroundColor}; top: -{paddingTop};"
    >
        <Filters on:remove={() => remove()} />
        <div class="setting-item-description">
            {creatureCountText}
        </div>
    </div>
    <div class="creatures-container">
        {#each $sliced as item (item.name)}
            <Creature {item} on:close />
        {/each}
    </div>
    <div class="pagination-container">
        <Pagination {slice} {page} {pages} />
    </div>
</div>

<style scoped>
    .bestiary-container {
        display: flex;
        flex-flow: column;
        gap: 1rem;
    }
    .filters-container {
        display: flex;
        flex-flow: column nowrap;
        gap: 0.25rem;
    }
</style>
