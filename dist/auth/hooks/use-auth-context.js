"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAuthContext = useAuthContext;
var react_1 = require("react");
var auth_context_1 = require("../context/auth-context");
// ----------------------------------------------------------------------
function useAuthContext() {
    var context = (0, react_1.useContext)(auth_context_1.AuthContext);
    if (!context) {
        throw new Error('useAuthContext: Context must be used inside AuthProvider');
    }
    return context;
}
