import type { Theme } from '@mui/material/styles';
export declare const switches: {
    MuiSwitch: {
        defaultProps?: import("@mui/material/styles").ComponentsProps["MuiSwitch"];
        styleOverrides?: Partial<import("@mui/material/styles/overrides").OverridesStyleRules<keyof import("@mui/material/Switch").SwitchClasses, "MuiSwitch", Theme>>;
        variants?: {
            props: Partial<import("@mui/material/Switch").SwitchProps> | ((props: Partial<import("@mui/material/Switch").SwitchProps> & {
                ownerState: Partial<import("@mui/material/Switch").SwitchProps>;
            }) => boolean);
            style: import("@mui/styled-engine").Interpolation<{
                theme: Theme;
            }>;
        }[];
    };
};
