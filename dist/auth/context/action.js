"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resendSignUpCode = exports.confirmSignUp = exports.updatePassword = exports.changePassword = exports.verifyEmail = exports.resetPassword = exports.signOut = exports.signUp = exports.signInWithPassword = void 0;
var utils_1 = require("./utils");
var constant_1 = require("./constant");
/** **************************************
 * Sign in
 *************************************** */
var signInWithPassword = function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
    var accessToken;
    var email = _b.email, password = _b.password;
    return __generator(this, function (_c) {
        try {
            accessToken = 'token';
            setTimeout(function () { }, 1000);
            if (!accessToken) {
                throw new Error('Access token not found in response');
            }
            (0, utils_1.setSession)(accessToken);
        }
        catch (error) {
            console.error('Error during sign in:', error);
            throw error;
        }
        return [2 /*return*/];
    });
}); };
exports.signInWithPassword = signInWithPassword;
/** **************************************
 * Sign up
 *************************************** */
var signUp = function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
    var accessToken;
    var email = _b.email, password = _b.password, firstName = _b.firstName, lastName = _b.lastName;
    return __generator(this, function (_c) {
        try {
            accessToken = 'token';
            setTimeout(function () { }, 1000);
            if (!accessToken) {
                throw new Error('Access token not found in response');
            }
            sessionStorage.setItem(constant_1.STORAGE_KEY, accessToken);
        }
        catch (error) {
            console.error('Error during sign up:', error);
            throw error;
        }
        return [2 /*return*/];
    });
}); };
exports.signUp = signUp;
/** **************************************
 * Sign out
 *************************************** */
var signOut = function () { return __awaiter(void 0, void 0, void 0, function () {
    var error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, (0, utils_1.setSession)(null)];
            case 1:
                _a.sent();
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                console.error('Error during sign out:', error_1);
                throw error_1;
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.signOut = signOut;
/** **************************************
 * Reset password
 *************************************** */
var resetPassword = function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
    var email = _b.email;
    return __generator(this, function (_c) {
        try {
            setTimeout(function () { }, 1000);
        }
        catch (error) {
            console.error('Error during reset password:', error);
            throw error;
        }
        return [2 /*return*/];
    });
}); };
exports.resetPassword = resetPassword;
/** **************************************
 * Verify email
 *************************************** */
var verifyEmail = function (email) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        try {
            setTimeout(function () { }, 1000);
        }
        catch (error) {
            console.error('Error during verify email:', error);
            throw error;
        }
        return [2 /*return*/];
    });
}); };
exports.verifyEmail = verifyEmail;
/** **************************************
 * Change password
 *************************************** */
var changePassword = function (password) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        try {
            setTimeout(function () { }, 1000);
        }
        catch (error) {
            console.error('Error during change password:', error);
            throw error;
        }
        return [2 /*return*/];
    });
}); };
exports.changePassword = changePassword;
/** **************************************
 * Update password
 *************************************** */
var updatePassword = function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
    var email = _b.email, confirmationCode = _b.confirmationCode, newPassword = _b.newPassword;
    return __generator(this, function (_c) {
        try {
            setTimeout(function () { }, 1000);
        }
        catch (error) {
            console.error('Error during update password:', error);
            throw error;
        }
        return [2 /*return*/];
    });
}); };
exports.updatePassword = updatePassword;
/** **************************************
 * Confirm sign up
 *************************************** */
var confirmSignUp = function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
    var email = _b.email, confirmationCode = _b.confirmationCode;
    return __generator(this, function (_c) {
        try {
            setTimeout(function () { }, 1000);
        }
        catch (error) {
            console.error('Error during confirm email:', error);
            throw error;
        }
        return [2 /*return*/];
    });
}); };
exports.confirmSignUp = confirmSignUp;
/** **************************************
 * Resend sign up code
 *************************************** */
var resendSignUpCode = function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
    var username = _b.username;
    return __generator(this, function (_c) {
        try {
            setTimeout(function () { }, 1000);
        }
        catch (error) {
            console.error('Error during resend code:', error);
            throw error;
        }
        return [2 /*return*/];
    });
}); };
exports.resendSignUpCode = resendSignUpCode;
// ----------------------------------------------------------------------
