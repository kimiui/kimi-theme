'use client';
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SortableContainer = SortableContainer;
exports.SortableGridItem = SortableGridItem;
var jsx_runtime_1 = require("react/jsx-runtime");
var Box_1 = __importDefault(require("@mui/material/Box"));
var Stack_1 = __importDefault(require("@mui/material/Stack"));
var Portal_1 = __importDefault(require("@mui/material/Portal"));
var Button_1 = __importDefault(require("@mui/material/Button"));
var react_1 = require("react");
var sortable_1 = require("@dnd-kit/sortable");
var core_1 = require("@dnd-kit/core");
var classes_1 = require("./classes");
var sortable_item_base_1 = __importDefault(require("./sortable-item-base"));
// ----------------------------------------------------------------------
var dropAnimationConfig = {
    sideEffects: (0, core_1.defaultDropAnimationSideEffects)({ styles: { active: { opacity: '0.5' } } }),
};
function SortableContainer(_a) {
    var _b;
    var _c = _a.itemCount, itemCount = _c === void 0 ? 12 : _c, _d = _a.swap, swap = _d === void 0 ? false : _d, _e = _a.layout, layout = _e === void 0 ? 'grid' : _e;
    var createItems = __spreadArray([], Array(itemCount), true).map(function (_, index) { return index + 1; });
    var _f = (0, react_1.useState)(createItems), items = _f[0], setItems = _f[1];
    var sensors = (0, core_1.useSensors)((0, core_1.useSensor)(core_1.MouseSensor), (0, core_1.useSensor)(core_1.TouchSensor), (0, core_1.useSensor)(core_1.KeyboardSensor, { coordinateGetter: sortable_1.sortableKeyboardCoordinates }));
    var isFirstAnnouncement = (0, react_1.useRef)(true);
    var randomId = Math.floor(Math.random() * 200);
    var _g = (0, react_1.useState)(null), activeId = _g[0], setActiveId = _g[1];
    var getIndex = function (id) { return items.indexOf(id); };
    var activeIndex = activeId ? getIndex(activeId) : -1;
    var strategy = swap ? sortable_1.rectSwappingStrategy : sortable_1.rectSortingStrategy;
    var reorderItems = swap ? sortable_1.arraySwap : sortable_1.arrayMove;
    var getNewIndex = swap
        ? function (_a) {
            var id = _a.id, currentItems = _a.items, currentIndex = _a.activeIndex, overIndex = _a.overIndex;
            return reorderItems(currentItems, currentIndex, overIndex).indexOf(id);
        }
        : undefined;
    (0, react_1.useEffect)(function () {
        if (!activeId) {
            isFirstAnnouncement.current = true;
        }
    }, [activeId]);
    var handleAdd = function () {
        setItems(__spreadArray(__spreadArray([], items, true), [randomId], false));
    };
    var handleRemove = function (id) {
        var updatedItems = items.filter(function (item) { return item !== id; });
        setItems(updatedItems);
    };
    return ((0, jsx_runtime_1.jsxs)(Stack_1.default, { alignItems: "flex-end", children: [(0, jsx_runtime_1.jsx)(Button_1.default, { variant: "contained", onClick: handleAdd, children: "+ Add item" }), (0, jsx_runtime_1.jsxs)(core_1.DndContext, { id: "dnd-grid", sensors: sensors, collisionDetection: core_1.closestCenter, measuring: { droppable: { strategy: core_1.MeasuringStrategy.Always } }, onDragStart: function (_a) {
                    var active = _a.active;
                    if (!active) {
                        return;
                    }
                    setActiveId(active.id);
                }, onDragEnd: function (_a) {
                    var over = _a.over;
                    setActiveId(null);
                    if (over) {
                        var overIndex_1 = getIndex(over.id);
                        if (activeIndex !== overIndex_1) {
                            setItems(function (prev) { return reorderItems(prev, activeIndex, overIndex_1); });
                        }
                    }
                }, children: [(0, jsx_runtime_1.jsx)(sortable_1.SortableContext, { items: items, strategy: strategy, children: (0, jsx_runtime_1.jsx)(Box_1.default, { component: "ul", sx: __assign(__assign(__assign({ py: 3, gap: 2, width: 1 }, (layout === 'grid' && {
                                display: 'grid',
                                gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(4, 1fr)' },
                            })), (layout === 'vertical' && { display: 'flex', flexDirection: 'column' })), (layout === 'horizontal' && (_b = {
                                    display: 'flex',
                                    overflowX: 'auto',
                                    flexDirection: 'row'
                                },
                                _b["& .".concat(classes_1.itemClasses.itemWrap)] = { maxWidth: 180 },
                                _b))), children: items.map(function (item, index) { return ((0, jsx_runtime_1.jsx)(SortableGridItem, { id: item, index: index, getNewIndex: getNewIndex, onRemove: function () { return handleRemove(item); } }, item)); }) }) }), (0, jsx_runtime_1.jsx)(Portal_1.default, { children: (0, jsx_runtime_1.jsx)(core_1.DragOverlay, { dropAnimation: dropAnimationConfig, children: activeId ? ((0, jsx_runtime_1.jsx)(sortable_item_base_1.default, { item: items[activeIndex], stateProps: { dragOverlay: true } })) : null }) })] })] }));
}
// ----------------------------------------------------------------------
var animateLayoutChanges = function (args) {
    return (0, sortable_1.defaultAnimateLayoutChanges)(__assign(__assign({}, args), { wasDragging: true }));
};
function SortableGridItem(_a) {
    var id = _a.id, index = _a.index, onRemove = _a.onRemove, getNewIndex = _a.getNewIndex;
    var _b = (0, sortable_1.useSortable)({ id: id, getNewIndex: getNewIndex, animateLayoutChanges: animateLayoutChanges }), isSorting = _b.isSorting, transform = _b.transform, listeners = _b.listeners, attributes = _b.attributes, isDragging = _b.isDragging, setNodeRef = _b.setNodeRef, transition = _b.transition, setActivatorNodeRef = _b.setActivatorNodeRef;
    return ((0, jsx_runtime_1.jsx)(sortable_item_base_1.default, __assign({ ref: setNodeRef, item: id, "data-id": id, "data-index": index, onRemove: onRemove, stateProps: {
            listeners: listeners,
            transform: transform,
            transition: transition,
            sorting: isSorting,
            dragging: isDragging,
            dragOverlay: isDragging,
            handleProps: { ref: setActivatorNodeRef },
        } }, attributes)));
}
