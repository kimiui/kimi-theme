'use client';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import { useBoolean } from 'ahooks';
import { useRouter } from 'routes-react';
import SvgIcon from '@mui/material/SvgIcon';
import { useState, useCallback } from 'react';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import InputBase from '@mui/material/InputBase';
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Dialog, { dialogClasses } from '@mui/material/Dialog';
import { isExternalLink } from '../../../utils';
import { varAlpha } from '../../../theme/styles';
import { useEventListener } from '../../../hooks';
import { Label } from '../../../components/label';
import { Iconify } from '../../../components/iconify';
import { Scrollbar } from '../../../components/scrollbar';
import { SearchNotFound } from '../../../components/search-not-found';
import { ResultItem } from './result-item';
import { groupItems, applyFilter, getAllItems } from './utils';
export function Searchbar({ data: navItems = [], sx, ...other }) {
    const theme = useTheme();
    const router = useRouter();
    const [search, { toggle, setTrue, setFalse }] = useBoolean();
    const [searchQuery, setSearchQuery] = useState('');
    const handleClose = useCallback(() => {
        setFalse();
        setSearchQuery('');
    }, [setFalse]);
    const handleKeyDown = (event) => {
        if (event.key === 'k' && event.metaKey) {
            toggle();
            setSearchQuery('');
        }
    };
    useEventListener('keydown', handleKeyDown);
    const handleClick = useCallback((path) => {
        if (isExternalLink(path)) {
            window.open(path);
        }
        else {
            router.push(path);
        }
        handleClose();
    }, [handleClose, router]);
    const handleSearch = useCallback((event) => {
        setSearchQuery(event.target.value);
    }, []);
    const dataFiltered = applyFilter({
        inputData: getAllItems({ data: navItems }),
        query: searchQuery,
    });
    const notFound = searchQuery && !dataFiltered.length;
    const renderItems = () => {
        const dataGroups = groupItems(dataFiltered);
        return Object.keys(dataGroups)
            .sort((a, b) => -b.localeCompare(a))
            .map((group, index) => (_jsx(Box, { component: "ul", children: dataGroups[group].map((item) => {
                const { title, path } = item;
                const partsTitle = parse(title, match(title, searchQuery));
                const partsPath = parse(path, match(path, searchQuery));
                return (_jsx(Box, { component: "li", sx: { display: 'flex' }, children: _jsx(ResultItem, { path: partsPath, title: partsTitle, groupLabel: searchQuery && group, onClickItem: () => handleClick(path) }) }, `${title}${path}`));
            }) }, `${group}-${index}`)));
    };
    const renderButton = (_jsxs(Box, { display: "flex", alignItems: "center", onClick: setTrue, sx: {
            pr: { sm: 1 },
            borderRadius: { sm: 1.5 },
            cursor: { sm: 'pointer' },
            bgcolor: { sm: varAlpha(theme.vars.palette.grey['500Channel'], 0.08) },
            ...sx,
        }, ...other, children: [_jsx(IconButton, { disableRipple: true, children: _jsx(SvgIcon, { sx: { width: 20, height: 20 }, children: _jsx("path", { fill: "currentColor", d: "m20.71 19.29l-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8a7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42M5 11a6 6 0 1 1 6 6a6 6 0 0 1-6-6" }) }) }), _jsx(Label, { sx: {
                    fontSize: 12,
                    color: 'grey.800',
                    bgcolor: 'common.white',
                    boxShadow: theme.shadows[1],
                    display: { xs: 'none', sm: 'inline-flex' },
                }, children: "\u2318K" })] }));
    return (_jsxs(_Fragment, { children: [renderButton, _jsxs(Dialog, { fullWidth: true, disableRestoreFocus: true, maxWidth: "sm", open: search, onClose: handleClose, transitionDuration: {
                    enter: theme.transitions.duration.shortest,
                    exit: 0,
                }, PaperProps: { sx: { mt: 15, overflow: 'unset' } }, sx: { [`& .${dialogClasses.container}`]: { alignItems: 'flex-start' } }, children: [_jsx(Box, { sx: { p: 3, borderBottom: `solid 1px ${theme.vars.palette.divider}` }, children: _jsx(InputBase, { fullWidth: true, autoFocus: true, placeholder: "Search...", value: searchQuery, onChange: handleSearch, startAdornment: _jsx(InputAdornment, { position: "start", children: _jsx(Iconify, { icon: "eva:search-fill", width: 24, sx: { color: 'text.disabled' } }) }), endAdornment: _jsx(Label, { sx: { letterSpacing: 1, color: 'text.secondary' }, children: "esc" }), inputProps: { sx: { typography: 'h6' } } }) }), notFound ? (_jsx(SearchNotFound, { query: searchQuery, sx: { py: 15 } })) : (_jsx(Scrollbar, { sx: { px: 3, pb: 3, pt: 2, height: 400 }, children: renderItems() }))] })] }));
}
