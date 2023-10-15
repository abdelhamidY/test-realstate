export const locales = ['en', "it"] as const;
export type Locale = typeof locales[number];
export type TranslationMap = {
    [key: string]: KeyTranslations
}

export type KeyTranslations = {[key in Locale]: string};