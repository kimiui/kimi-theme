import type { ButtonProps } from '@mui/material/Button';
import type { Theme, SxProps } from '@mui/material/styles';
type Props = ButtonProps & {
    sx?: SxProps<Theme>;
    onClose?: () => void;
};
export declare function SignOutButton({ onClose, ...other }: Props): import("react/jsx-runtime").JSX.Element;
export {};
