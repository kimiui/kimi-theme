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
exports.borderGradient = borderGradient;
function borderGradient(props) {
    var _a = props !== null && props !== void 0 ? props : {}, color = _a.color, _b = _a.padding, padding = _b === void 0 ? '2px' : _b;
    return __assign({ padding: padding, inset: 0, width: '100%', content: '""', height: '100%', margin: 'auto', position: 'absolute', borderRadius: 'inherit', 
        /** ***** */
        mask: 'linear-gradient(#FFF 0 0) content-box, linear-gradient(#FFF 0 0)', WebkitMask: 'linear-gradient(#FFF 0 0) content-box, linear-gradient(#FFF 0 0)', maskComposite: 'exclude', WebkitMaskComposite: 'xor' }, (color && {
        background: color,
    }));
}
