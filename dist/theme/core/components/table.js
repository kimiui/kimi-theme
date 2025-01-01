"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.table = void 0;
var TableRow_1 = require("@mui/material/TableRow");
var TableCell_1 = require("@mui/material/TableCell");
var styles_1 = require("../../styles");
// ----------------------------------------------------------------------
var MuiTableContainer = {
    /** **************************************
     * STYLE
     *************************************** */
    styleOverrides: {
        root: function (_a) {
            var theme = _a.theme;
            return ({
                position: 'relative',
                scrollbarWidth: 'thin',
                scrollbarColor: "".concat((0, styles_1.varAlpha)(theme.vars.palette.text.disabledChannel, 0.4), " ").concat((0, styles_1.varAlpha)(theme.vars.palette.text.disabledChannel, 0.08)),
            });
        },
    },
};
// ----------------------------------------------------------------------
var MuiTable = {
    /** **************************************
     * STYLE
     *************************************** */
    styleOverrides: {
        root: function (_a) {
            var theme = _a.theme;
            return ({ '--palette-TableCell-border': theme.vars.palette.divider });
        },
    },
};
// ----------------------------------------------------------------------
var MuiTableRow = {
    /** **************************************
     * STYLE
     *************************************** */
    styleOverrides: {
        root: function (_a) {
            var _b, _c;
            var theme = _a.theme;
            return (_b = {},
                _b["&.".concat(TableRow_1.tableRowClasses.selected)] = {
                    backgroundColor: (0, styles_1.varAlpha)(theme.vars.palette.primary.darkChannel, 0.04),
                    '&:hover': { backgroundColor: (0, styles_1.varAlpha)(theme.vars.palette.primary.darkChannel, 0.08) },
                },
                _b['&:last-of-type'] = (_c = {}, _c["& .".concat(TableCell_1.tableCellClasses.root)] = { borderColor: 'transparent' }, _c),
                _b);
        },
    },
};
// ----------------------------------------------------------------------
var MuiTableCell = {
    /** **************************************
     * STYLE
     *************************************** */
    styleOverrides: {
        root: { borderBottomStyle: 'dashed' },
        head: function (_a) {
            var theme = _a.theme;
            return ({
                fontSize: 14,
                color: theme.vars.palette.text.secondary,
                fontWeight: theme.typography.fontWeightSemiBold,
                backgroundColor: theme.vars.palette.background.neutral,
            });
        },
        stickyHeader: function (_a) {
            var theme = _a.theme;
            return ({
                backgroundColor: theme.vars.palette.background.paper,
                backgroundImage: "linear-gradient(to bottom, ".concat(theme.vars.palette.background.neutral, " 0%, ").concat(theme.vars.palette.background.neutral, " 100%)"),
            });
        },
        paddingCheckbox: function (_a) {
            var theme = _a.theme;
            return ({ paddingLeft: theme.spacing(1) });
        },
    },
};
// ----------------------------------------------------------------------
var MuiTablePagination = {
    /** **************************************
     * DEFAULT PROPS
     *************************************** */
    defaultProps: {
        backIconButtonProps: { size: 'small' },
        nextIconButtonProps: { size: 'small' },
        slotProps: { select: { name: 'table-pagination-select' } },
    },
    /** **************************************
     * STYLE
     *************************************** */
    styleOverrides: {
        root: { width: '100%' },
        toolbar: { height: 64 },
        actions: { marginRight: 8 },
        select: function (_a) {
            var theme = _a.theme;
            return ({
                paddingLeft: 8,
                '&:focus': { borderRadius: theme.shape.borderRadius },
            });
        },
        selectIcon: {
            right: 4,
            width: 16,
            height: 16,
            top: 'calc(50% - 8px)',
        },
    },
};
// ----------------------------------------------------------------------
exports.table = {
    MuiTable: MuiTable,
    MuiTableRow: MuiTableRow,
    MuiTableCell: MuiTableCell,
    MuiTableContainer: MuiTableContainer,
    MuiTablePagination: MuiTablePagination,
};
