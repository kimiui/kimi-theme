import type { SvgIconProps } from '@mui/material/SvgIcon';
import type { Theme } from '@mui/material/styles';
/**
 * Icons
 */
export declare const CheckboxIcon: (props: SvgIconProps) => import("react/jsx-runtime").JSX.Element;
export declare const CheckboxCheckedIcon: (props: SvgIconProps) => import("react/jsx-runtime").JSX.Element;
export declare const CheckboxIndeterminateIcon: (props: SvgIconProps) => import("react/jsx-runtime").JSX.Element;
export declare const checkbox: {
    MuiCheckbox: {
        defaultProps?: import("@mui/material/styles").ComponentsProps["MuiCheckbox"];
        styleOverrides?: Partial<import("@mui/material/styles/overrides").OverridesStyleRules<keyof import("@mui/material/Checkbox").CheckboxClasses, "MuiCheckbox", Theme>>;
        variants?: {
            props: Partial<import("@mui/material/Checkbox").CheckboxProps> | ((props: Partial<import("@mui/material/Checkbox").CheckboxProps> & {
                ownerState: Partial<import("@mui/material/Checkbox").CheckboxProps>;
            }) => boolean);
            style: import("@mui/styled-engine").Interpolation<{
                theme: Theme;
            }>;
        }[];
    };
};
