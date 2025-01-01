import type { UniqueIdentifier } from '@dnd-kit/core';
import type { NewIndexGetter } from '@dnd-kit/sortable';
type Props = {
    swap?: boolean;
    itemCount?: number;
    layout?: 'grid' | 'vertical' | 'horizontal';
};
export declare function SortableContainer({ itemCount, swap, layout }: Props): import("react/jsx-runtime").JSX.Element;
interface SortableItemProps {
    index: number;
    id: UniqueIdentifier;
    getNewIndex?: NewIndexGetter;
    onRemove?: () => void;
}
export declare function SortableGridItem({ id, index, onRemove, getNewIndex }: SortableItemProps): import("react/jsx-runtime").JSX.Element;
export {};
