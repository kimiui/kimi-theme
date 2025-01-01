"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.schemaHelper = void 0;
var dayjs_1 = __importDefault(require("dayjs"));
var zod_1 = require("zod");
exports.schemaHelper = {
    /**
     * Phone number
     * defaultValue === null
     */
    phoneNumber: function (props) {
        var _a, _b, _c, _d;
        return zod_1.z
            .string()
            .min(1, { message: (_b = (_a = props === null || props === void 0 ? void 0 : props.message) === null || _a === void 0 ? void 0 : _a.required_error) !== null && _b !== void 0 ? _b : 'Phone number is required!' })
            .refine(function (data) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.isValidPhoneNumber) === null || _a === void 0 ? void 0 : _a.call(props, data); }, {
            message: (_d = (_c = props === null || props === void 0 ? void 0 : props.message) === null || _c === void 0 ? void 0 : _c.invalid_type_error) !== null && _d !== void 0 ? _d : 'Invalid phone number!',
        });
    },
    /**
     * date
     * defaultValue === null
     */
    date: function (props) {
        return zod_1.z.coerce
            .date()
            .nullable()
            .transform(function (dateString, ctx) {
            var _a, _b, _c, _d;
            var date = (0, dayjs_1.default)(dateString).format();
            var stringToDate = zod_1.z.string().pipe(zod_1.z.coerce.date());
            if (!dateString) {
                ctx.addIssue({
                    code: zod_1.z.ZodIssueCode.custom,
                    message: (_b = (_a = props === null || props === void 0 ? void 0 : props.message) === null || _a === void 0 ? void 0 : _a.required_error) !== null && _b !== void 0 ? _b : 'Date is required!',
                });
                return null;
            }
            if (!stringToDate.safeParse(date).success) {
                ctx.addIssue({
                    code: zod_1.z.ZodIssueCode.invalid_date,
                    message: (_d = (_c = props === null || props === void 0 ? void 0 : props.message) === null || _c === void 0 ? void 0 : _c.invalid_type_error) !== null && _d !== void 0 ? _d : 'Invalid Date!!',
                });
            }
            return date;
        })
            .pipe(zod_1.z.union([zod_1.z.number(), zod_1.z.string(), zod_1.z.date(), zod_1.z.null()]));
    },
    /**
     * editor
     * defaultValue === '' | <p></p>
     */
    editor: function (props) { var _a, _b; return zod_1.z.string().min(8, { message: (_b = (_a = props === null || props === void 0 ? void 0 : props.message) === null || _a === void 0 ? void 0 : _a.required_error) !== null && _b !== void 0 ? _b : 'Editor is required!' }); },
    /**
     * object
     * defaultValue === null
     */
    objectOrNull: function (props) {
        var _a, _b, _c, _d;
        return zod_1.z
            .custom()
            .refine(function (data) { return data !== null; }, {
            message: (_b = (_a = props === null || props === void 0 ? void 0 : props.message) === null || _a === void 0 ? void 0 : _a.required_error) !== null && _b !== void 0 ? _b : 'Field is required!',
        })
            .refine(function (data) { return data !== ''; }, {
            message: (_d = (_c = props === null || props === void 0 ? void 0 : props.message) === null || _c === void 0 ? void 0 : _c.required_error) !== null && _d !== void 0 ? _d : 'Field is required!',
        });
    },
    /**
     * boolean
     * defaultValue === false
     */
    boolean: function (props) {
        var _a, _b;
        return zod_1.z.coerce.boolean().refine(function (bool) { return bool === true; }, {
            message: (_b = (_a = props === null || props === void 0 ? void 0 : props.message) === null || _a === void 0 ? void 0 : _a.required_error) !== null && _b !== void 0 ? _b : 'Switch is required!',
        });
    },
    /**
     * file
     * defaultValue === '' || null
     */
    file: function (props) {
        return zod_1.z.custom().transform(function (data, ctx) {
            var _a, _b;
            var hasFile = data instanceof File || (typeof data === 'string' && !!data.length);
            if (!hasFile) {
                ctx.addIssue({
                    code: zod_1.z.ZodIssueCode.custom,
                    message: (_b = (_a = props === null || props === void 0 ? void 0 : props.message) === null || _a === void 0 ? void 0 : _a.required_error) !== null && _b !== void 0 ? _b : 'File is required!',
                });
                return null;
            }
            return data;
        });
    },
    /**
     * files
     * defaultValue === []
     */
    files: function (props) {
        return zod_1.z.array(zod_1.z.custom()).transform(function (data, ctx) {
            var _a, _b, _c;
            var minFiles = (_a = props === null || props === void 0 ? void 0 : props.minFiles) !== null && _a !== void 0 ? _a : 2;
            if (!data.length) {
                ctx.addIssue({
                    code: zod_1.z.ZodIssueCode.custom,
                    message: (_c = (_b = props === null || props === void 0 ? void 0 : props.message) === null || _b === void 0 ? void 0 : _b.required_error) !== null && _c !== void 0 ? _c : 'Files is required!',
                });
            }
            else if (data.length < minFiles) {
                ctx.addIssue({
                    code: zod_1.z.ZodIssueCode.custom,
                    message: "Must have at least ".concat(minFiles, " items!"),
                });
            }
            return data;
        });
    },
};
