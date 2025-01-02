import type { ChipProps } from '@mui/material/Chip';
import type { SvgIconProps } from '@mui/material/SvgIcon';
import type { Theme } from '@mui/material/styles';
export type ChipExtendVariant = {
    soft: true;
};
/**
 * Icons
 * https://icon-sets.iconify.design/solar/close-circle-bold
 */
export declare const ChipDeleteIcon: (props: SvgIconProps) => import("react/jsx-runtime").JSX.Element;
declare module '@mui/material/Chip' {
    interface ChipPropsVariantOverrides {
        soft: true;
    }
}
export declare const chip: {
    MuiChip: {
        defaultProps?: import("@mui/material/styles").ComponentsProps["MuiChip"];
        styleOverrides?: Partial<import("@mui/material/styles/overrides").OverridesStyleRules<keyof import("@mui/material/Chip").ChipClasses, "MuiChip", Theme>> | undefined;
        variants?: {
            props: Partial<ChipProps> | ((props: Partial<ChipProps> & {
                ownerState: Partial<ChipProps>;
            }) => boolean);
            style: import("@mui/styled-engine").Interpolation<{
                theme: Theme;
            }>;
        }[] | undefined;
    };
};
