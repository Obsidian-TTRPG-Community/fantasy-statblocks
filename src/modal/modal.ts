import { App, Modal } from "obsidian";
import type StatBlockPlugin from "src/main";

export default class FantasyStatblockModal extends Modal {
    constructor(public plugin: StatBlockPlugin) {
        super(plugin.app);
        this.modalEl.addClass("fantasy-statblocks-modal");
        plugin.register(() => this.close());
    }
}
