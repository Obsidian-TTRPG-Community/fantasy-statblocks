import {
    App,
    ButtonComponent,
    normalizePath,
    Notice,
    PluginSettingTab,
    setIcon,
    Setting,
    TFolder
} from "obsidian";

import type StatBlockPlugin from "src/main";
import LayoutEditor from "./layout/LayoutEditor.svelte";

import fastCopy from "fast-copy";

import { ExpectedValue } from "@javalent/dice-roller";
import { FolderInputSuggest } from "@javalent/utilities";
import type { Monster } from "index";
import BrowseCommunityModal from "src/community/BrowseModal";
import Importer from "src/importers/importer";
import { DefaultLayouts } from "src/layouts";
import { Layout5e } from "src/layouts/basic 5e/basic5e";
import type { DefaultLayout, Layout } from "src/layouts/layout.types";
import { DICE_ROLLER_SOURCE } from "src/main";
import FantasyStatblockModal from "src/modal/modal";
import { nanoid } from "src/util/util";
import { Watcher } from "src/watcher/watcher";
import Creatures from "./creatures/Creatures.svelte";
import { EditMonsterModal } from "./modal";

export default class StatblockSettingTab extends PluginSettingTab {
    importer: Importer;
    results: Partial<Monster>[] = [];
    filter!: Setting;
    $UI!: Creatures;
    constructor(app: App, private plugin: StatBlockPlugin) {
        super(app, plugin);
        this.importer = new Importer(this.plugin);
    }

    async display(): Promise<void> {
        try {
            let { containerEl } = this;

            containerEl.empty();

            containerEl.addClass("statblock-settings");

            containerEl.createEl("h2", { text: "Fantasy Statblocks Settings" });

            this.generateTopSettings(containerEl.createDiv());
            this.generateParseSettings(containerEl.createDiv());
            this.generateAdvancedSettings(containerEl.createDiv());

            this.generateLayouts(containerEl.createDiv());

            this.generateImports(containerEl.createDiv());

            this.generateMonsters(containerEl.createDiv());

            const div = containerEl.createDiv("coffee");
            div.createEl("a", {
                href: "https://www.buymeacoffee.com/valentine195"
            }).createEl("img", {
                attr: {
                    src: "https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=☕&slug=valentine195&button_colour=e3e7ef&font_colour=262626&font_family=Inter&outline_colour=262626&coffee_colour=ff0000"
                }
            });
        } catch (e) {
            console.error(e);
            new Notice(
                "There was an error displaying the settings tab for 5e Statblocks."
            );
        }
    }
    generateAdvancedSettings(container: HTMLDivElement) {
        container.empty();
        new Setting(container).setHeading().setName("Advanced Settings");

        new Setting(container)
            .setName("Try to Save Data Atomically")
            .setDesc(
                createFragment((e) => {
                    e.createSpan({
                        text: "This will cause to plugin to save data to a temporary file before saving the actual data file in an attempt to prevent data loss."
                    });
                    e.createEl("br");
                    e.createSpan({
                        text: "This can cause issues sometimes when using sync services."
                    });
                    e.createEl("br");
                    const warning = e.createDiv();
                    setIcon(warning.createDiv(), "warning");
                    warning.createSpan({
                        attr: {
                            style: "color: var(--text-error)"
                        },
                        text: "This setting is currently disabled."
                    });
                })
            )
            .addToggle((t) =>
                t
                    .setValue(this.plugin.settings.atomicWrite)
                    .onChange(async (v) => {
                        this.plugin.settings.atomicWrite = v;
                        await this.plugin.saveSettings();
                    })
            );
    }

    generateTopSettings(container: HTMLDivElement) {
        container.empty();
        new Setting(container).setHeading().setName("General Settings");
        /* new Setting(container)
            .setName("Enable Export to PNG")
            .setDesc(
                createFragment((e) => {
                    e.createSpan({
                        text: 'Add "Export to PNG" button by default. Use '
                    });
                    e.createEl("code", { text: "export: false" });
                    e.createSpan({
                        text: " to disable per-statblock."
                    });
                })
            )
            .setDisabled(!this.plugin.diceRollerInstalled)
            .addToggle((t) =>
                t.setValue(this.plugin.settings.useDice).onChange(async (v) => {
                    this.plugin.settings.useDice = v;
                    await this.plugin.saveSettings();
                })
            ); */
        new Setting(container)
            .setName("Integrate Dice Roller")
            .setDesc(
                createFragment((e) => {
                    if (this.plugin.diceRollerInstalled) {
                        e.createSpan({
                            text: "Add Dice Roller dice to statblocks by default. Use "
                        });
                        e.createEl("code", { text: "dice: false" });
                        e.createSpan({
                            text: " to disable per-statblock."
                        });
                    } else {
                        e.createSpan({
                            text: "This setting is only usable with the Dice Roller plugin enabled."
                        });
                    }
                })
            )
            .setDisabled(!this.plugin.diceRollerInstalled)
            .addToggle((t) =>
                t.setValue(this.plugin.settings.useDice).onChange(async (v) => {
                    this.plugin.settings.useDice = v;
                    await this.plugin.saveSettings();
                })
            );
        new Setting(container)
            .setName("Render Dice Rolls")
            .setDesc(
                createFragment((e) => {
                    if (this.plugin.diceRollerInstalled) {
                        e.createSpan({
                            text: "Roll graphical dice inside statblocks by default. Use "
                        });
                        e.createEl("code", { text: "render: false" });
                        e.createSpan({
                            text: " to disable per-statblock."
                        });
                    } else {
                        e.createSpan({
                            text: "This setting is only usable with the Dice Roller plugin enabled."
                        });
                    }
                })
            )
            .setDisabled(!this.plugin.diceRollerInstalled)
            .addToggle((t) =>
                t
                    .setValue(this.plugin.settings.renderDice)
                    .onChange(async (v) => {
                        this.plugin.settings.renderDice = v;
                        if (this.plugin.diceRollerInstalled) {
                            window.DiceRoller.registerSource(
                                DICE_ROLLER_SOURCE,
                                {
                                    showDice: true,
                                    shouldRender:
                                        this.plugin.settings.renderDice,
                                    showFormula: false,
                                    showParens: false,
                                    expectedValue: ExpectedValue.Average
                                }
                            );
                        }
                        await this.plugin.saveSettings();
                    })
            );
        new Setting(container)
            .setName("Try to Render Wikilinks")
            .setDesc(
                createFragment((e) => {
                    e.createSpan({
                        text: "The plugin will attempt to detect wikilinks inside Statblocks."
                    });
                    e.createEl("br");
                    e.createEl("strong", {
                        text: "Please note: these links will not be added to the graph."
                    });
                })
            )
            .addToggle((t) =>
                t
                    .setValue(this.plugin.settings.tryToRenderLinks)
                    .onChange(async (v) => {
                        this.plugin.settings.tryToRenderLinks = v;
                        await this.plugin.saveSettings();
                    })
            );
        new Setting(container)
            .setName("Enable 5e SRD")
            .setDesc(
                createFragment((e) => {
                    e.createSpan({
                        text: "Use the Dungeons & Dragons 5th Edition System Reference Document monsters."
                    });
                })
            )
            .addToggle((t) =>
                t
                    .setValue(!this.plugin.settings.disableSRD)
                    .onChange(async (v) => {
                        this.plugin.settings.disableSRD = !v;
                        await this.plugin.saveSettings();
                        this.plugin.app.workspace.trigger(
                            "fantasy-statblocks:srd-change",
                            v
                        );
                    })
            );
    }
    generateParseSettings(containerEl: HTMLDivElement) {
        containerEl.empty();
        const additionalContainer = containerEl.createDiv(
            "statblock-additional-container"
        );
        new Setting(additionalContainer).setHeading().setName("Note Parsing");
        new Setting(additionalContainer)
            .setName("Automatically Parse Frontmatter for Creatures")
            .setDesc(
                createFragment((e) => {
                    e.createSpan({
                        text: "The plugin will watch the vault for creatures defined in note frontmatter."
                    });
                    e.createEl("br");
                    e.createEl("br");
                    e.createSpan({
                        text: `The "Parse Frontmatter for Creatures" command can also be used.`
                    });
                })
            )
            .addToggle((t) => {
                t.setValue(this.plugin.settings.autoParse).onChange(
                    async (v) => {
                        this.plugin.settings.autoParse = v;
                        if (v) {
                            Watcher.start();
                        }
                        await this.plugin.saveSettings();
                    }
                );
            });
        new Setting(additionalContainer)
            .setName("Enable Debug Messages")
            .setDesc(
                createFragment((e) => {
                    e.createSpan({
                        text: "Debug messages will be displayed by the file parser."
                    });
                })
            )
            .addToggle((t) =>
                t.setValue(this.plugin.settings.debug).onChange(async (v) => {
                    this.plugin.settings.debug = v;
                    Watcher.setDebug();
                    await this.plugin.saveSettings();
                })
            );
        let path: string;
        new Setting(additionalContainer)
            .setName("Bestiary Folder")
            .setDesc(
                "The plugin will only parse notes inside these folders and their children."
            )
            .addText(async (text) => {
                let folders = this.app.vault
                    .getAllLoadedFiles()
                    .filter(
                        (f) =>
                            f instanceof TFolder &&
                            !this.plugin.settings.paths.includes(f.path)
                    );

                text.setPlaceholder("/");
                const modal = new FolderInputSuggest(this.app, text, [
                    ...(folders as TFolder[])
                ]);

                modal.onSelect(async ({ item }) => {
                    path = normalizePath(item.path);
                    text.setValue(item.path);
                });

                text.inputEl.onblur = async () => {
                    const v = text.inputEl.value?.trim()
                        ? text.inputEl.value.trim()
                        : "/";
                    path = normalizePath(v);
                };
            })
            .addExtraButton((b) => {
                b.setIcon("plus-with-circle").onClick(async () => {
                    if (!path || !path.length) return;
                    this.plugin.settings.paths.push(normalizePath(path));
                    await this.plugin.saveSettings();
                    await Watcher.reparseVault();
                    await this.generateParseSettings(containerEl);
                });
            });

        const paths = additionalContainer.createDiv("additional");
        for (const path of this.plugin.settings.paths) {
            new Setting(paths).setName(path).addExtraButton((b) =>
                b.setIcon("trash").onClick(async () => {
                    this.plugin.settings.paths =
                        this.plugin.settings.paths.filter((p) => p != path);

                    await this.plugin.saveSettings();
                    await Watcher.reparseVault();
                    await this.generateParseSettings(containerEl);
                })
            );
        }
    }
    generateLayouts(containerEl: HTMLDivElement) {
        containerEl.empty();
        new Setting(containerEl).setHeading().setName("Layouts");

        const statblockCreatorContainer = containerEl.createDiv(
            "statblock-additional-container"
        );
        statblockCreatorContainer
            .createDiv("setting-item")
            .createDiv()
            .appendChild(
                createFragment((el) => {
                    el.createSpan({
                        text: "New statblock layouts can be created and managed here. A specific layout can be used for a creature using the "
                    });
                    el.createEl("code", { text: "layout" });
                    el.createSpan({ text: " parameter." });
                })
            );
        const importFile = new Setting(statblockCreatorContainer)
            .setName("Import From JSON")
            .setDesc("Import a custom layout from a JSON file.");
        const inputFile = createEl("input", {
            attr: {
                type: "file",
                name: "layout",
                accept: ".json",
                multiple: true
            }
        });
        inputFile.onchange = async () => {
            const { files } = inputFile;
            if (!files?.length) return;
            try {
                const { files } = inputFile;
                if (!files?.length) return;
                for (const file of Array.from(files)) {
                    await new Promise<void>((resolve, reject) => {
                        const reader = new FileReader();

                        reader.onload = async (event) => {
                            try {
                                const layout: Layout = JSON.parse(
                                    event.target?.result as string
                                );
                                if (!layout) {
                                    reject(
                                        new Error("Invalid layout imported")
                                    );
                                    return;
                                }
                                if (!layout?.name) {
                                    reject(
                                        new Error(
                                            "Invalid layout imported: layout does not have a name"
                                        )
                                    );
                                    return;
                                }

                                if (!layout?.blocks) {
                                    reject(
                                        new Error(
                                            "Invalid layout imported: no blocks defined in layout."
                                        )
                                    );
                                    return;
                                }
                                if (!layout.diceParsing) {
                                    layout.diceParsing = [];
                                }

                                layout.id = nanoid();

                                if (
                                    !this.plugin.settings.alwaysImport &&
                                    layout.blocks.find(
                                        (b) => b.type == "javascript"
                                    ) &&
                                    !(await confirm(this.plugin))
                                ) {
                                    resolve();
                                }
                                this.plugin.settings.layouts.push(
                                    this.getDuplicate(layout)
                                );
                                resolve();
                            } catch (e) {
                                reject(e);
                            }
                        };
                        reader.readAsText(file);
                    }).catch((e) => {
                        new Notice(
                            `There was an error importing the layout: \n\n${e}`
                        );
                        console.error(e);
                    });
                }
                await this.plugin.saveSettings();
                inputFile.value = "";
                this.buildCustomLayouts(layoutContainer, containerEl);
            } catch (e) {}
        };

        importFile.addButton((b) => {
            b.setIcon("upload");
            b.buttonEl.addClass("statblock-file-upload");
            b.buttonEl.appendChild(inputFile);
            b.onClick(() => inputFile.click());
        });
        new Setting(statblockCreatorContainer)
            .setName("Add New Layout")
            .addButton((b) =>
                b
                    .setIcon("plus-with-circle")
                    .setTooltip("Add New Layout")
                    .onClick(() => {
                        const modal = new CreateStatblockModal(this.plugin);
                        modal.onClose = async () => {
                            if (!modal.saved) return;
                            const l = this.getDuplicate(modal.layout);
                            this.plugin.settings.layouts.push(l);
                            this.plugin.manager.addLayout(l);
                            await this.plugin.saveSettings();
                            this.buildCustomLayouts(
                                layoutContainer,
                                containerEl
                            );
                        };
                        modal.open();
                    })
            );

        new Setting(statblockCreatorContainer)
            .setName("Browse Community Templates")
            .setDesc(
                "Discover and install statblock layouts shared by the community, complete with example notes showing the expected in-note format."
            )
            .addButton((b) =>
                b
                    .setIcon("globe")
                    .setTooltip("Browse Community Templates")
                    .onClick(() => {
                        const modal = new BrowseCommunityModal(
                            this.plugin,
                            () => this.generateLayouts(containerEl)
                        );
                        modal.open();
                    })
            );

        const statblockAdditional =
            statblockCreatorContainer.createDiv("additional");
        new Setting(statblockAdditional)
            .setName("Default Layout")
            .setDesc(
                "Change the default statblock layout used, if not specified."
            )
            .addDropdown(async (d) => {
                for (const layout of this.plugin.manager.getAllLayouts()) {
                    d.addOption(layout.id, layout.name);
                }

                if (
                    !this.plugin.settings.default ||
                    !this.plugin.manager
                        .getAllLayouts()
                        .find(({ id }) => id == this.plugin.settings.default)
                ) {
                    this.plugin.settings.default = Layout5e.id;
                    await this.plugin.saveSettings();
                }

                d.setValue(this.plugin.settings.default ?? Layout5e.id);

                d.onChange(async (v) => {
                    this.plugin.settings.default = v;
                    this.plugin.manager.setDefaultLayout(v);
                    await this.plugin.saveSettings();
                });
            });
        new Setting(statblockAdditional)
            .setName("Show Advanced Options")
            .setDesc("Show advanced options when editing layout blocks.")
            .addToggle((t) =>
                t
                    .setValue(this.plugin.settings.showAdvanced)
                    .onChange(async (v) => {
                        this.plugin.settings.showAdvanced = v;
                        await this.plugin.saveSettings();
                    })
            );

        const layoutContainer =
            statblockCreatorContainer.createDiv("additional");

        this.buildCustomLayouts(layoutContainer, containerEl);
    }
    getDuplicate(layout: Layout): Layout {
        if (
            !this.plugin.manager
                .getAllLayouts()
                .find((l) => l.name == layout.name)
        )
            return layout;
        const names = this.plugin.manager
            .getSortedLayoutNames()
            .filter((name) => name.contains(`${layout.name} Copy`));

        let temp = `${layout.name} Copy`;

        let name = temp;
        let index = 1;
        while (names.includes(name)) {
            name = `${temp} (${index})`;
            index++;
        }
        return {
            blocks: fastCopy(layout.blocks),
            name,
            id: nanoid()
        };
    }
    /**
     * When a community layout that installed CSS is removed, disable its
     * snippet(s) and drop the tracking entry. The snippet file is left in the
     * snippets folder (non-destructive) so the user can re-enable or delete it.
     */
    disableCommunitySnippetsFor(layoutId: string) {
        const map = this.plugin.settings.communityTemplateSnippets;
        const names = map?.[layoutId];
        if (!map || !names || !names.length) return;
        for (const name of names) {
            try {
                if (this.app.customCss.enabledSnippets?.has(name)) {
                    this.app.customCss.setCssEnabledStatus(name, false);
                }
            } catch (e) {
                /* ignore */
            }
        }
        delete map[layoutId];
        new Notice(
            `Disabled CSS snippet(s) for this layout: ${names.join(
                ", "
            )}. The file(s) remain in your snippets folder.`
        );
    }
    buildCustomLayouts(
        layoutContainer: HTMLDivElement,
        outerContainer: HTMLDivElement
    ) {
        layoutContainer.empty();

        if (this.plugin.manager.getAllDefaultLayouts().some((f) => f.removed)) {
            new Setting(layoutContainer)
                .setName("Restore Default Layouts")
                .addButton((b) => {
                    b.setIcon("rotate-ccw").onClick(async () => {
                        for (const layout of Object.values(
                            this.plugin.settings.defaultLayouts
                        )) {
                            layout.removed = false;
                            if (!layout.edited) {
                                delete this.plugin.settings.defaultLayouts[
                                    layout.id
                                ];
                            }
                        }
                        await this.plugin.saveSettings();
                        this.generateLayouts(outerContainer);
                    });
                });
        }
        for (const layout of this.plugin.manager.getAllDefaultLayouts()) {
            if (layout.removed) continue;

            const setting = new Setting(layoutContainer)
                .setName(layout.name)
                .addExtraButton((b) => {
                    b.setIcon("pencil")
                        .setTooltip("Edit")
                        .onClick(() => {
                            const modal = new CreateStatblockModal(
                                this.plugin,
                                layout
                            );
                            modal.onClose = async () => {
                                if (!modal.saved) return;

                                (modal.layout as DefaultLayout).edited = true;
                                this.plugin.settings.defaultLayouts[layout.id] =
                                    modal.layout;

                                await this.plugin.saveSettings();
                                this.plugin.manager.updateDefaultLayout(
                                    layout.id,
                                    modal.layout
                                );
                                this.generateLayouts(outerContainer);
                            };
                            modal.open();
                        });
                });
            if (layout.edited) {
                setting.addExtraButton((b) =>
                    b.setIcon("undo").onClick(async () => {
                        const defLayout = DefaultLayouts.find(
                            ({ id }) => id == layout.id
                        )!;
                        delete this.plugin.settings.defaultLayouts[layout.id];
                        await this.plugin.saveSettings();
                        this.plugin.manager.updateDefaultLayout(
                            layout.id,
                            defLayout
                        );
                        this.generateLayouts(outerContainer);
                    })
                );
            }

            setting
                .addExtraButton((b) => {
                    b.setIcon("duplicate-glyph")
                        .setTooltip("Create Copy")
                        .onClick(async () => {
                            const dupe = this.getDuplicate(layout);
                            this.plugin.settings.layouts.push(dupe);
                            await this.plugin.saveSettings();
                            this.plugin.manager.addLayout(dupe);

                            this.buildCustomLayouts(
                                layoutContainer,
                                outerContainer
                            );
                        });
                })
                .addExtraButton((b) => {
                    b.setIcon("import-glyph")
                        .setTooltip("Export as JSON")
                        .onClick(() => {
                            const link = createEl("a");
                            const file = new Blob([JSON.stringify(layout)], {
                                type: "json"
                            });
                            const url = URL.createObjectURL(file);
                            link.href = url;
                            link.download = `${layout.name}.json`;
                            link.click();
                            URL.revokeObjectURL(url);
                        });
                })
                .addExtraButton((b) => {
                    b.setIcon("trash")
                        .setTooltip("Delete")
                        .onClick(async () => {
                            layout.removed = true;
                            this.plugin.settings.defaultLayouts[layout.id] =
                                layout;
                            await this.plugin.saveSettings();
                            this.generateLayouts(outerContainer);
                        });
                });
        }
        for (const layout of this.plugin.settings.layouts) {
            new Setting(layoutContainer)
                .setName(layout.name)
                .addExtraButton((b) => {
                    b.setIcon("pencil")
                        .setTooltip("Edit")
                        .onClick(() => {
                            const modal = new CreateStatblockModal(
                                this.plugin,
                                layout
                            );
                            modal.onClose = async () => {
                                if (!modal.saved) return;
                                if (
                                    DefaultLayouts.find(
                                        ({ id }) => id == layout.id
                                    )
                                ) {
                                    (modal.layout as DefaultLayout).edited =
                                        true;
                                }
                                this.plugin.settings.layouts.splice(
                                    this.plugin.settings.layouts.indexOf(
                                        layout
                                    ),
                                    1,
                                    modal.layout
                                );

                                await this.plugin.saveSettings();
                                this.plugin.manager.updateLayout(
                                    layout.id,
                                    modal.layout
                                );
                                this.generateLayouts(outerContainer);
                            };
                            modal.open();
                        });
                })
                .addExtraButton((b) => {
                    b.setIcon("duplicate-glyph")
                        .setTooltip("Create Copy")
                        .onClick(async () => {
                            const dupe = this.getDuplicate(layout);
                            this.plugin.settings.layouts.push(dupe);
                            await this.plugin.saveSettings();
                            this.plugin.manager.addLayout(dupe);
                            this.buildCustomLayouts(
                                layoutContainer,
                                outerContainer
                            );
                        });
                })
                .addExtraButton((b) => {
                    b.setIcon("import-glyph")
                        .setTooltip("Export as JSON")
                        .onClick(() => {
                            const link = createEl("a");
                            const file = new Blob([JSON.stringify(layout)], {
                                type: "json"
                            });
                            const url = URL.createObjectURL(file);
                            link.href = url;
                            link.download = `${layout.name}.json`;
                            link.click();
                            URL.revokeObjectURL(url);
                        });
                })
                .addExtraButton((b) => {
                    b.setIcon("trash")
                        .setTooltip("Delete")
                        .onClick(async () => {
                            this.disableCommunitySnippetsFor(layout.id);
                            this.plugin.settings.layouts =
                                this.plugin.settings.layouts.filter(
                                    (l) => l.id !== layout.id
                                );
                            await this.plugin.saveSettings();
                            this.plugin.manager.removeLayout(layout.id);

                            this.generateLayouts(outerContainer);
                        });
                });
        }
    }

    generateImports(containerEl: HTMLDivElement) {
        containerEl.empty();
        new Setting(containerEl)
            .setHeading()
            .setName("Import Homebrew Creatures");
        const importSettingsContainer = containerEl.createDiv(
            "statblock-additional-container"
        );

        new Setting(importSettingsContainer).setDesc(
            "Import creatures from creature files. Monsters are stored by name, so only the last creature by that name will be saved. This is destructive - any saved creature will be overwritten."
        );

        const importAdditional =
            importSettingsContainer.createDiv("additional");
        const importAppFile = new Setting(importAdditional)
            .setName("Import DnDAppFile")
            .setDesc("Only import content that you own.");
        const inputAppFile = createEl("input", {
            attr: {
                type: "file",
                name: "dndappfile",
                accept: ".xml",
                multiple: true
            }
        });

        inputAppFile.onchange = async () => {
            const { files } = inputAppFile;
            if (!files?.length) return;
            try {
                const { files } = inputAppFile;
                if (!files?.length) return;
                const monsters = await this.importer.import(files, "appfile");
                if (monsters && monsters.length) {
                    await this.plugin.saveMonsters(monsters);
                }
                this.display();
            } catch (e) {}
        };

        importAppFile.addButton((b) => {
            b.setButtonText("Choose File(s)").setTooltip(
                "Import DnDAppFile Data"
            );
            b.buttonEl.addClass("statblock-file-upload");
            b.buttonEl.appendChild(inputAppFile);
            b.onClick(() => inputAppFile.click());
        });

        const importImprovedInitiative = new Setting(importAdditional)
            .setName("Import Improved Initiative Data")
            .setDesc("Only import content that you own.");
        const inputImprovedInitiative = createEl("input", {
            attr: {
                type: "file",
                name: "improvedinitiative",
                accept: ".json",
                multiple: true
            }
        });

        inputImprovedInitiative.onchange = async () => {
            const { files } = inputImprovedInitiative;
            if (!files?.length) return;
            try {
                const { files } = inputImprovedInitiative;
                if (!files?.length) return;
                const monsters = await this.importer.import(files, "improved");
                if (monsters && monsters.length) {
                    await this.plugin.saveMonsters(monsters);
                }
                this.display();
            } catch (e) {}
        };

        importImprovedInitiative.addButton((b) => {
            b.setButtonText("Choose File(s)").setTooltip(
                "Import Improved Initiative Data"
            );
            b.buttonEl.addClass("statblock-file-upload");
            b.buttonEl.appendChild(inputImprovedInitiative);
            b.onClick(() => inputImprovedInitiative.click());
        });

        const importCritterDB = new Setting(importAdditional)
            .setName("Import CritterDB Data")
            .setDesc("Only import content that you own.");
        const inputCritterDB = createEl("input", {
            attr: {
                type: "file",
                name: "critterdb",
                accept: ".json",
                multiple: true
            }
        });

        inputCritterDB.onchange = async () => {
            const { files } = inputCritterDB;
            if (!files?.length) return;
            try {
                const { files } = inputCritterDB;
                if (!files?.length) return;
                const monsters = await this.importer.import(files, "critter");
                if (monsters && monsters.length) {
                    await this.plugin.saveMonsters(monsters);
                }
                this.display();
            } catch (e) {}
        };

        importCritterDB.addButton((b) => {
            b.setButtonText("Choose File(s)").setTooltip(
                "Import CritterDB Data"
            );
            b.buttonEl.addClass("statblock-file-upload");
            b.buttonEl.appendChild(inputCritterDB);
            b.onClick(() => inputCritterDB.click());
        });

        const import5eTools = new Setting(importAdditional)
            .setName("Import 5e.tools Data")
            .setDesc("Only import content that you own.");
        const input5eTools = createEl("input", {
            attr: {
                type: "file",
                name: "fivetools",
                accept: ".json",
                multiple: true
            }
        });

        input5eTools.onchange = async () => {
            const { files } = input5eTools;
            if (!files?.length) return;
            const monsters = await this.importer.import(files, "5e");
            if (monsters && monsters.length) {
                await this.plugin.saveMonsters(monsters);
            }
            this.display();
        };

        import5eTools.addButton((b) => {
            b.setButtonText("Choose File(s)").setTooltip(
                "Import 5e.tools Data"
            );
            b.buttonEl.addClass("statblock-file-upload");
            b.buttonEl.appendChild(input5eTools);
            b.onClick(() => input5eTools.click());
        });
        const importTetra = new Setting(importAdditional)
            .setName("Import TetraCube Data")
            .setDesc("Only import content that you own.");
        const inputTetra = createEl("input", {
            attr: {
                type: "file",
                name: "tetra",
                accept: ".json, .monster",
                multiple: true
            }
        });
        inputTetra.onchange = async () => {
            const { files } = inputTetra;
            if (!files?.length) return;
            const monsters = await this.importer.import(files, "tetra");
            if (monsters && monsters.length) {
                await this.plugin.saveMonsters(monsters);
            }
            this.display();
        };
        importTetra.addButton((b) => {
            b.setButtonText("Choose File(s)").setTooltip(
                "Import TetraCube Data"
            );
            b.buttonEl.addClass("statblock-file-upload");
            b.buttonEl.appendChild(inputTetra);
            b.onClick(() => inputTetra.click());
        });
        const importPF2EMonsterTools = new Setting(importAdditional)
            .setName("Import PF2eMonsterTools Data")
            .setDesc("Only import content that you own.");
        const inputPF2EMonsterTools = createEl("input", {
            attr: {
                type: "file",
                name: "PF2eMonsterTool",
                accept: ".json, .monster",
                multiple: true
            }
        });
        inputPF2EMonsterTools.onchange = async () => {
            const { files } = inputPF2EMonsterTools;
            if (!files?.length) return;
            const monsters = await this.importer.import(files, "PF2eMonsterTool");
            if (monsters && monsters.length) {
                await this.plugin.saveMonsters(monsters);
            }
            this.display();
        };
        importPF2EMonsterTools.addButton((b) => {
            b.setButtonText("Choose File(s)").setTooltip(
                "Import PF2EMonsterTools Data"
            );
            b.buttonEl.addClass("statblock-file-upload");
            b.buttonEl.appendChild(inputPF2EMonsterTools);
            b.onClick(() => inputPF2EMonsterTools.click());
        });
        // import Pathbuilder
        const importPathbuilder = new Setting(importAdditional)
            .setName("Import Pathbuilder Data")
            .setDesc("Import a PC or NPC exported from Pathbuilder2e.");
        const inputPathbuilder = createEl("input", {
            attr: {
                type: "file",
                name: "pathbuilder",
                accept: ".json",
                multiple: true
            }
        });
        inputPathbuilder.onchange = async () => {
            const { files } = inputPathbuilder;
            if (!files.length) return;
            const monsters = await this.importer.import(files, "pathbuilder");
            if (monsters && monsters.length) {
                await this.plugin.saveMonsters(monsters);
            }
            this.display();
        };
        importPathbuilder.addButton((b) => {
            b.setButtonText("Choose File(s)").setTooltip(
                "Import Pathbuilder Data"
            );
            b.buttonEl.addClass("statblock-file-upload");
            b.buttonEl.appendChild(inputPathbuilder);
            b.onClick(() => inputPathbuilder.click());
        });



        const importGeneric = new Setting(importAdditional)
            .setName("Import Generic Data")
            .setDesc(
                createFragment((e) => {
                    e.createSpan({
                        text: "Import generic JSON files. JSON objects will be imported "
                    });
                    e.createEl("strong", { text: "as-is" });
                    e.createSpan({ text: " and all objects must have the " });
                    e.createEl("code", { text: "name" });
                    e.createSpan({ text: " property." });
                })
            );
        const inputGeneric = createEl("input", {
            attr: {
                type: "file",
                name: "generic",
                accept: ".json, .monster",
                multiple: true
            }
        });
        inputGeneric.onchange = async () => {
            const { files } = inputGeneric;
            if (!files?.length) return;
            const monsters = await this.importer.import(files, "generic");
            if (monsters && monsters.length) {
                await this.plugin.saveMonsters(monsters);
            }
            this.display();
        };
        importGeneric.addButton((b) => {
            b.setButtonText("Choose File(s)").setTooltip("Import Generic Data");
            b.buttonEl.addClass("statblock-file-upload");
            b.buttonEl.appendChild(inputGeneric);
            b.onClick(() => inputGeneric.click());
        });
    }
    generateMonsters(containerEl: HTMLDivElement) {
        containerEl.empty();
        new Setting(containerEl).setHeading().setName("Bestiary");
        const additionalContainer = containerEl.createDiv(
            "statblock-additional-container statblock-monsters"
        );
        new Setting(additionalContainer)
            .setName("Add Creature")
            .addButton((b) => {
                b.setIcon("plus-with-circle").onClick(() => {
                    const modal = new EditMonsterModal(this.plugin);
                    modal.onClose = () => {
                        this.generateMonsters(containerEl);
                    };
                    modal.open();
                });
            });

        const ancestor = this.containerEl.closest(".statblock-settings")!;
        const { backgroundColor, paddingTop } = getComputedStyle(ancestor);

        this.$UI = new Creatures({
            target: additionalContainer,
            props: {
                plugin: this.plugin,
                backgroundColor,
                paddingTop
            }
        });
    }
    override hide() {
        this.$UI.$destroy();
    }
}

class CreateStatblockModal extends FantasyStatblockModal {
    creator!: LayoutEditor;
    layout: Layout;
    saved: boolean = false;
    constructor(
        public plugin: StatBlockPlugin,
        layout: Layout = {
            name: "Layout",
            blocks: [],
            id: nanoid()
        }
    ) {
        super(plugin);
        this.layout = fastCopy(layout);
        this.modalEl.addClasses(["mod-sidebar-layout", "mod-settings"]);
        this.contentEl.addClass("vertical-tabs-container");
    }

    onOpen() {
        this.display();
    }

    display() {
        this.titleEl.createSpan({ text: "Create Layout" });
        this.creator = new LayoutEditor({
            target: this.contentEl,
            props: {
                layout: this.layout,
                plugin: this.plugin
            }
        });

        this.creator.$on("saved", () => {
            this.saved = true;
            this.close();
        });
        this.creator.$on("cancel", () => {
            this.close();
        });
    }
}

class ConfirmModal extends FantasyStatblockModal {
    saved: boolean = false;
    constructor(public filtered: number, plugin: StatBlockPlugin) {
        super(plugin);
    }
    onOpen() {
        this.titleEl.setText("Are you sure?");
        this.contentEl.createEl("p", {
            text: `This will delete ${this.filtered} creatures. This cannot be undone.`
        });
        new Setting(this.contentEl)
            .setClass("no-border-top")
            .addButton((b) => {
                b.setIcon("checkmark")
                    .setCta()
                    .onClick(() => {
                        this.saved = true;
                        this.close();
                    });
            })
            .addExtraButton((b) =>
                b.setIcon("cross").onClick(() => {
                    this.close();
                })
            );
    }
}
async function confirm(plugin: StatBlockPlugin): Promise<boolean> {
    return new Promise((resolve, reject) => {
        try {
            const modal = new ConfirmImport(plugin);
            modal.onClose = () => {
                resolve(modal.confirmed);
            };
            modal.open();
        } catch (e) {
            reject();
        }
    });
}
class ConfirmImport extends FantasyStatblockModal {
    confirmed: boolean = false;
    constructor(public plugin: StatBlockPlugin) {
        super(plugin);
    }
    async display() {
        this.contentEl.empty();
        this.contentEl.addClass("confirm-modal");
        this.contentEl.createEl("p", {
            text: "This Layout includes JavaScript blocks. JavaScript blocks can execute code in your vault, which could cause loss or corruption of data."
        });
        this.contentEl.createEl("p", {
            text: "Are you sure you want to import this layout?"
        });

        const buttonContainerEl = this.contentEl.createDiv(
            "confirm-buttons-container"
        );
        buttonContainerEl.createEl("a").createEl("small", {
            cls: "dont-ask",
            text: "Import and don't ask again"
        }).onclick = async () => {
            this.confirmed = true;
            this.plugin.settings.alwaysImport = true;
            this.close();
        };

        const buttonEl = buttonContainerEl.createDiv("confirm-buttons");
        new ButtonComponent(buttonEl)
            .setButtonText("Import")
            .setCta()
            .onClick(() => {
                this.confirmed = true;
                this.close();
            });
        buttonEl.createEl("a").createEl("small", {
            cls: "dont-ask",
            text: "Cancel"
        }).onclick = () => {
            this.close();
        };
    }
    onOpen() {
        this.display();
    }
}
