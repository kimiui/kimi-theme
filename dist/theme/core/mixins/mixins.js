"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mixins = void 0;
var border_1 = require("./border");
var text_1 = require("./text");
var background_1 = require("./background");
var global_styles_components_1 = require("./global-styles-components");
/**
 * TypeScript (type definition and extension)
 * @to {@link file://./../../extend-theme-types.d.ts}
 */
exports.mixins = {
    hideScrollX: {
        msOverflowStyle: 'none',
        scrollbarWidth: 'none',
        overflowX: 'auto',
        '&::-webkit-scrollbar': { display: 'none' },
    },
    hideScrollY: {
        msOverflowStyle: 'none',
        scrollbarWidth: 'none',
        overflowY: 'auto',
        '&::-webkit-scrollbar': { display: 'none' },
    },
    borderGradient: border_1.borderGradient,
    bgGradient: background_1.bgGradient,
    bgBlur: background_1.bgBlur,
    textGradient: text_1.textGradient,
    paperStyles: global_styles_components_1.paperStyles,
    menuItemStyles: global_styles_components_1.menuItemStyles,
    maxLine: text_1.maxLine,
};
