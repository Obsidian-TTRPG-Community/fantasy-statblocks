import type { Command, FuzzyMatch } from "obsidian";
import { FuzzyInputSuggest } from "@javalent/utilities";

export class CommandSuggester extends FuzzyInputSuggest<Command> {
    getItemText(item: Command) {
        return item.name;
    }
    renderNote(noteEL: HTMLElement, result: FuzzyMatch<Command>): void {}
    renderTitle(titleEl: HTMLElement, result: FuzzyMatch<Command>): void {
        this.renderMatches(titleEl, result.item.name, result.match.matches);
    }
}
export class IconSuggester extends FuzzyInputSuggest<string> {
    renderNote(noteEL: HTMLElement, result: FuzzyMatch<string>): void {}
    renderTitle(titleEl: HTMLElement, result: FuzzyMatch<string>): void {
        this.renderMatches(titleEl, result.item, result.match.matches);
    }
    getItemText(item: string) {
        return item;
    }
}
