"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormSchema = void 0;
var zod_1 = require("zod");
var input_1 = require("react-phone-number-input/input");
var format_time_1 = require("../../../utils/format-time");
var hook_form_1 = require("../../../components/hook-form");
exports.FormSchema = zod_1.z
    .object({
    fullName: zod_1.z
        .string()
        .min(1, { message: 'Full name is required!' })
        .min(6, { message: 'Mininum 6 characters!' })
        .max(32, { message: 'Maximum 32 characters!' }),
    email: zod_1.z
        .string()
        .min(1, { message: 'Email is required!' })
        .email({ message: 'Email must be a valid email address!' }),
    phoneNumber: hook_form_1.schemaHelper.phoneNumber({ isValidPhoneNumber: input_1.isValidPhoneNumber }),
    editor: hook_form_1.schemaHelper
        .editor()
        .min(100, { message: 'Content must be at least 100 characters' })
        .max(200, { message: 'Content must be less than 200 characters' }),
    age: zod_1.z
        .number()
        .min(1, { message: 'Age is required!' })
        .min(18, { message: 'Age must be between 18 and 100' })
        .max(100, { message: 'Age must be between 18 and 100' }),
    startDate: hook_form_1.schemaHelper.date({ message: { required_error: 'Start date is required!' } }),
    endDate: hook_form_1.schemaHelper.date({ message: { required_error: 'End date is required!' } }),
    password: zod_1.z
        .string()
        .min(1, { message: 'Password is required!' })
        .min(6, { message: 'Password is too short!' }),
    confirmPassword: zod_1.z.string().min(1, { message: 'Confirm password is required!' }),
    autocomplete: hook_form_1.schemaHelper.objectOrNull({ message: { required_error: 'Autocomplete is required!' } }),
    singleCountry: hook_form_1.schemaHelper.objectOrNull({
        message: { required_error: 'Single country is required!' },
    }),
    multiCountry: zod_1.z.string().array().min(2, { message: 'Must have at least 2 items!' }),
    //
    singleSelect: zod_1.z.string().min(1, { message: 'Single select is required!' }),
    multiSelect: zod_1.z.string().array().min(2, { message: 'Must have at least 2 items!' }),
    //
    rating: zod_1.z.number().min(1, { message: 'Rating is required!' }),
    radioGroup: zod_1.z.string().min(1, { message: 'Choose at least one option!' }),
    //
    checkbox: hook_form_1.schemaHelper.boolean({ message: { required_error: 'Checkbox is required!' } }),
    switch: hook_form_1.schemaHelper.boolean({ message: { required_error: 'Switch is required!' } }),
    //
    multiCheckbox: zod_1.z.string().array().nonempty({ message: 'Choose at least one option!' }),
    multiSwitch: zod_1.z.string().array().nonempty({ message: 'Choose at least one option!' }),
    //
    slider: zod_1.z.number().min(10, { message: 'Mininum value is >= 10' }),
    sliderRange: zod_1.z
        .number()
        .array()
        .refine(function (data) { return data[0] >= 20 && data[1] <= 80; }, {
        message: 'Range must be between 20 and 80',
    }),
    //
    singleUpload: hook_form_1.schemaHelper.file({ message: { required_error: 'Single upload is required!' } }),
    multiUpload: hook_form_1.schemaHelper.files({ message: { required_error: 'Multi upload is required!' } }),
})
    .refine(function (data) { return data.password === data.confirmPassword; }, {
    message: 'Passwords do not match!',
    path: ['confirmPassword'],
})
    .refine(function (data) { return !(0, format_time_1.fIsAfter)(data.startDate, data.endDate); }, {
    message: 'End date cannot be earlier than start date!',
    path: ['endDate'],
});
