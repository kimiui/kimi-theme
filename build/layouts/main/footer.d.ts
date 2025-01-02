import type { Theme, SxProps, Breakpoint } from '@mui/material/styles';
export type FooterProps = {
    layoutQuery: Breakpoint;
    sx?: SxProps<Theme>;
};
export declare function Footer({ layoutQuery, sx }: Readonly<FooterProps>): import("react/jsx-runtime").JSX.Element;
export type HomeFooterProps = {
    sx?: SxProps<Theme>;
};
export declare function HomeFooter({ sx }: Readonly<HomeFooterProps>): import("react/jsx-runtime").JSX.Element;
