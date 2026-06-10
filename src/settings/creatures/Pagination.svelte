<script lang="ts">
    import {
        debounce,
        DropdownComponent,
        ExtraButtonComponent,
        Menu,
        TextComponent
    } from "obsidian";
    import { createEventDispatcher } from "svelte";
    import type { Readable, Writable } from "svelte/store";

    export let slice: Writable<number>;
    export let page: Writable<number>;
    export let pages: Readable<number>;

    const slicer = (node: HTMLElement) => {
        new DropdownComponent(node)
            .addOptions({
                "10": "10",
                "25": "25",
                "50": "50",
                "100": "100",
                "200": "200"
            })
            .setValue(`${$slice}`)
            .onChange((v) => ($slice = Number(v)));
    };
    let prev: ExtraButtonComponent;
    const previous = (node: HTMLElement) => {
        prev = new ExtraButtonComponent(node)
            .setIcon("chevron-left")
            .setDisabled($page == 1)
            .onClick(() => {
                $page = $page - 1;
            });
    };
    let nex: ExtraButtonComponent;
    const next = (node: HTMLElement) => {
        nex = new ExtraButtonComponent(node)
            .setIcon("chevron-right")
            .setDisabled($page == $pages)
            .onClick(() => {
                $page = Math.min($page + 1, $pages);
            });
    };

    $: keys = [...Array($pages).keys()].map((k) => k + 1);

    const paginationMenu = (evt: MouseEvent) => {
        const menu = new Menu();
        for (const number of keys) {
            menu.addItem((item) => {
                item.setTitle(`${number}`).onClick(() => {
                    $page = number;
                });
            });
        }
        menu.showAtMouseEvent(evt);
    };

    $: {
        if (nex && prev) {
            nex.setDisabled($page == $pages);
            prev.setDisabled($page == 1);
        }
    }

    $: displayed = keys.reduce((a, c) => {
        if (c == 1) {
            a.push(c);
        } else if ($page == 1 && (c == 2 || c == 3)) {
            a.push(c);
        } else if (
            c == $pages ||
            ($page == $pages && (c == $pages - 1 || c == $pages - 2))
        ) {
            a.push(c);
        } else if (c == $page - 1 || c == $page || c == $page + 1) {
            a.push(c);
        } else if (a.length >= 1 && a[a.length - 1] != null) {
            a.push(null);
        }
        return a;
    }, []);
</script>

<div class="pagination">
    <div class="slicer">
        <div use:slicer />
        <span class="per">per page</span>
    </div>
    <div class="paginated-container">
        <div class="previous" use:previous />
        <div class="paginated">
            {#each displayed as num}
                {#if num == null}
                    <span on:click={(evt) => paginationMenu(evt)}>...</span>
                {:else}
                    <span
                        class="clickable-icon"
                        class:active={num == $page}
                        on:click={() => ($page = num)}
                    >
                        {num}
                    </span>
                {/if}
            {/each}
        </div>
        <div class="next" use:next />
    </div>
</div>

<style scoped>
    .pagination {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
    }
    .paginated-container {
        display: flex;
        align-items: center;
        gap: 1rem;
    }
    .paginated {
        display: flex;
        align-items: center;
        gap: 1rem;
    }
    .clickable-icon.active {
        background-color: var(--background-modifier-hover);
    }
    .slicer {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    .slicer .per {
        color: var(--text-muted);
        font-size: var(--font-smallest);
    }
</style>
