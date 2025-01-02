import type { UploadProps } from '../upload';
type Props = UploadProps & {
    name: string;
};
export declare function RHFUploadAvatar({ name, ...other }: Props): import("react/jsx-runtime").JSX.Element;
export declare function RHFUploadBox({ name, ...other }: Props): import("react/jsx-runtime").JSX.Element;
export declare function RHFUpload({ name, multiple, helperText, ...other }: Props): import("react/jsx-runtime").JSX.Element;
export {};
