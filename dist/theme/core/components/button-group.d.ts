import type { ButtonGroupProps } from '@mui/material/ButtonGroup';
import type { Theme } from '@mui/material/styles';
declare module '@mui/material/ButtonGroup' {
    interface ButtonGroupPropsVariantOverrides {
        soft: true;
    }
}
export declare const buttonGroup: {
    MuiButtonGroup: {
        defaultProps?: import("@mui/material/styles").ComponentsProps["MuiButtonGroup"];
        styleOverrides?: Partial<import("@mui/material/styles/overrides").OverridesStyleRules<keyof import("@mui/material/ButtonGroup").ButtonGroupClasses, "MuiButtonGroup", Theme>>;
        variants?: {
            props: Partial<ButtonGroupProps> | ((props: Partial<ButtonGroupProps> & {
                ownerState: Partial<ButtonGroupProps>;
            }) => boolean);
            style: import("@mui/styled-engine").Interpolation<{
                theme: Theme;
            }>;
        }[];
    };
};
