import type { Theme, SxProps } from '@mui/material/styles';
import type { OrgChartBaseNode } from '../../../components/organizational-chart';
export type NodeProps = OrgChartBaseNode & {
    id?: string;
    name: string;
    group?: string;
    role?: string;
    avatarUrl?: string;
    children?: any;
    sx?: SxProps<Theme>;
};
export declare const SIMPLE_DATA: {
    children: ({
        role: string;
        id: string;
        name: string;
        avatarUrl: string;
        children: {
            role: string;
            id: string;
            name: string;
            avatarUrl: string;
        }[];
    } | {
        role: string;
        id: string;
        name: string;
        avatarUrl: string;
        children: {
            role: string;
            id: string;
            name: string;
            avatarUrl: string;
            children: ({
                role: string;
                id: string;
                name: string;
                avatarUrl: string;
                children: {
                    role: string;
                    id: string;
                    name: string;
                    avatarUrl: string;
                }[];
            } | {
                role: string;
                id: string;
                name: string;
                avatarUrl: string;
                children?: undefined;
            })[];
        }[];
    })[];
    group: string;
    role: string;
    name: string;
    avatarUrl: string;
};
export declare const GROUP_DATA: {
    children: ({
        name: string;
        group: string;
        children: {
            group: string;
            role: string;
            id: string;
            name: string;
            avatarUrl: string;
            children: {
                group: string;
                role: string;
                id: string;
                name: string;
                avatarUrl: string;
            }[];
        }[];
    } | {
        name: string;
        group: string;
        children: {
            group: string;
            role: string;
            id: string;
            name: string;
            avatarUrl: string;
            children: {
                group: string;
                role: string;
                id: string;
                name: string;
                avatarUrl: string;
                children: ({
                    group: string;
                    role: string;
                    id: string;
                    name: string;
                    avatarUrl: string;
                    children: {
                        group: string;
                        role: string;
                        id: string;
                        name: string;
                        avatarUrl: string;
                    }[];
                } | {
                    group: string;
                    role: string;
                    id: string;
                    name: string;
                    avatarUrl: string;
                    children?: undefined;
                })[];
            }[];
        }[];
    })[];
    group: string;
    role: string;
    name: string;
    avatarUrl: string;
};
