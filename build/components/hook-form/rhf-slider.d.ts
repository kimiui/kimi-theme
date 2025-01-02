import type { SliderProps } from '@mui/material/Slider';
type Props = SliderProps & {
    name: string;
    helperText?: React.ReactNode;
};
export declare function RHFSlider({ name, helperText, ...other }: Props): import("react/jsx-runtime").JSX.Element;
export {};
