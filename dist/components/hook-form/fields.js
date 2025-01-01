"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Field = void 0;
var rhf_code_1 = require("./rhf-code");
var rhf_rating_1 = require("./rhf-rating");
var rhf_editor_1 = require("./rhf-editor");
var rhf_slider_1 = require("./rhf-slider");
var rhf_text_field_1 = require("./rhf-text-field");
var rhf_radio_group_1 = require("./rhf-radio-group");
var rhf_phone_input_1 = require("./rhf-phone-input");
var rhf_autocomplete_1 = require("./rhf-autocomplete");
var rhf_country_select_1 = require("./rhf-country-select");
var rhf_switch_1 = require("./rhf-switch");
var rhf_select_1 = require("./rhf-select");
var rhf_checkbox_1 = require("./rhf-checkbox");
var rhf_upload_1 = require("./rhf-upload");
var rhf_date_picker_1 = require("./rhf-date-picker");
// ----------------------------------------------------------------------
exports.Field = {
    Code: rhf_code_1.RHFCode,
    Editor: rhf_editor_1.RHFEditor,
    Select: rhf_select_1.RHFSelect,
    Upload: rhf_upload_1.RHFUpload,
    Switch: rhf_switch_1.RHFSwitch,
    Slider: rhf_slider_1.RHFSlider,
    Rating: rhf_rating_1.RHFRating,
    Text: rhf_text_field_1.RHFTextField,
    Phone: rhf_phone_input_1.RHFPhoneInput,
    Checkbox: rhf_checkbox_1.RHFCheckbox,
    UploadBox: rhf_upload_1.RHFUploadBox,
    RadioGroup: rhf_radio_group_1.RHFRadioGroup,
    DatePicker: rhf_date_picker_1.RHFDatePicker,
    MultiSelect: rhf_select_1.RHFMultiSelect,
    MultiSwitch: rhf_switch_1.RHFMultiSwitch,
    UploadAvatar: rhf_upload_1.RHFUploadAvatar,
    Autocomplete: rhf_autocomplete_1.RHFAutocomplete,
    MultiCheckbox: rhf_checkbox_1.RHFMultiCheckbox,
    CountrySelect: rhf_country_select_1.RHFCountrySelect,
    MobileDateTimePicker: rhf_date_picker_1.RHFMobileDateTimePicker,
};
