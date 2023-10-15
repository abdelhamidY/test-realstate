import { useLang } from "../useLang";
import { translate } from '../../locale/translate';
import { translations } from "../../locale/translations";

export type TranslatedText = keyof typeof translations;

export function Localized({text}: {text: TranslatedText}){
    const lang = useLang();
    return <>{translate(text, lang)}</>;
}