'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDateRangePicker = useDateRangePicker;
var react_1 = require("react");
var format_time_1 = require("lib/utils/format-time");
// ----------------------------------------------------------------------
function useDateRangePicker(start, end) {
    var _a = (0, react_1.useState)(false), open = _a[0], setOpen = _a[1];
    var _b = (0, react_1.useState)(end), endDate = _b[0], setEndDate = _b[1];
    var _c = (0, react_1.useState)(start), startDate = _c[0], setStartDate = _c[1];
    var error = (0, format_time_1.fIsAfter)(startDate, endDate);
    var onOpen = (0, react_1.useCallback)(function () {
        setOpen(true);
    }, []);
    var onClose = (0, react_1.useCallback)(function () {
        setOpen(false);
    }, []);
    var onChangeStartDate = (0, react_1.useCallback)(function (newValue) {
        setStartDate(newValue);
    }, []);
    var onChangeEndDate = (0, react_1.useCallback)(function (newValue) {
        if (error) {
            setEndDate(null);
        }
        setEndDate(newValue);
    }, [error]);
    var onReset = (0, react_1.useCallback)(function () {
        setStartDate(null);
        setEndDate(null);
    }, []);
    return {
        startDate: startDate,
        endDate: endDate,
        onChangeStartDate: onChangeStartDate,
        onChangeEndDate: onChangeEndDate,
        //
        open: open,
        onOpen: onOpen,
        onClose: onClose,
        onReset: onReset,
        //
        selected: !!startDate && !!endDate,
        error: error,
        //
        label: (0, format_time_1.fDateRangeShortLabel)(startDate, endDate, true),
        shortLabel: (0, format_time_1.fDateRangeShortLabel)(startDate, endDate),
        //
        setStartDate: setStartDate,
        setEndDate: setEndDate,
    };
}
