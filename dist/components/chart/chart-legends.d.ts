import type { StackProps } from '@mui/material/Stack';
export declare const StyledLegend: any;
export declare const StyledDot: any;
type Props = StackProps & {
    labels?: string[];
    colors?: string[];
    values?: string[];
    sublabels?: string[];
    icons?: React.ReactNode[];
};
export declare function ChartLegends({ labels, colors, values, sublabels, icons, ...other }: Props): import("react/jsx-runtime").JSX.Element;
export {};
