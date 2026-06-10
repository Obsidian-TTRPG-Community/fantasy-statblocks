<script lang="ts">
    import { SearchComponent, TextComponent, debounce } from "obsidian";
    import type { Writable } from "svelte/store";

    export let filter: Writable<string>;
    export let placeholder: string;
    const search = (node: HTMLElement) => {
        let text = new SearchComponent(node)
            .setPlaceholder(placeholder)
            .onChange(
                debounce((v) => {
                    $filter = v;
                }, 10)
            );
        filter.subscribe((v) => {
            if (!v || !v.length) text.setValue("");
        });
    };
</script>

<div class="search" use:search />

<style scoped>
    .search,
    .search :global(input) {
        width: 100%;
    }
</style>
