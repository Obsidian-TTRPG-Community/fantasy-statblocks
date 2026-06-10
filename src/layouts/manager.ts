import type {
    DefaultLayout,
    ItemWithProperties,
    Layout,
    StatblockItem
} from "src/layouts/layout.types";
import { Layout5e } from "./basic 5e/basic5e";
import type { StatblockData } from "index";
import {
    DefaultLayoutCSSProperties,
    ThemeMode,
    CSSProperties
} from "./layout.css";
import { DefaultLayouts } from ".";
import { slugifyLayoutForCss } from "src/util/util";

export default class LayoutManager {
    public initialize(settings: StatblockData) {
        this.setDefaultLayout(settings.default);
        this.setDefaultLayouts(settings.defaultLayouts);
        this.setLayouts(settings.layouts);

        for (const layout of this.getAllLayouts()) {
            this.addStyleSheet(layout);
        }
    }

    unload() {
        for (const sheet of this.#STYLESHEETS.values()) {
            sheet.detach();
        }
    }
    #STYLESHEETS: Map<string, HTMLStyleElement> = new Map();
    addStyleSheet(layout: Layout) {
        this.removeStyleSheet(layout.id);
        const sheet = this.generateStyleSheet(layout);
        if (!sheet) return;
        this.#STYLESHEETS.set(layout.id, sheet);
    }
    removeStyleSheet(id: string) {
        if (this.#STYLESHEETS.has(id)) {
            const existing = this.#STYLESHEETS.get(id);
            existing.detach();
        }
    }
    getSheetRules(layout: Layout): string[] {
        if (!layout.cssProperties) return [];
        const layoutName = `.${slugifyLayoutForCss(layout.name)}`;
        const rules: string[] = [
            this.#buildSheetRule(layoutName, {
                ...DefaultLayoutCSSProperties,
                ...layout.cssProperties
            })
        ];

        if (ThemeMode.Light in layout.cssProperties) {
            rules.push(
                this.#buildSheetRule(
                    `.theme-light ${layoutName}`,
                    layout.cssProperties[ThemeMode.Light]
                )
            );
        }
        if (ThemeMode.Dark in layout.cssProperties) {
            rules.push(
                this.#buildSheetRule(
                    `.theme-dark ${layoutName}`,
                    layout.cssProperties[ThemeMode.Dark]
                )
            );
        }
        return rules;
    }
    generateStyleSheet(
        layout: Layout,
        id = `FS_CSS_PROPERTIES_${layout.id}`
    ): HTMLStyleElement | null {
        if (!layout.cssProperties) return null;
        const stylesheet = document.head.createEl("style", {
            attr: { id }
        });
        const rules = this.getSheetRules(layout);
        for (const rule of rules) {
            stylesheet.sheet.insertRule(rule, stylesheet.sheet.cssRules.length);
        }
        return stylesheet;
    }
    #transformProp(prop: string): string {
        return prop.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`);
    }
    #buildSheetRule(
        scope: string,
        properties: Partial<
            Record<(typeof CSSProperties)[number], string | null>
        >
    ): string {
        const built: string[] = [];
        for (const [prop, value] of Object.entries(properties)) {
            if (prop == ThemeMode.Dark || prop == ThemeMode.Light) continue;
            let derived = CSSProperties.includes(value as CSSProperties)
                ? `var(--statblock-${this.#transformProp(value)})`
                : value;
            built.push(`
            --statblock-${this.#transformProp(prop)}: ${derived};`);
        }
        return `${scope} {${built.join("")}
        }`;
    }
    #default: string;
    #defaults: Map<string, DefaultLayout> = new Map();

    /**
     *
     * @param old ID of the old layout to be updated.
     * @param layout New Layout definition.
     */
    public updateDefaultLayout(old: string, layout: DefaultLayout) {
        this.#defaults.delete(old);
        this.setDefaultLayouts({ [layout.id]: layout });
        this.addStyleSheet(layout);
    }
    /**
     * @param layout ID of the layout to be removed.
     */
    public removeDefaultLayout(layout: string) {
        this.#defaults.delete(layout);
        this.removeStyleSheet(layout);
    }

    public setDefaultLayouts(layouts: Record<string, DefaultLayout>) {
        for (const layout of DefaultLayouts) {
            this.#defaults.set(
                layout.id,
                layout.id in layouts ? layouts[layout.id] : layout
            );
        }
        setTimeout(() => {
            for (const layout of this.#defaults.values()) {
                this.#unwrapLayout(layout);
            }
        }, 0);
    }
    public setDefaultLayout(layout: string) {
        this.#default = layout;
    }
    public getDefaultLayout() {
        return (
            this.getAllLayouts()?.find((l) => l.id == this.#default) ?? Layout5e
        );
    }
    #layouts: Map<string, Layout> = new Map();
    public setLayouts(layouts: Layout[]) {
        for (const layout of layouts) {
            this.#layouts.set(layout.id, layout);
        }
        setTimeout(() => {
            for (const layout of layouts) {
                this.#unwrapLayout(layout);
            }
        }, 0);
    }
    public getCustomLayouts() {
        return this.#layouts.values();
    }
    public getAllLayouts() {
        return [...this.#defaults.values(), ...this.#layouts.values()].filter(
            (f) => !("removed" in f) || !(f as DefaultLayout).removed
        );
    }
    public getAllDefaultLayouts(): DefaultLayout[] {
        return [...this.#defaults.values()];
    }
    public getLayout(id: string): Layout | null {
        return this.#layouts.get(id) ?? this.#defaults.get(id) ?? null;
    }
    public getLayoutOrDefault(name: string) {
        return (
            this.getAllLayouts().find((l) => l.name == name) ??
            this.getDefaultLayout()
        );
    }

    /**
     *
     * @param old ID of the old layout to be updated.
     * @param layout New Layout definition.
     */
    public updateLayout(old: string, layout: Layout) {
        this.#layouts.delete(old);
        this.setLayouts([layout]);
        this.addStyleSheet(layout);
    }
    /**
     * @param layout ID of the layout to be removed.
     */
    public removeLayout(layout: string) {
        this.#layouts.delete(layout);
        this.removeStyleSheet(layout);
    }
    /**
     * @param layout Layout to be added.
     */
    public addLayout(layout: Layout) {
        this.setLayouts([layout]);
        this.addStyleSheet(layout);
    }

    public getSortedLayoutNames() {
        const names = new Set([this.getDefaultLayout().name]);
        for (const layout of this.getAllLayouts()) {
            if (names.has(layout.name)) continue;
            names.add(layout.name);
        }
        return [...names];
    }

    #PROPERTY_MAP: WeakMap<Layout, Map<string, ItemWithProperties>> =
        new WeakMap();
    public getProperties(layout: string): Map<string, ItemWithProperties>;
    public getProperties(layout: Layout): Map<string, ItemWithProperties>;
    public getProperties(
        layout: Layout | string
    ): Map<string, ItemWithProperties> {
        const _layout =
            typeof layout === "string" ? this.getLayout(layout) : layout;
        return this.#PROPERTY_MAP.get(_layout);
    }
    #unwrapLayout(layout: Layout) {
        const map: Map<string, ItemWithProperties> = new Map();
        this.#PROPERTY_MAP.set(layout, this.#unwrapBlocks(layout.blocks, map));
    }
    #unwrapBlocks(
        blocks: StatblockItem[],
        map: Map<string, ItemWithProperties>
    ): Map<string, ItemWithProperties> {
        for (const block of blocks) {
            if ("nested" in block) {
                this.#unwrapBlocks(block.nested, map);
                continue;
            }
            if ("properties" in block) {
                for (const prop of block.properties) {
                    map.set(prop, block);
                }
            }
        }
        return map;
    }
}
