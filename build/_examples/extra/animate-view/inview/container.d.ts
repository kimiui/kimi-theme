import type { StackProps } from '@mui/material/Stack';
type Props = StackProps & {
    isText: boolean;
    isMulti: boolean;
    selectVariant: string;
};
export declare function ContainerView({ isText, isMulti, selectVariant, sx, ...other }: Props): import("react/jsx-runtime").JSX.Element;
export {};
