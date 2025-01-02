import type { BoxProps } from '@mui/material/Box';
export type LogoProps = BoxProps & {
    href?: string;
    disableLink?: boolean;
};
export declare const Logo: import("react").ForwardRefExoticComponent<Omit<LogoProps, "ref"> & import("react").RefAttributes<HTMLAnchorElement>>;
