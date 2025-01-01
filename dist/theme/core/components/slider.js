"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.slider = void 0;
var Slider_1 = require("@mui/material/Slider");
var styles_1 = require("../../styles");
// ----------------------------------------------------------------------
var SIZE = {
    rail: { small: 6, medium: 10 },
    thumb: { small: 16, medium: 20 },
    mark: { small: 4, medium: 6 },
};
var MuiSlider = {
    /** **************************************
     * DEFAULT PROPS
     *************************************** */
    defaultProps: { size: 'small' },
    /** **************************************
     * VARIANTS
     *************************************** */
    variants: [
        /**
         * @color inherit
         */
        {
            props: function (_a) {
                var ownerState = _a.ownerState;
                return ownerState.color === 'inherit';
            },
            style: function (_a) {
                var _b, _c;
                var theme = _a.theme;
                return (_b = {},
                    _b["& .".concat(Slider_1.sliderClasses.markActive)] = (_c = {},
                        _c[styles_1.stylesMode.dark] = {
                            backgroundColor: (0, styles_1.varAlpha)(theme.vars.palette.grey['800Channel'], 0.48),
                        },
                        _c),
                    _b);
            },
        },
        /**
         * @state disabled
         */
        {
            props: function (_a) {
                var ownerState = _a.ownerState;
                return !!ownerState.disabled;
            },
            style: function (_a) {
                var _b;
                var theme = _a.theme;
                return (_b = {},
                    _b["&.".concat(Slider_1.sliderClasses.disabled)] = {
                        color: (0, styles_1.varAlpha)(theme.vars.palette.grey['500Channel'], theme.vars.palette.action.disabledOpacity),
                    },
                    _b);
            },
        },
    ],
    /** **************************************
     * STYLE
     *************************************** */
    styleOverrides: {
        root: function (_a) {
            var _b, _c;
            var theme = _a.theme;
            return (_b = {},
                _b["& .".concat(Slider_1.sliderClasses.thumb)] = {
                    borderWidth: 1,
                    borderStyle: 'solid',
                    width: SIZE.thumb.medium,
                    height: SIZE.thumb.medium,
                    boxShadow: theme.shadows[1],
                    color: theme.vars.palette.common.white,
                    borderColor: (0, styles_1.varAlpha)(theme.vars.palette.grey['500Channel'], 0.08),
                    '&::before': (_c = {
                            opacity: 0.4,
                            boxShadow: 'none',
                            width: 'calc(100% - 4px)',
                            height: 'calc(100% - 4px)',
                            backgroundImage: "linear-gradient(180deg, ".concat(theme.vars.palette.grey[500], " 0%, ").concat((0, styles_1.varAlpha)(theme.vars.palette.grey['500Channel'], 0), " 100%)")
                        },
                        _c[styles_1.stylesMode.dark] = { opacity: 0.8 },
                        _c),
                },
                _b);
        },
        rail: function (_a) {
            var theme = _a.theme;
            return ({
                opacity: 0.12,
                height: SIZE.rail.medium,
                backgroundColor: theme.vars.palette.grey[500],
            });
        },
        track: { height: SIZE.rail.medium },
        mark: function (_a) {
            var theme = _a.theme;
            return ({
                width: 1,
                height: SIZE.mark.medium,
                backgroundColor: (0, styles_1.varAlpha)(theme.vars.palette.grey['500Channel'], 0.48),
                '&[data-index="0"]': { display: 'none' },
            });
        },
        markActive: function (_a) {
            var theme = _a.theme;
            return ({
                backgroundColor: (0, styles_1.varAlpha)(theme.vars.palette.common.whiteChannel, 0.64),
            });
        },
        markLabel: function (_a) {
            var theme = _a.theme;
            return ({
                fontSize: theme.typography.pxToRem(13),
                color: theme.vars.palette.text.disabled,
            });
        },
        valueLabel: function (_a) {
            var _b;
            var theme = _a.theme;
            return (_b = {
                    borderRadius: 8,
                    backgroundColor: theme.vars.palette.grey[800]
                },
                _b[styles_1.stylesMode.dark] = { backgroundColor: theme.vars.palette.grey[700] },
                _b);
        },
        sizeSmall: (_a = {},
            _a["& .".concat(Slider_1.sliderClasses.thumb)] = { width: SIZE.thumb.small, height: SIZE.thumb.small },
            _a["& .".concat(Slider_1.sliderClasses.rail)] = { height: SIZE.rail.small },
            _a["& .".concat(Slider_1.sliderClasses.track)] = { height: SIZE.rail.small },
            _a["& .".concat(Slider_1.sliderClasses.mark)] = { height: SIZE.mark.small },
            _a),
    },
};
// ----------------------------------------------------------------------
exports.slider = {
    MuiSlider: MuiSlider,
};
