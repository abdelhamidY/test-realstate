import { translations } from "./translations";
export const translate = (key: string, locale: string) => key in translations ? translations[key][locale] : key;