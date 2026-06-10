<script lang="ts">
    import {
        ButtonComponent,
        ExtraButtonComponent,
        Platform,
        TextComponent
    } from "obsidian";

    import type StatBlockPlugin from "src/main";
    import { createEventDispatcher } from "svelte";

    import Blocks from "./blocks/Blocks.svelte";
    import { derived, writable } from "svelte/store";
    import type { Layout } from "src/layouts/layout.types";
    import Advanced from "./advanced/Advanced.svelte";
    import { setContext } from "./context";
    import Appearance from "./appearance/Appearance.svelte";
    import Previewer from "./previewer/Previewer.svelte";

    export let layout: Layout;
    export let plugin: StatBlockPlugin;
    const store = writable<Layout>(layout);
    setContext("plugin", plugin);
    setContext("layout", store);
    let previewed = "";

    const SettingsSections = [
        "General",
        "Appearance",
        "Advanced",
        "Previewer"
    ] as const;
    let SelectedSection: (typeof SettingsSections)[number] =
        SettingsSections[0];

    let editingName = false;
    const name = (node: HTMLElement) => {
        node.empty();
        if (editingName) {
            let temp = $store.name;
            new TextComponent(node).setValue(temp).onChange((v) => {
                temp = v;
            });
            const buttons = node.createDiv("buttons");
            new ExtraButtonComponent(buttons)
                .setIcon("checkmark")
                .setTooltip("Save")
                .onClick(() => {
                    editingName = false;
                    $store.name = temp;
                    name(node);
                });
            new ExtraButtonComponent(buttons)
                .setIcon("cross-in-box")
                .setTooltip("Cancel")
                .onClick(() => {
                    editingName = false;
                    name(node);
                });
        } else {
            node.createEl("h5", { text: $store.name });
            new ExtraButtonComponent(node.createDiv("buttons"))
                .setIcon("pencil")
                .setTooltip("Edit Name")
                .onClick(() => {
                    editingName = true;
                    name(node);
                });
        }
    };

    const dispatch = createEventDispatcher();
    const save = (node: HTMLDivElement) => {
        new ButtonComponent(node)
            .setIcon("checkmark")
            .setCta()
            .setTooltip("Save")
            .onClick(() => {
                dispatch("saved");
            });
    };
    const cancel = (node: HTMLDivElement) => {
        new ExtraButtonComponent(node)
            .setIcon("cross")
            .setTooltip("Cancel")
            .onClick(() => {
                dispatch("cancel");
            });
    };

    const style = derived(store, (layout) => {
        return plugin.manager.getSheetRules(layout);
    });
</script>

{@html `<style>
        ${$style.join("\n")}
    </style>`}
{#if !Platform.isMobile}
    <div class="vertical-tab-header">
        <div class="vertical-tab-header-group">
            <h3>Layout Editor</h3>

            <div class="name" use:name />
            <div class="vertical-tab-header-group-items">
                {#each SettingsSections as SECTION}
                    <div
                        class="vertical-tab-nav-item"
                        class:is-active={SelectedSection === SECTION}
                        on:click={() => (SelectedSection = SECTION)}
                    >
                        {SECTION}
                    </div>
                {/each}
            </div>
        </div>
        <div class="bottom">
            <div class="save" use:save />
            <div class="cancel" use:cancel />
        </div>
    </div>
    <div
        class="vertical-tab-content-container {SelectedSection.toLowerCase()}s"
    >
        <div class="vertical-tab-content">
            {#if SelectedSection === "General"}
                <Blocks />
            {/if}
            {#if SelectedSection === "Appearance"}
                <Appearance />
            {/if}
            {#if SelectedSection === "Advanced"}
                <Advanced />
            {/if}
            {#if SelectedSection === "Previewer"}
                <Previewer
                    {previewed}
                    on:update={(ev) => (previewed = ev.detail)}
                />
            {/if}
        </div>
    </div>
{:else}
    <!-- TODO: Mimic Obsidian Mobile settings view -->
    <div class="statblock-mobile">
        <div class="top">
            <div class="name" use:name />
            <div class="buttons">
                <div class="save" use:save />
                <div class="cancel" use:cancel />
            </div>
        </div>
        <Advanced />
        <Blocks />
    </div>
{/if}

<style scoped>
    .statblock-mobile {
        display: flex;
        flex-flow: column;
        gap: 0.25rem;
    }
    .top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.25rem;
    }
    .buttons {
        display: flex;
        align-items: center;
    }
    .name {
        display: flex;
        /* justify-content: space-between; */
        align-items: center;
    }
    .name :global(.buttons) {
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
    .vertical-tab-header {
        display: flex;
        flex-flow: column nowrap;
    }
    .vertical-tab-content {
        padding: var(--size-4-8);
    }
    .bottom {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin-top: auto;
    }
</style>
