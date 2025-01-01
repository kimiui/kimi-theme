'use client';
"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTable = useTable;
var react_1 = require("react");
function useTable(props) {
    var _a = (0, react_1.useState)(!!(props === null || props === void 0 ? void 0 : props.defaultDense)), dense = _a[0], setDense = _a[1];
    var _b = (0, react_1.useState)((props === null || props === void 0 ? void 0 : props.defaultCurrentPage) || 0), page = _b[0], setPage = _b[1];
    var _c = (0, react_1.useState)((props === null || props === void 0 ? void 0 : props.defaultOrderBy) || 'name'), orderBy = _c[0], setOrderBy = _c[1];
    var _d = (0, react_1.useState)((props === null || props === void 0 ? void 0 : props.defaultRowsPerPage) || 5), rowsPerPage = _d[0], setRowsPerPage = _d[1];
    var _e = (0, react_1.useState)((props === null || props === void 0 ? void 0 : props.defaultOrder) || 'asc'), order = _e[0], setOrder = _e[1];
    var _f = (0, react_1.useState)((props === null || props === void 0 ? void 0 : props.defaultSelected) || []), selected = _f[0], setSelected = _f[1];
    var onSort = (0, react_1.useCallback)(function (id) {
        var isAsc = orderBy === id && order === 'asc';
        if (id !== '') {
            setOrder(isAsc ? 'desc' : 'asc');
            setOrderBy(id);
        }
    }, [order, orderBy]);
    var onSelectRow = (0, react_1.useCallback)(function (inputValue) {
        var newSelected = selected.includes(inputValue)
            ? selected.filter(function (value) { return value !== inputValue; })
            : __spreadArray(__spreadArray([], selected, true), [inputValue], false);
        setSelected(newSelected);
    }, [selected]);
    var onChangeRowsPerPage = (0, react_1.useCallback)(function (event) {
        setPage(0);
        setRowsPerPage(parseInt(event.target.value, 10));
    }, []);
    var onChangeDense = (0, react_1.useCallback)(function (event) {
        setDense(event.target.checked);
    }, []);
    var onSelectAllRows = (0, react_1.useCallback)(function (checked, inputValue) {
        if (checked) {
            setSelected(inputValue);
            return;
        }
        setSelected([]);
    }, []);
    var onChangePage = (0, react_1.useCallback)(function (event, newPage) {
        setPage(newPage);
    }, []);
    var onResetPage = (0, react_1.useCallback)(function () {
        setPage(0);
    }, []);
    var onUpdatePageDeleteRow = (0, react_1.useCallback)(function (totalRowsInPage) {
        setSelected([]);
        if (page) {
            if (totalRowsInPage < 2) {
                setPage(page - 1);
            }
        }
    }, [page]);
    var onUpdatePageDeleteRows = (0, react_1.useCallback)(function (_a) {
        var totalRowsInPage = _a.totalRowsInPage, totalRowsFiltered = _a.totalRowsFiltered;
        var totalSelected = selected.length;
        setSelected([]);
        if (page) {
            if (totalSelected === totalRowsInPage) {
                setPage(page - 1);
            }
            else if (totalSelected === totalRowsFiltered) {
                setPage(0);
            }
            else if (totalSelected > totalRowsInPage) {
                var newPage = Math.ceil((totalRowsFiltered - totalSelected) / rowsPerPage) - 1;
                setPage(newPage);
            }
        }
    }, [page, rowsPerPage, selected.length]);
    return {
        dense: dense,
        order: order,
        page: page,
        orderBy: orderBy,
        rowsPerPage: rowsPerPage,
        //
        selected: selected,
        onSelectRow: onSelectRow,
        onSelectAllRows: onSelectAllRows,
        //
        onSort: onSort,
        onChangePage: onChangePage,
        onChangeDense: onChangeDense,
        onResetPage: onResetPage,
        onChangeRowsPerPage: onChangeRowsPerPage,
        onUpdatePageDeleteRow: onUpdatePageDeleteRow,
        onUpdatePageDeleteRows: onUpdatePageDeleteRows,
        //
        setPage: setPage,
        setDense: setDense,
        setOrder: setOrder,
        setOrderBy: setOrderBy,
        setSelected: setSelected,
        setRowsPerPage: setRowsPerPage,
    };
}
