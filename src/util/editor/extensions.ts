import {
    defaultKeymap,
    history,
    historyKeymap,
    indentWithTab
} from "@codemirror/commands";
import {
    javascriptLanguage,
    typescriptLanguage
} from "@codemirror/lang-javascript";
import {
    bracketMatching,
    defaultHighlightStyle,
    foldGutter,
    foldKeymap,
    indentOnInput,
    syntaxHighlighting
} from "@codemirror/language";
import type { Extension } from "@codemirror/state";
import {
    drawSelection,
    dropCursor,
    EditorView,
    keymap,
    rectangularSelection
} from "@codemirror/view";

import {
    autocompletion,
    closeBrackets,
    closeBracketsKeymap,
    completionKeymap
} from "@codemirror/autocomplete";
import { highlightSelectionMatches, searchKeymap } from "@codemirror/search";

import { lintKeymap } from "@codemirror/lint";

export const basicSetup = (): Extension[] => [
    foldGutter(),
    drawSelection(),
    dropCursor(),
    indentOnInput(),
    syntaxHighlighting(defaultHighlightStyle, { fallback: true }),
    EditorView.lineWrapping,
    bracketMatching(),
    closeBrackets(),
    autocompletion(),
    rectangularSelection(),
    highlightSelectionMatches(),
    keymap.of([
        ...closeBracketsKeymap,
        ...defaultKeymap,
        ...searchKeymap,
        ...historyKeymap,
        indentWithTab,
        ...foldKeymap,
        ...completionKeymap,
        ...lintKeymap
    ])
];
