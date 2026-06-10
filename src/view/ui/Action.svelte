<script lang="ts">
    import { ExtraButtonComponent, Notice } from "obsidian";
    import type { Monster } from "obsidian-overload";
    import type { ActionItem } from "src/layouts/layout.types";

    export let block: ActionItem;
    export let monster: Monster;

    const createButton = (node: HTMLElement) => {
        new ExtraButtonComponent(node).setIcon(block.icon).onClick(() => {
            if (block.callback?.trim()?.length) {
                try {
                    const func = new Function("monster", block.callback);
                    func.call(undefined, monster);
                } catch (e) {
                    new Notice(
                        `There was an error executing the provided callback for the action block.\n\n${e.message}`
                    );
                    console.error(e);
                }
            } else if (block.action) {
                try {
                    app.commands.executeCommandById(block.action);
                } catch (e) {
                    new Notice(
                        `There was an error executing the command for the action block.\n\n${e.message}`
                    );
                    console.error(e);
                }
            }
        });
    };
</script>

<div class="action" use:createButton />

<style>
</style>
