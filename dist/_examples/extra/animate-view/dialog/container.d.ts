import type { StackProps } from '@mui/material/Stack';
type Props = StackProps & {
    open: boolean;
    onOpen: () => void;
    onClose: () => void;
    selectVariant: string;
};
export declare function ContainerView({ open, onOpen, onClose, selectVariant, sx, ...other }: Props): import("react/jsx-runtime").JSX.Element;
export {};
