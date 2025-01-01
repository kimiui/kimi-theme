"use strict";
/**
 * https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore?tab=readme-ov-file#_flatten
 * https://github.com/you-dont-need-x/you-dont-need-lodash
 */
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasParams = exports.merge = void 0;
exports.flattenArray = flattenArray;
exports.flattenDeep = flattenDeep;
exports.orderBy = orderBy;
exports.keyBy = keyBy;
exports.sumBy = sumBy;
exports.isEqual = isEqual;
exports.removeLastSlash = removeLastSlash;
exports.removeParams = removeParams;
exports.isExternalLink = isExternalLink;
// ----------------------------------------------------------------------
function flattenArray(list, key) {
    if (key === void 0) { key = 'children'; }
    var children = [];
    var flatten = list === null || list === void 0 ? void 0 : list.map(function (item) {
        var _a;
        if ((_a = item[key]) === null || _a === void 0 ? void 0 : _a.length) {
            children = __spreadArray(__spreadArray([], children, true), item[key], true);
        }
        return item;
    });
    return flatten === null || flatten === void 0 ? void 0 : flatten.concat(children.length ? flattenArray(children, key) : children);
}
// ----------------------------------------------------------------------
function flattenDeep(array) {
    var isArray = array && Array.isArray(array);
    if (isArray) {
        return array.flat(Infinity);
    }
    return [];
}
// ----------------------------------------------------------------------
function orderBy(array, properties, orders) {
    return array.slice().sort(function (a, b) {
        for (var i = 0; i < properties.length; i += 1) {
            var property = properties[i];
            var order = orders && orders[i] === 'desc' ? -1 : 1;
            var aValue = a[property];
            var bValue = b[property];
            if (aValue < bValue)
                return -1 * order;
            if (aValue > bValue)
                return 1 * order;
        }
        return 0;
    });
}
// ----------------------------------------------------------------------
function keyBy(array, key) {
    return (array || []).reduce(function (result, item) {
        var _a;
        var keyValue = key ? item[key] : item;
        return __assign(__assign({}, result), (_a = {}, _a[String(keyValue)] = item, _a));
    }, {});
}
// ----------------------------------------------------------------------
function sumBy(array, iteratee) {
    return array.reduce(function (sum, item) { return sum + iteratee(item); }, 0);
}
// ----------------------------------------------------------------------
function isEqual(a, b) {
    if (a === null || a === undefined || b === null || b === undefined) {
        return a === b;
    }
    if (typeof a !== typeof b) {
        return false;
    }
    if (typeof a === 'string' || typeof a === 'number' || typeof a === 'boolean') {
        return a === b;
    }
    if (Array.isArray(a) && Array.isArray(b)) {
        if (a.length !== b.length) {
            return false;
        }
        return a.every(function (item, index) { return isEqual(item, b[index]); });
    }
    if (typeof a === 'object' && typeof b === 'object') {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        if (keysA.length !== keysB.length) {
            return false;
        }
        return keysA.every(function (key) { return isEqual(a[key], b[key]); });
    }
    return false;
}
// ----------------------------------------------------------------------
function isObject(item) {
    return item && typeof item === 'object' && !Array.isArray(item);
}
var merge = function (target) {
    var _a, _b;
    var sources = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        sources[_i - 1] = arguments[_i];
    }
    if (!sources.length)
        return target;
    var source = sources.shift();
    // eslint-disable-next-line no-restricted-syntax
    for (var key in source) {
        if (isObject(source[key])) {
            if (!target[key])
                Object.assign(target, (_a = {}, _a[key] = {}, _a));
            (0, exports.merge)(target[key], source[key]);
        }
        else {
            Object.assign(target, (_b = {}, _b[key] = source[key], _b));
        }
    }
    return exports.merge.apply(void 0, __spreadArray([target], sources, false));
};
exports.merge = merge;
// ----------------------------------------------------------------------
var hasParams = function (url) {
    var queryString = url === null || url === void 0 ? void 0 : url.split('?')[1];
    return queryString ? new URLSearchParams(queryString).toString().length > 0 : false;
};
exports.hasParams = hasParams;
// ----------------------------------------------------------------------
function removeLastSlash(pathname) {
    /**
     * Remove last slash
     * [1]
     * @input  = '/dashboard/calendar/'
     * @output = '/dashboard/calendar'
     * [2]
     * @input  = '/dashboard/calendar'
     * @output = '/dashboard/calendar'
     */
    if (pathname !== '/' && pathname.endsWith('/')) {
        return pathname.slice(0, -1);
    }
    return pathname;
}
// ----------------------------------------------------------------------
function removeParams(url) {
    try {
        var urlObj = new URL(url, window.location.origin);
        return removeLastSlash(urlObj.pathname);
    }
    catch (error) {
        return url;
    }
}
// ----------------------------------------------------------------------
function isExternalLink(url) {
    var _a;
    return (_a = url === null || url === void 0 ? void 0 : url.startsWith('http')) !== null && _a !== void 0 ? _a : false;
}
