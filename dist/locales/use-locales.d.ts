import type { LanguageValue } from './config-locales';
export declare function useTranslate(ns?: string): {
    t: import("i18next").TFunction<string, undefined>;
    i18n: import("i18next").i18n;
    onChangeLang: (newLang: LanguageValue) => Promise<void>;
    currentLang: {
        value: string;
        label: string;
        countryCode: string;
        adapterLocale: string;
        numberFormat: {
            code: string;
            currency: string;
        };
        systemValue: {
            components: {
                MuiDataGrid: {
                    defaultProps: {
                        localeText: Partial<import("@mui/x-data-grid").GridLocaleText>;
                    };
                };
                MuiAlert?: {
                    defaultProps: Pick<import("@mui/material").ComponentsPropsList["MuiAlert"], "closeText">;
                };
                MuiBreadcrumbs?: {
                    defaultProps: Pick<import("@mui/material").ComponentsPropsList["MuiBreadcrumbs"], "expandText">;
                };
                MuiTablePagination?: {
                    defaultProps: Pick<import("@mui/material").ComponentsPropsList["MuiTablePagination"], "labelRowsPerPage" | "labelDisplayedRows" | "getItemAriaLabel">;
                };
                MuiRating?: {
                    defaultProps: Pick<import("@mui/material").ComponentsPropsList["MuiRating"], "emptyLabelText" | "getLabelText">;
                };
                MuiAutocomplete?: {
                    defaultProps: Pick<import("@mui/material").ComponentsPropsList["MuiAutocomplete"], "clearText" | "closeText" | "loadingText" | "noOptionsText" | "openText">;
                };
                MuiPagination?: {
                    defaultProps: Pick<import("@mui/material").ComponentsPropsList["MuiPagination"], "aria-label" | "getItemAriaLabel">;
                };
            };
        };
    };
};
