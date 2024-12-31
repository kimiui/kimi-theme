// ----------------------------------------------------------------------

import { I18nProvider } from 'src/locales/i18n-provider';
import { LocalizationProvider } from 'src/locales/localization-provider';
import { SettingsDrawer, SettingsProvider } from 'src/components/settings';

import { Router } from './routes';
import { Toaster } from '../components/snackbar';
import { ThemeProvider } from '../theme/theme-provider';

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
