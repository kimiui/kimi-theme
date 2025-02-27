import type { Theme, SxProps } from '@mui/material/styles';

import type { ThemeDirection, ThemeColorScheme } from 'lib/theme/types';

// ----------------------------------------------------------------------

export type SettingsDrawerProps = {
  sx?: SxProps<Theme>;
  hideFont?: boolean;
  hideCompact?: boolean;
  hidePresets?: boolean;
  hideNavColor?: boolean;
  hideContrast?: boolean;
  hideDirection?: boolean;
  hideNavLayout?: boolean;
  hideColorScheme?: boolean;
};

export type SettingsState = {
  fontFamily: string;
  fontSize: string;
  compactLayout: boolean;
  direction: ThemeDirection;
  colorScheme: ThemeColorScheme;
  contrast: 'default' | 'high';
  navColor: 'integrate' | 'apparent';
  navLayout: 'vertical' | 'horizontal' | 'mini';
  primaryColor: 'default' | 'cyan' | 'purple' | 'blue' | 'orange' | 'red';
  useNext?: boolean;
};

export type SettingsContextValue = SettingsState & {
  canReset: boolean;
  onReset: () => void;
  onUpdate: (updateValue: Partial<SettingsState>) => void;
  onUpdateField: (
    name: keyof SettingsState,
    updateValue: SettingsState[keyof SettingsState]
  ) => void;
  // Drawer
  openDrawer: boolean;
  onCloseDrawer: () => void;
  onToggleDrawer: () => void;
};

export type SettingsProviderProps = {
  settings?: SettingsState;
  children: React.ReactNode;
};
