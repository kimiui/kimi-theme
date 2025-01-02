'use client';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Paper from '@mui/material/Paper';
import Timeline from '@mui/lab/Timeline';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineItem from '@mui/lab/TimelineItem';
import Typography from '@mui/material/Typography';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import { paths } from '../../../routes/paths';
import { varAlpha } from '../../../theme/styles';
import { Iconify } from '../../../components/iconify';
import { CustomBreadcrumbs } from '../../../components/custom-breadcrumbs';
import { ComponentHero } from '../../component-hero';
import { ComponentBlock } from '../../component-block';
import { ScrollToViewTemplate } from '../../component-template';
const TIMELINES = [
    {
        key: 1,
        title: 'Default',
        des: 'Morbi mattis ullamcorper',
        time: '09:30 am',
        icon: _jsx(Iconify, { icon: "eva:folder-add-fill", width: 24 }),
    },
    {
        key: 2,
        title: 'Primary',
        des: 'Morbi mattis ullamcorper',
        time: '10:00 am',
        color: 'primary',
        icon: _jsx(Iconify, { icon: "eva:image-2-fill", width: 24 }),
    },
    {
        key: 3,
        title: 'Secondary',
        des: 'Morbi mattis ullamcorper',
        time: '10:00 am',
        color: 'secondary',
        icon: _jsx(Iconify, { icon: "eva:pantone-fill", width: 24 }),
    },
    {
        key: 4,
        title: 'Info',
        des: 'Morbi mattis ullamcorper',
        time: '10:30 am',
        color: 'info',
        icon: _jsx(Iconify, { icon: "eva:tv-fill", width: 24 }),
    },
    {
        key: 5,
        title: 'Success',
        des: 'Morbi mattis ullamcorper',
        time: '11:00 am',
        color: 'success',
        icon: _jsx(Iconify, { icon: "eva:activity-fill", width: 24 }),
    },
    {
        key: 6,
        title: 'Warning',
        des: 'Morbi mattis ullamcorper',
        time: '11:30 am',
        color: 'warning',
        icon: _jsx(Iconify, { icon: "eva:cube-fill", width: 24 }),
    },
    {
        key: 7,
        title: 'Error',
        des: 'Morbi mattis ullamcorper',
        time: '12:00 am',
        color: 'error',
        icon: _jsx(Iconify, { icon: "eva:film-fill", width: 24 }),
    },
];
// ----------------------------------------------------------------------
export function TimelineView() {
    const lastItem = TIMELINES[TIMELINES.length - 1].key;
    const reduceTimeLine = TIMELINES.slice(TIMELINES.length - 3);
    const DEMO = [
        {
            name: 'Left',
            component: (_jsx(ComponentBlock, { children: _jsx(Timeline, { position: "left", children: reduceTimeLine.map((item) => (_jsxs(TimelineItem, { children: [_jsxs(TimelineSeparator, { children: [_jsx(TimelineDot, {}), lastItem === item.key ? null : _jsx(TimelineConnector, {})] }), _jsx(TimelineContent, { children: item.title })] }, item.key))) }) })),
        },
        {
            name: 'Right',
            component: (_jsx(ComponentBlock, { children: _jsx(Timeline, { position: "right", children: reduceTimeLine.map((item) => (_jsxs(TimelineItem, { children: [_jsxs(TimelineSeparator, { children: [_jsx(TimelineDot, {}), lastItem === item.key ? null : _jsx(TimelineConnector, {})] }), _jsx(TimelineContent, { children: item.title })] }, item.key))) }) })),
        },
        {
            name: 'Alternating',
            component: (_jsx(ComponentBlock, { children: _jsx(Timeline, { position: "alternate", children: reduceTimeLine.map((item) => (_jsxs(TimelineItem, { children: [_jsxs(TimelineSeparator, { children: [_jsx(TimelineDot, {}), lastItem === item.key ? null : _jsx(TimelineConnector, {})] }), _jsx(TimelineContent, { children: item.title })] }, item.key))) }) })),
        },
        {
            name: 'Filled',
            component: (_jsx(ComponentBlock, { children: _jsx(Timeline, { position: "alternate", children: TIMELINES.map((item) => (_jsxs(TimelineItem, { children: [_jsxs(TimelineSeparator, { children: [_jsx(TimelineDot, { color: item.color }), lastItem === item.key ? null : _jsx(TimelineConnector, {})] }), _jsx(TimelineContent, { children: item.title })] }, item.key))) }) })),
        },
        {
            name: 'Outlined',
            component: (_jsx(ComponentBlock, { children: _jsx(Timeline, { position: "alternate", children: TIMELINES.map((item) => (_jsxs(TimelineItem, { children: [_jsxs(TimelineSeparator, { children: [_jsx(TimelineDot, { variant: "outlined", color: item.color }), lastItem === item.key ? null : _jsx(TimelineConnector, {})] }), _jsx(TimelineContent, { children: item.title })] }, item.key))) }) })),
        },
        {
            name: 'Opposite content',
            component: (_jsx(ComponentBlock, { children: _jsx(Timeline, { position: "alternate", children: TIMELINES.map((item) => (_jsxs(TimelineItem, { children: [_jsx(TimelineOppositeContent, { children: _jsx(Typography, { sx: { color: 'text.secondary' }, children: item.time }) }), _jsxs(TimelineSeparator, { children: [_jsx(TimelineDot, { color: item.color }), lastItem === item.key ? null : _jsx(TimelineConnector, {})] }), _jsx(TimelineContent, { children: _jsxs(Typography, { children: [" ", item.title] }) })] }, item.key))) }) })),
        },
        {
            name: 'Customized',
            component: (_jsx(ComponentBlock, { children: _jsx(Timeline, { position: "alternate", children: TIMELINES.map((item) => (_jsxs(TimelineItem, { children: [_jsx(TimelineOppositeContent, { children: _jsx(Typography, { variant: "body2", sx: { color: 'text.secondary' }, children: item.time }) }), _jsxs(TimelineSeparator, { children: [_jsx(TimelineDot, { color: item.color, children: item.icon }), _jsx(TimelineConnector, {})] }), _jsx(TimelineContent, { children: _jsxs(Paper, { sx: {
                                        p: 3,
                                        bgcolor: (theme) => varAlpha(theme.vars.palette.grey['500Channel'], 0.12),
                                    }, children: [_jsx(Typography, { variant: "subtitle2", children: item.title }), _jsx(Typography, { variant: "body2", sx: { color: 'text.secondary' }, children: item.des })] }) })] }, item.key))) }) })),
        },
    ];
    return (_jsxs(_Fragment, { children: [_jsx(ComponentHero, { children: _jsx(CustomBreadcrumbs, { heading: "Timeline", links: [{ name: 'Components', href: paths.docs.components.root }, { name: 'Timeline' }], moreLink: ['https://mui.com/components/timeline'] }) }), _jsx(ScrollToViewTemplate, { data: DEMO })] }));
}
