'use client';
import dayjs from 'dayjs';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { allLangs } from './all-langs';
import { fallbackLng } from './config-locales';
// ----------------------------------------------------------------------
export function useTranslate(ns) {
    const { t, i18n } = useTranslation(ns);
    const fallback = allLangs.filter((lang) => lang.value === fallbackLng)[0];
    const currentLang = allLangs.find((lang) => lang.value === i18n.resolvedLanguage);
    const onChangeLang = useCallback(async (newLang) => {
        try {
            if (currentLang) {
                dayjs.locale(currentLang.adapterLocale);
            }
        }
        catch (error) {
            console.error(error);
        }
    }, [currentLang]);
    return {
        t,
        i18n,
        onChangeLang,
        currentLang: currentLang ?? fallback,
    };
}
