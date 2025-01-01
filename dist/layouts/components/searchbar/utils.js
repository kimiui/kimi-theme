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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllItems = getAllItems;
exports.applyFilter = applyFilter;
exports.splitPath = splitPath;
exports.handleLoop = handleLoop;
exports.groupItems = groupItems;
var helper_1 = require("../../../utils/helper");
function getAllItems(_a) {
    var data = _a.data;
    var reduceItems = data.map(function (list) { return handleLoop(list.items, list.subheader); }).flat();
    var items = (0, helper_1.flattenArray)(reduceItems).map(function (option) {
        var group = splitPath(reduceItems, option.path);
        return {
            group: group && group.length > 1 ? group[0] : option.subheader,
            title: option.title,
            path: option.path,
        };
    });
    return items;
}
function applyFilter(_a) {
    var inputData = _a.inputData, query = _a.query;
    if (query) {
        inputData = inputData.filter(function (item) {
            return item.title.toLowerCase().indexOf(query.toLowerCase()) !== -1 ||
                item.path.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        });
    }
    return inputData;
}
// ----------------------------------------------------------------------
function splitPath(array, key) {
    var _a;
    var stack = array.map(function (item) { return ({ path: [item.title], currItem: item }); });
    var _loop_1 = function () {
        var _b = stack.pop(), path = _b.path, currItem = _b.currItem;
        if (currItem.path === key) {
            return { value: path };
        }
        if ((_a = currItem.children) === null || _a === void 0 ? void 0 : _a.length) {
            stack = stack.concat(currItem.children.map(function (item) { return ({
                path: path.concat(item.title),
                currItem: item,
            }); }));
        }
    };
    while (stack.length) {
        var state_1 = _loop_1();
        if (typeof state_1 === "object")
            return state_1.value;
    }
    return null;
}
// ----------------------------------------------------------------------
function handleLoop(array, subheader) {
    return array === null || array === void 0 ? void 0 : array.map(function (list) { return (__assign(__assign({ subheader: subheader }, list), (list.children && { children: handleLoop(list.children, subheader) }))); });
}
function groupItems(array) {
    var group = array.reduce(function (groups, item) {
        groups[item.group] = groups[item.group] || [];
        groups[item.group].push(item);
        return groups;
    }, {});
    return group;
}
