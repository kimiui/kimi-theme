import type { SvgIconProps } from '@mui/material/SvgIcon';
import type { Theme } from '@mui/material/styles';
/**
 * Icons
 */
export declare const RatingIcon: (props: SvgIconProps) => import("react/jsx-runtime").JSX.Element;
export declare const rating: {
    MuiRating: {
        defaultProps?: import("@mui/material/styles").ComponentsProps["MuiRating"];
        styleOverrides?: Partial<import("@mui/material/styles/overrides").OverridesStyleRules<keyof import("@mui/material/Rating").RatingClasses, "MuiRating", Theme>> | undefined;
        variants?: {
            props: Partial<import("@mui/material/Rating").RatingProps> | ((props: Partial<import("@mui/material/Rating").RatingProps> & {
                ownerState: Partial<import("@mui/material/Rating").RatingProps>;
            }) => boolean);
            style: import("@mui/styled-engine").Interpolation<{
                theme: Theme;
            }>;
        }[] | undefined;
    };
};
