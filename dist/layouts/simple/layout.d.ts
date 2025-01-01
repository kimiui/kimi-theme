import type { Theme, SxProps } from '@mui/material/styles';
export type SimpleLayoutProps = {
    sx?: SxProps<Theme>;
    children: React.ReactNode;
    content?: {
        compact?: boolean;
    };
};
export declare function SimpleLayout({ sx, children, content }: Readonly<SimpleLayoutProps>): import("react/jsx-runtime").JSX.Element;
