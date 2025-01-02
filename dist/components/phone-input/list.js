'use client';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import Popover from '@mui/material/Popover';
import Divider from '@mui/material/Divider';
import { useState, useCallback } from 'react';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import ButtonBase from '@mui/material/ButtonBase';
import ListItemText from '@mui/material/ListItemText';
import InputAdornment from '@mui/material/InputAdornment';
import { countries } from '../../assets/data/countries';
import { Iconify, FlagIcon } from '../../components/iconify';
import { SearchNotFound } from '../../components/search-not-found';
import { usePopover } from '../custom-popover';
import { getCountry, applyFilter } from './utils';
// ----------------------------------------------------------------------
export function CountryListPopover({ countryCode, onClickCountry }) {
    const popover = usePopover();
    const selectedCountry = getCountry(countryCode);
    const [searchCountry, setSearchCountry] = useState('');
    const handleSearchCountry = useCallback((event) => {
        setSearchCountry(event.target.value);
    }, []);
    const dataFiltered = applyFilter({
        inputData: countries,
        query: searchCountry,
    });
    const notFound = !dataFiltered.length && !!setSearchCountry;
    const renderButton = (_jsxs(ButtonBase, { disableRipple: true, onClick: popover.onOpen, children: [_jsx(FlagIcon, { code: selectedCountry?.code, sx: { width: 22, height: 22, borderRadius: '50%' } }), _jsx(Iconify, { icon: "eva:chevron-down-fill", sx: { ml: 0.5, flexShrink: 0, color: 'text.disabled' } }), _jsx(Divider, { orientation: "vertical", flexItem: true, sx: { mr: 1 } })] }));
    const renderList = (_jsx(MenuList, { children: dataFiltered.map((country) => {
            if (!country.code) {
                return null;
            }
            return (_jsxs(MenuItem, { selected: countryCode === country.code, autoFocus: countryCode === country.code, onClick: () => {
                    popover.onClose();
                    setSearchCountry('');
                    onClickCountry(country.code);
                }, children: [_jsx(FlagIcon, { code: country.code, sx: { mr: 1, width: 22, height: 22, borderRadius: '50%' } }), _jsx(ListItemText, { primary: country.label, secondary: `${country.code} (+${country.phone})`, primaryTypographyProps: { noWrap: true, typography: 'body2' }, secondaryTypographyProps: { typography: 'caption' } })] }, country.code));
        }) }));
    return (_jsxs(_Fragment, { children: [renderButton, _jsxs(Popover, { disableRestoreFocus: true, open: popover.open, anchorEl: popover.anchorEl, onClose: () => {
                    popover.onClose();
                    setSearchCountry('');
                }, anchorOrigin: { vertical: 'bottom', horizontal: 'left' }, transformOrigin: { vertical: 'top', horizontal: 'left' }, slotProps: {
                    paper: {
                        sx: {
                            width: 1,
                            height: 320,
                            maxWidth: 320,
                            display: 'flex',
                            flexDirection: 'column',
                        },
                    },
                }, children: [_jsx(Box, { sx: { px: 1, py: 1.5 }, children: _jsx(TextField, { autoFocus: true, fullWidth: true, value: searchCountry, onChange: handleSearchCountry, placeholder: "Search...", InputProps: {
                                startAdornment: (_jsx(InputAdornment, { position: "start", children: _jsx(Iconify, { icon: "eva:search-fill", sx: { color: 'text.disabled' } }) })),
                            } }) }), _jsx(Box, { sx: { flex: '1 1 auto', overflowX: 'hidden' }, children: notFound ? _jsx(SearchNotFound, { query: searchCountry, sx: { px: 2, pt: 5 } }) : renderList })] })] }));
}
