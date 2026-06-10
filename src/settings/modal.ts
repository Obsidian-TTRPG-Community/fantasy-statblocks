import type { Monster } from "index";
import { Modal, Notice, Platform } from "obsidian";
import type StatBlockPlugin from "src/main";

import EditMonsterApp from "./EditMonster.svelte";
import StatBlockRenderer from "src/view/statblock";
import FantasyStatblockModal from "src/modal/modal";

export class EditMonsterModal extends FantasyStatblockModal {
    private _instance: EditMonsterApp;
    constructor(
        plugin: StatBlockPlugin,
        private monster: Partial<Monster> = {}
    ) {
        super(plugin);
    }

    onOpen() {
        this._instance = new EditMonsterApp({
            target: this.contentEl,
            props: {
                monster: this.monster
            }
        });
        this._instance.$on("cancel", () => {
            this.close();
        });
        this._instance.$on("save", async ({ detail }: { detail: Monster }) => {
            if (!detail.name) {
                new Notice("Creatures must be given a name.");
                return;
            }
            await this.plugin.updateMonster(this.monster as Monster, detail);
            this.close();
        });
    }
    onClose() {}
    close() {
        if (this._instance) this._instance.$destroy();
        super.close();
    }
}

export class ViewMonsterModal extends FantasyStatblockModal {
    constructor(plugin: StatBlockPlugin, private monster: Monster) {
        super(plugin);
    }
    async display() {
        if (!Platform.isMobile) {
            this.contentEl.style.maxWidth = "85vw";
        }
        new StatBlockRenderer({
            container: this.contentEl,
            monster: this.monster,
            plugin: this.plugin
        });
    }
    onOpen() {
        this.display();
    }
}
