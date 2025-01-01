import type { StackProps } from '@mui/material/Stack';
type Props = StackProps & {
    variantKey: {
        type: string;
        values: string[];
    }[];
    selectVariant: string;
    onChangeVariant: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
export declare function ControlPanel({ variantKey, selectVariant, onChangeVariant, sx, ...other }: Props): import("react/jsx-runtime").JSX.Element;
export {};
