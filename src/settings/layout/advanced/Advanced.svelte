<script lang="ts">
    import { Setting, ToggleComponent } from "obsidian";
    import type { DiceParsing, Layout } from "src/layouts/layout.types";
    import DropZone from "../Dropzone.svelte";
    import DiceParsingComponent from "./DiceParsing.svelte";
    import DiceParsingModal from "./modal";
    import { getContext } from "../context";
    import { getDiceParsingDefaults } from "src/parser/dice-parsing";

    const layout = getContext("layout");
    const plugin = getContext("plugin");

    $: items = $layout.diceParsing ? [...$layout.diceParsing] : null;

    function onDrop(items: DiceParsing[]) {
        $layout.diceParsing = [...items];
    }

    const advanced = (item?: DiceParsing) => {
        const modal = new DiceParsingModal(plugin, item);
        modal.onClose = () => {
            if (!modal.saved) return;
            if ($layout.diceParsing == null) {
                $layout.diceParsing = [];
            }
            const existing = $layout.diceParsing.indexOf(item);

            if (existing === -1) {
                $layout.diceParsing.push(modal.item);
            } else {
                $layout.diceParsing.splice(existing, 1, modal.item);
            }
            $layout.diceParsing = $layout.diceParsing;
        };

        modal.open();
    };
    const trash = (evt: DiceParsing) => {
        items = items.filter((i) => i.id != evt.id);

        $layout.diceParsing = [...items];
    };

    const diceParsingLayout = (node: HTMLElement) => {
        new Setting(node)
            .setHeading()
            .setName("Dice Parsing")
            .setDesc(
                createFragment((e) => {
                    e.createSpan({ text: "Add " });
                    e.createEl("a", {
                        href: "https://regex101.com",
                        text: "regular expressions"
                    });
                    e.createSpan({
                        text: " to detect dice rolls inside your layout."
                    });
                    e.createEl("br");
                    e.createSpan({
                        text: "These are parsed in order, and the first one to trigger is what will be used."
                    });
                })
            )
            .addExtraButton((b) => {
                b.setIcon("plus-with-circle").onClick(() => {
                    advanced();
                });
            });
    };
    const disableDice = (node: HTMLElement) => {
        new Setting(node)
            .setName(
                items == null
                    ? "Remove default parsers"
                    : "Restore default parsers"
            )
            .addButton((t) => {
                t.setIcon(items == null ? "trash" : "archive-restore").onClick(
                    () => {
                        items = items == null ? [] : null;
                    }
                );
            });
    };

    const toggleForce = (node: HTMLElement) => {
        new ToggleComponent(node)
            .setValue($layout.forceColumns)
            .onChange(() => {
                $layout.forceColumns = !$layout.forceColumns;
            });
    };
</script>

<div class="setting-item">
    <div class="setting-item-info">
        <div class="setting-item-name">Columns</div>
        <div class="setting-item-description">
            Always try to split into this many columns, regardless of height.
        </div>
    </div>
    <div class="setting-item-control">
        <input type="number" bind:value={$layout.columns} min="0" />
    </div>
</div>
<div class="setting-item">
    <div class="setting-item-info">
        <div class="setting-item-name">Column width</div>
        <div class="setting-item-description">
            Width in pixels. Default: 400px
        </div>
    </div>
    <div class="setting-item-control">
        <input type="number" bind:value={$layout.columnWidth} min="0" />
    </div>
</div>
<div class="setting-item">
    <div class="setting-item-info">
        <div class="setting-item-name">Force columns</div>
        <div class="setting-item-description">
            Ignore available space when calculating columns.
        </div>
    </div>
    <div class="setting-item-control" use:toggleForce />
</div>

<div use:diceParsingLayout />
<div class="dice-parsing statblock-additional-container">
    <div class="additional">
        {#if !items}
            <div use:disableDice />
            <span class="defaults"
                >This layout is currently using the default dice parsers. Add a
                custom dice parser to override this behavior.</span
            >
        {:else if items.length == 0}
            <div use:disableDice />
            <span class="defaults"
                >This layout does not have any dice parsers defined. Add one to
                begin parsing for dice.</span
            >
        {/if}
        {#key items}
            <DropZone
                type="dice"
                component={DiceParsingComponent}
                items={items ?? getDiceParsingDefaults()}
                {onDrop}
                showIcons={items != null}
                draggable={items != null}
                on:advanced={(e) => advanced(e.detail)}
                on:trash={(e) => trash(e.detail)}
            />
        {/key}
    </div>
</div>

<style scoped>
    .defaults {
        color: var(--text-muted);
        font-style: italic;
        font-size: smaller;
    }
</style>
