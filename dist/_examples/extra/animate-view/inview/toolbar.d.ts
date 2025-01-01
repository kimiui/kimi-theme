import type { StackProps } from '@mui/material/Stack';
type ToolbarProps = StackProps & {
    isText: boolean;
    isMulti: boolean;
    onChangeText: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onChangeMulti: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onRefresh: () => void;
};
export declare function Toolbar({ isText, isMulti, onChangeText, onChangeMulti, onRefresh, ...other }: ToolbarProps): import("react/jsx-runtime").JSX.Element;
export {};
