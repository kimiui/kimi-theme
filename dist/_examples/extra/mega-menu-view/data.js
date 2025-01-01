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
exports.navItems2 = exports.navItems1 = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var _mock_1 = require("../../../_mock");
var label_1 = require("../../../components/label");
var iconify_1 = require("../../../components/iconify");
// ----------------------------------------------------------------------
var arr_1 = [
    { title: 'Metallic processing machinery', path: '#' },
    { title: 'Machinery for food, beverage & cereal', path: '#' },
    { title: 'Laser equipment', path: '#' },
    { title: 'Mould', path: '#' },
    { title: 'Textile machinery & parts', path: '#' },
    { title: 'Cutting & fold-bend machine', path: '#' },
    { title: 'Paper machinery', path: '#' },
    { title: 'Rubber machinery', path: '#' },
    { title: 'Chemical equipment & machinery', path: '#' },
    { title: 'Mixing equipment', path: '#' },
    { title: 'Machinery for garment, shoes & accessories', path: '#' },
    { title: 'Crushing & culling machine', path: '#' },
];
var arr_2 = [
    { title: 'Plastic machinery', path: '#' },
    { title: 'Woodworking machinery', path: '#' },
    { title: 'Blow molding machine', path: '#' },
    { title: 'Plastic recycling machine', path: '#' },
    { title: 'Injection molding machine', path: '#' },
];
var arr_3 = [
    { title: 'Building material making machinery', path: '#' },
    { title: 'Lifting equipment', path: '#' },
    { title: 'Excavator', path: '#' },
    { title: 'Concrete machinery', path: '#' },
    { title: 'Stone processing machinery', path: '#' },
];
var arr_4 = [
    { title: 'Agriculture machinery', path: '#' },
    { title: 'Livestock machineryfeed', path: '#' },
    { title: 'Feed processing machinery', path: '#' },
    { title: 'Tiller', path: '#' },
    { title: 'Harvesting machine', path: '#' },
];
var arr_5 = [
    { title: 'Cnc machine tools', path: '#' },
    { title: 'Lathe', path: '#' },
    { title: 'Grinding machine ', path: '#' },
    { title: 'Drilling machine ', path: '#' },
    { title: 'Milling machine ', path: '#' },
];
// ----------------------------------------------------------------------
exports.navItems1 = [
    {
        title: 'Item 1',
        path: '#',
        icon: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "solar:home-2-outline" }),
        slides: __spreadArray([], Array(16), true).map(function (_, index) { return ({
            name: _mock_1._mock.productName(index),
            coverUrl: _mock_1._mock.image.product(index),
            path: '#',
        }); }),
        moreLink: { title: 'More Categories', path: '#' },
        tags: [
            { title: 'Paper cup', path: '#' },
            { title: 'Lotion pump', path: '#' },
            { title: 'Brush cutter', path: '#' },
            { title: 'Display rack', path: '#' },
            { title: 'Glass bottle', path: '#' },
        ],
        children: [
            { subheader: 'Other machinery & parts', items: arr_1 },
            { subheader: 'Plastic & woodworking', items: arr_2 },
            { subheader: 'Construction machinery', items: arr_3 },
            { subheader: 'Agriculture machinery', items: arr_4 },
            { subheader: 'Machine tools', items: arr_5 },
        ],
    },
    {
        title: 'Item 2',
        path: '#',
        icon: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "solar:atom-outline" }),
        children: [
            { subheader: 'Other machinery & parts', items: arr_1 },
            { subheader: 'Plastic & woodworking', items: arr_2 },
            { subheader: 'Construction machinery', items: arr_3 },
            { subheader: 'Agriculture machinery', items: arr_4 },
            { subheader: 'Machine tools', items: arr_5 },
        ],
    },
    {
        title: 'Item 3',
        path: '#',
        icon: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "solar:chart-square-outline" }),
        info: (0, jsx_runtime_1.jsx)(label_1.Label, { color: "info", children: "+3" }),
        children: [{ items: arr_1 }],
    },
    {
        title: 'Item 4',
        path: '#',
        icon: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "solar:confetti-minimalistic-outline" }),
        info: '+72',
        children: [
            {
                items: [
                    { title: 'Foods', path: '#' },
                    { title: 'Cosmetics  ', path: '#' },
                    { title: 'Clothes ', path: '#' },
                ],
            },
        ],
    },
    {
        title: 'Item 5',
        path: '#',
        icon: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "solar:gallery-circle-outline" }),
        children: [
            {
                items: [
                    { title: 'Foods', path: '#' },
                    { title: 'Cosmetics  ', path: '#' },
                    { title: 'Clothes ', path: '#' },
                ],
            },
        ],
    },
    {
        title: 'Item 6',
        path: '#',
        icon: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "solar:hanger-2-outline" }),
        children: [
            {
                items: [
                    { title: 'Foods', path: '#' },
                    { title: 'Cosmetics  ', path: '#' },
                    { title: 'Clothes ', path: '#' },
                ],
            },
        ],
    },
    {
        title: 'Item 7',
        path: '#',
        icon: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "solar:letter-outline" }),
        children: [
            {
                items: [
                    { title: 'Foods', path: '#' },
                    { title: 'Cosmetics  ', path: '#' },
                    { title: 'Clothes ', path: '#' },
                ],
            },
        ],
    },
    {
        title: 'Item 8',
        path: 'https://www.google.com/',
        icon: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "solar:airbuds-case-open-outline" }),
        disabled: true,
    },
];
// ----------------------------------------------------------------------
exports.navItems2 = [
    {
        title: 'Item 1',
        path: '#',
        icon: 'icon.item1',
        slides: __spreadArray([], Array(16), true).map(function (_, index) { return ({
            name: _mock_1._mock.productName(index),
            coverUrl: _mock_1._mock.image.product(index),
            path: '#',
        }); }),
        moreLink: { title: 'More Categories', path: '#' },
        tags: [
            { title: 'Paper cup', path: '#' },
            { title: 'Lotion pump', path: '#' },
            { title: 'Brush cutter', path: '#' },
            { title: 'Display rack', path: '#' },
            { title: 'Glass bottle', path: '#' },
        ],
        children: [
            { subheader: 'Other machinery & parts', items: arr_1 },
            { subheader: 'Plastic & woodworking', items: arr_2 },
            { subheader: 'Construction machinery', items: arr_3 },
            { subheader: 'Agriculture machinery', items: arr_4 },
            { subheader: 'Machine tools', items: arr_5 },
        ],
    },
    {
        title: 'Item 2',
        path: '#',
        icon: 'icon.item2',
        children: [
            { subheader: 'Other machinery & parts', items: arr_1 },
            { subheader: 'Plastic & woodworking', items: arr_2 },
            { subheader: 'Construction machinery', items: arr_3 },
            { subheader: 'Agriculture machinery', items: arr_4 },
            { subheader: 'Machine tools', items: arr_5 },
        ],
    },
    {
        title: 'Item 3',
        path: '#',
        icon: 'icon.item3',
        info: ['info.item3', '+3'],
        children: [{ items: arr_1 }],
    },
    {
        title: 'Item 4',
        path: '#',
        icon: 'icon.item4',
        info: ['info.item4', '+72'],
        children: [
            {
                items: [
                    { title: 'Foods', path: '#' },
                    { title: 'Cosmetics  ', path: '#' },
                    { title: 'Clothes ', path: '#' },
                ],
            },
        ],
    },
    {
        title: 'Item 5',
        path: '#',
        icon: 'icon.item5',
        children: [
            {
                items: [
                    { title: 'Foods', path: '#' },
                    { title: 'Cosmetics  ', path: '#' },
                    { title: 'Clothes ', path: '#' },
                ],
            },
        ],
    },
];
