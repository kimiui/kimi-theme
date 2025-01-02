import type { NavSectionProps, NavItemBaseProps } from '../../../components/nav-section';
type ItemProps = {
    group: string;
    title: string;
    path: string;
};
export declare function getAllItems({ data }: {
    data: NavSectionProps['data'];
}): {
    group: any;
    title: any;
    path: any;
}[];
type ApplyFilterProps = {
    inputData: ItemProps[];
    query: string;
};
export declare function applyFilter({ inputData, query }: ApplyFilterProps): ItemProps[];
export declare function splitPath(array: NavItemBaseProps[], key: string): string[];
export declare function handleLoop(array: any, subheader?: string): any;
type GroupsProps = {
    [key: string]: ItemProps[];
};
export declare function groupItems(array: ItemProps[]): GroupsProps;
export {};
