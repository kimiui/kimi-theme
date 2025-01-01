import type { Theme, Components } from '@mui/material/styles';
import type { SettingsState } from 'lib/components/settings';
import type { ThemeOptions } from '../types';
export declare function updateComponentsWithSettings(components?: Components<Theme>, settingsState?: SettingsState): Pick<ThemeOptions, 'components'>;
