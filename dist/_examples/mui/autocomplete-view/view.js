'use client';
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutocompleteView = AutocompleteView;
var react_1 = require("react");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_2 = require("react");
var Chip_1 = __importDefault(require("@mui/material/Chip"));
var Stack_1 = __importDefault(require("@mui/material/Stack"));
var Checkbox_1 = __importDefault(require("@mui/material/Checkbox"));
var TextField_1 = __importDefault(require("@mui/material/TextField"));
var Typography_1 = __importDefault(require("@mui/material/Typography"));
var Autocomplete_1 = __importDefault(require("@mui/material/Autocomplete"));
var paths_1 = require("../../../routes/paths");
var country_select_1 = require("../../../components/country-select");
var custom_breadcrumbs_1 = require("../../../components/custom-breadcrumbs");
var component_hero_1 = require("../../component-hero");
var component_block_1 = require("../../component-block");
// ----------------------------------------------------------------------
var options = ['Option 1', 'Option 2'];
function AutocompleteView() {
    var _a, _b;
    var _c = (0, react_2.useState)(''), inputValue = _c[0], setInputValue = _c[1];
    var _d = (0, react_2.useState)(options[0]), value = _d[0], setValue = _d[1];
    var _e = (0, react_2.useState)('Armenia'), singleLabel = _e[0], setSingleLabel = _e[1];
    var _f = (0, react_2.useState)('AR'), singleCode = _f[0], setSingleCode = _f[1];
    var _g = (0, react_2.useState)(['Austria', 'Australia', 'Bulgaria']), multiLabel = _g[0], setMultiLabel = _g[1];
    var _h = (0, react_2.useState)(['BJ', 'BL', 'BM']), multiCode = _h[0], setMultiCode = _h[1];
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(component_hero_1.ComponentHero, { children: (0, jsx_runtime_1.jsx)(custom_breadcrumbs_1.CustomBreadcrumbs, { heading: "Autocomplete", links: [
                        { name: 'Components', href: paths_1.paths.docs.components.root },
                        { name: 'Autocomplete' },
                    ], moreLink: ['https://mui.com/components/autocomplete'] }) }), (0, jsx_runtime_1.jsxs)(component_block_1.ComponentContainer, { sx: {
                    rowGap: 5,
                    columnGap: 3,
                    display: 'grid',
                    gridTemplateColumns: { xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' },
                }, children: [(0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { title: "Combo box", children: (0, jsx_runtime_1.jsx)(Autocomplete_1.default, { fullWidth: true, options: top100Films, getOptionLabel: function (option) { return option.title; }, renderInput: function (params) { return (0, jsx_runtime_1.jsx)(TextField_1.default, __assign({}, params, { label: "Combo box", margin: "none" })); }, renderOption: function (props, option) { return ((0, react_1.createElement)("li", __assign({}, props, { key: option.title }), option.title)); } }) }), (0, jsx_runtime_1.jsxs)(component_block_1.ComponentBlock, { title: "Controlled states", sx: { flexDirection: 'column' }, children: [(0, jsx_runtime_1.jsx)(Autocomplete_1.default, { fullWidth: true, value: value, options: options, onChange: function (event, newValue) {
                                    setValue(newValue);
                                }, inputValue: inputValue, onInputChange: function (event, newInputValue) {
                                    setInputValue(newInputValue);
                                }, getOptionLabel: function (option) { return option; }, renderInput: function (params) { return (0, jsx_runtime_1.jsx)(TextField_1.default, __assign({}, params, { label: "Controllable" })); }, renderOption: function (props, option) { return ((0, react_1.createElement)("li", __assign({}, props, { key: option }), option)); } }), (0, jsx_runtime_1.jsx)(Typography_1.default, { variant: "body2", children: "value: ".concat(value !== null ? "'".concat(value, "'") : 'null') }), (0, jsx_runtime_1.jsx)(Typography_1.default, { variant: "body2", children: "inputValue: '".concat(inputValue, "'") })] }), (0, jsx_runtime_1.jsxs)(component_block_1.ComponentBlock, { title: "Free solo", children: [(0, jsx_runtime_1.jsx)(Autocomplete_1.default, { fullWidth: true, freeSolo: true, options: top100Films.map(function (option) { return option.title; }), getOptionLabel: function (option) { return option; }, renderInput: function (params) { return (0, jsx_runtime_1.jsx)(TextField_1.default, __assign({}, params, { label: "Free solo" })); }, renderOption: function (props, option) { return ((0, react_1.createElement)("li", __assign({}, props, { key: option }), option)); } }), (0, jsx_runtime_1.jsx)(Autocomplete_1.default, { fullWidth: true, freeSolo: true, disableClearable: true, options: top100Films.map(function (option) { return option.title; }), getOptionLabel: function (option) { return option; }, renderInput: function (params) { return ((0, jsx_runtime_1.jsx)(TextField_1.default, __assign({}, params, { label: "Search input", InputProps: __assign(__assign({}, params.InputProps), { type: 'search' }) }))); }, renderOption: function (props, option) { return ((0, react_1.createElement)("li", __assign({}, props, { key: option }), option)); } })] }), (0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { title: "Multiple Values", children: (0, jsx_runtime_1.jsx)(Autocomplete_1.default, { fullWidth: true, multiple: true, limitTags: 3, options: top100Films, getOptionLabel: function (option) { return option.title; }, defaultValue: top100Films.slice(0, 8), renderInput: function (params) { return ((0, jsx_runtime_1.jsx)(TextField_1.default, __assign({}, params, { label: "Multiple Select", placeholder: "Favorites" }))); }, renderOption: function (props, option) { return ((0, react_1.createElement)("li", __assign({}, props, { key: option.title }), option.title)); }, renderTags: function (selected, getTagProps) {
                                return selected.map(function (option, index) { return ((0, react_1.createElement)(Chip_1.default, __assign({}, getTagProps({ index: index }), { key: option.title, label: option.title, size: "small", variant: "soft" }))); });
                            } }) }), (0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { title: "Checkboxes", children: (0, jsx_runtime_1.jsx)(Autocomplete_1.default, { fullWidth: true, multiple: true, limitTags: 3, disableCloseOnSelect: true, options: top100Films, getOptionLabel: function (option) { return option.title; }, defaultValue: top100Films.slice(0, 1), renderInput: function (params) { return ((0, jsx_runtime_1.jsx)(TextField_1.default, __assign({}, params, { label: "Checkboxes", placeholder: "Favorites" }))); }, renderOption: function (props, option, _a) {
                                var selected = _a.selected;
                                return ((0, react_1.createElement)("li", __assign({}, props, { key: option.title }),
                                    (0, jsx_runtime_1.jsx)(Checkbox_1.default, { size: "small", disableRipple: true, checked: selected }, option.title),
                                    option.title));
                            }, renderTags: function (selected, getTagProps) {
                                return selected.map(function (option, index) { return ((0, react_1.createElement)(Chip_1.default, __assign({}, getTagProps({ index: index }), { key: option.title, label: option.title, size: "small", variant: "soft" }))); });
                            } }) }), (0, jsx_runtime_1.jsxs)(component_block_1.ComponentBlock, { title: "Sizes", children: [(0, jsx_runtime_1.jsx)(Autocomplete_1.default, { fullWidth: true, options: top100Films, getOptionLabel: function (option) { return option.title; }, defaultValue: top100Films[13], renderInput: function (params) { return ((0, jsx_runtime_1.jsx)(TextField_1.default, __assign({}, params, { label: "Size Medium", placeholder: "Favorites" }))); }, renderOption: function (props, option) { return ((0, react_1.createElement)("li", __assign({}, props, { key: option.title }), option.title)); } }), (0, jsx_runtime_1.jsx)(Autocomplete_1.default, { fullWidth: true, multiple: true, size: "small", options: top100Films, getOptionLabel: function (option) { return option.title; }, defaultValue: [top100Films[13]], renderInput: function (params) { return ((0, jsx_runtime_1.jsx)(TextField_1.default, __assign({}, params, { label: "Size small", placeholder: "Favorites" }))); }, renderOption: function (props, option) { return ((0, react_1.createElement)("li", __assign({}, props, { key: option.title }), option.title)); }, renderTags: function (selected, getTagProps) {
                                    return selected.map(function (option, index) { return ((0, react_1.createElement)(Chip_1.default, __assign({}, getTagProps({ index: index }), { key: option.title, label: option.title, size: "small", color: "info", variant: "soft" }))); });
                                } })] }), (0, jsx_runtime_1.jsxs)(component_block_1.ComponentBlock, { title: "Country Select", sx: { gap: 5 }, children: [(0, jsx_runtime_1.jsxs)(Stack_1.default, { direction: "row", spacing: 1.5, sx: { width: 1 }, children: [(0, jsx_runtime_1.jsx)(country_select_1.CountrySelect, { id: "single-label", fullWidth: true, label: "Single select label", placeholder: "Choose a country", value: singleLabel, onChange: function (event, newValue) { return setSingleLabel(newValue); } }), (0, jsx_runtime_1.jsxs)(Stack_1.default, { sx: {
                                            px: 1,
                                            width: 200,
                                            borderRadius: 1,
                                            textAlign: 'right',
                                            typography: 'body2',
                                            justifyContent: 'center',
                                            bgcolor: 'background.neutral',
                                        }, children: [(0, jsx_runtime_1.jsx)("small", { children: "Output:" }), (0, jsx_runtime_1.jsx)("strong", { children: (0, jsx_runtime_1.jsx)("small", { children: singleLabel !== null && singleLabel !== void 0 ? singleLabel : '-' }) })] })] }), (0, jsx_runtime_1.jsxs)(Stack_1.default, { direction: "row", spacing: 1.5, sx: { width: 1 }, children: [(0, jsx_runtime_1.jsx)(country_select_1.CountrySelect, { id: "single-code", getValue: "code", fullWidth: true, label: "Single select code", placeholder: "Choose a country", value: singleCode, onChange: function (event, newValue) { return setSingleCode(newValue); } }), (0, jsx_runtime_1.jsxs)(Stack_1.default, { sx: {
                                            px: 1,
                                            width: 200,
                                            borderRadius: 1,
                                            textAlign: 'right',
                                            typography: 'body2',
                                            justifyContent: 'center',
                                            bgcolor: 'background.neutral',
                                        }, children: [(0, jsx_runtime_1.jsx)("small", { children: "Output:" }), (0, jsx_runtime_1.jsx)("strong", { children: (0, jsx_runtime_1.jsx)("small", { children: singleCode !== null && singleCode !== void 0 ? singleCode : '-' }) })] })] }), (0, jsx_runtime_1.jsxs)(Stack_1.default, { spacing: 1.5, sx: { width: 1 }, children: [(0, jsx_runtime_1.jsx)(country_select_1.CountrySelect, { id: "multiple-label", multiple: true, fullWidth: true, limitTags: 3, label: "Multi select label", placeholder: "Choose a country", value: multiLabel, onChange: function (event, newValue) { return setMultiLabel(newValue); } }), (0, jsx_runtime_1.jsxs)(Stack_1.default, { sx: {
                                            p: 1,
                                            width: 1,
                                            minHeight: 54,
                                            borderRadius: 1,
                                            textAlign: 'right',
                                            typography: 'body2',
                                            bgcolor: 'background.neutral',
                                        }, children: [(0, jsx_runtime_1.jsx)("small", { children: "Output:" }), ' ', (0, jsx_runtime_1.jsx)("strong", { children: (0, jsx_runtime_1.jsx)("small", { children: (_a = multiLabel.join(', ')) !== null && _a !== void 0 ? _a : '-' }) })] })] }), (0, jsx_runtime_1.jsxs)(Stack_1.default, { spacing: 1.5, sx: { width: 1 }, children: [(0, jsx_runtime_1.jsx)(country_select_1.CountrySelect, { id: "multiple-code", getValue: "code", multiple: true, fullWidth: true, limitTags: 3, label: "Multi select code", placeholder: "Choose a country", value: multiCode, onChange: function (event, newValue) { return setMultiCode(newValue); } }), (0, jsx_runtime_1.jsxs)(Stack_1.default, { sx: {
                                            p: 1,
                                            width: 1,
                                            minHeight: 54,
                                            borderRadius: 1,
                                            textAlign: 'right',
                                            typography: 'body2',
                                            bgcolor: 'background.neutral',
                                        }, children: [(0, jsx_runtime_1.jsx)("small", { children: "Output:" }), ' ', (0, jsx_runtime_1.jsx)("strong", { children: (0, jsx_runtime_1.jsx)("small", { children: (_b = multiCode.join(', ')) !== null && _b !== void 0 ? _b : '-' }) })] })] })] })] })] }));
}
// ----------------------------------------------------------------------
var top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
    { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
    { title: 'The Good, the Bad and the Ugly', year: 1966 },
    { title: 'Fight Club', year: 1999 },
    { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
    { title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },
    { title: 'Forrest Gump', year: 1994 },
    { title: 'Inception', year: 2010 },
    { title: 'The Lord of the Rings: The Two Towers', year: 2002 },
    { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { title: 'Goodfellas', year: 1990 },
    { title: 'The Matrix', year: 1999 },
    { title: 'Seven Samurai', year: 1954 },
    { title: 'Star Wars: Episode IV - A New Hope', year: 1977 },
    { title: 'City of God', year: 2002 },
    { title: 'Se7en', year: 1995 },
    { title: 'The Silence of the Lambs', year: 1991 },
    { title: "It's a Wonderful Life", year: 1946 },
    { title: 'Life Is Beautiful', year: 1997 },
    { title: 'The Usual Suspects', year: 1995 },
    { title: 'Léon: The Professional', year: 1994 },
    { title: 'Spirited Away', year: 2001 },
    { title: 'Saving Private Ryan', year: 1998 },
    { title: 'Once Upon a Time in the West', year: 1968 },
    { title: 'American History X', year: 1998 },
    { title: 'Interstellar', year: 2014 },
    { title: 'Casablanca', year: 1942 },
    { title: 'City Lights', year: 1931 },
    { title: 'Psycho', year: 1960 },
    { title: 'The Green Mile', year: 1999 },
    { title: 'The Intouchables', year: 2011 },
    { title: 'Modern Times', year: 1936 },
    { title: 'Raiders of the Lost Ark', year: 1981 },
    { title: 'Rear Window', year: 1954 },
    { title: 'The Pianist', year: 2002 },
    { title: 'The Departed', year: 2006 },
    { title: 'Terminator 2: Judgment Day', year: 1991 },
    { title: 'Back to the Future', year: 1985 },
    { title: 'Whiplash', year: 2014 },
    { title: 'Gladiator', year: 2000 },
    { title: 'Memento', year: 2000 },
    { title: 'The Prestige', year: 2006 },
    { title: 'The Lion King', year: 1994 },
    { title: 'Apocalypse Now', year: 1979 },
    { title: 'Alien', year: 1979 },
    { title: 'Sunset Boulevard', year: 1950 },
    {
        title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
        year: 1964,
    },
    { title: 'The Great Dictator', year: 1940 },
    { title: 'Cinema Paradiso', year: 1988 },
    { title: 'The Lives of Others', year: 2006 },
    { title: 'Grave of the Fireflies', year: 1988 },
    { title: 'Paths of Glory', year: 1957 },
    { title: 'Django Unchained', year: 2012 },
    { title: 'The Shining', year: 1980 },
    { title: 'WALL·E', year: 2008 },
    { title: 'American Beauty', year: 1999 },
    { title: 'The Dark Knight Rises', year: 2012 },
    { title: 'Princess Mononoke', year: 1997 },
    { title: 'Aliens', year: 1986 },
    { title: 'Oldboy', year: 2003 },
    { title: 'Once Upon a Time in America', year: 1984 },
    { title: 'Witness for the Prosecution', year: 1957 },
    { title: 'Das Boot', year: 1981 },
    { title: 'Citizen Kane', year: 1941 },
    { title: 'North by Northwest', year: 1959 },
    { title: 'Vertigo', year: 1958 },
    { title: 'Star Wars: Episode VI - Return of the Jedi', year: 1983 },
    { title: 'Reservoir Dogs', year: 1992 },
    { title: 'Braveheart', year: 1995 },
    { title: 'M', year: 1931 },
    { title: 'Requiem for a Dream', year: 2000 },
    { title: 'Amélie', year: 2001 },
    { title: 'A Clockwork Orange', year: 1971 },
    { title: 'Like Stars on Earth', year: 2007 },
    { title: 'Taxi Driver', year: 1976 },
    { title: 'Lawrence of Arabia', year: 1962 },
    { title: 'Double Indemnity', year: 1944 },
    { title: 'Eternal Sunshine of the Spotless Mind', year: 2004 },
    { title: 'Amadeus', year: 1984 },
    { title: 'To Kill a Mockingbird', year: 1962 },
    { title: 'Toy Story 3', year: 2010 },
    { title: 'Logan', year: 2017 },
    { title: 'Full Metal Jacket', year: 1987 },
    { title: 'Dangal', year: 2016 },
    { title: 'The Sting', year: 1973 },
    { title: '2001: A Space Odyssey', year: 1968 },
    { title: "Singin' in the Rain", year: 1952 },
    { title: 'Toy Story', year: 1995 },
    { title: 'Bicycle Thieves', year: 1948 },
    { title: 'The Kid', year: 1921 },
    { title: 'Inglourious Basterds', year: 2009 },
    { title: 'Snatch', year: 2000 },
    { title: '3 Idiots', year: 2009 },
    { title: 'Monty Python and the Holy Grail', year: 1975 },
];
