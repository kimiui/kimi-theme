import type { Theme, CSSObject } from '@mui/material/styles';
import type { TypographyOptions } from '@mui/material/styles/createTypography';
declare module '@mui/material/styles' {
    interface TypographyVariants {
        fontSecondaryFamily: React.CSSProperties['fontFamily'];
        fontWeightSemiBold: React.CSSProperties['fontWeight'];
    }
    interface TypographyVariantsOptions {
        fontSecondaryFamily?: React.CSSProperties['fontFamily'];
        fontWeightSemiBold?: React.CSSProperties['fontWeight'];
    }
    interface ThemeVars {
        typography: Theme['typography'];
    }
}
export declare const defaultFont = "Public Sans";
export declare const primaryFont: string;
export declare const secondaryFont: string;
export type FontStyleExtend = {
    fontWeightSemiBold: CSSObject['fontWeight'];
    fontSecondaryFamily: CSSObject['fontFamily'];
};
export declare const typography: TypographyOptions;
