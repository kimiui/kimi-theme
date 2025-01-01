"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatStr = void 0;
exports.today = today;
exports.fDateTime = fDateTime;
exports.fDate = fDate;
exports.fTime = fTime;
exports.fTimestamp = fTimestamp;
exports.fToNow = fToNow;
exports.fIsBetween = fIsBetween;
exports.fIsAfter = fIsAfter;
exports.fIsSame = fIsSame;
exports.fDateRangeShortLabel = fDateRangeShortLabel;
exports.fAdd = fAdd;
exports.fSub = fSub;
var dayjs_1 = __importDefault(require("dayjs"));
var duration_1 = __importDefault(require("dayjs/plugin/duration"));
var relativeTime_1 = __importDefault(require("dayjs/plugin/relativeTime"));
// ----------------------------------------------------------------------
dayjs_1.default.extend(duration_1.default);
dayjs_1.default.extend(relativeTime_1.default);
/**
 * Docs: https://day.js.org/docs/en/display/format
 */
exports.formatStr = {
    dateTime: 'DD MMM YYYY h:mm a', // 17 Apr 2022 12:00 am
    date: 'DD MMM YYYY', // 17 Apr 2022
    time: 'h:mm a', // 12:00 am
    split: {
        dateTime: 'DD/MM/YYYY h:mm a', // 17/04/2022 12:00 am
        date: 'DD/MM/YYYY', // 17/04/2022
    },
    paramCase: {
        dateTime: 'DD-MM-YYYY h:mm a', // 17-04-2022 12:00 am
        date: 'DD-MM-YYYY', // 17-04-2022
    },
};
function today(format) {
    return (0, dayjs_1.default)(new Date()).startOf('day').format(format);
}
// ----------------------------------------------------------------------
/** output: 17 Apr 2022 12:00 am
 */
function fDateTime(date, format) {
    if (!date) {
        return null;
    }
    var isValid = (0, dayjs_1.default)(date).isValid();
    return isValid ? (0, dayjs_1.default)(date).format(format !== null && format !== void 0 ? format : exports.formatStr.dateTime) : 'Invalid time value';
}
// ----------------------------------------------------------------------
/** output: 17 Apr 2022
 */
function fDate(date, format) {
    if (!date) {
        return null;
    }
    var isValid = (0, dayjs_1.default)(date).isValid();
    return isValid ? (0, dayjs_1.default)(date).format(format !== null && format !== void 0 ? format : exports.formatStr.date) : 'Invalid time value';
}
// ----------------------------------------------------------------------
/** output: 12:00 am
 */
function fTime(date, format) {
    if (!date) {
        return null;
    }
    var isValid = (0, dayjs_1.default)(date).isValid();
    return isValid ? (0, dayjs_1.default)(date).format(format !== null && format !== void 0 ? format : exports.formatStr.time) : 'Invalid time value';
}
// ----------------------------------------------------------------------
/** output: 1713250100
 */
function fTimestamp(date) {
    if (!date) {
        return null;
    }
    var isValid = (0, dayjs_1.default)(date).isValid();
    return isValid ? (0, dayjs_1.default)(date).valueOf() : 'Invalid time value';
}
// ----------------------------------------------------------------------
/** output: a few seconds, 2 years
 */
function fToNow(date) {
    if (!date) {
        return null;
    }
    var isValid = (0, dayjs_1.default)(date).isValid();
    return isValid ? (0, dayjs_1.default)(date).toNow(true) : 'Invalid time value';
}
// ----------------------------------------------------------------------
/** output: boolean
 */
function fIsBetween(inputDate, startDate, endDate) {
    if (!inputDate || !startDate || !endDate) {
        return false;
    }
    var formattedInputDate = fTimestamp(inputDate);
    var formattedStartDate = fTimestamp(startDate);
    var formattedEndDate = fTimestamp(endDate);
    if (formattedInputDate && formattedStartDate && formattedEndDate) {
        return formattedInputDate >= formattedStartDate && formattedInputDate <= formattedEndDate;
    }
    return false;
}
// ----------------------------------------------------------------------
/** output: boolean
 */
function fIsAfter(startDate, endDate) {
    return (0, dayjs_1.default)(startDate).isAfter(endDate);
}
// ----------------------------------------------------------------------
/** output: boolean
 */
function fIsSame(startDate, endDate, units) {
    if (!startDate || !endDate) {
        return false;
    }
    var isValid = (0, dayjs_1.default)(startDate).isValid() && (0, dayjs_1.default)(endDate).isValid();
    if (!isValid) {
        return 'Invalid time value';
    }
    return (0, dayjs_1.default)(startDate).isSame(endDate, units !== null && units !== void 0 ? units : 'year');
}
// ----------------------------------------------------------------------
/** output:
 * Same day: 26 Apr 2024
 * Same month: 25 - 26 Apr 2024
 * Same month: 25 - 26 Apr 2024
 * Same year: 25 Apr - 26 May 2024
 */
function fDateRangeShortLabel(startDate, endDate, initial) {
    var isValid = (0, dayjs_1.default)(startDate).isValid() && (0, dayjs_1.default)(endDate).isValid();
    var isAfter = fIsAfter(startDate, endDate);
    if (!isValid || isAfter) {
        return 'Invalid time value';
    }
    var label = "".concat(fDate(startDate), " - ").concat(fDate(endDate));
    if (initial) {
        return label;
    }
    var isSameYear = fIsSame(startDate, endDate, 'year');
    var isSameMonth = fIsSame(startDate, endDate, 'month');
    var isSameDay = fIsSame(startDate, endDate, 'day');
    if (isSameYear && !isSameMonth) {
        label = "".concat(fDate(startDate, 'DD MMM'), " - ").concat(fDate(endDate));
    }
    else if (isSameYear && isSameMonth && !isSameDay) {
        label = "".concat(fDate(startDate, 'DD'), " - ").concat(fDate(endDate));
    }
    else if (isSameYear && isSameMonth && isSameDay) {
        label = "".concat(fDate(endDate));
    }
    return label;
}
/** output: '2024-05-28T05:55:31+00:00'
 */
function fAdd(_a) {
    var _b = _a.years, years = _b === void 0 ? 0 : _b, _c = _a.months, months = _c === void 0 ? 0 : _c, _d = _a.days, days = _d === void 0 ? 0 : _d, _e = _a.hours, hours = _e === void 0 ? 0 : _e, _f = _a.minutes, minutes = _f === void 0 ? 0 : _f, _g = _a.seconds, seconds = _g === void 0 ? 0 : _g, _h = _a.milliseconds, milliseconds = _h === void 0 ? 0 : _h;
    var result = (0, dayjs_1.default)()
        .add(dayjs_1.default.duration({
        years: years,
        months: months,
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
        milliseconds: milliseconds,
    }))
        .format();
    return result;
}
/** output: '2024-05-28T05:55:31+00:00'
 */
function fSub(_a) {
    var _b = _a.years, years = _b === void 0 ? 0 : _b, _c = _a.months, months = _c === void 0 ? 0 : _c, _d = _a.days, days = _d === void 0 ? 0 : _d, _e = _a.hours, hours = _e === void 0 ? 0 : _e, _f = _a.minutes, minutes = _f === void 0 ? 0 : _f, _g = _a.seconds, seconds = _g === void 0 ? 0 : _g, _h = _a.milliseconds, milliseconds = _h === void 0 ? 0 : _h;
    var result = (0, dayjs_1.default)()
        .subtract(dayjs_1.default.duration({
        years: years,
        months: months,
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
        milliseconds: milliseconds,
    }))
        .format();
    return result;
}
