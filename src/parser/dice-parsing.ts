import type { DiceParsing, Layout, ParsedDice } from "src/layouts/layout.types";
import { nanoid } from "../util/util";
import type { Monster } from "index";

export function parseForDice(
    layout: Layout,
    property: string,
    monster: Monster
): ParsedDice[] {
    const regexes: Map<string, RegExp> = new Map();
    const parsers: Map<string, Function> = new Map();
    const diceParsing = layout.diceParsing ?? getDiceParsingDefaults();
    for (const entry of diceParsing) {
        regexes.set(entry.id, new RegExp(entry.regex));
        let scoped = `
let anon = (original, matches, monster) => {
    if (!matches || !matches.length) return original;
    ${entry.parser};
}
let result;
try {
    result = anon(original, matches, monster);
} catch(e) {
    console.error(e);
    result = original;
} finally {
    return result;
}
        `;
        const func = new Function("original", "matches", "monster", scoped);
        parsers.set(entry.id, func);
    }

    for (const { id } of diceParsing) {
        const regex = regexes.get(id)!;
        property = property.replaceAll(new RegExp(regex, "g"), (str) => {
            return `<MATCHED_DICE><DICE_ID>${id}<END_DICE_ID>${str}<END_MATCHED_DICE>`;
        });
    }

    const result = [];
    for (const line of property.split(
        /(<MATCHED_DICE>.+?<END_MATCHED_DICE>)/
    )) {
        if (!/<MATCHED_DICE>.+?<END_MATCHED_DICE>/.test(line)) {
            result.push(line);
            continue;
        }
        const [, id, prop] =
            line.match(
                /<MATCHED_DICE><DICE_ID>(.+?)<END_DICE_ID>(.+)<END_MATCHED_DICE>/
            ) ?? [];
        if (!id || !prop) {
            result.push(line);
            continue;
        }
        const regex = regexes.get(id)!;
        const parser = parsers.get(id)!;
        const matches = prop.match(regex);
        const res = parser.call(undefined, prop, matches, monster);

        if (
            !res ||
            (Array.isArray(res) &&
                !res.every((r) => typeof r == "string" || r?.text?.length)) ||
            (!Array.isArray(res) &&
                typeof res === "object" &&
                !res.text?.length)
        ) {
            result.push(prop);
        } else if (Array.isArray(res)) {
            result.push(...res);
        } else {
            result.push(res);
        }
    }

    return result;
}

export function getDiceParsingDefaults(): DiceParsing[] {
    return [
        {
            regex: /([\+\-])(\d+) to hit/.source,
            parser: `let [, sign, number] = matches;
let mult = 1;
if (sign === "-") {
    mult = -1;
}
if (!isNaN(Number(number))) {
    return {
        text: \`1d20+\${mult * Number(number)}\`,
        original
    }
}`,
            id: nanoid(),
            desc: "+10 to hit"
        },
        {
            regex: /(\d+)\s\((\d+d\d+(?:\s*[+\-]\s*\d+)?)\)/.source,
            parser: `let [, base, dice] = matches;
let text;
if (!isNaN(Number(base)) && dice) {
    text = dice;
}
return { text, original: dice ?? original };`,
            id: nanoid(),
            desc: "4 (1d6 + 1)"
        },
        {
            regex: /([^\s]+) ([\+\-])(\d+)/.source,
            parser: `
            let [, save, sign, number] = matches;
let mult = 1;
if (sign === "-") {
    mult = -1;
}
let text;
if (!isNaN(Number(number))) {
    text = \`1d20+\${mult * Number(number)}\`;
    original = \`\${save} \${sign}\${number}\`;
}
return { text, original };`,
            id: nanoid(),
            desc: "+5"
        }
    ];
}
