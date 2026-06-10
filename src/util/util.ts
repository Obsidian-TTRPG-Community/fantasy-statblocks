import { EditorState, type Extension } from "@codemirror/state";
import { EditorView } from "@codemirror/view";
import copy from "fast-copy";
import type { Trait } from "index";
import { basicSetup } from "src/util/editor/extensions";
import { materialPalenight } from "src/util/editor/theme-dark";
import { basicLightTheme } from "src/util/editor/theme-light";

export function editorFromTextArea(
    textarea: HTMLTextAreaElement,
    facet?: Extension,
    lang: "js" | "yaml" = "js"
) {
    let setup = basicSetup();
    if (document.body.hasClass("theme-dark")) {
        setup.push(materialPalenight);
    } else {
        setup.push(basicLightTheme);
    }
    const extensions = [...setup];
    if (facet) extensions.push(facet);
    let view = new EditorView({
        state: EditorState.create({
            doc: textarea.value,
            extensions
        })
    });
    textarea.parentNode!.appendChild(view.dom);
    textarea.style.display = "none";
    if (textarea.form)
        textarea.form.addEventListener("submit", () => {
            textarea.value = view.state.doc.toString();
        });
    return view;
}
export function slugify(str: string) {
    if (!str) return "";
    return str
        .toLowerCase()
        .replace(/[^A-Za-z0-9\s_-]/g, "")
        .replace(/\s+/g, "-");
}

export const slugifyLayoutForCss = (layoutName: string, fallback?: string) =>
    layoutName?.toLowerCase().replace(/\s+/g, "-").replaceAll(".", "-") ??
    fallback;

export function toTitleCase(str: string): string {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

export function nanoid() {
    return "xyxyxyxyxyxy".replace(/[xy]/g, function (c) {
        let r = (Math.random() * 16) | 0,
            v = c == "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}

/** Get Modifier for Ability Score */
export function getMod(arg0: number) {
    let mod = Math.floor(((arg0 ?? 10) - 10) / 2);
    return `${mod >= 0 ? "+" : "-"}${Math.abs(mod)}`;
}

export function traitMapFrom(traits: Trait[] = []): Map<string, Trait> {
    return new Map(traits.map((t) => [t.name, t]));
}

export function stringify(
    property: Record<string, any> | string | any[] | number | boolean,
    depth: number = 0,
    joiner: string = " ",
    parens = true
): string {
    const ret = [];
    if (depth == 5) {
        return "";
    }
    if (property == null) return ``;
    if (typeof property == "string") return property;
    if (typeof property == "number") return `${property}`;
    if (Array.isArray(property)) {
        ret.push(
            `${parens ? "(" : ""}${property
                .map((p) => stringify(p, depth + 1))
                .join(joiner)}${parens ? ")" : ""}`
        );
    } else if (typeof property == "object") {
        for (const value of Object.values(property)) {
            ret.push(stringify(value, depth + 1));
        }
    }
    return ret.join(" ");
}
export const stringifyWithKeys = (
    property: Record<string, any> | string | any[] | number | boolean,
    depth: number = 0
): string => {
    const ret = [];
    if (depth == 5) {
        return "";
    }
    if (!property || property == null) return ``;
    if (typeof property == "string") return property;
    if (typeof property == "number") return `${property}`;
    if (Array.isArray(property)) {
        ret.push(
            `${property.map((p) => stringifyWithKeys(p, depth++)).join(" ")}`
        );
    } else if (typeof property == "object") {
        for (const [key, value] of Object.entries(property)) {
            ret.push(
                stringifyWithKeys(key, depth++),
                stringifyWithKeys(value, depth++)
            );
        }
    }
    return ret.join(" ");
};

export function transformTraits(
    monsterTraits: Trait[] = [],
    paramsTraits:
        | { desc: string; name: string; traits?: Trait[] }[]
        | [string, string][] = []
) {
    if (!monsterTraits) monsterTraits = [];
    if (!Array.isArray(monsterTraits)) monsterTraits = [monsterTraits];
    if (!paramsTraits) paramsTraits = [];
    if (!Array.isArray(paramsTraits)) paramsTraits = [paramsTraits];
    for (const trait of paramsTraits ?? []) {
        if (!trait) continue;
        if (Array.isArray(trait)) {
            let desc = stringifyWithKeys(trait.slice(1));
            monsterTraits = monsterTraits.filter(
                (t) => t.name != trait[0] && t.desc != desc
            );
            monsterTraits.push({
                name: trait[0],
                desc
            });
        } else if (
            typeof trait == "object" &&
            ("name" in trait || "desc" in trait)
        ) {
            monsterTraits = monsterTraits.filter(
                (t) =>
                    (!t.name?.length || t.name != trait.name) &&
                    t.desc != trait.desc
            );
            monsterTraits.push({
                ...trait,
                name: trait.name,
                desc: stringifyWithKeys(trait.desc)
            });
        }
    }
    return monsterTraits;
}

export function append(
    property: string | any[],
    toAppend: string | any[]
): string | any[] {
    if (
        (!Array.isArray(property) && typeof property !== "string") ||
        (!Array.isArray(toAppend) && typeof toAppend !== "string")
    ) {
        return toAppend;
    }
    let propCopy = copy(property);
    if (Array.isArray(propCopy)) {
        if (Array.isArray(toAppend)) {
            return [...propCopy, ...toAppend];
        }
        if (typeof toAppend == "string") {
            propCopy.push(toAppend);
            return propCopy;
        }
    } else if (typeof propCopy == "string") {
        return `${propCopy} ${stringify(toAppend)}`;
    }
    return toAppend;
}
