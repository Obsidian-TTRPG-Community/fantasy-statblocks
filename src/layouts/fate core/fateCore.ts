import { nanoid } from "src/util/util";
import type { DefaultLayout, Layout, StatblockItem } from "../layout.types";

export const StatblockFateCore: StatblockItem[] = [
    {
        type: "inline",
        id: nanoid(),
        properties: [],
        hasRule: true,
        nested: [
            {
                type: "group",
                id: nanoid(),
                properties: [
                    "name",
                    "description",
                    "aspects",
                    "temporaryAspects"
                ],
                nested: [
                    {
                        type: "heading",
                        id: nanoid(),
                        properties: ["name"],
                        conditioned: true,
                        size: 1
                    },
                    {
                        type: "text",
                        id: nanoid(),
                        properties: ["description"],
                        conditioned: true,
                        markdown: true,
                        text: null,
                        dice: false
                    },
                    {
                        type: "text",
                        id: nanoid(),
                        properties: ["aspects"],
                        markdown: true,
                        text: null,
                        dice: false,
                        conditioned: true,
                        heading: "Aspects"
                    },
                    {
                        type: "text",
                        id: nanoid(),
                        properties: ["temporaryAspects"],
                        markdown: true,
                        text: null,
                        dice: false,
                        conditioned: true,
                        heading: "Temporary Aspects"
                    }
                ],
                conditioned: true
            },
            {
                type: "image",
                id: nanoid(),
                properties: ["image"],
                conditioned: true
            }
        ]
    },
    {
        type: "table",
        id: nanoid(),
        properties: ["stress"],
        headers: ["Physical", "Mental"],
        calculate: false,
        hasRule: true,
        conditioned: true
    },
    {
        type: "traits",
        id: nanoid(),
        properties: ["consequences"],
        conditioned: true,
        heading: "Consequences"
    },
    {
        type: "traits",
        id: nanoid(),
        properties: ["skills"],
        conditioned: true,
        hasRule: false,
        heading: "Skills"
    },
    {
        type: "traits",
        id: nanoid(),
        properties: ["stunts"],
        markdown: true,
        dice: false,
        conditioned: true,
        heading: "Stunts"
    },
    {
        type: "traits",
        id: nanoid(),
        properties: ["items"],
        heading: "Items",
        conditioned: true,
        markdown: true,
        dice: false
    },
    {
        type: "traits",
        id: nanoid(),
        properties: ["extras"],
        heading: "Extras",
        conditioned: true,
        markdown: true,
        dice: false
    }
];

export const LayoutFateCore: DefaultLayout = {
    blocks: StatblockFateCore,
    id: "basic-fate-core-layout",
    name: "Basic Fate Core Layout",
    edited: false
};
