export declare const stylesMode: {
    light: string;
    dark: string;
};
export declare const mediaQueries: {
    upXs: string;
    upSm: string;
    upMd: string;
    upLg: string;
    upXl: string;
};
/**
 * Set font family
 */
export declare function setFont(fontName?: string): string;
/**
 * Converts rem to px
 */
export declare function remToPx(value: string): number;
/**
 * Converts px to rem
 */
export declare function pxToRem(value: number): string;
/**
 * Responsive font sizes
 */
export declare function responsiveFontSizes({ sm, md, lg }: {
    sm: number;
    md: number;
    lg: number;
}): {
    [x: string]: {
        fontSize: string;
    };
};
/**
 * Converts a hex color to RGB channels
 */
export declare function hexToRgbChannel(hex: string): string;
/**
 * Converts a hex color to RGB channels
 */
export declare function createPaletteChannel(hexPalette: Record<string, string>): {
    [x: string]: string;
};
/**
 * Color with alpha channel
 */
export declare function varAlpha(color?: string, opacity?: number): string;
