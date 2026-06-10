<script lang="ts">
    import type { Monster } from "index";
    import { Notice } from "obsidian";
    import type { JavaScriptItem } from "src/layouts/layout.types";
    import type StatBlockPlugin from "src/main";

    import { getContext } from "svelte";
    import type { Writable } from "svelte/store";

    export let block: JavaScriptItem;

    const monsterStore = getContext<Writable<Monster>>("monster");
    let monster = $monsterStore;
    monsterStore.subscribe((m) => (monster = m));
    let plugin = getContext<StatBlockPlugin>("plugin");

    const render = (div: HTMLElement) => {
        if (block.code) {
            try {
                const func = new Function("monster", "property", block.code);
                const htmlElement = func.call(undefined, monster, plugin);
                if (htmlElement instanceof HTMLElement) {
                    div.appendChild(htmlElement);
                }
            } catch (e) {
                console.error(e);
            }
        }
    };
</script>

<div class="statblock-javascript" use:render />

<style>
</style>
