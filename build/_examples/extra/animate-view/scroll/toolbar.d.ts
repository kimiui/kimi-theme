import type { StackProps } from '@mui/material/Stack';
type Props = StackProps & {
    onRefresh: () => void;
};
export declare function Toolbar({ onRefresh, ...other }: Props): import("react/jsx-runtime").JSX.Element;
export {};
