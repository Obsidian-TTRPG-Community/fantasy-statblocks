import {
    ButtonComponent,
    Modal,
    Notice,
    normalizePath,
    parseYaml,
    Setting,
    TFile,
    TFolder
} from "obsidian";
import type StatBlockPlugin from "src/main";
import { nanoid } from "src/util/util";
import StatBlockRenderer from "src/view/statblock";
import type { Monster } from "index";
import type { Layout } from "types/layout";
import CommunityTemplateManager from "./manager";
import {
    layoutHasJavaScript,
    snippetNameFor,
    type CommunityManifest,
    type CommunityTemplateEntry,
    type ResolvedTemplate
} from "./types";

const ANY_SYSTEM = "__any__";
const DEFAULT_EXAMPLE_FOLDER = "Statblock Templates";

/**
 * Modal that lets the user browse a community registry of statblock templates
 * as a gallery of tiles, open a tile to see a full live-rendered preview, and
 * install the layout (plus its CSS snippet and example note).
 */
export default class BrowseCommunityModal extends Modal {
    private manager: CommunityTemplateManager;
    private manifest: CommunityManifest | null = null;

    private query = "";
    private system = ANY_SYSTEM;
    private importExample = true;

    /** True if at least one template was installed (so the caller can refresh). */
    public installed = false;

    private resolvedCache: Map<string, ResolvedTemplate> = new Map();
    private renderers: StatBlockRenderer[] = [];
    private previewStyleEl: HTMLStyleElement | null = null;

    private bodyEl: HTMLDivElement;
    private statusEl: HTMLDivElement;

    constructor(
        private plugin: StatBlockPlugin,
        private onInstalledClose?: () => void
    ) {
        super(plugin.app);
        this.manager =
            plugin.communityTemplates ??
            new CommunityTemplateManager(plugin);
    }

    onOpen() {
        this.modalEl.addClass("statblock-community-modal");
        this.titleEl.setText("Browse community templates");
        this.statusEl = this.contentEl.createDiv("statblock-community-status");
        this.bodyEl = this.contentEl.createDiv("statblock-community-body");
        this.load();
    }

    onClose() {
        this.teardownPreview();
        this.contentEl.empty();
        if (this.installed) this.onInstalledClose?.();
    }

    // ---- data ----

    private async load(force = false) {
        this.teardownPreview();
        this.bodyEl.empty();
        if (force) this.resolvedCache.clear();
        this.setStatus(`Loading templates from ${this.manager.source}…`);
        try {
            this.manifest = await this.manager.getManifest(force);
            this.setStatus();
            this.renderGrid();
        } catch (e) {
            this.manifest = null;
            this.setStatus(
                `Could not load the template registry.\n${
                    e instanceof Error ? e.message : String(e)
                }`,
                true
            );
        }
    }

    private async resolveEntry(
        entry: CommunityTemplateEntry
    ): Promise<ResolvedTemplate> {
        const cached = this.resolvedCache.get(entry.id);
        if (cached) return cached;
        const resolved = await this.manager.resolve(entry);
        this.resolvedCache.set(entry.id, resolved);
        return resolved;
    }

    private filtered(): CommunityTemplateEntry[] {
        if (!this.manifest) return [];
        return this.manifest.templates.filter((t) => {
            if (this.system !== ANY_SYSTEM && t.system !== this.system) {
                return false;
            }
            if (!this.query.length) return true;
            const haystack = [
                t.name,
                t.system,
                t.author,
                t.description,
                ...(t.tags ?? [])
            ]
                .filter(Boolean)
                .join(" ")
                .toLowerCase();
            return haystack.includes(this.query);
        });
    }

    private systems(): string[] {
        const set = new Set<string>();
        for (const t of this.manifest?.templates ?? []) {
            if (t.system) set.add(t.system);
        }
        return [...set].sort();
    }

    // ---- grid view ----

    private renderGrid() {
        this.teardownPreview();
        this.bodyEl.empty();

        const controls = this.bodyEl.createDiv("statblock-community-controls");
        new Setting(controls)
            .setName("Search")
            .setClass("statblock-community-search")
            .addText((t) => {
                t.setPlaceholder("Name, system, tag…")
                    .setValue(this.query)
                    .onChange((v) => {
                        this.query = v.toLowerCase().trim();
                        this.renderTiles(grid);
                    });
            })
            .addDropdown((d) => {
                d.addOption(ANY_SYSTEM, "All systems");
                for (const s of this.systems()) d.addOption(s, s);
                d.setValue(this.system).onChange((v) => {
                    this.system = v;
                    this.renderTiles(grid);
                });
            })
            .addExtraButton((b) =>
                b
                    .setIcon("refresh-cw")
                    .setTooltip("Refresh from registry")
                    .onClick(() => this.load(true))
            );

        const grid = this.bodyEl.createDiv("statblock-community-grid");
        this.renderTiles(grid);
    }

    private renderTiles(grid: HTMLElement) {
        grid.empty();
        const entries = this.filtered();
        if (!entries.length) {
            grid.createEl("p", {
                cls: "statblock-community-empty",
                text: this.manifest ? "No templates match your search." : ""
            });
            return;
        }
        for (const entry of entries) {
            const tile = grid.createDiv("statblock-community-tile");
            tile.setAttr("role", "button");
            tile.setAttr("tabindex", "0");

            const thumb = tile.createDiv("statblock-community-thumb");
            if (entry.preview) {
                thumb.createEl("img", {
                    cls: "statblock-community-thumb-img",
                    attr: {
                        src: this.previewImageSrc(entry.preview),
                        alt: `${entry.name} preview`
                    }
                });
            } else {
                const ph = thumb.createDiv("statblock-community-thumb-ph");
                ph.createEl("span", {
                    cls: "statblock-community-thumb-system",
                    text: entry.system ?? "Statblock"
                });
                ph.createEl("span", {
                    cls: "statblock-community-thumb-hint",
                    text: "Click to preview"
                });
            }

            const meta = tile.createDiv("statblock-community-tile-meta");
            meta.createEl("span", {
                cls: "statblock-community-card-title",
                text: entry.name
            });
            if (entry.system) {
                meta.createEl("span", {
                    cls: "statblock-community-badge",
                    text: entry.system
                });
            }

            const open = () => this.showDetail(entry);
            tile.addEventListener("click", open);
            tile.addEventListener("keydown", (evt: KeyboardEvent) => {
                if (evt.key === "Enter" || evt.key === " ") {
                    evt.preventDefault();
                    open();
                }
            });
        }
    }

    // ---- detail view ----

    private async showDetail(entry: CommunityTemplateEntry) {
        this.teardownPreview();
        this.bodyEl.empty();

        new Setting(this.bodyEl)
            .setClass("statblock-community-detail-bar")
            .addExtraButton((b) =>
                b
                    .setIcon("arrow-left")
                    .setTooltip("Back to gallery")
                    .onClick(() => this.renderGrid())
            )
            .addButton((b) =>
                b
                    .setIcon("download")
                    .setButtonText("Install")
                    .setCta()
                    .onClick(() => this.install(entry, b))
            );

        const head = this.bodyEl.createDiv("statblock-community-detail-head");
        const title = head.createDiv("statblock-community-card-header");
        title.createEl("span", {
            cls: "statblock-community-card-title",
            text: entry.name
        });
        if (entry.system) {
            title.createEl("span", {
                cls: "statblock-community-badge",
                text: entry.system
            });
        }
        if (entry.author) {
            head.createEl("div", {
                cls: "statblock-community-card-author",
                text: `by ${entry.author}`
            });
        }
        if (entry.description) {
            head.createEl("div", {
                cls: "statblock-community-card-desc",
                text: entry.description
            });
        }
        if (entry.tags?.length) {
            const tagEl = head.createDiv("statblock-community-tags");
            for (const tag of entry.tags) {
                tagEl.createEl("span", {
                    cls: "statblock-community-tag",
                    text: tag
                });
            }
        }

        new Setting(head)
            .setClass("no-border-top")
            .setName("Also add example note to my vault")
            .addToggle((t) =>
                t.setValue(this.importExample).onChange((v) => {
                    this.importExample = v;
                })
            );

        if (entry.css || entry.requires?.length) {
            const req = head.createDiv("statblock-community-requires");
            req.createEl("div", {
                cls: "statblock-community-requires-title",
                text: "Requirements"
            });
            const ul = req.createEl("ul");
            if (entry.css) {
                ul.createEl("li", {
                    text: "Ships a CSS snippet — installed and enabled automatically on install."
                });
            }
            for (const r of entry.requires ?? []) {
                ul.createEl("li", { text: r });
            }
            if (entry.homepage) {
                const li = ul.createEl("li");
                li.appendText("More info: ");
                li.createEl("a", {
                    text: entry.homepage,
                    href: entry.homepage
                });
            }
        }

        const previewEl = this.bodyEl.createDiv(
            "statblock-community-preview"
        );
        previewEl.createEl("p", { text: "Loading preview…" });
        try {
            const resolved = await this.resolveEntry(entry);
            const css = entry.css ? await this.manager.getCss(entry) : undefined;
            previewEl.empty();
            this.renderPreview(entry, resolved, css, previewEl);
        } catch (e) {
            previewEl.empty();
            previewEl.createEl("p", {
                cls: "statblock-community-error",
                text: `Could not load preview: ${
                    e instanceof Error ? e.message : String(e)
                }`
            });
        }
    }

    private renderPreview(
        entry: CommunityTemplateEntry,
        resolved: ResolvedTemplate,
        css: string | undefined,
        previewEl: HTMLElement
    ) {
        const monster = resolved.example
            ? this.parseExampleMonster(resolved.example)
            : null;
        const hasJs = layoutHasJavaScript(resolved.layout);

        const doRender = () => {
            if (css) this.injectPreviewCss(css);
            if (monster) {
                this.renderLive(resolved.layout, monster, previewEl);
            } else if (entry.preview) {
                this.renderPreviewImage(entry, previewEl);
            } else {
                this.renderExampleSource(resolved, previewEl);
            }
        };

        if (hasJs) {
            if (entry.preview) {
                this.renderPreviewImage(entry, previewEl);
                return;
            }
            const warn = previewEl.createDiv("statblock-community-jswarn");
            warn.createEl("p", {
                text: "This template contains JavaScript blocks. Rendering a preview will execute its code."
            });
            new ButtonComponent(warn)
                .setButtonText("Render preview anyway")
                .setWarning()
                .onClick(async () => {
                    if (
                        !this.plugin.settings.alwaysImport &&
                        !(await confirmJavaScript(this.plugin))
                    ) {
                        return;
                    }
                    warn.remove();
                    doRender();
                });
            return;
        }
        doRender();
    }

    private renderLive(
        layout: Layout,
        monster: Monster,
        previewEl: HTMLElement
    ) {
        try {
            const target = previewEl.createDiv("statblock-community-render");
            const renderer = new StatBlockRenderer({
                container: target,
                plugin: this.plugin,
                layout,
                monster,
                context: "COMMUNITY_PREVIEW"
            });
            this.renderers.push(renderer);
        } catch (e) {
            previewEl.createEl("p", {
                cls: "statblock-community-error",
                text: `Could not render preview: ${
                    e instanceof Error ? e.message : String(e)
                }`
            });
        }
    }

    private renderPreviewImage(
        entry: CommunityTemplateEntry,
        previewEl: HTMLElement
    ) {
        previewEl.createEl("img", {
            cls: "statblock-community-image",
            attr: {
                src: this.previewImageSrc(entry.preview!),
                alt: `${entry.name} preview`
            }
        });
    }

    private renderExampleSource(
        resolved: ResolvedTemplate,
        previewEl: HTMLElement
    ) {
        if (!resolved.example) {
            previewEl.createEl("p", { text: "No preview available." });
            return;
        }
        previewEl
            .createEl("pre", { cls: "statblock-community-code" })
            .createEl("code", { text: resolved.example });
    }

    // ---- preview css / teardown ----

    private injectPreviewCss(css: string) {
        this.removePreviewCss();
        this.previewStyleEl = document.head.createEl("style", {
            attr: { "data-fs-community-preview": "true" }
        });
        this.previewStyleEl.setText(css);
    }

    private removePreviewCss() {
        this.previewStyleEl?.remove();
        this.previewStyleEl = null;
    }

    private teardownPreview() {
        for (const r of this.renderers) {
            try {
                r.unload();
            } catch (e) {
                /* ignore */
            }
        }
        this.renderers = [];
        this.removePreviewCss();
    }

    // ---- helpers ----

    private previewImageSrc(path: string): string {
        const resolved = this.manager.resolveUrl(path);
        if (/^https?:\/\//i.test(resolved)) return resolved;
        return this.app.vault.adapter.getResourcePath(
            normalizePath(resolved)
        );
    }

    private parseExampleMonster(markdown: string): Monster | null {
        const match = markdown.match(/```statblock\s*\n([\s\S]*?)```/);
        if (!match) return null;
        try {
            const parsed = parseYaml(match[1]);
            if (parsed && typeof parsed === "object") {
                return parsed as Monster;
            }
        } catch (e) {
            /* malformed YAML — no preview */
        }
        return null;
    }

    // ---- install ----

    private async install(
        entry: CommunityTemplateEntry,
        button: ButtonComponent
    ) {
        button.setDisabled(true);
        const original = button.buttonEl.textContent;
        button.setButtonText("Installing…");
        try {
            const resolved = await this.resolveEntry(entry);
            const layout = resolved.layout;

            if (
                layoutHasJavaScript(layout) &&
                !this.plugin.settings.alwaysImport &&
                !(await confirmJavaScript(this.plugin))
            ) {
                button.setButtonText(original ?? "Install");
                button.setDisabled(false);
                return;
            }

            const prepared: Layout = {
                ...layout,
                id: nanoid(),
                name: this.uniqueLayoutName(layout.name)
            };

            this.plugin.settings.layouts.push(prepared);
            this.plugin.manager.addLayout(prepared);

            const messages = [`Installed layout "${prepared.name}".`];

            if (entry.css) {
                try {
                    const snippet = await this.installSnippet(
                        entry,
                        prepared.id
                    );
                    if (snippet) {
                        messages.push(
                            `Installed and enabled CSS snippet "${snippet}".`
                        );
                    }
                } catch (e) {
                    messages.push(
                        `Could not install the CSS snippet: ${
                            e instanceof Error ? e.message : String(e)
                        }`
                    );
                }
            }

            await this.plugin.saveSettings();
            this.installed = true;

            if (this.importExample && resolved.example) {
                const file = await this.writeExampleNote(
                    prepared.name,
                    resolved.example
                );
                if (file) messages.push(`Example note created at ${file.path}.`);
            }

            new Notice(messages.join("\n"));
            button.setButtonText("Installed");
            button.setIcon("check");
        } catch (e) {
            new Notice(
                `Failed to install "${entry.name}": ${
                    e instanceof Error ? e.message : String(e)
                }`
            );
            console.error(e);
            button.setButtonText(original ?? "Install");
            button.setDisabled(false);
        }
    }

    /**
     * Fetch the entry's CSS, write it to the vault snippets folder, enable it,
     * and record it against the layout id for later cleanup.
     * Returns the snippet basename, or null when there was no CSS.
     */
    private async installSnippet(
        entry: CommunityTemplateEntry,
        layoutId: string
    ): Promise<string | null> {
        const css = await this.manager.getCss(entry);
        if (!css) return null;

        const name = snippetNameFor(entry);
        const adapter = this.app.vault.adapter;
        const folder = normalizePath(`${this.app.vault.configDir}/snippets`);
        if (!(await adapter.exists(folder))) {
            await adapter.mkdir(folder);
        }
        await adapter.write(normalizePath(`${folder}/${name}.css`), css);

        try {
            this.app.customCss.requestLoadSnippets();
            this.app.customCss.setCssEnabledStatus(name, true);
        } catch (e) {
            console.error("Could not enable snippet", e);
        }

        const map =
            this.plugin.settings.communityTemplateSnippets ??
            (this.plugin.settings.communityTemplateSnippets = {});
        map[layoutId] = [name];
        return name;
    }

    private uniqueLayoutName(name: string): string {
        const existing = new Set(this.plugin.layouts.map((l) => l.name));
        if (!existing.has(name)) return name;
        let i = 1;
        let candidate = `${name} (${i})`;
        while (existing.has(candidate)) {
            i++;
            candidate = `${name} (${i})`;
        }
        return candidate;
    }

    private async writeExampleNote(
        name: string,
        content: string
    ): Promise<TFile | null> {
        const { vault, workspace } = this.app;
        const folder = DEFAULT_EXAMPLE_FOLDER;
        if (!(vault.getAbstractFileByPath(folder) instanceof TFolder)) {
            try {
                await vault.createFolder(folder);
            } catch (e) {
                /* folder may already exist */
            }
        }
        let path = normalizePath(`${folder}/${name} Example.md`);
        let i = 1;
        while (vault.getAbstractFileByPath(path)) {
            path = normalizePath(`${folder}/${name} Example ${i}.md`);
            i++;
        }
        try {
            const file = await vault.create(path, content);
            await workspace.getLeaf(true).openFile(file);
            return file;
        } catch (e) {
            console.error(e);
            return null;
        }
    }

    private setStatus(text?: string, isError = false) {
        this.statusEl.empty();
        if (!text) {
            this.statusEl.hide();
            return;
        }
        this.statusEl.show();
        this.statusEl.toggleClass("statblock-community-error", isError);
        for (const line of text.split("\n")) {
            this.statusEl.createEl("div", { text: line });
        }
    }
}

/**
 * Confirmation prompt shown before installing or previewing a layout that
 * contains JavaScript blocks (which can execute arbitrary code in the vault).
 */
class ConfirmJavaScriptModal extends Modal {
    confirmed = false;
    constructor(public plugin: StatBlockPlugin) {
        super(plugin.app);
    }
    onOpen() {
        this.titleEl.setText("Are you sure?");
        this.contentEl.createEl("p", {
            text: "This template includes JavaScript blocks. JavaScript blocks can execute code in your vault, which could cause loss or corruption of data."
        });
        this.contentEl.createEl("p", {
            text: "Only use templates from sources you trust. Do you want to continue?"
        });
        new Setting(this.contentEl)
            .setClass("no-border-top")
            .addButton((b) =>
                b
                    .setButtonText("Continue")
                    .setCta()
                    .onClick(() => {
                        this.confirmed = true;
                        this.close();
                    })
            )
            .addExtraButton((b) =>
                b.setIcon("cross").setTooltip("Cancel").onClick(() => {
                    this.close();
                })
            );
    }
}

function confirmJavaScript(plugin: StatBlockPlugin): Promise<boolean> {
    return new Promise((resolve) => {
        const modal = new ConfirmJavaScriptModal(plugin);
        modal.onClose = () => resolve(modal.confirmed);
        modal.open();
    });
}
