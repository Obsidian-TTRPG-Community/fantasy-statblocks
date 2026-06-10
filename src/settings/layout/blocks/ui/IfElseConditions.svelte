<script lang="ts">
    import { ExtraButtonComponent } from "obsidian";
    import type { IfElseCondition, IfElseItem } from "src/layouts/layout.types";
    import type StatBlockPlugin from "src/main";
    import { writable } from "svelte/store";
    import { slide } from "svelte/transition";
    import IfElseProperties from "./IfElseProperties.svelte";

    export let plugin: StatBlockPlugin;
    export let block: IfElseItem;

    const conditions = writable<IfElseCondition[]>(block.conditions);

    $: hide = plugin.settings.hideConditionHelp;
    const toggle = async () => {
        plugin.settings.hideConditionHelp = !plugin.settings.hideConditionHelp;
        await plugin.saveSettings();
    };

    const help = (node: HTMLDivElement) => {
        new ExtraButtonComponent(node).setIcon("help-circle");
    };
</script>

<div class="condition-builder-container">
    <div class="setting-item">
        <div class="setting-item-info">
            {#if hide}
                <div class="setting-item-description" transition:slide>
                    <span
                        >Conditions are used to determine what block is
                        rendered. Conditions are evaluated top to bottom - the
                        first to evaluate to
                    </span>
                    <code>true</code>
                    <span>
                        is the condition that will be used. If the last
                        condition is left blank and no others were true, it will
                        be used.
                    </span>
                    <br />
                    <br />
                    <span>The expression receives the </span>
                    <code>monster</code>
                    <span>
                        parameter, which can be used to access properties of the
                        monster being rendered, and the 
                    </span>
                    <code>plugin</code>
                    <span>
                        parameter, which is a reference to the Fantasy Statblocks
                        plugin and can be used for accessing app and plugin settings.
                    </span>
                    <br />
                    <br />
                    <strong>
                        All conditions must return a true/false value. For
                        example:
                    </strong>
                    <code>return monster.ac &gt; 1</code>
                </div>
            {/if}
        </div>
        <div class="setting-item-control">
            <div use:help on:click={() => toggle()} />
        </div>
    </div>
    <IfElseProperties
        {conditions}
        on:sorted={(e) => (block.conditions = [...e.detail])}
    />
</div>

<style scoped>
    .condition-builder-container .setting-item {
        align-items: flex-start;
    }
</style>
