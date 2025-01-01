"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports._testimonials = exports._pricingPlans = exports._socials = exports._mapContact = exports._notifications = exports._contacts = exports._addressBooks = exports._faqs = exports._carouselsMembers = void 0;
var _mock_1 = require("./_mock");
// ----------------------------------------------------------------------
exports._carouselsMembers = __spreadArray([], Array(6), true).map(function (_, index) { return ({
    id: _mock_1._mock.id(index),
    name: _mock_1._mock.fullName(index),
    role: _mock_1._mock.role(index),
    avatarUrl: _mock_1._mock.image.portrait(index),
}); });
// ----------------------------------------------------------------------
exports._faqs = __spreadArray([], Array(8), true).map(function (_, index) { return ({
    id: _mock_1._mock.id(index),
    value: "panel".concat(index + 1),
    heading: "Questions ".concat(index + 1),
    detail: _mock_1._mock.description(index),
}); });
// ----------------------------------------------------------------------
exports._addressBooks = __spreadArray([], Array(24), true).map(function (_, index) { return ({
    id: _mock_1._mock.id(index),
    primary: index === 0,
    name: _mock_1._mock.fullName(index),
    email: _mock_1._mock.email(index + 1),
    fullAddress: _mock_1._mock.fullAddress(index),
    phoneNumber: _mock_1._mock.phoneNumber(index),
    company: _mock_1._mock.companyNames(index + 1),
    addressType: index === 0 ? 'Home' : 'Office',
}); });
// ----------------------------------------------------------------------
exports._contacts = __spreadArray([], Array(20), true).map(function (_, index) {
    var status = (index % 2 && 'online') || (index % 3 && 'offline') || (index % 4 && 'alway') || 'busy';
    return {
        id: _mock_1._mock.id(index),
        status: status,
        role: _mock_1._mock.role(index),
        email: _mock_1._mock.email(index),
        name: _mock_1._mock.fullName(index),
        phoneNumber: _mock_1._mock.phoneNumber(index),
        lastActivity: _mock_1._mock.time(index),
        avatarUrl: _mock_1._mock.image.avatar(index),
        address: _mock_1._mock.fullAddress(index),
    };
});
// ----------------------------------------------------------------------
exports._notifications = __spreadArray([], Array(9), true).map(function (_, index) { return ({
    id: _mock_1._mock.id(index),
    avatarUrl: [
        _mock_1._mock.image.avatar(1),
        _mock_1._mock.image.avatar(2),
        _mock_1._mock.image.avatar(3),
        _mock_1._mock.image.avatar(4),
        _mock_1._mock.image.avatar(5),
        null,
        null,
        null,
        null,
        null,
    ][index],
    type: ['friend', 'project', 'file', 'tags', 'payment', 'order', 'chat', 'mail', 'delivery'][index],
    category: [
        'Communication',
        'Project UI',
        'File manager',
        'File manager',
        'File manager',
        'Order',
        'Order',
        'Communication',
        'Communication',
    ][index],
    isUnRead: _mock_1._mock.boolean(index),
    createdAt: _mock_1._mock.time(index),
    title: (index === 0 && "<p><strong>Deja Brady</strong> sent you a friend request</p>") ||
        (index === 1 &&
            "<p><strong>Jayvon Hull</strong> mentioned you in <strong><a href='#'>Kimi UI Kits</a></strong></p>") ||
        (index === 2 &&
            "<p><strong>Lainey Davidson</strong> added file to <strong><a href='#'>File manager</a></strong></p>") ||
        (index === 3 &&
            "<p><strong>Angelique Morse</strong> added new tags to <strong><a href='#'>File manager<a/></strong></p>") ||
        (index === 4 &&
            "<p><strong>Giana Brandt</strong> request a payment of <strong>$200</strong></p>") ||
        (index === 5 && "<p>Your order is placed waiting for shipping</p>") ||
        (index === 6 && "<p>Delivery processing your order is being shipped</p>") ||
        (index === 7 && "<p>You have new message 5 unread messages</p>") ||
        (index === 8 && "<p>You have new mail") ||
        '',
}); });
// ----------------------------------------------------------------------
exports._mapContact = [
    { latlng: [33, 65], address: _mock_1._mock.fullAddress(1), phoneNumber: _mock_1._mock.phoneNumber(1) },
    { latlng: [-12.5, 18.5], address: _mock_1._mock.fullAddress(2), phoneNumber: _mock_1._mock.phoneNumber(2) },
];
// ----------------------------------------------------------------------
exports._socials = [
    {
        value: 'facebook',
        name: 'Facebook',
        path: 'https://www.facebook.com/caitlyn.kerluke',
    },
    {
        value: 'instagram',
        name: 'Instagram',
        path: 'https://www.instagram.com/caitlyn.kerluke',
    },
    {
        value: 'linkedin',
        name: 'Linkedin',
        path: 'https://www.linkedin.com/caitlyn.kerluke',
    },
    {
        value: 'twitter',
        name: 'Twitter',
        path: 'https://www.twitter.com/caitlyn.kerluke',
    },
];
// ----------------------------------------------------------------------
exports._pricingPlans = [
    {
        subscription: 'basic',
        price: 0,
        caption: 'Forever',
        lists: ['3 prototypes', '3 boards', 'Up to 5 team members'],
        labelAction: 'Current plan',
    },
    {
        subscription: 'starter',
        price: 4.99,
        caption: 'Saving $24 a year',
        lists: [
            '3 prototypes',
            '3 boards',
            'Up to 5 team members',
            'Advanced security',
            'Issue escalation',
        ],
        labelAction: 'Choose starter',
    },
    {
        subscription: 'premium',
        price: 9.99,
        caption: 'Saving $124 a year',
        lists: [
            '3 prototypes',
            '3 boards',
            'Up to 5 team members',
            'Advanced security',
            'Issue escalation',
            'Issue development license',
            'Permissions & workflows',
        ],
        labelAction: 'Choose premium',
    },
];
// ----------------------------------------------------------------------
exports._testimonials = [
    {
        name: _mock_1._mock.fullName(1),
        postedDate: _mock_1._mock.time(1),
        ratingNumber: _mock_1._mock.number.rating(1),
        avatarUrl: _mock_1._mock.image.avatar(1),
        content: "Excellent Work! Thanks a lot!",
    },
    {
        name: _mock_1._mock.fullName(2),
        postedDate: _mock_1._mock.time(2),
        ratingNumber: _mock_1._mock.number.rating(2),
        avatarUrl: _mock_1._mock.image.avatar(2),
        content: "It's a very good dashboard and we are really liking the product . We've done some things, like migrate to TS and implementing a react useContext api, to fit our job methodology but the product is one of the best in terms of design and application architecture. The team did a really good job.",
    },
    {
        name: _mock_1._mock.fullName(3),
        postedDate: _mock_1._mock.time(3),
        ratingNumber: _mock_1._mock.number.rating(3),
        avatarUrl: _mock_1._mock.image.avatar(3),
        content: "Customer support is realy fast and helpful the desgin of this theme is looks amazing also the code is very clean and readble realy good job !",
    },
    {
        name: _mock_1._mock.fullName(4),
        postedDate: _mock_1._mock.time(4),
        ratingNumber: _mock_1._mock.number.rating(4),
        avatarUrl: _mock_1._mock.image.avatar(4),
        content: "Amazing, really good code quality and gives you a lot of examples for implementations.",
    },
    {
        name: _mock_1._mock.fullName(5),
        postedDate: _mock_1._mock.time(5),
        ratingNumber: _mock_1._mock.number.rating(5),
        avatarUrl: _mock_1._mock.image.avatar(5),
        content: "Got a few questions after purchasing the product. The owner responded very fast and very helpfull. Overall the code is excellent and works very good. 5/5 stars!",
    },
    {
        name: _mock_1._mock.fullName(6),
        postedDate: _mock_1._mock.time(6),
        ratingNumber: _mock_1._mock.number.rating(6),
        avatarUrl: _mock_1._mock.image.avatar(6),
        content: "CEO of Codealy.io here. We\u2019ve built a developer assessment platform that makes sense - tasks are based on git repositories and run in virtual machines. We automate the pain points - storing candidates code, running it and sharing test results with the whole team, remotely. Bought this template as we need to provide an awesome dashboard for our early customers. I am super happy with purchase. The code is just as good as the design. Thanks!",
    },
];
