import type { Theme } from '@mui/material/styles';
export declare const stepper: {
    MuiStepConnector: {
        defaultProps?: import("@mui/material/styles").ComponentsProps["MuiStepConnector"];
        styleOverrides?: Partial<import("@mui/material/styles/overrides").OverridesStyleRules<keyof import("@mui/material").StepConnectorClasses, "MuiStepConnector", Theme>> | undefined;
        variants?: {
            props: Partial<import("@mui/material").StepConnectorProps> | ((props: Partial<import("@mui/material").StepConnectorProps> & {
                ownerState: Partial<import("@mui/material").StepConnectorProps>;
            }) => boolean);
            style: import("@mui/styled-engine").Interpolation<{
                theme: Theme;
            }>;
        }[] | undefined;
    };
};
