import { defaultFont } from 'kimi-theme/theme/core/typography';

import type { SettingsState } from './types';

// ----------------------------------------------------------------------

export const STORAGE_KEY = 'app-settings';

export const defaultSettings: SettingsState = {
  colorScheme: 'dark',
  direction: 'ltr',
  contrast: 'default',
  navLayout: 'vertical',
  primaryColor: 'default',
  navColor: 'integrate',
  compactLayout: true,
  fontFamily: defaultFont,
  fontSize: 'normal',
} as const;
