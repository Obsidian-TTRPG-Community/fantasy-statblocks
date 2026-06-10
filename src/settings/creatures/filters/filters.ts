import { derived, writable } from "svelte/store";

export const NameFilter = writable<string>("");
export const SourcesFilter = writable<string[]>([]);
export const NONE = "None";
export const ActiveFilters = derived(
    [NameFilter, SourcesFilter],
    ([name, sources]) => {
        return (name?.length ? 1 : 0) + (sources?.length ? 1 : 0);
    }
);
