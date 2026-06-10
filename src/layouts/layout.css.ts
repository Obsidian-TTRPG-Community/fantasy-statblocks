export const CSSProperties = [
    /**
     * Basic Info
     */
    "primaryColor",
    "ruleColor",
    "backgroundColor",
    "borderSize",
    "borderColor",

    /**
     * Bar
     */
    "barColor",
    "barBorderSize",
    "barBorderColor",

    /**
     * Image
     */
    "imageWidth",
    "imageHeight",
    "imageBorderSize",
    "imageBorderColor",

    /**
     * Box Shadow
     */
    "boxShadowColor",
    "boxShadowXOffset",
    "boxShadowYOffset",
    "boxShadowBlur",

    /**
     * Basic Font
     */
    "fontColor",
    "fontWeight",
    "contentFont",
    "contentFontSize",

    /**
     * Headings
     */
    "headingFont",
    "headingFontColor",
    "headingFontSize",
    "headingFontVariant",
    "headingFontWeight",

    /**
     * Properties
     */
    "propertyFont",
    "propertyFontColor",
    "propertyFontVariant",
    "propertyFontSize",
    "propertyFontWeight",
    "propertyNameFont",
    "propertyNameFontVariant",
    "propertyNameFontSize",
    "propertyNameFontColor",
    "propertyNameFontWeight",

    /**
     * Section Headings
     */
    "sectionHeadingBorderSize",
    "sectionHeadingBorderColor",
    "sectionHeadingFont",
    "sectionHeadingFontColor",
    "sectionHeadingFontSize",
    "sectionHeadingFontVariant",
    "sectionHeadingFontWeight",

    /**
     * Subheadings
     */
    "subheadingFont",
    "subheadingFontColor",
    "subheadingFontSize",
    "subheadingFontStyle",
    "subheadingFontWeight",

    /**
     * Traits
     */
    "traitsFont",
    "traitsFontColor",
    "traitsFontSize",
    "traitsFontWeight",
    "traitsFontStyle",
    "traitsNameFont",
    "traitsNameFontColor",
    "traitsNameFontSize",
    "traitsNameFontWeight",
    "traitsNameFontStyle"
] as const;
export type CSSProperties = (typeof CSSProperties)[number];
export type LayoutCSSProperties = Record<
    (typeof CSSProperties)[number],
    string | null
> & {
    [ThemeMode.Dark]?: Partial<
        Record<(typeof CSSProperties)[number], string | null>
    >;
    [ThemeMode.Light]?: Partial<
        Record<(typeof CSSProperties)[number], string | null>
    >;
};

export const DefaultLayoutCSSProperties: LayoutCSSProperties = {
    primaryColor: "#7a200d",
    ruleColor: "#922610",
    backgroundColor: "#fdf1dc",
    borderSize: "1px",
    borderColor: "#ddd",
    barColor: "#e69a28",
    barBorderSize: "1px",
    barBorderColor: "#000",
    imageWidth: "75px",
    imageHeight: "75px",
    imageBorderSize: "2px",
    imageBorderColor: "primaryColor",
    boxShadowColor: "#ddd",
    boxShadowXOffset: "0",
    boxShadowYOffset: "0",
    boxShadowBlur: "1.5em",
    fontColor: "primaryColor",
    fontWeight: "700",
    contentFont: `"Noto Sans", "Myriad Pro", Calibri, Helvetica, Arial, sans-serif`,
    contentFontSize: "14px",
    headingFont: `"Libre Baskerville", "Lora", "Calisto MT", "Bookman Old Style", Bookman, "Goudy Old Style", Garamond, "Hoefler Text", "Bitstream Charter", Georgia, serif`,
    headingFontColor: "fontColor",
    headingFontSize: "23px",
    headingFontVariant: "small-caps",
    headingFontWeight: "fontWeight",
    sectionHeadingBorderSize: "1px",
    sectionHeadingBorderColor: "primaryColor",
    sectionHeadingFont: null,
    sectionHeadingFontColor: "fontColor",
    sectionHeadingFontSize: "21px",
    sectionHeadingFontVariant: "small-caps",
    sectionHeadingFontWeight: "normal",
    subheadingFont: "contentFont",
    subheadingFontColor: "fontColor",
    subheadingFontSize: "12px",
    subheadingFontStyle: "italic",
    subheadingFontWeight: "normal",
    propertyFont: "contentFont",
    propertyFontColor: "fontColor",
    propertyFontVariant: "normal",
    propertyFontSize: "contentFontSize",
    propertyFontWeight: null,
    propertyNameFont: "contentFont",
    propertyNameFontColor: "fontColor",
    propertyNameFontWeight: null,
    propertyNameFontVariant: null,
    propertyNameFontSize: "contentFontSize",
    traitsFont: "contentFont",
    traitsFontColor: "fontColor",
    traitsFontSize: "contentFontSize",
    traitsFontWeight: null,
    traitsFontStyle: null,
    traitsNameFont: "contentFont",
    traitsNameFontColor: "fontColor",
    traitsNameFontSize: "contentFontSize",
    traitsNameFontWeight: "bold",
    traitsNameFontStyle: "italic"
};

export const ThemeMode = {
    Light: "moonstone",
    Dark: "obsidian",
    None: "none"
} as const;
export type ThemeMode = (typeof ThemeMode)[keyof typeof ThemeMode];

export function resolutionTree(
    properties: Partial<LayoutCSSProperties>,
    property: CSSProperties,
    mode: ThemeMode
) {
    let seen = new Set();
    let prop = resolveRawProperty(properties, property, mode);
    while (CSSProperties.includes(prop as CSSProperties)) {
        //derived...
        if (seen.has(prop as CSSProperties)) {
            break;
        }
        seen.add(prop);
        prop = resolveRawProperty(properties, prop as CSSProperties, mode);
    }
    return seen;
}
export function isDerived(
    properties: Partial<LayoutCSSProperties>,
    property: CSSProperties,
    mode: ThemeMode
): boolean {
    let prop = resolveRawProperty(properties, property, mode);
    return prop != null && CSSProperties.includes(prop as CSSProperties);
}

export function resolveRawProperty(
    properties: Partial<LayoutCSSProperties>,
    property: CSSProperties,
    mode: ThemeMode
) {
    return (
        (mode != ThemeMode.None ? properties?.[mode]?.[property] : null) ??
        properties?.[property] ??
        DefaultLayoutCSSProperties[property] ??
        null
    );
}
export function resolveProperty(
    properties: Partial<LayoutCSSProperties>,
    property: CSSProperties,
    mode: ThemeMode,
    seen: Set<CSSProperties> = new Set()
): string | null {
    seen.add(property);

    let prop = resolveRawProperty(properties, property, mode);
    if (CSSProperties.includes(prop as CSSProperties)) {
        //derived...
        if (seen.has(prop as CSSProperties)) return null;
        return resolveProperty(properties, prop as CSSProperties, mode, seen);
    }
    return prop;
}

export const CSSPropertyType = Object.freeze({
    Number: "Number",
    Color: "Color",
    Font: "Font",
    Size: "Size",
    Style: "Style",
    Variant: "Variant",
    Weight: "Weight"
});

export type CSSPropertyType =
    (typeof CSSPropertyType)[keyof typeof CSSPropertyType];

export type CSSPropertyDefinition = {
    property: CSSProperties;
    name: string;
    desc?: string;
    type: CSSPropertyType;
};

export type CSSPropertyGroup = {
    name: string;
    desc: string;
    properties: CSSPropertyDefinition[];
};

export const CSSPropertyGroups: CSSPropertyGroup[] = [
    {
        name: "General",
        desc: "",
        properties: [
            {
                type: CSSPropertyType.Color,
                property: "primaryColor",
                desc: "This is used to derive several other properties by default.",
                name: "Primary color"
            },
            {
                type: CSSPropertyType.Color,
                property: "ruleColor",
                name: "Rule color"
            },
            {
                type: CSSPropertyType.Color,
                property: "backgroundColor",
                name: "Background color"
            },
            {
                type: CSSPropertyType.Color,
                property: "borderColor",
                name: "Border color"
            },
            {
                type: CSSPropertyType.Size,
                property: "borderSize",
                name: "Border size"
            }
        ]
    },
    {
        name: "Content font",
        desc: "",
        properties: [
            {
                type: CSSPropertyType.Font,
                name: "Content font",
                desc: "This is the font used for most of the content in a statblock.",
                property: "contentFont"
            },
            {
                type: CSSPropertyType.Size,
                name: "Content font size",
                property: "contentFontSize"
            },
            {
                type: CSSPropertyType.Weight,
                name: "Content font weight",
                property: "fontWeight"
            },
            {
                type: CSSPropertyType.Color,
                name: "Content font color",
                property: "fontColor"
            }
        ]
    },
    {
        name: "Bar",
        desc: "Control the appearance of the top and bottom bars.",
        properties: [
            {
                type: CSSPropertyType.Color,
                name: "Bar color",
                property: "barColor"
            },
            {
                type: CSSPropertyType.Color,
                name: "Bar border color",
                property: "barBorderColor"
            },
            {
                type: CSSPropertyType.Size,
                name: "Bar border size",
                property: "barBorderSize"
            }
        ]
    },
    {
        name: "Images",
        desc: "",
        properties: [
            {
                type: CSSPropertyType.Size,
                name: "Image width",
                property: "imageWidth"
            },
            {
                type: CSSPropertyType.Size,
                name: "Image height",
                property: "imageHeight"
            },
            {
                type: CSSPropertyType.Size,
                name: "Image border size",
                property: "imageBorderSize"
            },
            {
                type: CSSPropertyType.Color,
                name: "Image border color",
                property: "imageBorderColor"
            }
        ]
    },
    {
        name: "Shadow",
        desc: "",
        properties: [
            {
                type: CSSPropertyType.Color,
                name: "Shadow color",
                property: "boxShadowColor"
            },
            {
                type: CSSPropertyType.Size,
                name: "Shadow x offset",
                property: "boxShadowXOffset"
            },
            {
                type: CSSPropertyType.Size,
                name: "Shadow y offset",
                property: "boxShadowYOffset"
            },
            {
                type: CSSPropertyType.Size,
                name: "Shadow blur",
                property: "boxShadowBlur"
            }
        ]
    },
    {
        name: "Headings",
        desc: "Anything related to heading blocks.",
        properties: [
            {
                type: CSSPropertyType.Font,
                property: "headingFont",
                name: "Heading font"
            },
            {
                type: CSSPropertyType.Color,
                property: "headingFontColor",
                name: "Heading font color"
            },
            {
                type: CSSPropertyType.Size,
                property: "headingFontSize",
                name: "Heading font size"
            },
            {
                type: CSSPropertyType.Variant,
                property: "headingFontVariant",
                name: "Heading font variant"
            },
            {
                type: CSSPropertyType.Weight,
                property: "headingFontWeight",
                name: "Heading font weight"
            }
        ]
    },
    {
        name: "Properties",
        desc: "Anything related to property blocks.",
        properties: [
            {
                type: CSSPropertyType.Font,
                property: "propertyFont",
                name: "Property font"
            },
            {
                type: CSSPropertyType.Color,
                property: "propertyFontColor",
                name: "Property font color"
            },
            {
                type: CSSPropertyType.Size,
                property: "propertyFontSize",
                name: "Property font size"
            },
            {
                type: CSSPropertyType.Variant,
                property: "propertyFontVariant",
                name: "Property font variant"
            },
            {
                type: CSSPropertyType.Weight,
                property: "propertyFontWeight",
                name: "Property font weight"
            },
            {
                type: CSSPropertyType.Font,
                property: "propertyNameFont",
                name: "Property heading font"
            },
            {
                type: CSSPropertyType.Color,
                property: "propertyNameFontColor",
                name: "Property name font color"
            },
            {
                type: CSSPropertyType.Size,
                property: "propertyNameFontSize",
                name: "Property name font size"
            },
            {
                type: CSSPropertyType.Variant,
                property: "propertyNameFontVariant",
                name: "Property name font variant"
            },
            {
                type: CSSPropertyType.Weight,
                property: "propertyNameFontWeight",
                name: "Property name font weight"
            }
        ]
    },
    {
        name: "Section headings",
        desc: "Anything related to section heading blocks.",
        properties: [
            {
                type: CSSPropertyType.Font,
                property: "sectionHeadingFont",
                name: "Section heading font"
            },
            {
                type: CSSPropertyType.Color,
                property: "sectionHeadingFontColor",
                name: "Section heading font color"
            },
            {
                type: CSSPropertyType.Size,
                property: "sectionHeadingFontSize",
                name: "Section heading font size"
            },
            {
                type: CSSPropertyType.Variant,
                property: "sectionHeadingFontVariant",
                name: "Section heading font variant"
            },
            {
                type: CSSPropertyType.Weight,
                property: "sectionHeadingFontWeight",
                name: "Section heading font weight"
            },
            {
                type: CSSPropertyType.Size,
                property: "sectionHeadingBorderSize",
                name: "Section heading border size"
            },
            {
                type: CSSPropertyType.Color,
                property: "sectionHeadingBorderColor",
                name: "Section heading border color"
            }
        ]
    },
    {
        name: "Subheadings",
        desc: "",
        properties: [
            {
                type: CSSPropertyType.Font,
                property: "subheadingFont",
                name: "Subheading font"
            },
            {
                type: CSSPropertyType.Color,
                property: "subheadingFontColor",
                name: "Subheading font color"
            },
            {
                type: CSSPropertyType.Size,
                property: "subheadingFontSize",
                name: "Subheading font size"
            },
            {
                type: CSSPropertyType.Style,
                property: "subheadingFontStyle",
                name: "Subheading font style"
            },
            {
                type: CSSPropertyType.Weight,
                property: "subheadingFontWeight",
                name: "Subheading font weight"
            }
        ]
    },
    {
        name: "Traits",
        desc: "",
        properties: [
            {
                type: CSSPropertyType.Font,
                property: "traitsFont",
                name: "Traits font"
            },
            {
                type: CSSPropertyType.Color,
                property: "traitsFontColor",
                name: "Traits font color"
            },
            {
                type: CSSPropertyType.Size,
                property: "traitsFontSize",
                name: "Traits font size"
            },
            {
                type: CSSPropertyType.Style,
                property: "traitsFontStyle",
                name: "Traits font style"
            },
            {
                type: CSSPropertyType.Weight,
                property: "traitsFontWeight",
                name: "Traits font weight"
            },
            {
                type: CSSPropertyType.Font,
                property: "traitsNameFont",
                name: "Trait name font"
            },
            {
                type: CSSPropertyType.Color,
                property: "traitsNameFontColor",
                name: "Trait name font color"
            },
            {
                type: CSSPropertyType.Size,
                property: "traitsNameFontSize",
                name: "Trait name font size"
            },
            {
                type: CSSPropertyType.Style,
                property: "traitsNameFontStyle",
                name: "Trait name font style"
            },
            {
                type: CSSPropertyType.Weight,
                property: "traitsNameFontWeight",
                name: "Trait name font weight"
            }
        ]
    }
];

export const PropertiesByType: Map<
    CSSPropertyType,
    Array<CSSPropertyDefinition>
> = new Map();

for (const group of CSSPropertyGroups) {
    for (const property of group.properties) {
        if (!PropertiesByType.has(property.type)) {
            PropertiesByType.set(property.type, []);
        }
        PropertiesByType.get(property.type).push(property);
    }
}
