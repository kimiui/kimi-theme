import type { Dayjs, OpUnitType } from 'dayjs';
export type DatePickerFormat = Dayjs | Date | string | number | null | undefined;
/**
 * Docs: https://day.js.org/docs/en/display/format
 */
export declare const formatStr: {
    dateTime: string;
    date: string;
    time: string;
    split: {
        dateTime: string;
        date: string;
    };
    paramCase: {
        dateTime: string;
        date: string;
    };
};
export declare function today(format?: string): string;
/** output: 17 Apr 2022 12:00 am
 */
export declare function fDateTime(date: DatePickerFormat, format?: string): string;
/** output: 17 Apr 2022
 */
export declare function fDate(date: DatePickerFormat, format?: string): string;
/** output: 12:00 am
 */
export declare function fTime(date: DatePickerFormat, format?: string): string;
/** output: 1713250100
 */
export declare function fTimestamp(date: DatePickerFormat): number | "Invalid time value";
/** output: a few seconds, 2 years
 */
export declare function fToNow(date: DatePickerFormat): string;
/** output: boolean
 */
export declare function fIsBetween(inputDate: DatePickerFormat, startDate: DatePickerFormat, endDate: DatePickerFormat): boolean;
/** output: boolean
 */
export declare function fIsAfter(startDate: DatePickerFormat, endDate: DatePickerFormat): boolean;
/** output: boolean
 */
export declare function fIsSame(startDate: DatePickerFormat, endDate: DatePickerFormat, units?: OpUnitType): boolean | "Invalid time value";
/** output:
 * Same day: 26 Apr 2024
 * Same month: 25 - 26 Apr 2024
 * Same month: 25 - 26 Apr 2024
 * Same year: 25 Apr - 26 May 2024
 */
export declare function fDateRangeShortLabel(startDate: DatePickerFormat, endDate: DatePickerFormat, initial?: boolean): string;
export type DurationProps = {
    years?: number;
    months?: number;
    days?: number;
    hours?: number;
    minutes?: number;
    seconds?: number;
    milliseconds?: number;
};
/** output: '2024-05-28T05:55:31+00:00'
 */
export declare function fAdd({ years, months, days, hours, minutes, seconds, milliseconds, }: DurationProps): string;
/** output: '2024-05-28T05:55:31+00:00'
 */
export declare function fSub({ years, months, days, hours, minutes, seconds, milliseconds, }: DurationProps): string;
