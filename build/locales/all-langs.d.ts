export declare const allLangs: ({
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
            MuiLocalizationProvider: {
                defaultProps: {
                    localeText: {
                        previousMonth?: string | undefined;
                        nextMonth?: string | undefined;
                        calendarWeekNumberHeaderLabel?: string | undefined;
                        calendarWeekNumberHeaderText?: string | undefined;
                        calendarWeekNumberAriaLabelText?: ((weekNumber: number) => string) | undefined;
                        calendarWeekNumberText?: ((weekNumber: number) => string) | undefined;
                        openPreviousView?: string | undefined;
                        openNextView?: string | undefined;
                        calendarViewSwitchingButtonAriaLabel?: ((currentView: import("@mui/x-date-pickers/models").DateView) => string) | undefined;
                        start?: string | undefined;
                        end?: string | undefined;
                        startDate?: string | undefined;
                        startTime?: string | undefined;
                        endDate?: string | undefined;
                        endTime?: string | undefined;
                        cancelButtonLabel?: string | undefined;
                        clearButtonLabel?: string | undefined;
                        okButtonLabel?: string | undefined;
                        todayButtonLabel?: string | undefined;
                        clockLabelText?: ((view: import("@mui/x-date-pickers/models").TimeView, time: any, utils: import("@mui/x-date-pickers/models").MuiPickersAdapter<any, any>, formattedTime?: string | null) => string) | undefined;
                        hoursClockNumberText?: ((hours: string) => string) | undefined;
                        minutesClockNumberText?: ((minutes: string) => string) | undefined;
                        secondsClockNumberText?: ((seconds: string) => string) | undefined;
                        selectViewText?: ((view: import("@mui/x-date-pickers/internals").TimeViewWithMeridiem) => string) | undefined;
                        openDatePickerDialogue?: ((date: any, utils: import("@mui/x-date-pickers/models").MuiPickersAdapter<any, any>, formattedDate: string | null) => string) | undefined;
                        openTimePickerDialogue?: ((date: any, utils: import("@mui/x-date-pickers/models").MuiPickersAdapter<any, any>, formattedTime: string | null) => string) | undefined;
                        fieldClearLabel?: string | undefined;
                        timeTableLabel?: string | undefined;
                        dateTableLabel?: string | undefined;
                        fieldYearPlaceholder?: ((params: {
                            digitAmount: number;
                            format: string;
                        }) => string) | undefined;
                        fieldMonthPlaceholder?: ((params: {
                            contentType: import("@mui/x-date-pickers/models").FieldSectionContentType;
                            format: string;
                        }) => string) | undefined;
                        fieldDayPlaceholder?: ((params: {
                            format: string;
                        }) => string) | undefined;
                        fieldWeekDayPlaceholder?: ((params: {
                            contentType: import("@mui/x-date-pickers/models").FieldSectionContentType;
                            format: string;
                        }) => string) | undefined;
                        fieldHoursPlaceholder?: ((params: {
                            format: string;
                        }) => string) | undefined;
                        fieldMinutesPlaceholder?: ((params: {
                            format: string;
                        }) => string) | undefined;
                        fieldSecondsPlaceholder?: ((params: {
                            format: string;
                        }) => string) | undefined;
                        fieldMeridiemPlaceholder?: ((params: {
                            format: string;
                        }) => string) | undefined;
                        year?: string | undefined;
                        month?: string | undefined;
                        day?: string | undefined;
                        weekDay?: string | undefined;
                        hours?: string | undefined;
                        minutes?: string | undefined;
                        seconds?: string | undefined;
                        meridiem?: string | undefined;
                        empty?: string | undefined;
                        datePickerToolbarTitle?: string | undefined;
                        timePickerToolbarTitle?: string | undefined;
                        dateTimePickerToolbarTitle?: string | undefined;
                        dateRangePickerToolbarTitle?: string | undefined;
                    };
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
} | {
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
})[];
/**
 * Country code:
 * https://flagcdn.com/en/codes.json
 *
 * Number format code:
 * https://gist.github.com/raushankrjha/d1c7e35cf87e69aa8b4208a8171a8416
 */
