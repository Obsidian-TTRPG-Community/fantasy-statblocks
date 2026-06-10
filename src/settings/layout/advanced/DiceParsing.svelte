<script lang="ts">
    import type { DiceParsing } from "src/layouts/layout.types";

    export let item: DiceParsing;
</script>

<div class="dice-parsing setting-item-info">
    <div class="setting-item-name">
        <code>/{item.regex}/</code>
    </div>
    {#if item.desc}
        <div class="setting-item-description">
            {item.desc}
        </div>
    {/if}
</div>
