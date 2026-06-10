<script lang="ts">
    import { Setting } from "obsidian";
    import type { CSSPropertyGroup } from "src/layouts/layout.css";
    import Property from "./Property.svelte";
    import Details from "../Details.svelte";

    export let group: CSSPropertyGroup;
</script>

<Details name={group.name} desc={group.desc}>
    {#each group.properties as property}
        <Property {property} />
    {/each}
</Details>
