type Props = {
    startTime: number;
    endTime: number;
    allDays: boolean;
    selectedTime: number;
    onChangeTime: (value: number) => void;
    onChangeAllDays: (value: boolean) => void;
};
export declare function ControlPanel({ startTime, endTime, allDays, selectedTime, onChangeTime, onChangeAllDays, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
