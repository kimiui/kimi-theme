// ----------------------------------------------------------------------

import { I18nProvider } from 'src/locales/i18n-provider';
import { LocalizationProvider } from 'src/locales/localization-provider';
import { SettingsDrawer, defaultSettings, SettingsProvider } from 'src/components/settings';

import { Router } from './routes';
import { Toaster } from './components/snackbar';
import { KimiThemeProvider } from './theme/theme-provider';

// ----------------------------------------------------------------------

export default function App() {
  return (
    <I18nProvider>
      <LocalizationProvider>
        <SettingsProvider settings={defaultSettings}>
          <KimiThemeProvider>
            <SettingsDrawer />
            <Toaster />
            <Router />
          </KimiThemeProvider>
        </SettingsProvider>
      </LocalizationProvider>
    </I18nProvider>
  );
}
