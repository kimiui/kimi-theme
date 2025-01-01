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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.I18nProvider = I18nProvider;
var jsx_runtime_1 = require("react/jsx-runtime");
var i18next_1 = __importDefault(require("i18next"));
var i18next_resources_to_backend_1 = __importDefault(require("i18next-resources-to-backend"));
var i18next_browser_languagedetector_1 = __importDefault(require("i18next-browser-languagedetector"));
var react_i18next_1 = require("react-i18next");
var storage_available_1 = require("lib/utils/storage-available");
var config_locales_1 = require("./config-locales");
// ----------------------------------------------------------------------
/**
 * [1] localStorage
 * Auto detection:
 * const lng = localStorageGetItem('i18nextLng')
 */
var lng = (0, storage_available_1.localStorageGetItem)('i18nextLng', config_locales_1.fallbackLng);
i18next_1.default
    .use(i18next_browser_languagedetector_1.default)
    .use(react_i18next_1.initReactI18next)
    .use((0, i18next_resources_to_backend_1.default)(function (lang, ns) { return Promise.resolve("".concat("./langs/".concat(lang, "/").concat(ns, ".json"))).then(function (s) { return __importStar(require(s)); }); }))
    .init(__assign(__assign({}, (0, config_locales_1.i18nOptions)(lng)), { detection: { caches: ['localStorage'] } }));
function I18nProvider(_a) {
    var children = _a.children;
    return (0, jsx_runtime_1.jsx)(react_i18next_1.I18nextProvider, { i18n: i18next_1.default, children: children });
}
