'use client';
import { createElement as _createElement } from "react";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Autocomplete from '@mui/material/Autocomplete';
import { paths } from '../../../routes/paths';
import { CountrySelect } from '../../../components/country-select';
import { CustomBreadcrumbs } from '../../../components/custom-breadcrumbs';
import { ComponentHero } from '../../component-hero';
import { ComponentBlock, ComponentContainer } from '../../component-block';
// ----------------------------------------------------------------------
const options = ['Option 1', 'Option 2'];
export function AutocompleteView() {
    const [inputValue, setInputValue] = useState('');
    const [value, setValue] = useState(options[0]);
    const [singleLabel, setSingleLabel] = useState('Armenia');
    const [singleCode, setSingleCode] = useState('AR');
    const [multiLabel, setMultiLabel] = useState(['Austria', 'Australia', 'Bulgaria']);
    const [multiCode, setMultiCode] = useState(['BJ', 'BL', 'BM']);
    return (_jsxs(_Fragment, { children: [_jsx(ComponentHero, { children: _jsx(CustomBreadcrumbs, { heading: "Autocomplete", links: [
                        { name: 'Components', href: paths.docs.components.root },
                        { name: 'Autocomplete' },
                    ], moreLink: ['https://mui.com/components/autocomplete'] }) }), _jsxs(ComponentContainer, { sx: {
                    rowGap: 5,
                    columnGap: 3,
                    display: 'grid',
                    gridTemplateColumns: { xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' },
                }, children: [_jsx(ComponentBlock, { title: "Combo box", children: _jsx(Autocomplete, { fullWidth: true, options: top100Films, getOptionLabel: (option) => option.title, renderInput: (params) => _jsx(TextField, { ...params, label: "Combo box", margin: "none" }), renderOption: (props, option) => (_createElement("li", { ...props, key: option.title }, option.title)) }) }), _jsxs(ComponentBlock, { title: "Controlled states", sx: { flexDirection: 'column' }, children: [_jsx(Autocomplete, { fullWidth: true, value: value, options: options, onChange: (event, newValue) => {
                                    setValue(newValue);
                                }, inputValue: inputValue, onInputChange: (event, newInputValue) => {
                                    setInputValue(newInputValue);
                                }, getOptionLabel: (option) => option, renderInput: (params) => _jsx(TextField, { ...params, label: "Controllable" }), renderOption: (props, option) => (_createElement("li", { ...props, key: option }, option)) }), _jsx(Typography, { variant: "body2", children: `value: ${value !== null ? `'${value}'` : 'null'}` }), _jsx(Typography, { variant: "body2", children: `inputValue: '${inputValue}'` })] }), _jsxs(ComponentBlock, { title: "Free solo", children: [_jsx(Autocomplete, { fullWidth: true, freeSolo: true, options: top100Films.map((option) => option.title), getOptionLabel: (option) => option, renderInput: (params) => _jsx(TextField, { ...params, label: "Free solo" }), renderOption: (props, option) => (_createElement("li", { ...props, key: option }, option)) }), _jsx(Autocomplete, { fullWidth: true, freeSolo: true, disableClearable: true, options: top100Films.map((option) => option.title), getOptionLabel: (option) => option, renderInput: (params) => (_jsx(TextField, { ...params, label: "Search input", InputProps: { ...params.InputProps, type: 'search' } })), renderOption: (props, option) => (_createElement("li", { ...props, key: option }, option)) })] }), _jsx(ComponentBlock, { title: "Multiple Values", children: _jsx(Autocomplete, { fullWidth: true, multiple: true, limitTags: 3, options: top100Films, getOptionLabel: (option) => option.title, defaultValue: top100Films.slice(0, 8), renderInput: (params) => (_jsx(TextField, { ...params, label: "Multiple Select", placeholder: "Favorites" })), renderOption: (props, option) => (_createElement("li", { ...props, key: option.title }, option.title)), renderTags: (selected, getTagProps) => selected.map((option, index) => (_createElement(Chip, { ...getTagProps({ index }), key: option.title, label: option.title, size: "small", variant: "soft" }))) }) }), _jsx(ComponentBlock, { title: "Checkboxes", children: _jsx(Autocomplete, { fullWidth: true, multiple: true, limitTags: 3, disableCloseOnSelect: true, options: top100Films, getOptionLabel: (option) => option.title, defaultValue: top100Films.slice(0, 1), renderInput: (params) => (_jsx(TextField, { ...params, label: "Checkboxes", placeholder: "Favorites" })), renderOption: (props, option, { selected }) => (_createElement("li", { ...props, key: option.title },
                                _jsx(Checkbox, { size: "small", disableRipple: true, checked: selected }, option.title),
                                option.title)), renderTags: (selected, getTagProps) => selected.map((option, index) => (_createElement(Chip, { ...getTagProps({ index }), key: option.title, label: option.title, size: "small", variant: "soft" }))) }) }), _jsxs(ComponentBlock, { title: "Sizes", children: [_jsx(Autocomplete, { fullWidth: true, options: top100Films, getOptionLabel: (option) => option.title, defaultValue: top100Films[13], renderInput: (params) => (_jsx(TextField, { ...params, label: "Size Medium", placeholder: "Favorites" })), renderOption: (props, option) => (_createElement("li", { ...props, key: option.title }, option.title)) }), _jsx(Autocomplete, { fullWidth: true, multiple: true, size: "small", options: top100Films, getOptionLabel: (option) => option.title, defaultValue: [top100Films[13]], renderInput: (params) => (_jsx(TextField, { ...params, label: "Size small", placeholder: "Favorites" })), renderOption: (props, option) => (_createElement("li", { ...props, key: option.title }, option.title)), renderTags: (selected, getTagProps) => selected.map((option, index) => (_createElement(Chip, { ...getTagProps({ index }), key: option.title, label: option.title, size: "small", color: "info", variant: "soft" }))) })] }), _jsxs(ComponentBlock, { title: "Country Select", sx: { gap: 5 }, children: [_jsxs(Stack, { direction: "row", spacing: 1.5, sx: { width: 1 }, children: [_jsx(CountrySelect, { id: "single-label", fullWidth: true, label: "Single select label", placeholder: "Choose a country", value: singleLabel, onChange: (event, newValue) => setSingleLabel(newValue) }), _jsxs(Stack, { sx: {
                                            px: 1,
                                            width: 200,
                                            borderRadius: 1,
                                            textAlign: 'right',
                                            typography: 'body2',
                                            justifyContent: 'center',
                                            bgcolor: 'background.neutral',
                                        }, children: [_jsx("small", { children: "Output:" }), _jsx("strong", { children: _jsx("small", { children: singleLabel ?? '-' }) })] })] }), _jsxs(Stack, { direction: "row", spacing: 1.5, sx: { width: 1 }, children: [_jsx(CountrySelect, { id: "single-code", getValue: "code", fullWidth: true, label: "Single select code", placeholder: "Choose a country", value: singleCode, onChange: (event, newValue) => setSingleCode(newValue) }), _jsxs(Stack, { sx: {
                                            px: 1,
                                            width: 200,
                                            borderRadius: 1,
                                            textAlign: 'right',
                                            typography: 'body2',
                                            justifyContent: 'center',
                                            bgcolor: 'background.neutral',
                                        }, children: [_jsx("small", { children: "Output:" }), _jsx("strong", { children: _jsx("small", { children: singleCode ?? '-' }) })] })] }), _jsxs(Stack, { spacing: 1.5, sx: { width: 1 }, children: [_jsx(CountrySelect, { id: "multiple-label", multiple: true, fullWidth: true, limitTags: 3, label: "Multi select label", placeholder: "Choose a country", value: multiLabel, onChange: (event, newValue) => setMultiLabel(newValue) }), _jsxs(Stack, { sx: {
                                            p: 1,
                                            width: 1,
                                            minHeight: 54,
                                            borderRadius: 1,
                                            textAlign: 'right',
                                            typography: 'body2',
                                            bgcolor: 'background.neutral',
                                        }, children: [_jsx("small", { children: "Output:" }), ' ', _jsx("strong", { children: _jsx("small", { children: multiLabel.join(', ') ?? '-' }) })] })] }), _jsxs(Stack, { spacing: 1.5, sx: { width: 1 }, children: [_jsx(CountrySelect, { id: "multiple-code", getValue: "code", multiple: true, fullWidth: true, limitTags: 3, label: "Multi select code", placeholder: "Choose a country", value: multiCode, onChange: (event, newValue) => setMultiCode(newValue) }), _jsxs(Stack, { sx: {
                                            p: 1,
                                            width: 1,
                                            minHeight: 54,
                                            borderRadius: 1,
                                            textAlign: 'right',
                                            typography: 'body2',
                                            bgcolor: 'background.neutral',
                                        }, children: [_jsx("small", { children: "Output:" }), ' ', _jsx("strong", { children: _jsx("small", { children: multiCode.join(', ') ?? '-' }) })] })] })] })] })] }));
}
// ----------------------------------------------------------------------
const top100Films = [
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
