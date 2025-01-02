type StepperProps = {
    steps: string[];
    activeStep: number;
};
export declare function Stepper({ steps, activeStep }: StepperProps): import("react/jsx-runtime").JSX.Element;
export declare function StepOne(): import("react/jsx-runtime").JSX.Element;
export declare function StepTwo(): import("react/jsx-runtime").JSX.Element;
export declare function StepThree(): import("react/jsx-runtime").JSX.Element;
export declare function StepCompleted({ onReset }: {
    onReset: () => void;
}): import("react/jsx-runtime").JSX.Element;
export {};
