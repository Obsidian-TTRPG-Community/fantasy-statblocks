<script lang="ts">
    import { ExtraButtonComponent } from "obsidian";
    import {
        type CSSPropertyDefinition,
        PropertiesByType,
        resolveProperty,
        isDerived,
        resolveRawProperty,
        CSSPropertyType,
        ThemeMode,
        resolutionTree
    } from "src/layouts/layout.css";
    import { getContext } from "../context";
    import { derived } from "svelte/store";

    export let property: CSSPropertyDefinition;
    const layout = getContext("layout");
    const mode = getContext("mode");
    const options = derived([layout, mode], ([layout, mode]) => {
        return PropertiesByType.get(property.type).filter(
            (d) =>
                d.property != property.property &&
                !resolutionTree(layout.cssProperties, d.property, mode).has(
                    property.property
                )
        );
    });
    const existing = derived([layout, mode], ([layout, mode]) => {
        return (
            resolveProperty(layout.cssProperties, property.property, mode) ?? ""
        );
    });
    const raw = derived([layout, mode, options], ([layout, mode, options]) => {
        return (
            resolveRawProperty(layout.cssProperties, property.property, mode) ??
            options[0].property
        );
    });

    const linked = derived([layout, mode], ([layout, mode]) =>
        isDerived(layout.cssProperties, property.property, mode)
    );

    const linkControl = (node: HTMLElement) => {
        new ExtraButtonComponent(node)
            .setIcon($linked ? "unlink" : "link")
            .onClick(() => {
                if ($linked) {
                    setProp(
                        resolveProperty(
                            $layout.cssProperties,
                            property.property,
                            $mode
                        )
                    );
                } else {
                    setProp(
                        $options.find(
                            (d) =>
                                !resolutionTree(
                                    $layout.cssProperties,
                                    d.property,
                                    $mode
                                ).has(property.property)
                        ).property
                    );
                }
            });
    };
    const resetControl = (node: HTMLElement) => {
        new ExtraButtonComponent(node).setIcon("undo").onClick(() => {
            if ($mode === ThemeMode.None) {
                delete $layout.cssProperties?.[property.property];
            } else {
                delete $layout.cssProperties?.[$mode]?.[property.property];
            }
            $layout.cssProperties = $layout.cssProperties;
        });
    };

    const setProp = (value: string) => {
        if (!$layout.cssProperties) {
            $layout.cssProperties = {};
        }
        if ($mode === ThemeMode.None) {
            $layout.cssProperties[property.property] = value;
        } else {
            if (!$layout.cssProperties[$mode]) {
                $layout.cssProperties[$mode] = {};
            }
            $layout.cssProperties[$mode][property.property] = value;
        }
    };
</script>

<div class="setting-item">
    <div class="setting-item-info">
        <div class="setting-item-name">
            {property.name}
        </div>
        <div class="setting-item-description">{property.desc ?? ""}</div>
    </div>
    <div class="setting-item-control">
        {#if $linked}
            <select
                class="dropdown"
                on:change={(evt) => setProp(evt.currentTarget.value)}
            >
                {#each $options as option}
                    <option
                        value={option.property}
                        selected={$raw == option.property}>{option.name}</option
                    >
                {/each}
            </select>
        {:else if property.type === CSSPropertyType.Color}
            <input
                type="color"
                value={$existing}
                on:change={(evt) => setProp(evt.currentTarget.value)}
            />
        {:else}
            <input
                type="text"
                spellcheck="false"
                value={$existing}
                on:change={(evt) => setProp(evt.currentTarget.value)}
            />
        {/if}
        {#key $linked}
            <div use:linkControl />
        {/key}
        <div use:resetControl />
    </div>
</div>

<style scoped>
</style>
