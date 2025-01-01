export type LanguageValue = 'en' | 'fr' | 'vi' | 'cn' | 'ar';
export declare const fallbackLng = "en";
export declare const languages: string[];
export declare const defaultNS = "common";
export declare const cookieName = "i18next";
export declare function i18nOptions(lng?: string, ns?: string): {
    lng: string;
    fallbackLng: string;
    ns: string;
    defaultNS: string;
    fallbackNS: string;
    supportedLngs: string[];
};
export declare const changeLangMessages: Record<LanguageValue, {
    success: string;
    error: string;
    loading: string;
}>;
