<script lang="ts">
    import { getContext } from "../context";
    import { createEventDispatcher, onDestroy, onMount } from "svelte";
    import {
        ExtraButtonComponent,
        SearchComponent,
        Setting,
        debounce,
        parseYaml,
        stringifyYaml
    } from "obsidian";
    import { MonsterSuggestionModal } from "src/util/creature";
    import type { Monster } from "index";
    import { buildTextArea, setNodeIcon } from "src/util";
    import type { EditorView } from "@codemirror/view";
    import StatBlockRenderer from "src/view/statblock";
    import { derived, writable } from "svelte/store";
    import { ThemeMode } from "src/layouts/layout.css";
    import Details from "../Details.svelte";

    export let previewed: string;

    const plugin = getContext("plugin");
    const layout = getContext("layout");
    const dispatch = createEventDispatcher<{ update: string }>();

    const preview = (container: HTMLElement, monster: Monster) => {
        container.empty();
        renderer.setCreature({ monster });
        renderer.init();
    };
    let previewContainer: HTMLDivElement, renderer: StatBlockRenderer;

    onMount(() => {
        let monster: Monster = {} as Monster;
        try {
            monster = { ...monster, ...parseYaml(previewed) };
        } catch (e) {}
        renderer = new StatBlockRenderer(
            {
                plugin,
                container: previewContainer,
                layout: $layout,
                monster
            },
            false
        );
    });
    const search = (node: HTMLElement) => {
        const search = new SearchComponent(node).setPlaceholder(
            "Find a creature"
        );
        const suggester = new MonsterSuggestionModal(
            plugin.app,
            search,
            plugin.api.getBestiaryCreatures()
        );
        suggester.onSelect(async (match) => {
            if (match.item) {
                search.setValue("");
                const text = stringifyYaml(match.item);
                dispatch("update", text);
                editor.dispatch({
                    changes: [
                        {
                            from: 0,
                            to: editor.state.doc.length,
                            insert: text
                        }
                    ]
                });
            }
        });
    };

    let editor: EditorView;
    const yaml = (node: HTMLElement) => {
        editor = buildTextArea(
            node,
            previewed,
            [],
            debounce((v) => {
                try {
                    const creature = parseYaml(v) as Monster;
                    dispatch("update", v);
                    preview(previewContainer, creature);
                } catch (e) {}
            }, 500)
        );
    };
    const mode = writable<ThemeMode>(ThemeMode.None);
    const setMode = (current: ThemeMode) => {
        if ($mode == current) {
            $mode = ThemeMode.None;
        } else {
            $mode = current;
        }
    };

    onDestroy(() => {
        if (editor) editor.destroy();
    });

    const scale = writable(1);
    const reset = (node: HTMLElement) => {
        new ExtraButtonComponent(node).setIcon("undo").onClick(() => {
            $scale = 1;
        });
    };
    const settingsDesc = derived([mode, scale], ([mode, scale]) => {
        const desc = [`Scale: ${scale}`];
        if (mode === ThemeMode.Light) {
            desc.push("Mode: Light");
        }
        if (mode === ThemeMode.Dark) {
            desc.push("Mode: Dark");
        }
        return desc.join(", ");
    });
</script>

<div
    class="previewer"
    class:theme-light={$mode === ThemeMode.Light}
    class:theme-dark={$mode === ThemeMode.Dark}
    style={`--scale: ${$scale}`}
>
    <div>
        Select a creature to preview the layout, or enter your own definition
        below.
    </div>

    <div class="preview">
        <div class="preview-container inner" bind:this={previewContainer} />
    </div>

    <div use:search />
    <Details name="Settings" desc={$settingsDesc} open={false}>
        <div class="setting-item">
            <div class="setting-item-info">
                <div class="setting-item-name">Set theme mode</div>
            </div>
            <div class="setting-item-control">
                <button
                    use:setNodeIcon={"sun"}
                    aria-label="Light"
                    class:mod-cta={$mode == ThemeMode.Light}
                    on:click={() => setMode(ThemeMode.Light)}
                ></button>
                <button
                    use:setNodeIcon={"moon"}
                    aria-label="Dark"
                    class:mod-cta={$mode == ThemeMode.Dark}
                    on:click={() => setMode(ThemeMode.Dark)}
                ></button>
            </div>
        </div>
        <div class="setting-item">
            <div class="setting-item-info">
                <div class="setting-item-name">Scale preview</div>
                <div class="setting-item-description">Current: {$scale}</div>
            </div>
            <div class="setting-item-control" use:reset>
                <input
                    class="slider"
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    bind:value={$scale}
                />
            </div>
        </div>
    </Details>
    <div class="definition">
        <Details name="Editor" open={false}>
            <div class="yaml-editor" use:yaml />
        </Details>
    </div>
</div>

<style>
    .previewer {
        height: 100%;
        display: grid;
        grid-template-rows: auto 1fr auto;
        gap: 0.5rem;
    }
    .preview {
        overflow: hidden;
        position: relative;
    }
    .inner {
        overflow: auto;
        padding: var(--size-4-4);
        transform-origin: top left;
        scale: var(--scale, 0.625);
        width: calc(100% / var(--scale, 0.625));
        height: calc(100% / var(--scale, 0.625));
    }
    .definition {
        display: flex;
        flex-flow: column nowrap;
        gap: 0.25rem;
    }
    .yaml-editor {
        font-size: var(--font-smallest);
    }
</style>
