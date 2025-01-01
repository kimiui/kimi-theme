import type { CommonColors } from '@mui/material/styles/createPalette';
import type { PaletteColorNoChannels } from './core/palette';
import type { ThemeDirection, ThemeColorScheme, ThemeCssVariables } from './types';
type ThemeConfig = {
    classesPrefix: string;
    modeStorageKey: string;
    direction: ThemeDirection;
    defaultMode: ThemeColorScheme;
    cssVariables: ThemeCssVariables;
    fontFamily: Record<'primary' | 'secondary', string>;
    palette: Record<'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error', PaletteColorNoChannels> & {
        common: Pick<CommonColors, 'black' | 'white'>;
        grey: Record<'50' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900', string>;
    };
};
export declare const themeConfig: ThemeConfig;
export {};
