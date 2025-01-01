'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePopover = usePopover;
var react_1 = require("react");
// ----------------------------------------------------------------------
function usePopover() {
    var _a = (0, react_1.useState)(null), anchorEl = _a[0], setAnchorEl = _a[1];
    var onOpen = (0, react_1.useCallback)(function (event) {
        setAnchorEl(event.currentTarget);
    }, []);
    var onClose = (0, react_1.useCallback)(function () {
        setAnchorEl(null);
    }, []);
    return {
        open: !!anchorEl,
        anchorEl: anchorEl,
        onOpen: onOpen,
        onClose: onClose,
        setAnchorEl: setAnchorEl,
    };
}
