import type { ColorSystemOptions } from '@mui/material/styles';
import type { Channels, PaletteColor } from '@mui/material/styles/createPalette';
import type { ThemeColorScheme } from '../types';
/**
 * TypeScript (type definition and extension)
 * @to {@link file://./../extend-theme-types.d.ts}
 */
export type PaletteColorKey = 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error';
export type PaletteColorNoChannels = Omit<PaletteColor, 'lighterChannel' | 'darkerChannel'>;
export type PaletteColorWithChannels = PaletteColor & Channels;
export type CommonColorsExtend = {
    whiteChannel: string;
    blackChannel: string;
};
export type TypeTextExtend = {
    disabledChannel: string;
};
export type TypeBackgroundExtend = {
    neutral: string;
    neutralChannel: string;
};
export type PaletteColorExtend = {
    lighter: string;
    darker: string;
    lighterChannel: string;
    darkerChannel: string;
};
export type GreyExtend = {
    '50Channel': string;
    '100Channel': string;
    '200Channel': string;
    '300Channel': string;
    '400Channel': string;
    '500Channel': string;
    '600Channel': string;
    '700Channel': string;
    '800Channel': string;
    '900Channel': string;
};
export declare const primary: {
    [x: string]: string;
};
export declare const secondary: {
    [x: string]: string;
};
export declare const info: {
    [x: string]: string;
};
export declare const success: {
    [x: string]: string;
};
export declare const warning: {
    [x: string]: string;
};
export declare const error: {
    [x: string]: string;
};
export declare const common: {
    [x: string]: string;
};
export declare const grey: {
    [x: string]: string;
};
export declare const text: {
    light: {
        [x: string]: string;
    };
    dark: {
        [x: string]: string;
    };
};
export declare const background: {
    light: {
        [x: string]: string;
    };
    dark: {
        [x: string]: string;
    };
};
export declare const baseAction: {
    hover: string;
    selected: string;
    focus: string;
    disabled: string;
    disabledBackground: string;
    hoverOpacity: number;
    disabledOpacity: number;
};
export declare const action: {
    light: {
        active: string;
        hover: string;
        selected: string;
        focus: string;
        disabled: string;
        disabledBackground: string;
        hoverOpacity: number;
        disabledOpacity: number;
    };
    dark: {
        active: string;
        hover: string;
        selected: string;
        focus: string;
        disabled: string;
        disabledBackground: string;
        hoverOpacity: number;
        disabledOpacity: number;
    };
};
export declare const basePalette: {
    primary: {
        [x: string]: string;
    };
    secondary: {
        [x: string]: string;
    };
    info: {
        [x: string]: string;
    };
    success: {
        [x: string]: string;
    };
    warning: {
        [x: string]: string;
    };
    error: {
        [x: string]: string;
    };
    common: {
        [x: string]: string;
    };
    grey: {
        [x: string]: string;
    };
    divider: string;
};
export declare const palette: Record<ThemeColorScheme, ColorSystemOptions['palette']>;
