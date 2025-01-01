'use client';
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RHFCode = RHFCode;
var jsx_runtime_1 = require("react/jsx-runtime");
var Box_1 = __importDefault(require("@mui/material/Box"));
var react_1 = __importStar(require("react"));
var Input_1 = __importDefault(require("@mui/material/Input"));
var FormHelperText_1 = __importDefault(require("@mui/material/FormHelperText"));
var react_hook_form_1 = require("react-hook-form");
function Otp(_a) {
    var separator = _a.separator, length = _a.length, value = _a.value, onChange = _a.onChange;
    var inputRefs = react_1.default.useRef(new Array(length).fill(null));
    var focusInput = function (targetIndex) {
        var targetInput = inputRefs.current[targetIndex];
        targetInput.focus();
    };
    var selectInput = function (targetIndex) {
        var targetInput = inputRefs.current[targetIndex];
        targetInput.select();
    };
    var handleKeyDown = function (event, currentIndex) {
        switch (event.key) {
            case 'ArrowUp':
            case 'ArrowDown':
            case ' ':
                event.preventDefault();
                break;
            case 'ArrowLeft':
                event.preventDefault();
                if (currentIndex > 0) {
                    focusInput(currentIndex - 1);
                    selectInput(currentIndex - 1);
                }
                break;
            case 'ArrowRight':
                event.preventDefault();
                if (currentIndex < length - 1) {
                    focusInput(currentIndex + 1);
                    selectInput(currentIndex + 1);
                }
                break;
            case 'Delete':
                event.preventDefault();
                onChange(function (prevOtp) {
                    var otp = prevOtp.slice(0, currentIndex) + prevOtp.slice(currentIndex + 1);
                    return otp;
                });
                break;
            case 'Backspace':
                event.preventDefault();
                if (currentIndex > 0) {
                    focusInput(currentIndex - 1);
                    selectInput(currentIndex - 1);
                }
                onChange(function (prevOtp) {
                    var otp = prevOtp.slice(0, currentIndex) + prevOtp.slice(currentIndex + 1);
                    return otp;
                });
                break;
            default:
                break;
        }
    };
    var handleChange = function (event, currentIndex) {
        var currentValue = event.target.value;
        var indexToEnter = 0;
        while (indexToEnter <= currentIndex) {
            if (inputRefs.current[indexToEnter].value && indexToEnter < currentIndex) {
                indexToEnter += 1;
            }
            else {
                break;
            }
        }
        onChange(function (prev) {
            var otpArray = prev.split('');
            var lastValue = currentValue[currentValue.length - 1];
            otpArray[indexToEnter] = lastValue;
            return otpArray.join('');
        });
        if (currentValue !== '') {
            if (currentIndex < length - 1) {
                focusInput(currentIndex + 1);
            }
        }
    };
    var handleClick = function (event, currentIndex) {
        selectInput(currentIndex);
    };
    var handlePaste = function (event, currentIndex) {
        var _a;
        event.preventDefault();
        var clipboardData = event.clipboardData;
        // Check if there is text data in the clipboard
        if (clipboardData.types.includes('text/plain')) {
            var pastedText = clipboardData.getData('text/plain');
            pastedText = pastedText.substring(0, length).trim();
            var indexToEnter = 0;
            while (indexToEnter <= currentIndex) {
                if (inputRefs.current[indexToEnter].value && indexToEnter < currentIndex) {
                    indexToEnter += 1;
                }
                else {
                    break;
                }
            }
            var otpArray = value.split('');
            for (var i = indexToEnter; i < length; i += 1) {
                var lastValue = (_a = pastedText[i - indexToEnter]) !== null && _a !== void 0 ? _a : ' ';
                otpArray[i] = lastValue;
            }
            onChange(otpArray.join(''));
        }
    };
    return ((0, jsx_runtime_1.jsx)(Box_1.default, { sx: { display: 'flex', gap: 1, alignItems: 'center' }, children: new Array(length).fill(null).map(function (_, index) {
            var _a;
            return ((0, jsx_runtime_1.jsxs)(react_1.default.Fragment, { children: [(0, jsx_runtime_1.jsx)(Input_1.default, { "aria-label": "Digit ".concat(index + 1, " of OTP"), ref: function (ele) {
                            inputRefs.current[index] = ele;
                        }, onKeyDown: function (event) { return handleKeyDown(event, index); }, onChange: function (event) { return handleChange(event, index); }, onClick: function (event) { return handleClick(event, index); }, onPaste: function (event) { return handlePaste(event, index); }, value: (_a = value[index]) !== null && _a !== void 0 ? _a : '' }), index === length - 1 ? null : separator] }, index));
        }) }));
}
function RHFCode(_a) {
    var name = _a.name;
    var control = (0, react_hook_form_1.useFormContext)().control;
    var _b = (0, react_1.useState)(''), otp = _b[0], setOtp = _b[1];
    return ((0, jsx_runtime_1.jsx)(react_hook_form_1.Controller, { name: name, control: control, render: function (_a) {
            var field = _a.field, error = _a.fieldState.error;
            return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(Otp, { separator: (0, jsx_runtime_1.jsx)("span", { children: "-" }), value: otp, onChange: setOtp, length: 5 }), error && ((0, jsx_runtime_1.jsx)(FormHelperText_1.default, { sx: { px: 2 }, error: true, children: error.message }))] }));
        } }));
}
