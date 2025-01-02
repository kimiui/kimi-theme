import type { Theme } from '@mui/material/styles';
import type { ThemeProviderProps as MuiThemeProviderProps } from '@mui/material/styles/ThemeProvider';
import type { ThemeOptions } from './types';
export type ThemeProviderProps = Omit<MuiThemeProviderProps, 'theme'> & {
    theme?: Theme;
    themeOverrides?: ThemeOptions;
};
export declare function ThemeProvider({ children, themeOverrides, ...other }: Readonly<ThemeProviderProps>): import("react/jsx-runtime").JSX.Element;
