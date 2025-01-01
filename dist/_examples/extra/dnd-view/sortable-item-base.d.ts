import type { Transform } from '@dnd-kit/utilities';
import type { StackProps } from '@mui/material/Stack';
import type { UniqueIdentifier, DraggableSyntheticListeners } from '@dnd-kit/core';
export declare const StyledItemWrap: any;
export declare const StyledItem: any;
type ItemBaseProps = StackProps & {
    item: UniqueIdentifier;
    onRemove?: () => void;
    stateProps?: {
        sorting?: boolean;
        dragging?: boolean;
        dragOverlay?: boolean;
        transition?: string | null;
        transform?: Transform | null;
        listeners?: DraggableSyntheticListeners;
        handleProps?: any;
    };
};
declare const _default: import("react").NamedExoticComponent<Omit<ItemBaseProps, "ref"> & import("react").RefAttributes<HTMLLIElement>>;
export default _default;
