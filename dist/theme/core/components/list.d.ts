import type { Theme } from '@mui/material/styles';
export declare const list: {
    MuiListItemIcon: {
        defaultProps?: import("@mui/material/styles").ComponentsProps["MuiListItemIcon"];
        styleOverrides?: Partial<import("@mui/material/styles/overrides").OverridesStyleRules<keyof import("@mui/material").ListItemIconClasses, "MuiListItemIcon", Theme>> | undefined;
        variants?: {
            props: Partial<import("@mui/material").ListItemIconProps> | ((props: Partial<import("@mui/material").ListItemIconProps> & {
                ownerState: Partial<import("@mui/material").ListItemIconProps>;
            }) => boolean);
            style: import("@mui/styled-engine").Interpolation<{
                theme: Theme;
            }>;
        }[] | undefined;
    };
    MuiListItemAvatar: {
        defaultProps?: import("@mui/material/styles").ComponentsProps["MuiListItemAvatar"];
        styleOverrides?: Partial<import("@mui/material/styles/overrides").OverridesStyleRules<keyof import("@mui/material").ListItemAvatarClasses, "MuiListItemAvatar", Theme>> | undefined;
        variants?: {
            props: Partial<import("@mui/material").ListItemAvatarProps> | ((props: Partial<import("@mui/material").ListItemAvatarProps> & {
                ownerState: Partial<import("@mui/material").ListItemAvatarProps>;
            }) => boolean);
            style: import("@mui/styled-engine").Interpolation<{
                theme: Theme;
            }>;
        }[] | undefined;
    };
    MuiListItemText: {
        defaultProps?: import("@mui/material/styles").ComponentsProps["MuiListItemText"];
        styleOverrides?: Partial<import("@mui/material/styles/overrides").OverridesStyleRules<keyof import("@mui/material").ListItemTextClasses, "MuiListItemText", Theme>> | undefined;
        variants?: {
            props: Partial<import("@mui/material").ListItemTextProps<"span", "p">> | ((props: Partial<import("@mui/material").ListItemTextProps<"span", "p">> & {
                ownerState: Partial<import("@mui/material").ListItemTextProps<"span", "p">>;
            }) => boolean);
            style: import("@mui/styled-engine").Interpolation<{
                theme: Theme;
            }>;
        }[] | undefined;
    };
};
