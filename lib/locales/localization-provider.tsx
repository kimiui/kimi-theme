'use client';

import 'dayjs/locale/en';
import 'dayjs/locale/fr';
import 'dayjs/locale/vi';
import dayjs from 'dayjs';
import React from 'react';
import 'dayjs/locale/ar-sa';
import 'dayjs/locale/zh-cn';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider as Provider } from '@mui/x-date-pickers/LocalizationProvider';

import { useTranslate } from './use-locales';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export function LocalizationProvider({ children }: Readonly<Props>) {
  const { currentLang } = useTranslate();

  dayjs.locale(currentLang.adapterLocale);

  return (
    <Provider dateAdapter={AdapterDayjs} adapterLocale={currentLang.adapterLocale}>
      {children}
    </Provider>
  );
}
