'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Portal from '@mui/material/Portal';
import Button from '@mui/material/Button';
import { useRef, useState, useEffect } from 'react';
import { arraySwap, arrayMove, useSortable, SortableContext, rectSortingStrategy, rectSwappingStrategy, sortableKeyboardCoordinates, defaultAnimateLayoutChanges, } from '@dnd-kit/sortable';
import { useSensor, DndContext, useSensors, DragOverlay, MouseSensor, TouchSensor, closestCenter, KeyboardSensor, MeasuringStrategy, defaultDropAnimationSideEffects, } from '@dnd-kit/core';
import { itemClasses } from './classes';
import ItemBase from './sortable-item-base';
// ----------------------------------------------------------------------
const dropAnimationConfig = {
    sideEffects: defaultDropAnimationSideEffects({ styles: { active: { opacity: '0.5' } } }),
};
export function SortableContainer({ itemCount = 12, swap = false, layout = 'grid' }) {
    const createItems = [...Array(itemCount)].map((_, index) => index + 1);
    const [items, setItems] = useState(createItems);
    const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor), useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates }));
    const isFirstAnnouncement = useRef(true);
    const randomId = Math.floor(Math.random() * 200);
    const [activeId, setActiveId] = useState(null);
    const getIndex = (id) => items.indexOf(id);
    const activeIndex = activeId ? getIndex(activeId) : -1;
    const strategy = swap ? rectSwappingStrategy : rectSortingStrategy;
    const reorderItems = swap ? arraySwap : arrayMove;
    const getNewIndex = swap
        ? ({ id, items: currentItems, activeIndex: currentIndex, overIndex, }) => reorderItems(currentItems, currentIndex, overIndex).indexOf(id)
        : undefined;
    useEffect(() => {
        if (!activeId) {
            isFirstAnnouncement.current = true;
        }
    }, [activeId]);
    const handleAdd = () => {
        setItems([...items, randomId]);
    };
    const handleRemove = (id) => {
        const updatedItems = items.filter((item) => item !== id);
        setItems(updatedItems);
    };
    return (_jsxs(Stack, { alignItems: "flex-end", children: [_jsx(Button, { variant: "contained", onClick: handleAdd, children: "+ Add item" }), _jsxs(DndContext, { id: "dnd-grid", sensors: sensors, collisionDetection: closestCenter, measuring: { droppable: { strategy: MeasuringStrategy.Always } }, onDragStart: ({ active }) => {
                    if (!active) {
                        return;
                    }
                    setActiveId(active.id);
                }, onDragEnd: ({ over }) => {
                    setActiveId(null);
                    if (over) {
                        const overIndex = getIndex(over.id);
                        if (activeIndex !== overIndex) {
                            setItems((prev) => reorderItems(prev, activeIndex, overIndex));
                        }
                    }
                }, children: [_jsx(SortableContext, { items: items, strategy: strategy, children: _jsx(Box, { component: "ul", sx: {
                                py: 3,
                                gap: 2,
                                width: 1,
                                ...(layout === 'grid' && {
                                    display: 'grid',
                                    gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(4, 1fr)' },
                                }),
                                ...(layout === 'vertical' && { display: 'flex', flexDirection: 'column' }),
                                ...(layout === 'horizontal' && {
                                    display: 'flex',
                                    overflowX: 'auto',
                                    flexDirection: 'row',
                                    [`& .${itemClasses.itemWrap}`]: { maxWidth: 180 },
                                }),
                            }, children: items.map((item, index) => (_jsx(SortableGridItem, { id: item, index: index, getNewIndex: getNewIndex, onRemove: () => handleRemove(item) }, item))) }) }), _jsx(Portal, { children: _jsx(DragOverlay, { dropAnimation: dropAnimationConfig, children: activeId ? (_jsx(ItemBase, { item: items[activeIndex], stateProps: { dragOverlay: true } })) : null }) })] })] }));
}
// ----------------------------------------------------------------------
const animateLayoutChanges = (args) => defaultAnimateLayoutChanges({ ...args, wasDragging: true });
export function SortableGridItem({ id, index, onRemove, getNewIndex }) {
    const { isSorting, transform, listeners, attributes, isDragging, setNodeRef, transition, setActivatorNodeRef, } = useSortable({ id, getNewIndex, animateLayoutChanges });
    return (_jsx(ItemBase, { ref: setNodeRef, item: id, "data-id": id, "data-index": index, onRemove: onRemove, stateProps: {
            listeners,
            transform,
            transition,
            sorting: isSorting,
            dragging: isDragging,
            dragOverlay: isDragging,
            handleProps: { ref: setActivatorNodeRef },
        }, ...attributes }));
}
