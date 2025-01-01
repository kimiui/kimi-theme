import type { Theme, SxProps } from '@mui/material/styles';
export type RoleBasedGuardProp = {
    sx?: SxProps<Theme>;
    currentRole: string;
    hasContent?: boolean;
    acceptRoles: string[];
    children: React.ReactNode;
};
export declare function RoleBasedGuard({ sx, children, hasContent, currentRole, acceptRoles, }: Readonly<RoleBasedGuardProp>): import("react/jsx-runtime").JSX.Element;
