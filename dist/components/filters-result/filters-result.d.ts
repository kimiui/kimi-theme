import type { ChipProps } from '@mui/material/Chip';
import type { Theme, SxProps } from '@mui/material/styles';
export declare const chipProps: ChipProps;
type FiltersResultProps = {
    totalResults: number;
    onReset: () => void;
    sx?: SxProps<Theme>;
    children: React.ReactNode;
};
export declare function FiltersResult({ totalResults, onReset, sx, children }: FiltersResultProps): import("react/jsx-runtime").JSX.Element;
export {};
