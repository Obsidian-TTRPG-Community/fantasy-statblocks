import type { Monster } from "../../index";
import { renderMatches, type FuzzyMatch } from "obsidian";
import { FuzzyInputSuggest } from "@javalent/utilities";
import { stringify } from "./util";

export class MonsterSuggestionModal extends FuzzyInputSuggest<Monster> {
    field: keyof Monster = "name";
    getItemText(item: Monster): string {
        return stringify(item[this.field]);
    }
    renderNote(noteEL: HTMLElement, result: FuzzyMatch<Monster>): void {
        const { item, match } = result;
        renderMatches(noteEL, stringify(item.source), match.matches);
    }
    renderTitle(titleEl: HTMLElement, result: FuzzyMatch<Monster>): void {
        const { item, match } = result;
        renderMatches(titleEl, stringify(item.name), match.matches);
    }
}
