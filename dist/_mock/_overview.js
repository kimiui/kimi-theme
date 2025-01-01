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
exports._ecommerceProductPerformance = exports._coursesReminder = exports._coursesFeatured = exports._coursesContinue = exports._bookingNew = exports._bookingReview = exports._bookingsOverview = exports._bookings = exports._bankingRecentTransitions = exports._bankingCreditCard = exports._bankingContacts = exports._ecommerceNewProducts = exports._ecommerceLatestProducts = exports._ecommerceBestSalesman = exports._ecommerceSalesOverview = exports._analyticTraffic = exports._analyticOrderTimeline = exports._analyticPosts = exports._analyticTasks = exports._appFeatured = exports._appInvoices = exports._appAuthors = exports._appInstalled = exports._topSales = void 0;
var faker_1 = require("@faker-js/faker");
var format_time_1 = require("lib/utils/format-time");
var _mock_1 = require("./_mock");
// APP
// ----------------------------------------------------------------------
exports._topSales = [
    'Urban Explorer Sneakers',
    'Classic Leather Loafers',
    'Mountain Trekking Boots',
    'Elegance Stiletto Heels',
    'Comfy Running Shoes',
].map(function (name, index) { return ({
    id: _mock_1._mock.id(index),
    name: name,
    sales: faker_1.faker.number.float({ min: 1000, max: 5000 }),
    image: "/assets/images/products/product-".concat(index + 1, ".webp"),
    price: faker_1.faker.number.float({ min: 20, max: 100 }),
}); });
exports._appInstalled = ['Germany', 'England', 'France', 'Korean', 'USA'].map(function (country, index) { return ({
    id: _mock_1._mock.id(index),
    countryName: country,
    android: _mock_1._mock.number.nativeL(index),
    windows: _mock_1._mock.number.nativeL(index + 1),
    apple: _mock_1._mock.number.nativeL(index + 2),
    countryCode: ['de', 'gb', 'fr', 'kr', 'us'][index],
}); });
exports._appAuthors = __spreadArray([], Array(3), true).map(function (_, index) { return ({
    id: _mock_1._mock.id(index),
    name: _mock_1._mock.fullName(index),
    avatarUrl: _mock_1._mock.image.avatar(index),
    totalFavorites: _mock_1._mock.number.nativeL(index),
}); });
exports._appInvoices = __spreadArray([], Array(5), true).map(function (_, index) {
    var category = ['Android', 'Mac', 'Windows', 'Android', 'Mac'][index];
    var status = ['paid', 'out of date', 'progress', 'paid', 'paid'][index];
    return {
        id: _mock_1._mock.id(index),
        invoiceNumber: "INV-199".concat(index),
        price: _mock_1._mock.number.price(index),
        category: category,
        status: status,
    };
});
exports._appFeatured = __spreadArray([], Array(3), true).map(function (_, index) { return ({
    id: _mock_1._mock.id(index + 3),
    title: _mock_1._mock.postTitle(index + 3),
    description: _mock_1._mock.sentence(index + 3),
    coverUrl: _mock_1._mock.image.cover(index + 3),
}); });
// ANALYTIC
// ----------------------------------------------------------------------
exports._analyticTasks = __spreadArray([], Array(5), true).map(function (_, index) { return ({
    id: _mock_1._mock.id(index),
    name: _mock_1._mock.taskNames(index),
}); });
exports._analyticPosts = __spreadArray([], Array(5), true).map(function (_, index) { return ({
    id: _mock_1._mock.id(index),
    postedAt: _mock_1._mock.time(index),
    title: _mock_1._mock.postTitle(index),
    coverUrl: _mock_1._mock.image.cover(index),
    description: _mock_1._mock.sentence(index),
}); });
exports._analyticOrderTimeline = __spreadArray([], Array(5), true).map(function (_, index) {
    var title = [
        '1983, orders, $4220',
        '12 Invoices have been paid',
        'Order #37745 from September',
        'New order placed #XF-2356',
        'New order placed #XF-2346',
    ][index];
    return {
        id: _mock_1._mock.id(index),
        title: title,
        type: "order".concat(index + 1),
        time: _mock_1._mock.time(index),
    };
});
exports._analyticTraffic = [
    {
        value: 'facebook',
        label: 'Facebook',
        total: _mock_1._mock.number.nativeL(1),
    },
    {
        value: 'google',
        label: 'Google',
        total: _mock_1._mock.number.nativeL(2),
    },
    {
        value: 'linkedin',
        label: 'Linkedin',
        total: _mock_1._mock.number.nativeL(3),
    },
    {
        value: 'twitter',
        label: 'Twitter',
        total: _mock_1._mock.number.nativeL(4),
    },
];
// ECOMMERCE
// ----------------------------------------------------------------------
exports._ecommerceSalesOverview = ['Total profit', 'Total income', 'Total expenses'].map(function (label, index) { return ({
    label: label,
    totalAmount: _mock_1._mock.number.price(index) * 100,
    value: _mock_1._mock.number.percent(index),
}); });
exports._ecommerceBestSalesman = __spreadArray([], Array(5), true).map(function (_, index) {
    var category = ['CAP', 'Branded shoes', 'Headphone', 'Cell phone', 'Earings'][index];
    return {
        id: _mock_1._mock.id(index),
        category: category,
        rank: "Top ".concat(index + 1),
        email: _mock_1._mock.email(index),
        name: _mock_1._mock.fullName(index),
        totalAmount: _mock_1._mock.number.price(index),
        avatarUrl: _mock_1._mock.image.avatar(index + 8),
        countryCode: ['de', 'gb', 'fr', 'kr', 'us'][index],
    };
});
exports._ecommerceLatestProducts = __spreadArray([], Array(5), true).map(function (_, index) {
    var colors = (index === 0 && ['#2EC4B6', '#E71D36', '#FF9F1C', '#011627']) ||
        (index === 1 && ['#92140C', '#FFCF99']) ||
        (index === 2 && ['#0CECDD', '#FFF338', '#FF67E7', '#C400FF', '#52006A', '#046582']) ||
        (index === 3 && ['#845EC2', '#E4007C', '#2A1A5E']) || ['#090088'];
    return {
        id: _mock_1._mock.id(index),
        colors: colors,
        name: _mock_1._mock.productName(index),
        price: _mock_1._mock.number.price(index),
        coverUrl: _mock_1._mock.image.product(index),
        priceSale: [1, 3].includes(index) ? _mock_1._mock.number.price(index) : 0,
    };
});
exports._ecommerceNewProducts = __spreadArray([], Array(4), true).map(function (_, index) { return ({
    id: _mock_1._mock.id(index),
    name: _mock_1._mock.productName(index),
    coverUrl: _mock_1._mock.image.product(index),
}); });
// BANKING
// ----------------------------------------------------------------------
exports._bankingContacts = __spreadArray([], Array(12), true).map(function (_, index) { return ({
    id: _mock_1._mock.id(index),
    name: _mock_1._mock.fullName(index),
    email: _mock_1._mock.email(index),
    avatarUrl: _mock_1._mock.image.avatar(index),
}); });
exports._bankingCreditCard = [
    {
        id: _mock_1._mock.id(2),
        balance: 23432.03,
        cardType: 'mastercard',
        cardHolder: _mock_1._mock.fullName(2),
        cardNumber: '**** **** **** 3640',
        cardValid: '11/22',
    },
    {
        id: _mock_1._mock.id(3),
        balance: 18000.23,
        cardType: 'visa',
        cardHolder: _mock_1._mock.fullName(3),
        cardNumber: '**** **** **** 8864',
        cardValid: '11/25',
    },
    {
        id: _mock_1._mock.id(4),
        balance: 2000.89,
        cardType: 'mastercard',
        cardHolder: _mock_1._mock.fullName(4),
        cardNumber: '**** **** **** 7755',
        cardValid: '11/22',
    },
];
exports._bankingRecentTransitions = [
    {
        id: _mock_1._mock.id(2),
        name: _mock_1._mock.fullName(2),
        avatarUrl: _mock_1._mock.image.avatar(2),
        type: 'Income',
        message: 'Receive money from',
        category: 'Annette black',
        date: _mock_1._mock.time(2),
        status: 'progress',
        amount: _mock_1._mock.number.price(2),
    },
    {
        id: _mock_1._mock.id(3),
        name: _mock_1._mock.fullName(3),
        avatarUrl: _mock_1._mock.image.avatar(3),
        type: 'Expenses',
        message: 'Payment for',
        category: 'Courtney henry',
        date: _mock_1._mock.time(3),
        status: 'completed',
        amount: _mock_1._mock.number.price(3),
    },
    {
        id: _mock_1._mock.id(4),
        name: _mock_1._mock.fullName(4),
        avatarUrl: _mock_1._mock.image.avatar(4),
        type: 'Receive',
        message: 'Payment for',
        category: 'Theresa webb',
        date: _mock_1._mock.time(4),
        status: 'failed',
        amount: _mock_1._mock.number.price(4),
    },
    {
        id: _mock_1._mock.id(5),
        name: null,
        avatarUrl: null,
        type: 'Expenses',
        message: 'Payment for',
        category: 'Fast food',
        date: _mock_1._mock.time(5),
        status: 'completed',
        amount: _mock_1._mock.number.price(5),
    },
    {
        id: _mock_1._mock.id(6),
        name: null,
        avatarUrl: null,
        type: 'Expenses',
        message: 'Payment for',
        category: 'Fitness',
        date: _mock_1._mock.time(6),
        status: 'progress',
        amount: _mock_1._mock.number.price(6),
    },
];
// BOOKING
// ----------------------------------------------------------------------
exports._bookings = __spreadArray([], Array(5), true).map(function (_, index) {
    var status = ['Paid', 'Paid', 'Pending', 'Cancelled', 'Paid'][index];
    var customer = {
        avatarUrl: _mock_1._mock.image.avatar(index),
        name: _mock_1._mock.fullName(index),
        phoneNumber: _mock_1._mock.phoneNumber(index),
    };
    var destination = __spreadArray([], Array(5), true).map(function (__, _index) { return ({
        name: _mock_1._mock.tourName(_index + 1),
        coverUrl: _mock_1._mock.image.travel(_index + 1),
    }); })[index];
    return {
        id: _mock_1._mock.id(index),
        destination: destination,
        status: status,
        customer: customer,
        checkIn: _mock_1._mock.time(index),
        checkOut: _mock_1._mock.time(index),
    };
});
exports._bookingsOverview = __spreadArray([], Array(3), true).map(function (_, index) { return ({
    status: ['Pending', 'Canceled', 'Sold'][index],
    quantity: _mock_1._mock.number.nativeL(index),
    value: _mock_1._mock.number.percent(index + 5),
}); });
exports._bookingReview = __spreadArray([], Array(5), true).map(function (_, index) { return ({
    id: _mock_1._mock.id(index),
    name: _mock_1._mock.fullName(index),
    postedAt: _mock_1._mock.time(index),
    rating: _mock_1._mock.number.rating(index),
    avatarUrl: _mock_1._mock.image.avatar(index),
    description: _mock_1._mock.description(index),
    tags: ['Great sevice', 'Recommended', 'Best price'],
}); });
exports._bookingNew = __spreadArray([], Array(8), true).map(function (_, index) { return ({
    guests: '3-5',
    id: _mock_1._mock.id(index),
    bookedAt: _mock_1._mock.time(index),
    duration: '3 days 2 nights',
    isHot: _mock_1._mock.boolean(index),
    name: _mock_1._mock.fullName(index),
    price: _mock_1._mock.number.price(index),
    avatarUrl: _mock_1._mock.image.avatar(index),
    coverUrl: _mock_1._mock.image.travel(index),
}); });
// COURSE
// ----------------------------------------------------------------------
exports._coursesContinue = __spreadArray([], Array(4), true).map(function (_, index) { return ({
    id: _mock_1._mock.id(index),
    title: _mock_1._mock.courseNames(index),
    coverUrl: _mock_1._mock.image.course(index),
    totalLesson: 12,
    currentLesson: index + 7,
}); });
exports._coursesFeatured = __spreadArray([], Array(6), true).map(function (_, index) { return ({
    id: _mock_1._mock.id(index),
    title: _mock_1._mock.courseNames(index),
    coverUrl: _mock_1._mock.image.course(index + 6),
    totalDuration: 220,
    totalStudents: _mock_1._mock.number.nativeM(index),
    price: _mock_1._mock.number.price(index),
}); });
exports._coursesReminder = __spreadArray([], Array(4), true).map(function (_, index) { return ({
    id: _mock_1._mock.id(index),
    title: _mock_1._mock.courseNames(index),
    totalLesson: 12,
    reminderAt: (0, format_time_1.today)(),
    currentLesson: index + 7,
}); });
exports._ecommerceProductPerformance = __spreadArray([], Array(5), true).map(function (_, index) {
    var price = _mock_1._mock.number.price(index);
    var order = _mock_1._mock.number.nativeM(index);
    return {
        id: _mock_1._mock.id(index),
        name: _mock_1._mock.productName(index),
        description: 'Lorem ipsum dolor',
        image: _mock_1._mock.image.product(index),
        price: price,
        order: order,
        sales: price * order,
        stock: index === 0 ? 0 : _mock_1._mock.number.nativeL(index),
    };
});
