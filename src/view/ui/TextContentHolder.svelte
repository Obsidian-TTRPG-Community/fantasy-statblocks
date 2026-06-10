<script lang="ts">
    import MarkdownHolder from "./MarkdownHolder.svelte";

    export let property: string = "";
</script>

<MarkdownHolder {property} />
