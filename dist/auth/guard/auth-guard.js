'use client';
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
exports.AuthGuard = AuthGuard;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var routes_react_1 = require("routes-react");
var paths_1 = require("lib/routes/paths");
var loading_screen_1 = require("lib/components/loading-screen");
var hooks_1 = require("../hooks");
function AuthGuard(_a) {
    var _this = this;
    var children = _a.children;
    var router = (0, routes_react_1.useRouter)();
    var pathname = (0, routes_react_1.usePathname)();
    var searchParams = (0, routes_react_1.useSearchParams)();
    var _b = (0, hooks_1.useAuthContext)(), authenticated = _b.authenticated, loading = _b.loading;
    console.log('authenticated', authenticated);
    var _c = (0, react_1.useState)(true), isChecking = _c[0], setIsChecking = _c[1];
    var createQueryString = (0, react_1.useCallback)(function (name, value) {
        var params = new URLSearchParams(searchParams.toString());
        params.set(name, value);
        return params.toString();
    }, [searchParams]);
    var checkPermissions = function () { return __awaiter(_this, void 0, void 0, function () {
        var signInPath, href;
        return __generator(this, function (_a) {
            if (loading) {
                return [2 /*return*/];
            }
            console.log('authenticated', authenticated);
            if (!authenticated) {
                signInPath = paths_1.paths.auth.signIn;
                href = "".concat(signInPath, "?").concat(createQueryString('returnTo', pathname));
                console.log('href', href);
                router.replace(href);
                return [2 /*return*/];
            }
            setIsChecking(false);
            return [2 /*return*/];
        });
    }); };
    (0, react_1.useEffect)(function () {
        checkPermissions();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [authenticated, loading]);
    if (isChecking) {
        return (0, jsx_runtime_1.jsx)(loading_screen_1.SplashScreen, {});
    }
    return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: children });
}
