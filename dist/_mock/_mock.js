"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._mock = void 0;
var format_time_1 = require("../utils/format-time");
var assets_1 = require("./assets");
// ----------------------------------------------------------------------
exports._mock = {
    id: function (index) { return assets_1._id[index]; },
    time: function (index) { return (0, format_time_1.fSub)({ days: index, hours: index }); },
    boolean: function (index) { return assets_1._booleans[index]; },
    role: function (index) { return assets_1._roles[index]; },
    // Text
    courseNames: function (index) { return assets_1._courseNames[index]; },
    fileNames: function (index) { return assets_1._fileNames[index]; },
    eventNames: function (index) { return assets_1._eventNames[index]; },
    taskNames: function (index) { return assets_1._taskNames[index]; },
    postTitle: function (index) { return assets_1._postTitles[index]; },
    jobTitle: function (index) { return assets_1._jobTitles[index]; },
    tourName: function (index) { return assets_1._tourNames[index]; },
    productName: function (index) { return assets_1._productNames[index]; },
    sentence: function (index) { return assets_1._sentences[index]; },
    description: function (index) { return assets_1._descriptions[index]; },
    // Contact
    email: function (index) { return assets_1._emails[index]; },
    phoneNumber: function (index) { return assets_1._phoneNumbers[index]; },
    fullAddress: function (index) { return assets_1._fullAddress[index]; },
    // Name
    firstName: function (index) { return assets_1._firstNames[index]; },
    lastName: function (index) { return assets_1._lastNames[index]; },
    fullName: function (index) { return assets_1._fullNames[index]; },
    companyNames: function (index) { return assets_1._companyNames[index]; },
    countryNames: function (index) { return assets_1._countryNames[index]; },
    // Number
    number: {
        percent: function (index) { return assets_1._percents[index]; },
        rating: function (index) { return assets_1._ratings[index]; },
        age: function (index) { return assets_1._ages[index]; },
        price: function (index) { return assets_1._prices[index]; },
        nativeS: function (index) { return assets_1._nativeS[index]; },
        nativeM: function (index) { return assets_1._nativeM[index]; },
        nativeL: function (index) { return assets_1._nativeL[index]; },
    },
    // Image
    image: {
        cover: function (index) { return "/assets/images/cover/cover-".concat(index + 1, ".webp"); },
        avatar: function (index) { return "/assets/images/avatar/avatar-".concat(index + 1, ".webp"); },
        travel: function (index) { return "/assets/images/travel/travel-".concat(index + 1, ".webp"); },
        course: function (index) { return "/assets/images/course/course-".concat(index + 1, ".webp"); },
        company: function (index) { return "/assets/images/company/company-".concat(index + 1, ".webp"); },
        product: function (index) { return "/assets/images/products/product-".concat(index + 1, ".webp"); },
        portrait: function (index) { return "/assets/images/portrait/portrait-".concat(index + 1, ".webp"); },
    },
};
