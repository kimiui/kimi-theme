import type { DefaultColorScheme } from '@mui/material/styles/createThemeWithVars';
import type { Shadows, Direction, ColorSystemOptions, CssVarsThemeOptions, ThemeOptions as MuiThemeOptions } from '@mui/material/styles';
/**
 * Theme options
 * Extended type that includes additional properties for color schemes and CSS variables.
 *
 * @see https://github.com/mui/material-ui/blob/master/packages/mui-material/lib/styles/createTheme.ts
 */
export type ThemeColorScheme = DefaultColorScheme;
export type ThemeDirection = Direction;
export type ThemeCssVariables = Pick<CssVarsThemeOptions, 'colorSchemeSelector' | 'disableCssColorScheme' | 'cssVarPrefix' | 'shouldSkipGeneratingVar'>;
type ColorSchemeOptionsExtended = ColorSystemOptions & {
    shadows?: Shadows;
};
export type ThemeOptions = Omit<MuiThemeOptions, 'components'> & Pick<CssVarsThemeOptions, 'defaultColorScheme' | 'components'> & {
    colorSchemes?: Record<ThemeColorScheme, ColorSchemeOptionsExtended>;
    cssVariables?: ThemeCssVariables;
};
export {};
