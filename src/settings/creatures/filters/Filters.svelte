<script lang="ts">
    import { ExtraButtonComponent } from "obsidian";
    import Search from "./Search.svelte";
    import Options from "./Options.svelte";
    import { ActiveFilters, NameFilter, SourcesFilter } from "./filters";
    import { slide } from "svelte/transition";
    import { linear } from "svelte/easing";
    import { Bestiary } from "src/bestiary/bestiary";
    import { writable } from "svelte/store";
    import { createEventDispatcher } from "svelte";

    const sources = writable([...Bestiary.getIndex("source").keys()]);

    const dispatch = createEventDispatcher<{ remove: void }>();
    Bestiary.onIndexUpdated(
        "source",
        () => ($sources = [...Bestiary.getIndex("source").keys()])
    );
    let open = true;

    const resetIcon = (node: HTMLElement) => {
        new ExtraButtonComponent(node).setIcon("reset");
    };
    const deleteIcon = (node: HTMLElement) => {
        new ExtraButtonComponent(node).setIcon("trash");
    };
    const filter = (node: HTMLElement) => {
        new ExtraButtonComponent(node).setIcon("filter");
    };
    const reset = () => {
        $NameFilter = "";
        $SourcesFilter = [];
    };
</script>

<div class="container">
    <div class="controls">
        <Search filter={NameFilter} placeholder={"Search Creatures"} />
        <div class="filter-button" on:click={() => (open = !open)}>
            <div use:filter />
            <div class="filter-number">{$ActiveFilters}</div>
        </div>

        <div use:resetIcon on:click={() => reset()} />
        <div
            use:deleteIcon
            on:click={() => dispatch("remove")}
            aria-label="Delete filtered creatures"
        />
    </div>
    {#if open}
        <div class="filters" transition:slide={{ easing: linear }}>
            <Options
                options={$sources}
                placeholder="Sources"
                filter={SourcesFilter}
            />
        </div>
    {/if}
</div>

<style scoped>
    .controls {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 0.5rem;
    }
    .filter-button {
        position: relative;
    }
    .filter-number {
        position: absolute;
        bottom: 0;
        right: 0;
        background-color: var(--interactive-normal);
        border-radius: 50%;
        width: 14px;
        height: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: var(--font-smallest);
        pointer-events: none;
    }
    .container {
        display: flex;
        flex-flow: column nowrap;
        gap: 1rem;
    }
</style>
