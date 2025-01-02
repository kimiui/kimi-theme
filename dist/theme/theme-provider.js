'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider as ThemeVarsProvider } from '@mui/material/styles';
import { useTranslate } from '../locales';
import { useSettingsContext } from '../components/settings';
import { createTheme } from './create-theme';
import { Rtl } from './with-settings/right-to-left';
export function ThemeProvider({ children, themeOverrides, ...other }) {
    const { currentLang } = useTranslate();
    const settings = useSettingsContext();
    const theme = createTheme({
        localeComponents: currentLang?.systemValue,
        settingsState: settings,
        themeOverrides,
    });
    return (_jsxs(ThemeVarsProvider, { disableTransitionOnChange: true, theme: theme, ...other, children: [_jsx(CssBaseline, {}), _jsx(Rtl, { direction: settings.direction, children: children })] }));
}
