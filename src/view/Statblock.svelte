<script lang="ts">
    import type { Monster } from "index";
    import {
        debounce,
        ExtraButtonComponent,
        Menu,
        Notice,
        stringifyYaml
    } from "obsidian";

    import type { Layout, StatblockItem } from "src/layouts/layout.types";
    import type StatBlockPlugin from "src/main";
    import {
        createEventDispatcher,
        onDestroy,
        onMount,
        setContext
    } from "svelte";
    import { type Writable, writable } from "svelte/store";
    import type StatBlockRenderer from "./statblock";

    import Bar from "./ui/Bar.svelte";
    import ColumnContainer from "./ui/ColumnContainer.svelte";
    import { slugifyLayoutForCss } from "src/util/util";

    const dispatch = createEventDispatcher();

    export let monster: Partial<Monster>;
    export let context: string;
    export let plugin: StatBlockPlugin;
    export let statblock: StatblockItem[];
    export let renderer: StatBlockRenderer;
    export let layout: Layout;
    export let canSave: boolean = true;
    export let icons = true;

    const monsterStore = writable(monster);
    $: $monsterStore = monster;
    const maxColumns =
        !isNaN(Number(monster.columns ?? layout.columns)) &&
        Number(monster.columns ?? layout.columns) > 0
            ? Number(monster.columns ?? layout.columns)
            : 2;

    const monsterColumnWidth = Number(
        `${monster.columnWidth}`.replace(/\D/g, "")
    );
    const columnWidth =
        !isNaN(monsterColumnWidth ?? layout.columnWidth) &&
        (monsterColumnWidth ?? layout.columnWidth) > 0
            ? monsterColumnWidth
            : 400;

    const canDice =
        plugin.canUseDiceRoller && (monster.dice ?? plugin.settings.useDice);
    const canRender = monster.render ?? plugin.settings.renderDice;

    setContext<StatBlockPlugin>("plugin", plugin);
    setContext<boolean>("tryToRenderLinks", plugin.settings.tryToRenderLinks);
    setContext<string>("context", context);
    setContext<Writable<Partial<Monster>>>("monster", monsterStore);
    setContext<boolean>("dice", canDice);
    setContext<boolean>("render", canRender);
    setContext<StatBlockRenderer>("renderer", renderer);
    setContext<Layout>("layout", layout);

    const reset = writable<boolean>(false);
    setContext<Writable<boolean>>("reset", reset);

    let container: HTMLElement;
    $: columns = maxColumns;
    $: ready = false;

    const setColumns = () => {
        if (monster.forceColumns ?? layout.forceColumns) {
            columns = maxColumns;
            observer.disconnect();
            return;
        }
        const width = container.clientWidth;
        columns = Math.min(
            Math.max(Math.floor(width / columnWidth), 1),
            maxColumns
        );
    };
    const onResize = debounce(
        () => {
            setColumns();
            if (!ready) ready = true;
        },
        100,
        false
    );
    const observer = new ResizeObserver(onResize);

    onMount(() => {
        onResize();
        observer.observe(container);
    });

    onDestroy(() => {
        observer.disconnect();
    });

    const iconsEl = (node: HTMLElement) => {
        new ExtraButtonComponent(node).setIcon("vertical-three-dots");
    };
    const menu = new Menu();
    menu.addItem((item) =>
        item
            .setIcon("save")
            .setTitle("Save to Bestiary")
            .setDisabled(!canSave)
            .onClick(() => dispatch("save"))
    );
    menu.addItem((item) => {
        item.setTitle("Copy YAML")
            .setIcon("code")
            .onClick(async () => {
                try {
                    await navigator.clipboard.writeText(stringifyYaml(monster));
                    new Notice("Creature YAML copied to clipboard");
                } catch (e: unknown) {
                    new Notice(
                        `There was an issue copying the yaml:\n\n${(e as Error).message}`
                    );
                }
            });
    });
    menu.addItem((item) =>
        item
            .setIcon("image-down")
            .setTitle("Export as PNG")
            .onClick(() => dispatch("export"))
    );
    if (canDice)
        menu.addItem((item) =>
            item
                .setIcon("reset")
                .setTitle("Reset Dice")
                .onClick(() => {
                    reset.set(true);
                    reset.set(false);
                })
        );
    const showMenu = (evt: MouseEvent) => {
        menu.showAtMouseEvent(evt);
    };


    $: name = slugifyLayoutForCss(monster.name ?? "", "no-name");
    $: layoutName = slugifyLayoutForCss(layout.name, "no-layout");
    const getNestedLayouts = (blocks: StatblockItem[]): string[] => {
        const classes: string[] = [];
        for (const block of blocks) {
            if (block.type == "layout") {
                const layout = plugin.manager
                    .getAllLayouts()
                    .find((l) => l.id == block.layout);
                if (layout) {
                    classes.push(slugifyLayoutForCss(layout.name));
                }
            }
            if ("nested" in block) {
                classes.push(...getNestedLayouts(block.nested));
            }
        }
        return classes;
    };

    $: classes = [name, layoutName, ...getNestedLayouts(statblock)].filter(
        (n) => n?.length
    );
</script>

<div class="container" bind:this={container}>
    {#if ready}
        <div
            class:obsidian-statblock-plugin={true}
            class:statblock={true}
            class={classes.join(" ")}
        >
            {#key $monsterStore}
                {#if $monsterStore}
                    <Bar />
                    {#key columns}
                        <ColumnContainer
                            {columns}
                            {maxColumns}
                            {statblock}
                            {ready}
                            {classes}
                            {layout}
                            {plugin}
                            on:save
                            on:export
                        />
                    {/key}
                    <Bar />
                {:else}
                    <span>Invalid monster.</span>
                {/if}
            {/key}
        </div>
        {#if icons}
            <div class="icons" use:iconsEl on:click={showMenu} />
        {/if}
    {/if}
</div>

<style>
    /**
    * Active theming variables.
    */
    .statblock {
        --active-primary-color: var(--statblock-primary-color);
        --active-rule-color: var(--statblock-rule-color);
        --active-background-color: var(--statblock-background-color);

        --active-bar-color: var(--statblock-bar-color);
        --active-bar-border-size: var(--statblock-bar-border-size);
        --active-bar-border-color: var(--statblock-bar-border-color);

        --active-image-width: var(--statblock-image-width);
        --active-image-height: var(--statblock-image-height);
        --active-image-border-size: var(--statblock-image-border-size);
        --active-image-border-color: var(
            --statblock-image-border-color,
            --active-primary-color
        );

        --active-border-size: var(--statblock-border-size);
        --active-border-color: var(--statblock-border-color);

        --active-box-shadow-color: var(--statblock-box-shadow-color);
        --active-box-shadow-x-offset: var(--statblock-box-shadow-x-offset);
        --active-box-shadow-y-offset: var(--statblock-box-shadow-y-offset);
        --active-box-shadow-blur: var(--statblock-box-shadow-blur);

        --active-font-color: var(
            --statblock-font-color,
            --active-primary-color
        );
        --active-font-weight: var(--statblock-font-weight);

        --active-content-font: var(--statblock-content-font);
        --active-content-font-size: var(--statblock-content-font-size);

        --active-heading-font: var(--statblock-heading-font);
        --active-heading-font-color: var(--statblock-heading-font-color);
        --active-heading-font-size: var(--statblock-heading-font-size);
        --active-heading-font-variant: var(--statblock-heading-font-variant);
        --active-heading-font-weight: var(--statblock-heading-font-weight);
        --active-heading-line-height: var(--statblock-heading-line-height);

        --active-property-line-height: var(--statblock-property-line-height);

        --active-property-font: var(--statblock-property-font);
        --active-property-font-color: var(--statblock-property-font-color);
        --active-property-font-variant: var(--statblock-property-font-variant);
        --active-property-font-size: var(--statblock-property-font-size);
        --active-property-font-weight: var(--statblock-property-font-weight);

        --active-property-name-font: var(--statblock-property-name-font);
        --active-property-name-font-color: var(
            --statblock-property-name-font-color
        );
        --active-property-name-font-variant: var(
            --statblock-property-name-font-variant
        );
        --active-property-name-font-size: var(
            --statblock-property-name-font-size
        );
        --active-property-name-font-weight: var(
            --statblock-property-name-font-weight
        );

        --active-section-heading-border-size: var(
            --statblock-section-heading-border-size
        );
        --active-section-heading-border-color: var(
            --statblock-section-heading-border-color
        );
        --active-section-heading-font: var(--statblock-section-heading-font);
        --active-section-heading-font-color: var(
            --statblock-section-heading-font-color
        );
        --active-section-heading-font-size: var(
            --statblock-section-heading-font-size
        );
        --active-section-heading-font-variant: var(
            --statblock-section-heading-font-variant
        );
        --active-section-heading-font-weight: var(
            --statblock-section-heading-font-weight
        );

        --active-saves-line-height: var(--statblock-saves-line-height);

        --active-spells-font-style: var(--statblock-spells-font-style);

        --active-subheading-font: var(--statblock-subheading-font);
        --active-subheading-font-color: var(--statblock-subheading-font-color);
        --active-subheading-font-size: var(--statblock-subheading-font-size);
        --active-subheading-font-style: var(--statblock-subheading-font-style);
        --active-subheading-font-weight: var(
            --statblock-subheading-font-weight
        );

        --active-table-header-font-weight: var(
            --statblock-table-header-font-weight
        );

        --active-traits-font: var(--statblock-traits-font);
        --active-traits-font-color: var(--statblock-traits-font-color);
        --active-traits-font-size: var(--statblock-traits-font-size);
        --active-traits-font-weight: var(--statblock-traits-font-weight);
        --active-traits-font-style: var(--statblock-traits-font-style);
        --active-traits-name-font: var(--statblock-traits-name-font);
        --active-traits-name-font-color: var(
            --statblock-traits-name-font-color
        );
        --active-traits-name-font-size: var(--statblock-traits-name-font-size);
        --active-traits-name-font-weight: var(
            --statblock-traits-name-font-weight
        );
        --active-traits-name-font-style: var(
            --statblock-traits-name-font-style
        );

        --active-link-style: var(--statblock-link-style);
    }

    .statblock :global(a) {
        font-style: var(--statblock-link-style);
    }
    .container {
        display: flex;
        position: relative;
        width: 100%;
        margin: 0.25rem 0;
    }
    .statblock {
        margin: 0 auto;
        position: relative;
    }

    .icons {
        position: absolute;
        left: var(--size-2-2);
    }
</style>
