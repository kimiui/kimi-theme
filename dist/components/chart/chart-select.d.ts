import type { SxProps } from '@mui/system';
import type { Theme } from '@mui/material/styles';
type Props = {
    options: string[];
    value: string;
    onChange: (newValue: string) => void;
    slotProps?: {
        button?: SxProps<Theme>;
        popover?: SxProps<Theme>;
    };
};
export declare function ChartSelect({ options, value, onChange, slotProps, ...other }: Readonly<Props>): import("react/jsx-runtime").JSX.Element;
export {};
