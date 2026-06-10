import type StatBlockPlugin from "src/main";
import { getContext as gC, setContext as sC } from "svelte";
import type { Writable } from "svelte/store";
import type { Layout } from "src/layouts/layout.types";
import type { ThemeMode } from "src/layouts/layout.css";

interface LayoutEditorContext {
    layout: Writable<Layout>;
    plugin: StatBlockPlugin;
    previewed: string | null;
    mode: Writable<ThemeMode>;
}

export function getContext<K extends keyof LayoutEditorContext>(key: K) {
    return gC<LayoutEditorContext[K]>(key);
}
export function setContext<K extends keyof LayoutEditorContext>(
    key: K,
    value: LayoutEditorContext[K]
) {
    return sC(key, value);
}
