import i18next from 'i18next';
import { allLangs } from '../locales/all-langs';
import { fallbackLng } from '../locales/config-locales';
// ----------------------------------------------------------------------
export function formatNumberLocale() {
    const lng = i18next.resolvedLanguage ?? fallbackLng;
    const currentLang = allLangs.find((lang) => lang.value === lng);
    return { code: currentLang?.numberFormat.code, currency: currentLang?.numberFormat.currency };
}
