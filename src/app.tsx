// ----------------------------------------------------------------------

import { I18nProvider } from 'lib/locales/i18n-provider';
import { LocalizationProvider } from 'lib/locales/localization-provider';
import { SettingsDrawer, SettingsProvider } from 'lib/components/settings';

import { Router } from './routes';
import { Toaster } from 'lib/components/snackbar';
import { ThemeProvider } from 'lib/theme/theme-provider';

// ----------------------------------------------------------------------

export default function App() {
  return (
    <I18nProvider>
      <LocalizationProvider>
        <SettingsProvider>
          <ThemeProvider>
            <SettingsDrawer />
            <Toaster />
            <Router />
          </ThemeProvider>
        </SettingsProvider>
      </LocalizationProvider>
    </I18nProvider>
  );
}
