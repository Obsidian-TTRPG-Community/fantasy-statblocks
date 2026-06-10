<script lang="ts">
    import type { IfElseCondition } from "src/layouts/layout.types";
    import { ExtraButtonComponent, TextAreaComponent } from "obsidian";
    import { createEventDispatcher, onDestroy } from "svelte";
    import { EditorView } from "@codemirror/view";
    import { editorFromTextArea } from "src/util/util";
    import { setNodeIcon } from "src/util";

    const dispatch = createEventDispatcher();
    export let condition: IfElseCondition;
    export let editing: boolean = false;
    let editor: EditorView;
    function complete() {
        if (editor) {
            condition.condition = editor.state.doc.toString();
            editor.destroy();
        }
        dispatch("done");
    }
    const textarea = (node: HTMLElement) => {
        const textarea = new TextAreaComponent(node).setValue(
            condition?.condition ? condition.condition : ""
        );
        editor = editorFromTextArea(
            textarea.inputEl,
            EditorView.updateListener.of((update) => {
                if (update.docChanged) {
                    condition.condition = update.state.doc.toString();
                }
            })
        );
    };
    const editIcon = (node: HTMLElement) => {
        new ExtraButtonComponent(node).setIcon("pencil");
    };
    const finishIcon = (node: HTMLElement) => {
        new ExtraButtonComponent(node).setIcon("check");
    };
    const trashIcon = (node: HTMLElement) => {
        new ExtraButtonComponent(node).setIcon("trash");
    };

    onDestroy(() => {
        editor?.destroy();
    });
</script>

<div class="setting-item-info">
    {#if editing}
        <div use:textarea />
    {:else}
        <div class="setting-item-name">
            {#if !condition || !condition.condition}
                <div use:setNodeIcon={"alert-triangle"} />
                <em>No condition set</em>
            {:else}
                <code>
                    {condition.condition}
                </code>
            {/if}
        </div>
    {/if}
</div>

<div class="setting-item-control">
    {#if editing}
        <div class="done" on:click={complete} use:finishIcon />
    {:else}
        <div class="edit" on:click={() => dispatch("edit")} use:editIcon />
    {/if}
    <div class="delete" on:click={() => dispatch("delete")} use:trashIcon />
</div>

<style scoped>
    .setting-item-info {
        width: 100%;
    }
    .setting-item-name {
        display: flex;
        align-items: center;
        gap: 0.25rem;
    }
</style>
