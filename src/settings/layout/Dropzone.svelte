<script lang="ts">
    import { ExtraButtonComponent, Scope, setIcon } from "obsidian";
    import { SHADOW_PLACEHOLDER_ITEM_ID, dndzone } from "svelte-dnd-action";
    import { type ComponentType, createEventDispatcher } from "svelte";
    import { flip } from "svelte/animate";
    import type { DiceParsing } from "src/layouts/layout.types";
    import { setNodeIcon } from "src/util";

    type T = DiceParsing;
    export let items: T[];
    export let type: string;

    export let draggable: boolean = true;
    export let showIcons: boolean = true;

    export let component: ComponentType;
    export let onDrop: (items: T[]) => void;
    let dispatch = createEventDispatcher<{
        advanced: T;
        trash: T;
    }>();

    let _scope = new Scope();
    function startDrag(e: Event) {
        e.preventDefault();
        app.keymap.pushScope(_scope);
        dragDisabled = false;
    }
    const flipDurationMs = 300;
    let dragDisabled = false;

    function handleConsider(e: CustomEvent<GenericDndEvent<T>>) {
        items = e.detail.items;
    }
    function handleFinalize(e: CustomEvent<GenericDndEvent<T>>) {
        app.keymap.popScope(_scope);
        onDrop(e.detail.items);
    }
    const advanced = (node: HTMLElement, item: T) => {
        new ExtraButtonComponent(node)
            .setIcon("wrench")
            .onClick(() => dispatch("advanced", item));
    };

    const trash = (node: HTMLElement, item: T) => {
        new ExtraButtonComponent(node)
            .setIcon("trash")
            .onClick(() => dispatch("trash", item));
    };
</script>

<div
    use:dndzone={{
        items,
        flipDurationMs,
        dragDisabled,
        dropFromOthersDisabled: true,
        type
    }}
    class="drop-items"
    on:consider={handleConsider}
    on:finalize={handleFinalize}
>
    {#each items.filter((x) => x.id !== SHADOW_PLACEHOLDER_ITEM_ID) as item (item.id)}
        <div
            animate:flip={{ duration: flipDurationMs }}
            class="drop-item-container"
            class:draggable
        >
            {#if draggable}
                <div
                    class="icon"
                    use:setNodeIcon={"grip-vertical"}
                    on:mousedown={startDrag}
                    on:touchstart={startDrag}
                    style={dragDisabled ? "cursor: grab" : "cursor: grabbing"}
                />
            {/if}
            <div class="drop-item" class:type>
                <svelte:component this={component} {item} />
            </div>

            {#if showIcons}
                <div class="icons">
                    <div class="icon" use:advanced={item} />
                    <div class="icon" use:trash={item} />
                </div>
            {/if}
        </div>
    {/each}
</div>

<style>
    .drop-items {
        width: 100%;
        margin: 0.5rem 0;
    }
    .drop-item-container .icon,
    .icons {
        display: flex;
        align-items: center;
    }
    .drop-item-container {
        display: grid;
        grid-template-columns: auto 1fr auto;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        width: 100%;
    }
    .drop-item-container:not(.draggable) {
        cursor: inherit !important;
    }
    .drop-item-container:not(:last-child) {
        margin-bottom: 0.5rem;
    }
</style>
