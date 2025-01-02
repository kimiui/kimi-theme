import type { Theme, SxProps } from '@mui/material/styles';
export type FilterBlockProps = {
    label: string;
    isShow: boolean;
    sx?: SxProps<Theme>;
    children: React.ReactNode;
};
export declare function FiltersBlock({ label, children, isShow, sx }: FilterBlockProps): import("react/jsx-runtime").JSX.Element | null;
