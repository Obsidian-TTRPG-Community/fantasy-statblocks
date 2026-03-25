import { derived, get, writable } from "svelte/store";
import en from "./en.json";
import it from "./it.json";

export type SupportedLocale = "en" | "it";

const LOCALES: Record<SupportedLocale, Record<string, string>> = { en, it };

export const SUPPORTED_LOCALES: SupportedLocale[] = ["en", "it"];

export const LOCALE_NAMES: Record<SupportedLocale, string> = {
    en: "English",
    it: "Italiano"
};

export const locale = writable<SupportedLocale>("en");

/**
 * Derives the base language code from an Obsidian/moment locale string.
 * E.g. "it-IT" → "it", "en-US" → "en".
 */
export function detectLocale(obsidianLocale: string): SupportedLocale {
    const base = obsidianLocale.split("-")[0].toLowerCase();
    return (SUPPORTED_LOCALES as string[]).includes(base)
        ? (base as SupportedLocale)
        : "en";
}

export function setLocale(lang: string): void {
    const normalized = lang.split("-")[0].toLowerCase();
    locale.set(
        (SUPPORTED_LOCALES as string[]).includes(normalized)
            ? (normalized as SupportedLocale)
            : "en"
    );
}

/**
 * Svelte store that exposes the reactive translation function.
 * Use `$t('key')` inside Svelte components.
 */
export const t = derived(
    locale,
    (lang) =>
        (key: string): string =>
            LOCALES[lang]?.[key] ?? LOCALES["en"]?.[key] ?? key
);

/**
 * Synchronous translation function for use outside of Svelte's reactivity
 * (e.g. in plain TypeScript classes). The value reflects the current locale
 * at the time of the call.
 */
export function translate(key: string): string {
    return get(t)(key);
}
