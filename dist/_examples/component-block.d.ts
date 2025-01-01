import type { StackProps } from '@mui/material/Stack';
import type { ContainerProps } from '@mui/material/Container';
type ComponentBlockProps = StackProps & {
    title?: string;
};
export declare function ComponentBlock({ title, sx, children, ...other }: ComponentBlockProps): import("react/jsx-runtime").JSX.Element;
export declare function ComponentContainer({ children, sx, ...other }: ContainerProps): import("react/jsx-runtime").JSX.Element;
export {};
