"use strict";
// ----------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
exports.paramCase = paramCase;
exports.snakeCase = snakeCase;
exports.sentenceCase = sentenceCase;
function paramCase(str) {
    return str
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^a-z0-9-]/g, '');
}
// ----------------------------------------------------------------------
function snakeCase(str) {
    return str
        .toLowerCase()
        .replace(/\s+/g, '_')
        .replace(/[^a-z0-9_]/g, '');
}
// ----------------------------------------------------------------------
function sentenceCase(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
