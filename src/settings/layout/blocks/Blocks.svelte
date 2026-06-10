<script lang="ts">
    import type { Writable } from "svelte/store";
    import { type Layout, type StatblockItem, TypeNames } from "src/layouts/layout.types";
    import Creator from "./ui/Creator.svelte";
    import type StatBlockPlugin from "src/main";
    import { Menu, Setting } from "obsidian";
    import { blockGenerator } from "./add";
    import { getContext } from "../context";

    const layout = getContext("layout");
    const plugin = getContext("plugin");

    $: items = $layout.blocks;

    const handleSorted = (e: CustomEvent<StatblockItem[]>) => {
        $layout.blocks = [...e.detail];
    };
    const blocksSetting = (node: HTMLElement) => {
        new Setting(node)
            .setHeading()
            .setName("Blocks")
            .addExtraButton((b) => {
                b.setIcon("plus-with-circle")
                    .setTooltip("Add Block")
                    .extraSettingsEl.onClickEvent((e) => add(e));
            });
    };

    const add = async (e: MouseEvent) => {
        const addMenu = new Menu().setNoIcon();
        TypeNames.forEach((type) => {
            if (type[1] == "separator") {
                addMenu.addSeparator();
                return;
            }
            addMenu.addItem((item) => {
                item.setTitle(type[1]).onClick(() => {
                    const block = blockGenerator(type[0]);
                    if (block) $layout.blocks = [...$layout.blocks, block];
                });
            });
        });
        addMenu.showAtMouseEvent(e);
    };
</script>

<div class="creator-container">
    <div use:blocksSetting></div>
    {#key layout}
        <Creator
            blocks={items}
            {plugin}
            on:sorted={handleSorted}
            layout={$layout.id}
        />
    {/key}
</div>
