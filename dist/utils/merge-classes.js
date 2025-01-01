"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeClasses = mergeClasses;
exports.mergeRefs = mergeRefs;
function mergeClasses(baseClasses, conditionalClasses) {
    var base = baseClasses.filter(Boolean).join(' ');
    var conditional = Object.keys(conditionalClasses)
        .filter(function (key) { return conditionalClasses[key]; })
        .join(' ');
    return [base, conditional].filter(Boolean).join(' ');
}
/**
 * Utility to merge multiple refs into one.
 * This ensures all refs receive the correct reference.
 */
function mergeRefs(refs) {
    return function (value) {
        refs.forEach(function (ref) {
            if (!ref)
                return;
            if (typeof ref === 'function') {
                ref(value);
            }
            else if ('current' in ref) {
                ref.current = value;
            }
        });
    };
}
