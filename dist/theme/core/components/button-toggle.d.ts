import type { ToggleButtonProps } from '@mui/material/ToggleButton';
import type { Theme } from '@mui/material/styles';
export declare const toggleButton: {
    MuiToggleButton: {
        defaultProps?: import("@mui/material/styles").ComponentsProps["MuiToggleButton"];
        styleOverrides?: Partial<import("@mui/material/styles/overrides").OverridesStyleRules<keyof import("@mui/material/ToggleButton").ToggleButtonClasses, "MuiToggleButton", Theme>> | undefined;
        variants?: {
            props: Partial<ToggleButtonProps> | ((props: Partial<ToggleButtonProps> & {
                ownerState: Partial<ToggleButtonProps>;
            }) => boolean);
            style: import("@mui/styled-engine").Interpolation<{
                theme: Theme;
            }>;
        }[] | undefined;
    };
    MuiToggleButtonGroup: {
        defaultProps?: import("@mui/material/styles").ComponentsProps["MuiToggleButtonGroup"];
        styleOverrides?: Partial<import("@mui/material/styles/overrides").OverridesStyleRules<keyof import("@mui/material").ToggleButtonGroupClasses, "MuiToggleButtonGroup", Theme>> | undefined;
        variants?: {
            props: Partial<import("@mui/material").ToggleButtonGroupProps> | ((props: Partial<import("@mui/material").ToggleButtonGroupProps> & {
                ownerState: Partial<import("@mui/material").ToggleButtonGroupProps>;
            }) => boolean);
            style: import("@mui/styled-engine").Interpolation<{
                theme: Theme;
            }>;
        }[] | undefined;
    };
};
