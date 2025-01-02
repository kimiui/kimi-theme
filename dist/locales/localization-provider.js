'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import 'dayjs/locale/en';
import 'dayjs/locale/fr';
import 'dayjs/locale/vi';
import dayjs from 'dayjs';
import 'dayjs/locale/ar-sa';
import 'dayjs/locale/zh-cn';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider as Provider } from '@mui/x-date-pickers/LocalizationProvider';
import { useTranslate } from './use-locales';
export function LocalizationProvider({ children }) {
    const { currentLang } = useTranslate();
    dayjs.locale(currentLang.adapterLocale);
    return (_jsx(Provider, { dateAdapter: AdapterDayjs, adapterLocale: currentLang.adapterLocale, children: children }));
}
