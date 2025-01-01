import type { ButtonProps } from '@mui/material/Button';
import type { Theme, SxProps } from '@mui/material/styles';
type Props = ButtonProps & {
    sx?: SxProps<Theme>;
    onClose?: () => void;
    onSignOut?: VoidFunction;
};
export declare function SignOutButton({ onClose, onSignOut, ...other }: Props): import("react/jsx-runtime").JSX.Element;
export {};
