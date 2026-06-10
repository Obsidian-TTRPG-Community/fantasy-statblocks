<script lang="ts">
    import { flip } from "svelte/animate";
    import {
        dndzone,
        SHADOW_PLACEHOLDER_ITEM_ID,
        SOURCES,
        TRIGGERS
    } from "svelte-dnd-action";
    import Block from "./Block.svelte";
    import type StatBlockPlugin from "src/main";
    import { createEventDispatcher } from "svelte";
    import { ExtraButtonComponent, Menu } from "obsidian";
    import { blockGenerator } from "../add";
    import { getModalForBlock } from "./block";
    import Rule from "src/view/ui/Rule.svelte";
    import { type StatblockItem, TypeNames } from "src/layouts/layout.types";
    import { setNodeIcon } from "src/util";

    const dispatch = createEventDispatcher();

    export let blocks: StatblockItem[] = [];
    export let layout: string;
    export let draggable = true;
    export let inline = false;
    export let plugin: StatBlockPlugin;

    /** Dropzone Functions */

    let flipDurationMs = 300;
    let dragDisabled = true;
    function handleConsider(e: CustomEvent<GenericDndEvent<StatblockItem>>) {
        const {
            items: newItems,
            info: { source, trigger }
        } = e.detail;
        blocks = [...newItems];
        // Ensure dragging is stopped on drag finish via keyboard
        if (source === SOURCES.KEYBOARD && trigger === TRIGGERS.DRAG_STOPPED) {
            dragDisabled = true;
        }
    }
    function handleFinalize(e: CustomEvent<GenericDndEvent<StatblockItem>>) {
        const {
            items: newItems,
            info: { source }
        } = e.detail;
        blocks = [...newItems];
        dispatch("sorted", blocks);
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

    const trash = (evt: StatblockItem) => {
        blocks = blocks.filter((b) => b.id != evt.id);
        dispatch("sorted", blocks);
    };

    const edited = (e: StatblockItem) => {
        const original = blocks.findIndex((v) => v.id == e.id);
        blocks.splice(original, 1, e);
        blocks = blocks;
    };
    const editBlock = (block: StatblockItem) => {
        const modal = getModalForBlock(plugin, block, layout);

        modal.onClose = () => {
            if (!modal.saved) return;
            edited(modal.block);
            /* block = copy(modal.block); */
        };
        modal.open();
    };

    const add = async (block: StatblockItem, evt: MouseEvent) => {
        if (!("nested" in block)) return;
        const addMenu = new Menu().setNoIcon();
        TypeNames.forEach((type) => {
            if (type[1] == "separator") {
                addMenu.addSeparator();
                return;
            }
            addMenu.addItem((item) => {
                item.setTitle(type[1]).onClick(() => {
                    const generated = blockGenerator(type[0]);
                    if (generated) {
                        block.nested = [...block.nested, generated];
                        blocks = blocks;
                        dispatch("sorted", blocks);
                    }
                });
            });
        });
        addMenu.showAtMouseEvent(evt);
    };

    const dropdown = (node: HTMLDivElement, block: StatblockItem) => {
        new ExtraButtonComponent(node).setIcon(
            draggable ? "vertical-three-dots" : "plus-circle"
        );
        node.onclick = (evt) => {
            if (!draggable) {
                add(block, evt);
            } else {
                new Menu()
                    .addItem((item) => {
                        item.setTitle("Add")
                            .setIcon("plus-with-circle")
                            .onClick((e: MouseEvent | KeyboardEvent) => {
                                add(block, evt);
                            });
                    })
                    .addItem((item) =>
                        item
                            .setTitle("Edit")
                            .setIcon("pencil")
                            .onClick(() => {
                                editBlock(block);
                            })
                    )
                    .addItem((item) =>
                        item
                            .setTitle("Delete")
                            .setIcon("trash")
                            .onClick(() => trash(block))
                    )
                    .showAtMouseEvent(evt);
            }
        };
    };
    const editIcon = (node: HTMLDivElement) => {
        new ExtraButtonComponent(node)
            .setIcon("pencil")
            .setTooltip("Edit Block");
    };

    const trashIcon = (node: HTMLDivElement) => {
        new ExtraButtonComponent(node)
            .setIcon("trash")
            .setTooltip("Delete Block");
    };
</script>

<div class="creator">
    <section
        use:dndzone={{
            items: blocks,
            flipDurationMs,
            dragDisabled: dragDisabled,
            dropFromOthersDisabled: !draggable,
            type: "creator",
            dropTargetClasses: ["min-height"]
        }}
        on:consider={handleConsider}
        on:finalize={handleFinalize}
        class:inline
        class="creator-zone"
    >
        {#each blocks.filter((x) => x.id !== SHADOW_PLACEHOLDER_ITEM_ID) as block (block.id)}
            <div animate:flip={{ duration: flipDurationMs }}>
                <div class="block-container">
                    <div class="block">
                        {#if draggable}
                            <div
                                class="icon"
                                use:setNodeIcon={"grip-vertical"}
                                on:mousedown={startDrag}
                                on:touchstart={startDrag}
                                style={dragDisabled
                                    ? "cursor: grab"
                                    : "cursor: grabbing"}
                            />
                        {/if}
                        {#if block.type == "group" || block.type == "inline"}
                            <div
                                class="item"
                                class:group={block.type == "group" ||
                                    block.type == "inline"}
                            >
                                <svelte:self
                                    bind:blocks={block.nested}
                                    bind:plugin
                                    inline={block.type == "inline"}
                                />
                            </div>
                            {#key block}
                                <div
                                    class="dropdown-icon"
                                    use:dropdown={block}
                                />
                            {/key}
                        {:else if block.type == "collapse"}
                            <div class="item">
                                <div class="statblock-creator-container">
                                    <div
                                        class="statblock-creator-block collapse-container"
                                    >
                                        <div
                                            use:setNodeIcon={"chevrons-down-up"}
                                        />
                                        <div class="collapsible">
                                            {#if block.heading}
                                                <span>{block.heading}</span>
                                            {:else}
                                                <span>Collapse</span>
                                            {/if}
                                            <svelte:self
                                                bind:blocks={block.nested}
                                                bind:plugin
                                                draggable={false}
                                            />
                                        </div>
                                    </div>
                                    <div class="icons">
                                        <div
                                            class="icon"
                                            use:editIcon
                                            on:click={() => editBlock(block)}
                                        />
                                        <div
                                            class="icon"
                                            use:trashIcon
                                            on:click={() => trash(block)}
                                        />
                                    </div>
                                </div>
                            </div>
                        {:else if block.type == "ifelse"}
                            <div class="item">
                                <div class="statblock-creator-container">
                                    <div class="statblock-creator-block">
                                        <div class="if-else-block-container">
                                            {#each block.conditions as { condition, nested: ifElseBlocks } (condition)}
                                                <div
                                                    class="condition-container"
                                                >
                                                    <div class="condition">
                                                        <small
                                                            ><code
                                                                >{condition}</code
                                                            ></small
                                                        >
                                                        <svelte:self
                                                            bind:blocks={ifElseBlocks}
                                                            bind:plugin
                                                            draggable={false}
                                                        />
                                                    </div>
                                                </div>
                                            {/each}
                                        </div>
                                    </div>
                                    <div class="icons">
                                        <div
                                            class="icon"
                                            use:editIcon
                                            on:click={() => editBlock(block)}
                                        />
                                        <div
                                            class="icon"
                                            use:trashIcon
                                            on:click={() => trash(block)}
                                        />
                                    </div>
                                </div>
                            </div>
                        {:else if block.type == "action"}
                            <div
                                class="action-container statblock-creator-container"
                            >
                                {#if block.icon}
                                    <div
                                        class="action-icon"
                                        use:setNodeIcon={block.icon}
                                    />
                                {/if}
                                <div class="icons">
                                    <div
                                        class="icon"
                                        use:editIcon
                                        on:click={() => editBlock(block)}
                                    />
                                    <div
                                        class="icon"
                                        use:trashIcon
                                        on:click={() => trash(block)}
                                    />
                                </div>
                            </div>
                        {:else}
                            <div class="item">
                                <Block
                                    {plugin}
                                    {block}
                                    {layout}
                                    on:trash={(e) => trash(e.detail)}
                                    on:edited={(e) => edited(e.detail)}
                                />
                            </div>
                        {/if}
                    </div>
                    {#if "hasRule" in block && block.hasRule}
                        <div aria-label="Block Has Rule">
                            <Rule />
                        </div>
                    {/if}
                </div>
            </div>
        {/each}
    </section>
</div>

<style>
    :global(.min-height) {
        min-height: 2rem;
    }
    .block {
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    .item {
        display: grid;
        grid-template-columns: 1fr;
        width: 100%;
        padding: 2px;
        margin: 2px;
    }
    .group {
        display: grid;
        grid-template-columns: 1fr;
        border: 2px dashed grey;
        min-height: 2rem;
    }
    .dropdown-icon {
        align-self: flex-start;
    }
    .inline {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        width: 100%;
        height: 100%;
        min-width: 2rem;
    }
    .action-icon {
        display: flex;
        align-items: center;
    }
    .icon {
        display: flex;
    }

    /* Goddamn If Else */
    .statblock-creator-container {
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 100%;
        gap: 0.25rem;
    }
    .statblock-creator-container.action-container {
        justify-content: flex-start;
    }

    :global(body:not(.is-mobile))
        .statblock-creator-container:not(:hover)
        > .icons {
        visibility: hidden;
    }
    .statblock-creator-block {
        width: 100%;
    }
    .icons {
        display: flex;
        justify-content: flex-end;
    }
    .statblock-creator-container .icons {
        align-items: center;
    }
    .icon:not(:first-child) :global(.clickable-icon) {
        margin-left: 0;
    }
    .if-else-block-container {
        display: grid;
        grid-template-columns: 1fr;
        border: 2px solid grey;
        border-radius: 0.25rem;
        min-height: 2rem;
        padding: 0.25rem;
    }
    .collapse-container {
        display: grid;
        grid-template-columns: auto 1fr;
        align-items: center;
        gap: 0.25rem;
    }
    .collapsible {
        border-left: 2px solid grey;
        padding-left: 0.25rem;
    }
</style>
