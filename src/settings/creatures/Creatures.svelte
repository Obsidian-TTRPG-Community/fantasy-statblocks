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
        if (
            await confirmWithModal(
                plugin.app,
                `Are you sure you want to delete ${$filtered.length} creature${$filtered.length === 1 ? "" : "s"}?`
            )
        ) {
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
</script>

<div class="bestiary-container">
    <div
        class="filters-container"
        style="background-color: {backgroundColor}; top: -{paddingTop};"
    >
        <Filters on:remove={() => remove()} />
        <div class="setting-item-description">
            {$filtered.length ? $filtered.length : "No"} creature{$filtered.length ===
            1
                ? ""
                : "s"}
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
