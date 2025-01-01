import type { Theme } from '@mui/material/styles';
export declare const accordion: {
    MuiAccordion: {
        defaultProps?: import("@mui/material/styles").ComponentsProps["MuiAccordion"];
        styleOverrides?: Partial<import("@mui/material/styles/overrides").OverridesStyleRules<keyof import("@mui/material/Accordion").AccordionClasses, "MuiAccordion", Theme>>;
        variants?: {
            props: Partial<import("@mui/material/Accordion").AccordionProps> | ((props: Partial<import("@mui/material/Accordion").AccordionProps> & {
                ownerState: Partial<import("@mui/material/Accordion").AccordionProps>;
            }) => boolean);
            style: import("@mui/styled-engine").Interpolation<{
                theme: Theme;
            }>;
        }[];
    };
    MuiAccordionSummary: {
        defaultProps?: import("@mui/material/styles").ComponentsProps["MuiAccordionSummary"];
        styleOverrides?: Partial<import("@mui/material/styles/overrides").OverridesStyleRules<keyof import("@mui/material/AccordionSummary").AccordionSummaryClasses, "MuiAccordionSummary", Theme>>;
        variants?: {
            props: Partial<import("@mui/material/AccordionSummary").AccordionSummaryProps> | ((props: Partial<import("@mui/material/AccordionSummary").AccordionSummaryProps> & {
                ownerState: Partial<import("@mui/material/AccordionSummary").AccordionSummaryProps>;
            }) => boolean);
            style: import("@mui/styled-engine").Interpolation<{
                theme: Theme;
            }>;
        }[];
    };
};
