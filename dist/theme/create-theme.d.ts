import type { Theme, Components } from '@mui/material/styles';
import type { SettingsState } from '../components/settings';
import type { ThemeOptions } from './types';
export declare const baseTheme: ThemeOptions;
type CreateThemeProps = {
    settingsState?: SettingsState;
    themeOverrides?: ThemeOptions;
    localeComponents?: {
        components?: Components<Theme>;
    };
};
export declare function createTheme({ settingsState, themeOverrides, localeComponents, }?: CreateThemeProps): Theme;
export {};
