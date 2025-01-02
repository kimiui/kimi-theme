import type { SvgIconProps } from '@mui/material/SvgIcon';
import type { Theme } from '@mui/material/styles';
/**
 * Icons
 */
export declare const RadioIcon: (props: SvgIconProps) => import("react/jsx-runtime").JSX.Element;
export declare const RadioCheckedIcon: (props: SvgIconProps) => import("react/jsx-runtime").JSX.Element;
export declare const radio: {
    MuiRadio: {
        defaultProps?: import("@mui/material/styles").ComponentsProps["MuiRadio"];
        styleOverrides?: Partial<import("@mui/material/styles/overrides").OverridesStyleRules<keyof import("@mui/material/Radio").RadioClasses, "MuiRadio", Theme>>;
        variants?: {
            props: Partial<import("@mui/material/Radio").RadioProps> | ((props: Partial<import("@mui/material/Radio").RadioProps> & {
                ownerState: Partial<import("@mui/material/Radio").RadioProps>;
            }) => boolean);
            style: import("@mui/styled-engine").Interpolation<{
                theme: Theme;
            }>;
        }[];
    };
};
