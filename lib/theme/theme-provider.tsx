'use client';

import type { Theme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider as ThemeVarsProvider } from '@mui/material/styles';
import type { ThemeProviderProps as MuiThemeProviderProps } from '@mui/material/styles/ThemeProvider';

import { useTranslate } from 'lib/locales';
import { useSettingsContext } from 'lib/components/settings';

import { createTheme } from './create-theme';
import { Rtl } from './with-settings/right-to-left';

import type { ThemeOptions } from './types';
// ----------------------------------------------------------------------

export type ThemeProviderProps = Omit<MuiThemeProviderProps, 'theme'> & {
  theme?: Theme;
  themeOverrides?: ThemeOptions;
};

export function ThemeProvider({
  children,
  themeOverrides,
  ...other
}: Readonly<ThemeProviderProps>) {
  const { currentLang } = useTranslate();

  const settings = useSettingsContext();

  const theme = createTheme({
    localeComponents: currentLang?.systemValue,
    settingsState: settings,
    themeOverrides,
  });

  return (
    <ThemeVarsProvider disableTransitionOnChange theme={theme} {...other}>
      <CssBaseline />
      <Rtl direction={settings.direction}>{children}</Rtl>
    </ThemeVarsProvider>
  );
}
