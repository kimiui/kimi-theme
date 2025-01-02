'use client';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import dayjs from 'dayjs';
import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import Paper from '@mui/material/Paper';
import { useState, useCallback } from 'react';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import RadioGroup from '@mui/material/RadioGroup';
import TablePagination from '@mui/material/TablePagination';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import FormControlLabel from '@mui/material/FormControlLabel';
import { paths } from '../../../routes/paths';
import { fDate } from '../../../utils/format-time';
import { FlagIcon } from '../../../components/iconify';
import { allLangs, useTranslate } from '../../../locales';
import { NavSectionVertical } from '../../../components/nav-section';
import { CustomBreadcrumbs } from '../../../components/custom-breadcrumbs';
import { fData, fNumber, fPercent, fCurrency, fShortenNumber } from '../../../utils/format-number';
import { ComponentHero } from '../../component-hero';
import { navData as clientNavData } from './config-nav';
import { ScrollToViewTemplate } from '../../component-template';
// ----------------------------------------------------------------------
const StyledPaper = styled((props) => _jsx(Paper, { variant: "outlined", ...props }))(({ theme }) => ({
    ...theme.typography.body2,
    display: 'flex',
    gap: theme.spacing(1),
    flexDirection: 'column',
    padding: theme.spacing(3),
    borderRadius: theme.shape.borderRadius * 2,
}));
// ----------------------------------------------------------------------
export function MultiLanguageView() {
    const { t, onChangeLang, currentLang } = useTranslate();
    const [date, setDate] = useState(dayjs('2022-04-17'));
    const [page, setPage] = useState(2);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const { t: tnav } = useTranslate('navbar');
    const navData = clientNavData(tnav);
    const handleChangePage = useCallback((event, newPage) => {
        setPage(newPage);
    }, []);
    const handleChangeRowsPerPage = useCallback((event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    }, []);
    const renderMenu = (_jsxs(Paper, { sx: {
            m: 2,
            pb: 1,
            pt: 2,
            px: 2,
            right: 0,
            zIndex: 1,
            top: '25%',
            position: 'fixed',
            borderRadius: 1.5,
            bgcolor: 'background.paper',
            boxShadow: (theme) => theme.shadows[8],
        }, children: [_jsx(Typography, { variant: "subtitle2", sx: { mb: 1, color: 'text.sexcondary' }, children: "Langs" }), _jsx(RadioGroup, { value: currentLang?.value, onChange: (event) => {
                    onChangeLang(event.target.value);
                }, children: allLangs.map((lang) => (_jsx(FormControlLabel, { value: lang.value, label: lang.label, control: _jsx(Radio, {}) }, lang.value))) })] }));
    const DEMO = [
        {
            name: 'Flexible',
            component: (_jsxs("div", { children: [_jsxs(Box, { sx: {
                            gap: 1,
                            mb: 2,
                            display: 'flex',
                            typography: 'h3',
                            alignItems: 'center',
                        }, children: [_jsx(FlagIcon, { code: currentLang.countryCode }), t('demo.lang')] }), _jsx(Typography, { children: t('demo.description') })] })),
        },
        {
            name: 'System (MUI)',
            component: (_jsxs("div", { children: [_jsx(Box, { sx: { typography: 'subtitle2' }, children: "Supports other components including:" }), _jsxs(Box, { component: "ul", sx: {
                            mt: 1,
                            mb: 3,
                            pl: 3,
                            typography: 'body2',
                            listStyleType: 'disc',
                        }, children: [_jsx(Box, { component: "li", children: " Data Grid" }), _jsx(Box, { component: "li", children: " Date Pickers" })] }), _jsx(TablePagination, { component: "div", count: 100, page: page, onPageChange: handleChangePage, rowsPerPage: rowsPerPage, onRowsPerPageChange: handleChangeRowsPerPage, sx: {
                            borderRadius: 2,
                            border: (theme) => `solid 1px ${theme.vars.palette.divider}`,
                        } })] })),
        },
        {
            name: 'Nav',
            component: (_jsx(Paper, { variant: "outlined", sx: { p: 2, width: 1, maxWidth: 320, borderRadius: 2 }, children: _jsx(NavSectionVertical, { data: navData }) })),
        },
        {
            name: 'Numbers',
            component: (_jsx("div", { children: _jsxs(Box, { gap: 3, display: "grid", gridTemplateColumns: { xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }, children: [_jsx(NumberBlock, { title: "Currency", type: "currency", data: [
                                2217.01,
                                247598.18,
                                677606.08,
                                4734447.51,
                                8471442.09,
                                undefined,
                                null,
                                NaN,
                                0,
                            ] }), _jsx(NumberBlock, { title: "Percent", type: "percent", data: [1.7, 17.67, 28.1, 41.3, 91.16, undefined, null, NaN, 0] }), _jsx(NumberBlock, { title: "Shorten", type: "shorten", data: [719, 719.63, 3683.72, 5583407.51, 3345583407.51, undefined, null, NaN, 0] }), _jsx(NumberBlock, { title: "Data", type: "data", data: [719, 719.63, 3683.72, 5583407.51, 3345583407.51, undefined, null, NaN, 0] }), _jsx(NumberBlock, { title: "Number", type: "number", data: [451, 451.82, 1081.62, 27921.9, 600668.81, 7587054.86, undefined, null, NaN, 0] }), _jsxs(StyledPaper, { children: [_jsx(DatePicker, { label: "Input", value: date, onChange: (newValue) => setDate(newValue), slotProps: { textField: { fullWidth: true } } }), _jsxs(Box, { sx: { mt: 2, typography: 'subtitle2' }, children: ["Output: ", fDate(new Date())] })] })] }) })),
        },
    ];
    return (_jsxs(_Fragment, { children: [_jsx(ComponentHero, { children: _jsx(CustomBreadcrumbs, { heading: "Multi language", links: [
                        { name: 'Components', href: paths.docs.components.root },
                        { name: 'Multi language' },
                    ], moreLink: [
                        'https://react.i18next.com',
                        'https://mui.com/guides/localization/#main-content',
                    ] }) }), renderMenu, _jsx(ScrollToViewTemplate, { data: DEMO })] }));
}
function NumberBlock({ data, type, title }) {
    const renderLabel = (value) => {
        if (value === undefined) {
            return 'undefined';
        }
        if (value === null) {
            return 'null';
        }
        if (String(value) === 'NaN') {
            return 'NaN';
        }
        return value;
    };
    return (_jsxs(StyledPaper, { children: [_jsx(Box, { sx: { typography: 'subtitle2' }, children: title }), data.map((numb, index) => (_jsxs(Box, { children: [_jsx(Box, { component: "span", sx: { color: 'text.primary' }, children: renderLabel(numb) }), _jsxs(Box, { component: "span", sx: { color: 'text.secondary' }, children: [' => ', (type === 'currency' && fCurrency(numb)) ||
                                (type === 'percent' && fPercent(numb)) ||
                                (type === 'shorten' && fShortenNumber(numb)) ||
                                (type === 'data' && fData(numb)) ||
                                (type === 'number' && fNumber(numb))] })] }, String(index))))] }));
}
