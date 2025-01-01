'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useLightBox = useLightBox;
var react_1 = require("react");
// ----------------------------------------------------------------------
function useLightBox(slides) {
    var _a = (0, react_1.useState)(-1), selected = _a[0], setSelected = _a[1];
    var handleOpen = (0, react_1.useCallback)(function (slideUrl) {
        var slideIndex = slides.findIndex(function (slide) {
            return slide.type === 'video'
                ? slide.poster === slideUrl
                : slide.src === slideUrl;
        });
        setSelected(slideIndex);
    }, [slides]);
    var handleClose = (0, react_1.useCallback)(function () {
        setSelected(-1);
    }, []);
    return {
        selected: selected,
        open: selected >= 0,
        onOpen: handleOpen,
        onClose: handleClose,
        setSelected: setSelected,
    };
}
