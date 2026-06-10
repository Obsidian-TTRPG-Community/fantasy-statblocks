<script lang="ts">
    import Multiselect from "svelte-multiselect";
    import type { Writable } from "svelte/store";
    import { NONE } from "./filters";

    export let filter: Writable<string[]>;
    export let options: string[];
    const _options = [...options, NONE];
    export let placeholder: string;
</script>

<div class="multiselect-container">
    <Multiselect
        options={_options}
        bind:selected={$filter}
        outerDivClass="multiselect-dropdown"
        {placeholder}
    />
</div>

<style scoped>
    .multiselect-container {
        width: 100%;
    }
    .multiselect-container :global(.multiselect-dropdown) {
        height: auto;
        min-height: var(--input-height, 30px);
    }
    /** Normalize multiselect */
    .multiselect-container :global(div.multiselect) {
        --sms-border: none;
        --sms-bg: var(--interactive-normal);
        --sms-options-bg: var(--interactive-normal);
        --sms-border-radius: var(--radius);
    }
    .multiselect-container :global(div.multiselect ul) {
        padding-left: 0;
        border-radius: var(--radius);
    }
    .multiselect-container :global(div.multiselect button) {
        height: 0;
    }
    .multiselect-container :global(div.multiselect input) {
        width: 0;
        font-size: var(--font-ui-small);
    }
    .multiselect-container :global(div.multiselect li) {
        border-left: none;
    }
    .multiselect-container :global(div.multiselect li::before) {
        content: none;
    }
</style>
