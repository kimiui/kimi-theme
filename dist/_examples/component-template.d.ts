import type { StackProps } from '@mui/material/Stack';
import type { Theme, SxProps } from '@mui/material/styles';
import type { ContainerProps } from '@mui/material/Container';
type Props = StackProps & {
    offsetValue?: number;
    queryClassName?: string;
    slotProps?: {
        nav?: SxProps<Theme>;
        section?: SxProps<Theme>;
        container?: ContainerProps;
    };
    data: {
        name: string;
        component: React.ReactNode;
    }[];
};
export declare function ScrollToViewTemplate({ sx, data, slotProps, offsetValue, // 0 ~ 1 => 0% => 100%
queryClassName, ...other }: Props): import("react/jsx-runtime").JSX.Element;
export {};
