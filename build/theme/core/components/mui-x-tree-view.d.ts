import type { Theme } from '@mui/material/styles';
export declare const treeView: {
    MuiTreeItem: {
        defaultProps?: import("@mui/material/styles").ComponentsProps["MuiTreeItem"];
        styleOverrides?: Partial<import("@mui/material/styles/overrides").OverridesStyleRules<keyof import("@mui/x-tree-view/TreeItem").TreeItemClasses, "MuiTreeItem", Theme>>;
        variants?: {
            props: Partial<import("@mui/x-tree-view/TreeItem").TreeItemProps> | ((props: Partial<import("@mui/x-tree-view/TreeItem").TreeItemProps> & {
                ownerState: Partial<import("@mui/x-tree-view/TreeItem").TreeItemProps>;
            }) => boolean);
            style: import("@mui/styled-engine").Interpolation<{
                theme: Theme;
            }>;
        }[];
    };
};
