"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.imageClasses = void 0;
var create_classes_1 = require("lib/theme/create-classes");
// ----------------------------------------------------------------------
exports.imageClasses = {
    root: (0, create_classes_1.createClasses)('image__root'),
    img: (0, create_classes_1.createClasses)('image__img'),
    overlay: (0, create_classes_1.createClasses)('image__overlay'),
    placeholder: (0, create_classes_1.createClasses)('image__placeholder'),
    state: {
        loaded: '--loaded',
    },
};
