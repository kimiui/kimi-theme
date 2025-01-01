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
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledArrow = void 0;
var styles_1 = require("@mui/material/styles");
var styles_2 = require("../../theme/styles");
// ----------------------------------------------------------------------
exports.StyledArrow = (0, styles_1.styled)('span', {
    shouldForwardProp: function (prop) { return prop !== 'size' && prop !== 'placement' && prop !== 'offset'; },
})(function (_a) {
    var size = _a.size, offset = _a.offset;
    return function (_a) {
        var _b;
        var theme = _a.theme;
        var POSITION = -(size / 2) + 0.5;
        var alignmentStyles = {
            top: { top: POSITION, transform: 'rotate(135deg)' },
            bottom: { bottom: POSITION, transform: 'rotate(-45deg)' },
            left: { left: POSITION, transform: 'rotate(45deg)' },
            right: { right: POSITION, transform: 'rotate(-135deg)' },
            hCenter: { left: 0, right: 0, margin: 'auto' },
            vCenter: { top: 0, bottom: 0, margin: 'auto' },
        };
        var backgroundStyles = function (color) { return (__assign(__assign({ backgroundRepeat: 'no-repeat', backgroundSize: "".concat(size * 3, "px ").concat(size * 3, "px"), backgroundImage: "url(/assets/".concat(color, "-blur.png)") }, (color === 'cyan' && {
            backgroundPosition: 'top right',
        })), (color === 'red' && {
            backgroundPosition: 'bottom left',
        }))); };
        return _b = {
                width: size,
                height: size,
                position: 'absolute',
                backdropFilter: '6px',
                borderBottomLeftRadius: size / 4,
                clipPath: 'polygon(0% 0%, 100% 100%, 0% 100%)',
                backgroundColor: theme.vars.palette.background.paper,
                border: "solid 1px ".concat((0, styles_2.varAlpha)(theme.vars.palette.grey['500Channel'], 0.12))
            },
            _b[styles_2.stylesMode.dark] = {
                border: "solid 1px ".concat((0, styles_2.varAlpha)(theme.vars.palette.common.blackChannel, 0.12)),
            },
            _b.variants = [
                {
                    props: {
                        placement: 'top-left',
                    },
                    style: __assign(__assign({}, alignmentStyles.top), { left: offset }),
                },
                {
                    props: {
                        placement: 'top-center',
                    },
                    style: __assign(__assign({}, alignmentStyles.top), alignmentStyles.hCenter),
                },
                {
                    props: {
                        placement: 'top-right',
                    },
                    style: __assign(__assign(__assign({}, backgroundStyles('cyan')), alignmentStyles.top), { right: offset }),
                },
                {
                    props: {
                        placement: 'bottom-left',
                    },
                    style: __assign(__assign(__assign({}, backgroundStyles('red')), alignmentStyles.bottom), { left: offset }),
                },
                {
                    props: {
                        placement: 'bottom-center',
                    },
                    style: __assign(__assign({}, alignmentStyles.bottom), alignmentStyles.hCenter),
                },
                {
                    props: {
                        placement: 'bottom-right',
                    },
                    style: __assign(__assign({}, alignmentStyles.bottom), { right: offset }),
                },
                {
                    props: {
                        placement: 'left-top',
                    },
                    style: __assign(__assign({}, alignmentStyles.left), { top: offset }),
                },
                {
                    props: {
                        placement: 'left-center',
                    },
                    style: __assign(__assign(__assign({}, backgroundStyles('red')), alignmentStyles.left), alignmentStyles.vCenter),
                },
                {
                    props: {
                        placement: 'left-bottom',
                    },
                    style: __assign(__assign(__assign({}, backgroundStyles('red')), alignmentStyles.left), { bottom: offset }),
                },
                {
                    props: {
                        placement: 'right-top',
                    },
                    style: __assign(__assign(__assign({}, backgroundStyles('cyan')), alignmentStyles.right), { top: offset }),
                },
                {
                    props: {
                        placement: 'right-center',
                    },
                    style: __assign(__assign(__assign({}, backgroundStyles('cyan')), alignmentStyles.right), alignmentStyles.vCenter),
                },
                {
                    props: {
                        placement: 'right-bottom',
                    },
                    style: __assign(__assign({}, alignmentStyles.right), { bottom: offset }),
                },
            ],
            _b;
    };
});
