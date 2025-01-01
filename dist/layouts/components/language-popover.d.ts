import type { IconButtonProps } from '@mui/material/IconButton';
export type LanguagePopoverProps = IconButtonProps & {
    data?: {
        value: string;
        label: string;
        countryCode: string;
    }[];
};
export declare function LanguagePopover({ data, sx, ...other }: LanguagePopoverProps): import("react/jsx-runtime").JSX.Element;
