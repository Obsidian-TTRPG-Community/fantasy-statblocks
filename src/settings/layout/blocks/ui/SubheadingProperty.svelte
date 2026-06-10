<script lang="ts">
    import { ExtraButtonComponent } from "obsidian";
    import { createEventDispatcher } from "svelte";
    import { dndzone, SOURCES, TRIGGERS } from "svelte-dnd-action";
    import { setNodeIcon } from "src/util";
    import type { Monster } from "index";

    type PropItem = { prop: keyof Monster; id: string };
    export let properties: PropItem[] = [];

    const dispatch = createEventDispatcher();

    let flipDurationMs = 300;
    let dragDisabled = true;
    function handleConsider(e: CustomEvent<GenericDndEvent<PropItem>>) {
        const {
            items: newItems,
            info: { source, trigger }
        } = e.detail;
        items = [...newItems];
        // Ensure dragging is stopped on drag finish via keyboard
        if (source === SOURCES.KEYBOARD && trigger === TRIGGERS.DRAG_STOPPED) {
            dragDisabled = true;
        }
    }
    function handleFinalize(e: CustomEvent<GenericDndEvent<PropItem>>) {
        const {
            items: newItems,
            info: { source }
        } = e.detail;
        items = [...newItems];
        dispatch(
            "sorted",
            items.map(({ prop }) => prop)
        );
        // Ensure dragging is stopped on drag finish via pointer (mouse, touch)
        if (source === SOURCES.POINTER) {
            dragDisabled = true;
        }
    }

    function startDrag(e: Event) {
        // preventing default to prevent lag on touch devices (because of the browser checking for screen scrolling)
        e.preventDefault();
        dragDisabled = false;
    }

    const trash = (evt: PropItem) => {
        items = items.filter((b) => b.id != evt.id);
        dispatch(
            "sorted",
            items.map(({ prop }) => prop)
        );
    };

    const trashIcon = (node: HTMLElement) => {
        new ExtraButtonComponent(node).setIcon("trash");
    };
    let editing: string;
    const edit = (evt: PropItem) => {
        editing = evt.id;
    };
    const finishEdititing = (evt: PropItem) => {
        items = items.map((i) =>
            i.id == evt.id ? { id: evt.id, prop: evt.prop } : i
        );
        editing = null;
        dispatch(
            "sorted",
            items.map(({ prop }) => prop)
        );
    };

    const editIcon = (node: HTMLElement) => {
        new ExtraButtonComponent(node).setIcon("pencil");
    };
    const finishIcon = (node: HTMLElement) => {
        new ExtraButtonComponent(node).setIcon("check");
    };

    $: items = [...properties];
</script>

<section
    use:dndzone={{
        items,
        flipDurationMs,
        dragDisabled,
        type: "subheading"
    }}
    on:consider={handleConsider}
    on:finalize={handleFinalize}
    class="subheading-zone"
>
    {#each items as property (property.id)}
        <div class="setting-item">
            <div
                class="icon"
                use:setNodeIcon={"grip-vertical"}
                on:mousedown={startDrag}
                on:touchstart={startDrag}
                style={dragDisabled ? "cursor: grab" : "cursor: grabbing"}
            />
            <div class="setting-item-info">
                {#if editing == property.id}
                    <input
                        type="text"
                        placeholder={String(property.prop)}
                        bind:value={property.prop}
                    />
                {:else}
                    <div class="setting-item-name">{property.prop}</div>
                {/if}
            </div>
            <div class="setting-item-control">
                {#if editing == property.id}
                    <div
                        class="done"
                        on:click={() => finishEdititing(property)}
                        use:finishIcon
                    />
                {:else}
                    <div
                        class="edit"
                        on:click={() => edit(property)}
                        use:editIcon
                    />
                {/if}
                <div
                    class="delete"
                    on:click={() => trash(property)}
                    use:trashIcon
                />
            </div>
        </div>
    {/each}
</section>

<style>
    .setting-item {
        align-items: center;
    }
    .icon {
        display: flex;
        align-items: center;
    }
</style>
