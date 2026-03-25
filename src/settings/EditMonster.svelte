<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import {
        ButtonComponent,
        ExtraButtonComponent,
        Notice,
        parseYaml,
        stringifyYaml
    } from "obsidian";
    import type { Monster } from "index";
    import { translate, t } from "src/i18n/i18n";

    const dispatch = createEventDispatcher();

    export let monster: Partial<Monster> = {};
    let useJson = false;
    let textArea: HTMLTextAreaElement;

    const json = (node: HTMLElement) => {
        new ExtraButtonComponent(node).setIcon("code-glyph").setTooltip(translate("common.json"));
    };
    const yaml = (node: HTMLElement) => {
        new ExtraButtonComponent(node)
            .setIcon("lines-of-text")
            .setTooltip(translate("common.yaml"));
    };
    const save = (node: HTMLElement) => {
        new ButtonComponent(node)
            .setIcon("checkmark")
            .setTooltip(translate("common.saveChanges"))
            .onClick(() => {
                if (useJson) {
                    try {
                        if (useJson) {
                            monster = JSON.parse(textArea.value);
                        } else {
                            monster = parseYaml(textArea.value);
                        }
                    } catch (e) {
                        console.error(e);
                        new Notice(
                            translate("editMonster.saveError").replace("{message}", e.message)
                        );
                        return;
                    }
                }
                dispatch("save", monster);
            });
    };
    const cancel = (node: HTMLElement) => {
        new ExtraButtonComponent(node)
            .setIcon("cross")
            .setTooltip(translate("common.cancel"))
            .onClick(() => {
                dispatch("cancel");
            });
    };

    function getMonsterText() {
        if (useJson) return JSON.stringify(monster, null, 2);
        if (!monster || !Object.keys(monster ?? {})?.length) return "";
        return stringifyYaml(monster).trim();
    }

    function setMonster() {
        try {
            if (useJson) {
                monster = JSON.parse(textArea.value);
            } else {
                monster = parseYaml(textArea.value);
            }
        } catch (e) {
            console.error(e);
        }
    }
</script>

<div class="edit-monster-modal">
    <h2>{$t("editMonster.title")}</h2>
    <div class="top-level">
        <div class="json">
            <div
                class:active={!useJson}
                use:yaml
                on:click={() => (useJson = false)}
            />
            <div
                class:active={useJson}
                use:json
                on:click={() => (useJson = true)}
            />
        </div>
        {#key useJson}
            <textarea bind:this={textArea} on:blur={() => setMonster()}
                >{getMonsterText()}</textarea
            >
        {/key}
    </div>
    <div class="buttons">
        <div use:save />
        <div use:cancel />
    </div>
</div>

<style scoped>
    .top-level {
        display: flex;
        flex-flow: column nowrap;
    }
    textarea {
        flex-grow: 1;
        height: 500px;
        max-height: 50vh;
    }
    .json {
        margin-bottom: 1rem;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
    .json > div {
        border-radius: 4px;
        margin: 5px 0px;
    }
    .active {
        background-color: var(--background-secondary-alt);
    }

    .buttons {
        margin-top: 1rem;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
</style>
