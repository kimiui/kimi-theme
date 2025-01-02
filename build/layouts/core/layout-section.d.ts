import type { Theme, SxProps, CSSObject } from '@mui/material/styles';
export type LayoutSectionProps = {
    sx?: SxProps<Theme>;
    cssVars?: CSSObject;
    children?: React.ReactNode;
    footerSection?: React.ReactNode;
    headerSection?: React.ReactNode;
    sidebarSection?: React.ReactNode;
};
export declare function LayoutSection({ sx, cssVars, children, footerSection, headerSection, sidebarSection, }: Readonly<LayoutSectionProps>): import("react/jsx-runtime").JSX.Element;
