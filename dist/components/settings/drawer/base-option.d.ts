import type { ButtonBaseProps } from '@mui/material/ButtonBase';
type Props = ButtonBaseProps & {
    icon: string;
    label: string;
    selected: boolean;
    tooltip?: string;
};
export declare function BaseOption({ icon, label, tooltip, selected, ...other }: Props): import("react/jsx-runtime").JSX.Element;
export {};
