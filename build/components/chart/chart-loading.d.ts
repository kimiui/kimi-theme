import type { BoxProps } from '@mui/material/Box';
import type { ChartBaseProps } from './types';
type Props = BoxProps & {
    type: ChartBaseProps['type'];
};
export declare function ChartLoading({ sx, type, ...other }: Props): import("react/jsx-runtime").JSX.Element;
export {};
