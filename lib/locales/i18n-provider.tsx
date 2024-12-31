'use client';

import React from 'react';
import i18next from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { I18nextProvider, initReactI18next } from 'react-i18next';

import { localStorageGetItem } from 'lib/utils/storage-available';

import { fallbackLng, i18nOptions } from './config-locales';

// ----------------------------------------------------------------------

/**
 * [1] localStorage
 * Auto detection:
 * const lng = localStorageGetItem('i18nextLng')
 */
const lng = localStorageGetItem('i18nextLng', fallbackLng);

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .use(resourcesToBackend((lang: string, ns: string) => import(`./langs/${lang}/${ns}.json`)))
  .init({ ...i18nOptions(lng), detection: { caches: ['localStorage'] } });

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export function I18nProvider({ children }: Readonly<Props>) {
  console.log('i18n instance:', i18next);

  return <I18nextProvider i18n={i18next}>{children}</I18nextProvider>;
}
