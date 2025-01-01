'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.changeLangMessages = exports.cookieName = exports.defaultNS = exports.languages = exports.fallbackLng = void 0;
exports.i18nOptions = i18nOptions;
exports.fallbackLng = 'en';
exports.languages = ['en', 'fr', 'vi', 'cn', 'ar'];
exports.defaultNS = 'common';
exports.cookieName = 'i18next';
// ----------------------------------------------------------------------
function i18nOptions(lng, ns) {
    if (lng === void 0) { lng = exports.fallbackLng; }
    if (ns === void 0) { ns = exports.defaultNS; }
    return {
        // debug: true,
        lng: lng,
        fallbackLng: exports.fallbackLng,
        ns: ns,
        defaultNS: exports.defaultNS,
        fallbackNS: exports.defaultNS,
        supportedLngs: exports.languages,
    };
}
// ----------------------------------------------------------------------
exports.changeLangMessages = {
    en: {
        success: 'Language has been changed!',
        error: 'Error changing language!',
        loading: 'Loading...',
    },
    vi: {
        success: 'Ngôn ngữ đã được thay đổi!',
        error: 'Lỗi khi thay đổi ngôn ngữ!',
        loading: 'Đang tải...',
    },
    fr: {
        success: 'La langue a été changée!',
        error: 'Erreur lors du changement de langue!',
        loading: 'Chargement...',
    },
    cn: {
        success: '语言已更改！',
        error: '更改语言时出错！',
        loading: '加载中...',
    },
    ar: {
        success: 'تم تغيير اللغة!',
        error: 'خطأ في تغيير اللغة!',
        loading: 'جارٍ التحميل...',
    },
};
