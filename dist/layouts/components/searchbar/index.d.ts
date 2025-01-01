import type { BoxProps } from '@mui/material/Box';
import type { NavSectionProps } from 'lib/components/nav-section';
export type SearchbarProps = BoxProps & {
    data?: NavSectionProps['data'];
};
export declare function Searchbar({ data: navItems, sx, ...other }: SearchbarProps): import("react/jsx-runtime").JSX.Element;
