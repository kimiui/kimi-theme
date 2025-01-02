import type { Theme } from '@mui/material/styles';
export type BadgeExtendVariant = {
    always: true;
    busy: true;
    online: true;
    offline: true;
    invisible: true;
};
declare module '@mui/material/Badge' {
    interface BadgePropsVariantOverrides {
        alway: true;
        busy: true;
        online: true;
        offline: true;
        invisible: true;
    }
}
export declare const badge: {
    MuiBadge: {
        defaultProps?: import("@mui/material/styles").ComponentsProps["MuiBadge"];
        styleOverrides?: Partial<import("@mui/material/styles/overrides").OverridesStyleRules<keyof import("@mui/material/Badge").BadgeClasses, "MuiBadge", Theme>>;
        variants?: {
            props: Partial<import("@mui/material/Badge").BadgeProps> | ((props: Partial<import("@mui/material/Badge").BadgeProps> & {
                ownerState: Partial<import("@mui/material/Badge").BadgeProps>;
            }) => boolean);
            style: import("@mui/styled-engine").Interpolation<{
                theme: Theme;
            }>;
        }[];
    };
};
