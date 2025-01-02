import type { BoxProps } from '@mui/material/Box';
import type { CollapseProps } from '@mui/material/Collapse';
import type { ListSubheaderProps } from '@mui/material/ListSubheader';
export declare function stateClasses({ open, active, disabled, }: {
    open?: boolean;
    active?: boolean;
    disabled?: boolean;
}): string;
export declare const sharedStyles: {
    readonly icon: {
        readonly [x: string]: 0 | "inline-flex" | {
            readonly width: "100%";
            readonly height: "100%";
        };
        readonly flexShrink: 0;
        readonly display: "inline-flex";
    };
    readonly arrow: {
        readonly width: 16;
        readonly height: 16;
        readonly flexShrink: 0;
        readonly marginLeft: "6px";
        readonly display: "inline-flex";
    };
    readonly info: {
        readonly fontSize: 12;
        readonly flexShrink: 0;
        readonly fontWeight: 600;
        readonly marginLeft: "6px";
        readonly lineHeight: number;
        readonly display: "inline-flex";
    };
    readonly noWrap: {
        readonly width: "100%";
        readonly maxWidth: "100%";
        readonly display: "block";
        readonly overflow: "hidden";
        readonly whiteSpace: "nowrap";
        readonly textOverflow: "ellipsis";
    };
    readonly disabled: {
        readonly opacity: 0.48;
        readonly pointerEvents: "none";
    };
};
export declare function Subheader({ sx, open, children, ...other }: ListSubheaderProps & {
    open?: boolean;
}): import("react/jsx-runtime").JSX.Element;
export declare function NavCollapse({ sx, depth, children, ...other }: CollapseProps & {
    depth: number;
}): import("react/jsx-runtime").JSX.Element;
export declare function NavLi({ sx, children, disabled, }: BoxProps & {
    disabled?: boolean;
}): import("react/jsx-runtime").JSX.Element;
export declare function NavUl({ children, sx }: BoxProps): import("react/jsx-runtime").JSX.Element;
