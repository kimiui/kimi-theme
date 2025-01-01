import type { Theme } from '@mui/material/styles';
declare function verticalVars(theme: Theme): {
    '--nav-item-gap': string;
    '--nav-item-radius': string;
    '--nav-item-height': string;
    '--nav-item-padding': string;
    '--nav-item-hover-bg': string;
    '--nav-item-active-color': string;
    '--nav-item-active-bg': string;
    '--nav-item-active-hover-bg': string;
    '--nav-item-open-color': string;
    '--nav-item-open-bg': string;
    '--nav-icon-size': string;
    '--nav-icon-margin': string;
};
declare function horizontalVars(theme: Theme): {
    '--nav-item-gap': string;
    '--nav-item-radius': string;
    '--nav-item-height': string;
    '--nav-item-padding': string;
    '--nav-item-hover-bg': string;
    '--nav-item-active-color': string;
    '--nav-item-open-bg': string;
    '--nav-icon-size': string;
    '--nav-icon-margin': string;
};
declare function mobileVars(theme: Theme): {
    '--nav-width': string;
    '--nav-item-gap': string;
    '--nav-item-radius': string;
    '--nav-item-height': string;
    '--nav-item-padding': string;
    '--nav-item-hover-color': string;
    '--nav-item-active-color': string;
    '--nav-item-active-bg': string;
    '--nav-item-active-hover-bg': string;
    '--nav-item-open-color': string;
    '--nav-item-open-bg': string;
    '--nav-icon-size': string;
    '--nav-icon-margin': string;
};
export declare const megaMenuCssVars: {
    vertical: typeof verticalVars;
    horizontal: typeof horizontalVars;
    mobile: typeof mobileVars;
};
export {};
