"use strict";
// ----------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
exports.localStorageAvailable = localStorageAvailable;
exports.localStorageGetItem = localStorageGetItem;
function localStorageAvailable() {
    try {
        var key = '__some_random_key_you_are_not_going_to_use__';
        window.localStorage.setItem(key, key);
        window.localStorage.removeItem(key);
        return true;
    }
    catch (error) {
        return false;
    }
}
function localStorageGetItem(key, defaultValue) {
    if (defaultValue === void 0) { defaultValue = ''; }
    var storageAvailable = localStorageAvailable();
    var value;
    if (storageAvailable) {
        value = localStorage.getItem(key) || defaultValue;
    }
    return value;
}
