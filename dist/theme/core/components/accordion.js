"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.accordion = void 0;
var Accordion_1 = require("@mui/material/Accordion");
var Typography_1 = require("@mui/material/Typography");
var AccordionSummary_1 = require("@mui/material/AccordionSummary");
// ----------------------------------------------------------------------
var MuiAccordion = {
    /** **************************************
     * STYLE
     *************************************** */
    styleOverrides: {
        root: function (_a) {
            var _b;
            var theme = _a.theme;
            return (_b = {
                    backgroundColor: 'transparent'
                },
                _b["&.".concat(Accordion_1.accordionClasses.expanded)] = {
                    boxShadow: theme.shadows[8],
                    borderRadius: theme.shape.borderRadius,
                    backgroundColor: theme.vars.palette.background.paper,
                },
                _b["&.".concat(Accordion_1.accordionClasses.disabled)] = { backgroundColor: 'transparent' },
                _b);
        },
    },
};
// ----------------------------------------------------------------------
var MuiAccordionSummary = {
    /** **************************************
     * STYLE
     *************************************** */
    styleOverrides: {
        root: function (_a) {
            var _b, _c;
            var theme = _a.theme;
            return (_b = {
                    paddingLeft: theme.spacing(2),
                    paddingRight: theme.spacing(1)
                },
                _b["&.".concat(AccordionSummary_1.accordionSummaryClasses.disabled)] = (_c = {
                        opacity: 1,
                        color: theme.vars.palette.action.disabled
                    },
                    _c["& .".concat(Typography_1.typographyClasses.root)] = { color: 'inherit' },
                    _c),
                _b);
        },
        expandIconWrapper: { color: 'inherit' },
    },
};
// ----------------------------------------------------------------------
exports.accordion = { MuiAccordion: MuiAccordion, MuiAccordionSummary: MuiAccordionSummary };
