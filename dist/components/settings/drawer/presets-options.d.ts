import type { SettingsState } from '../types';
type Value = SettingsState['primaryColor'];
type Props = {
    value: Value;
    options: {
        name: Value;
        value: string;
    }[];
    onClickOption: (newValue: Value) => void;
};
export declare function PresetsOptions({ value, options, onClickOption }: Readonly<Props>): import("react/jsx-runtime").JSX.Element;
export {};
