"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatNumberLocale = formatNumberLocale;
var i18next_1 = __importDefault(require("i18next"));
var all_langs_1 = require("../locales/all-langs");
var config_locales_1 = require("../locales/config-locales");
// ----------------------------------------------------------------------
function formatNumberLocale() {
    var _a;
    var lng = (_a = i18next_1.default.resolvedLanguage) !== null && _a !== void 0 ? _a : config_locales_1.fallbackLng;
    var currentLang = all_langs_1.allLangs.find(function (lang) { return lang.value === lng; });
    return { code: currentLang === null || currentLang === void 0 ? void 0 : currentLang.numberFormat.code, currency: currentLang === null || currentLang === void 0 ? void 0 : currentLang.numberFormat.currency };
}
