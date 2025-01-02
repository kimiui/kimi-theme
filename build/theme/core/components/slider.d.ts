import type { Theme } from '@mui/material/styles';
export type SliderExtendColor = {
    inherit: true;
};
declare module '@mui/material/Slider' {
    interface SliderPropsColorOverrides {
        inherit: true;
    }
}
export declare const slider: {
    MuiSlider: {
        defaultProps?: import("@mui/material/styles").ComponentsProps["MuiSlider"];
        styleOverrides?: Partial<import("@mui/material/styles/overrides").OverridesStyleRules<keyof import("@mui/material/Slider").SliderClasses, "MuiSlider", Theme>>;
        variants?: {
            props: Partial<import("@mui/material/Slider").SliderProps> | ((props: Partial<import("@mui/material/Slider").SliderProps> & {
                ownerState: Partial<import("@mui/material/Slider").SliderProps>;
            }) => boolean);
            style: import("@mui/styled-engine").Interpolation<{
                theme: Theme;
            }>;
        }[];
    };
};
