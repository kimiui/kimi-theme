import type { PhoneInputProps } from '../phone-input';
type Props = Omit<PhoneInputProps, 'value' | 'onChange'> & {
    name: string;
};
export declare function RHFPhoneInput({ name, helperText, ...other }: Props): import("react/jsx-runtime").JSX.Element;
export {};
