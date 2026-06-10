<script lang="ts">
    import { getContext, setContext } from "../context";
    import Group from "./Group.svelte";
    import { writable } from "svelte/store";
    import { setNodeIcon } from "src/util";
    import { ThemeMode, CSSPropertyGroups } from "src/layouts/layout.css";

    const mode = writable<ThemeMode>(ThemeMode.None);
    setContext("mode", mode);
</script>

<div class="appearance-parent">
    <div class="setting-item">
        <div class="setting-item-info">
            <div class="setting-item-name">Set colors for...</div>
        </div>
        <div class="setting-item-control">
            <button
                class:mod-cta={$mode == ThemeMode.None}
                on:click={() => ($mode = ThemeMode.None)}>Both</button
            >
            <button
                use:setNodeIcon={"sun"}
                aria-label="Light"
                class:mod-cta={$mode == ThemeMode.Light}
                on:click={() => ($mode = ThemeMode.Light)}
            ></button>
            <button
                use:setNodeIcon={"moon"}
                aria-label="Dark"
                class:mod-cta={$mode == ThemeMode.Dark}
                on:click={() => ($mode = ThemeMode.Dark)}
            ></button>
        </div>
    </div>
    <div class="property-groups">
        {#each CSSPropertyGroups as group}
            <Group {group} />
        {/each}
    </div>
</div>

<style scoped>
    .appearance-parent {
        overflow: hidden;
    }
    .property-groups {
        overflow: auto;
        height: 100%;
    }
</style>
