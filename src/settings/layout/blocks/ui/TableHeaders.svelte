<script lang="ts">
    import { flip } from "svelte/animate";
    import { dndzone, SHADOW_PLACEHOLDER_ITEM_ID } from "svelte-dnd-action";
    import { createEventDispatcher } from "svelte";
    import { ExtraButtonComponent } from "obsidian";
    import { nanoid } from "src/util/util";

    const dispatch = createEventDispatcher();

    type Header = {
        name: string;
        id: string;
    };

    export let headers: string[];
    let items = headers.map((h) => {
        return { name: h, id: nanoid() };
    });

    /** Dropzone Functions */

    let flipDurationMs = 300;
    let dragDisabled = false;
    function handleConsider(e: CustomEvent<GenericDndEvent<Header>>) {
        const {
            items: newItems,
            info: { source, trigger }
        } = e.detail;
        items = [...newItems];
        // Ensure dragging is stopped on drag finish via keyboard
        /* if (source === SOURCES.KEYBOARD && trigger === TRIGGERS.DRAG_STOPPED) {
            dragDisabled = true;
        } */
    }
    function handleFinalize(e: CustomEvent<GenericDndEvent<Header>>) {
        const {
            items: newItems,
            info: { source }
        } = e.detail;
        items = [...newItems];
        dispatch("sorted", items);
        // Ensure dragging is stopped on drag finish via pointer (mouse, touch)
        /* if (source === SOURCES.POINTER) {
            dragDisabled = true;
        } */
    }

    function startDrag(e: Event) {
        // preventing default to prevent lag on touch devices (because of the browser checking for screen scrolling)
        e.preventDefault();
        dragDisabled = false;
    }

    const trash = (evt: Header) => {
        items = items.filter((b) => b.id != evt.id);
        dispatch("sorted", items);
    };

    const del = (node: HTMLDivElement) => {
        new ExtraButtonComponent(node).setIcon("cross-in-box");
    };
</script>

<div class="table-header-container">
    <section
        use:dndzone={{
            items,
            flipDurationMs,
            dragDisabled,
            type: "table_headers"
        }}
        on:consider={handleConsider}
        on:finalize={handleFinalize}
        class="creator-zone"
    >
        {#each items.filter((x) => x.id !== SHADOW_PLACEHOLDER_ITEM_ID) as header (header.id)}
            <div
                class="header-container"
                animate:flip={{ duration: flipDurationMs }}
            >
                <span class="table-header">{header.name}</span>
                <div use:del on:click={() => trash(header)} />
            </div>
        {/each}
    </section>
</div>

<style>
    .creator-zone {
        display: flex;
        justify-content: space-evenly;
        gap: 1rem;
        flex-flow: row wrap;
    }
    .header-container {
        display: flex;
        align-items: center;
    }
</style>
