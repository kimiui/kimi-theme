"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useActiveLink = useActiveLink;
var routes_react_1 = require("routes-react");
var helper_1 = require("../utils/helper");
// ----------------------------------------------------------------------
function useActiveLink(itemPath, deep) {
    if (deep === void 0) { deep = true; }
    var pathname = (0, helper_1.removeLastSlash)((0, routes_react_1.usePathname)());
    var pathHasParams = (0, helper_1.hasParams)(itemPath);
    /* Start check */
    var notValid = (itemPath === null || itemPath === void 0 ? void 0 : itemPath.startsWith('#')) || (0, helper_1.isExternalLink)(itemPath);
    if (notValid) {
        return false;
    }
    /* End check */
    /**
     * [1] Apply for Item has children or has params.
     */
    var isDeep = deep || pathHasParams;
    if (isDeep) {
        /**
         * [1] Deep: default
         * @itemPath 			 = '/dashboard/user'
         * @match pathname = '/dashboard/user'
         * @match pathname = '/dashboard/user/list'
         * @match pathname = '/dashboard/user/e99f09a7-dd88-49d5-b1c8-1daf80c2d7b15/edit'
         */
        var defaultActive = pathname.includes(itemPath);
        /**
         * [1] Deep: has params
         * @itemPath 			 = '/dashboard/test?id=e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1'
         * @match pathname = '/dashboard/test'
         */
        var originItemPath = (0, helper_1.removeParams)(itemPath);
        var hasParamsActive = pathHasParams && originItemPath === pathname;
        return defaultActive || hasParamsActive;
    }
    /**
     * [1] Normal: active
     * @itemPath 			 = '/dashboard/calendar'
     * @match pathname = '/dashboard/calendar'
     */
    return pathname === itemPath;
}
