import type { Theme } from '@mui/material/styles';
declare module '@mui/material/AvatarGroup' {
    interface AvatarGroupPropsVariantOverrides {
        compact: true;
    }
}
export declare const avatar: {
    MuiAvatar: {
        defaultProps?: import("@mui/material/styles").ComponentsProps["MuiAvatar"];
        styleOverrides?: Partial<import("@mui/material/styles/overrides").OverridesStyleRules<keyof import("@mui/material").AvatarClasses, "MuiAvatar", Theme>>;
        variants?: {
            props: Partial<import("@mui/material").AvatarProps> | ((props: Partial<import("@mui/material").AvatarProps> & {
                ownerState: Partial<import("@mui/material").AvatarProps>;
            }) => boolean);
            style: import("@mui/styled-engine").Interpolation<{
                theme: Theme;
            }>;
        }[];
    };
    MuiAvatarGroup: {
        defaultProps?: import("@mui/material/styles").ComponentsProps["MuiAvatarGroup"];
        styleOverrides?: Partial<import("@mui/material/styles/overrides").OverridesStyleRules<keyof import("@mui/material/AvatarGroup").AvatarGroupClasses, "MuiAvatarGroup", Theme>>;
        variants?: {
            props: Partial<import("@mui/material/AvatarGroup").AvatarGroupProps> | ((props: Partial<import("@mui/material/AvatarGroup").AvatarGroupProps> & {
                ownerState: Partial<import("@mui/material/AvatarGroup").AvatarGroupProps>;
            }) => boolean);
            style: import("@mui/styled-engine").Interpolation<{
                theme: Theme;
            }>;
        }[];
    };
};
