export declare const Editor: import("react").ForwardRefExoticComponent<Partial<import("@tiptap/react").EditorOptions> & {
    value?: string;
    error?: boolean;
    fullItem?: boolean;
    resetValue?: boolean;
    sx?: import("@mui/system").SxProps<import("@mui/material").Theme>;
    placeholder?: string;
    helperText?: React.ReactNode;
    onChange?: (value: string) => void;
    slotProps?: {
        wrap: import("@mui/system").SxProps<import("@mui/material").Theme>;
    };
} & import("react").RefAttributes<HTMLDivElement>>;
