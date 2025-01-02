import { type Theme, type SxProps } from '@mui/material/styles';
export type AuthLayoutProps = {
    sx?: SxProps<Theme>;
    children: React.ReactNode;
};
export default function AuthLayout({ sx, children }: Readonly<AuthLayoutProps>): import("react/jsx-runtime").JSX.Element;
