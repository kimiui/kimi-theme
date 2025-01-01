import type { Theme, SxProps } from '@mui/material/styles';
type Props = {
    title: string;
    tooltip?: string;
    sx?: SxProps<Theme>;
    children: React.ReactNode;
};
export declare function Block({ title, tooltip, children, sx }: Readonly<Props>): import("react/jsx-runtime").JSX.Element;
export {};
