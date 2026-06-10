import type { EditorView } from "@codemirror/view";
import { Component, MarkdownRenderer, Setting } from "obsidian";
import type StatBlockPlugin from "src/main";
import FantasyStatblockModal from "src/modal/modal";
import { buildTextArea } from "src/util";
import { nanoid } from "src/util/util";
import type { DiceParsing } from "src/layouts/layout.types";

export default class DiceParsingModal extends FantasyStatblockModal {
    editing: boolean;
    item: DiceParsing = {
        regex: "",
        parser: "",
        id: nanoid()
    };
    //save on exit unless cancelled
    saved: boolean = true;
    constructor(plugin: StatBlockPlugin, item?: DiceParsing) {
        super(plugin);
        if (!item) {
            this.editing = false;
        } else {
            this.editing = true;
            this.item = { ...item };
        }
    }

    onOpen(): void {
        this.titleEl.setText(
            this.editing ? `Editing Dice Parser` : "New Dice Parser"
        );
        this.display();
    }

    regex: EditorView;
    parser: EditorView;
    async display() {
        this.contentEl.empty();
        new Setting(this.contentEl)
            .setName("Example")
            .setDesc("Add an example, for reference only.")
            .addText((t) => {
                t.setValue(this.item.desc).onChange(
                    (v) => (this.item.desc = v)
                );
            });
        this.buildRegEx(this.contentEl.createDiv());

        this.buildParser(this.contentEl.createDiv());

        this.buildTester(this.contentEl.createDiv());

        new Setting(this.contentEl).addExtraButton((b) =>
            b
                .setIcon("cross")
                .setTooltip("Cancel")
                .onClick(() => {
                    this.saved = false;
                    this.close();
                })
        );
    }
    private buildTester(containerEl: HTMLDivElement) {
        containerEl.empty();
    }

    private buildRegEx(containerEl: HTMLElement) {
        containerEl.empty();
        new Setting(containerEl)
            .setHeading()
            .setName("Regular Expression")
            .setDesc("");

        this.regex = buildTextArea(
            containerEl,
            this.item.regex,
            ["statblock-textarea-x-small"],
            (value) => {
                this.item.regex = value;
            }
        );
    }
    getCallbackDescription() {
        return createFragment((e) => {
            e.createSpan({
                text: "The dice parser callback needs to parse the results of the regular expression and return the correct dice string to display."
            });
            e.createEl("br");
            e.createEl("br");
            e.createSpan({
                text: "The callback will have the "
            });
            e.createEl("code", { text: "original" });
            e.createSpan({ text: " (the matched text), " });
            e.createEl("code", { text: "matches" });
            e.createSpan({
                text: " (the RegExpMatchArray), and "
            });

            e.createEl("code", { text: "monster" });
            e.createSpan({
                text: " (current monster being rendered) parameters available in the callback."
            });
            e.createEl("br");
            e.createEl("br");

            e.createSpan({
                text: "The callback should return an instance of:"
            });
            MarkdownRenderer.render(
                this.plugin.app,
                `\`\`\`ts
interface DiceCallbackObject {
    text: string // string to be parsed into a dice roll
    original?: string // optional, shown in parenthesis
}
\`\`\``,
                e.createDiv(),
                "",
                new Component()
            );
            e.createEl("br");
            e.createEl("span", { text: "For example: " });
            e.createEl("br");
            MarkdownRenderer.render(
                this.plugin.app,
                `\`\`\`ts
return { text: "1d20 + 3" };
\`\`\``,
                e.createDiv(),
                "",
                new Component()
            );
        });
    }
    private buildParser(containerEl: HTMLElement) {
        containerEl.empty();
        let cbSetting = new Setting(containerEl)
            .setHeading()
            .setName("Callback")
            .addExtraButton((b) => {
                let appended = false;
                b.setIcon("help-circle").onClick(() => {
                    if (appended) {
                        cbSetting.setDesc("");
                    } else {
                        cbSetting.setDesc(this.getCallbackDescription());
                    }
                    appended = !appended;
                });
            });
        cbSetting.settingEl.style.alignItems = "flex-start";
        this.parser = buildTextArea(
            containerEl,
            this.item.parser,
            [],
            (value) => {
                this.item.parser = value;
            }
        );
    }
}
