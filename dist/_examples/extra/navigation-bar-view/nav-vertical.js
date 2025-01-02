'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import Divider from '@mui/material/Divider';
import { useState, useCallback } from 'react';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ToggleButton from '@mui/material/ToggleButton';
import FormControlLabel from '@mui/material/FormControlLabel';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { isEqual } from '../../../utils/helper';
import { Iconify } from '../../../components/iconify';
import { SvgColor } from '../../../components/svg-color';
import { NavSectionVertical, NavSectionVerticalItem } from '../../../components/nav-section';
import { NAV_ITEMS } from './data';
// ----------------------------------------------------------------------
const defaultConfig = {
    gap: 4,
    icon: 24,
    radius: 8,
    subItemHeight: 36,
    rootItemHeight: 44,
    currentRole: 'admin',
    hiddenSubheader: false,
    padding: '4px 8px 4px 12px',
};
// ----------------------------------------------------------------------
export function NavVertical() {
    const [config, setConfig] = useState(defaultConfig);
    const canReset = !isEqual(defaultConfig, config);
    const handleChangeConfig = useCallback((name, value) => {
        setConfig((prevState) => ({ ...prevState, [name]: value }));
    }, []);
    const handleReset = useCallback(() => {
        setConfig(defaultConfig);
    }, []);
    return (_jsxs(Stack, { spacing: 5, direction: "row", flexWrap: "wrap", justifyContent: "center", children: [_jsxs(Paper, { variant: "outlined", sx: {
                    p: 2,
                    width: 1,
                    maxWidth: 320,
                    borderRadius: 2,
                    display: 'flex',
                    flexDirection: 'column',
                }, children: [_jsx(NavSectionVertical, { data: NAV_ITEMS, sx: { flex: '1 1 auto' }, cssVars: {
                            '--nav-item-gap': `${config.gap}px`,
                        }, slotProps: {
                            currentRole: config.currentRole,
                            rootItem: {
                                sx: {
                                    padding: config.padding,
                                    borderRadius: `${config.radius}px`,
                                    minHeight: config.rootItemHeight,
                                },
                                icon: {
                                    width: config.icon,
                                    height: config.icon,
                                    ...(!config.icon && { display: 'none' }),
                                },
                                texts: {},
                                title: {},
                                caption: {},
                                info: {},
                                arrow: {},
                            },
                            subItem: {
                                sx: {
                                    padding: config.padding,
                                    borderRadius: `${config.radius}px`,
                                    minHeight: config.subItemHeight,
                                },
                                icon: {
                                    width: config.icon,
                                    height: config.icon,
                                    ...(!config.icon && { display: 'none' }),
                                },
                                texts: {},
                                title: {},
                                caption: {},
                                info: {},
                                arrow: {},
                            },
                            subheader: { ...(config.hiddenSubheader && { display: 'none' }) },
                        } }), _jsx(Divider, { sx: { my: 2 } }), _jsx(NavSectionVerticalItem, { depth: 1, path: "#", title: "Chat", caption: "Praesent porttitor nulla vitae posuere", icon: _jsx(SvgColor, { src: "/assets/icons/navbar/ic-chat.svg" }) })] }), _jsx(ControlsPanel, { config: config, onChangeConfig: handleChangeConfig, canReset: canReset, onReset: handleReset })] }));
}
function ControlsPanel({ config, onChangeConfig, canReset, onReset }) {
    return (_jsxs(Stack, { spacing: 3, sx: {
            p: 3,
            borderRadius: 2,
            position: 'relative',
            bgcolor: 'background.neutral',
        }, children: [_jsxs(Box, { display: "flex", alignItems: "center", children: [_jsx(Typography, { variant: "h6", sx: { flexGrow: 1 }, children: "Controls" }), canReset && (_jsx(IconButton, { onClick: onReset, sx: { top: 16, right: 16, zIndex: 9, position: 'absolute' }, children: _jsx(Badge, { color: "error", variant: "dot", invisible: !canReset, children: _jsx(Iconify, { icon: "solar:restart-bold" }) }) }))] }), _jsxs(Stack, { spacing: 1, children: [_jsx(Typography, { variant: "subtitle2", children: "Gap" }), _jsx(ToggleButtonGroup, { exclusive: true, size: "small", value: config.gap, onChange: (event, newValue) => {
                            if (newValue !== null) {
                                onChangeConfig('gap', newValue);
                            }
                        }, children: [4, 8, 16, 40].map((i) => (_jsx(ToggleButton, { value: i, sx: { width: 1 }, children: i }, i))) })] }), _jsxs(Stack, { spacing: 1, children: [_jsx(Typography, { variant: "subtitle2", children: "Icon" }), _jsx(ToggleButtonGroup, { exclusive: true, size: "small", value: config.icon, onChange: (event, newValue) => {
                            if (newValue !== null) {
                                onChangeConfig('icon', newValue);
                            }
                        }, children: [0, 16, 20, 24, 40].map((i) => (_jsx(ToggleButton, { value: i, sx: { width: 1 }, children: i }, i))) })] }), _jsxs(Stack, { spacing: 1, children: [_jsx(Typography, { variant: "subtitle2", children: "Radius" }), _jsx(ToggleButtonGroup, { exclusive: true, size: "small", value: config.radius, onChange: (event, newValue) => {
                            if (newValue !== null) {
                                onChangeConfig('radius', newValue);
                            }
                        }, children: [0, 8, 16, 40].map((i) => (_jsx(ToggleButton, { value: i, sx: { width: 1 }, children: i }, i))) })] }), _jsxs(Stack, { spacing: 1, children: [_jsx(Typography, { variant: "subtitle2", children: "Role" }), _jsx(ToggleButtonGroup, { exclusive: true, size: "small", value: config.currentRole, onChange: (event, newValue) => {
                            if (newValue !== null) {
                                onChangeConfig('currentRole', newValue);
                            }
                        }, children: ['admin', 'user'].map((i) => (_jsx(ToggleButton, { value: i, sx: { width: 1 }, children: i }, i))) })] }), _jsxs(Stack, { spacing: 1, children: [_jsx(Typography, { variant: "subtitle2", children: "Item Root Height" }), _jsx(ToggleButtonGroup, { exclusive: true, size: "small", value: config.rootItemHeight, onChange: (event, newValue) => {
                            if (newValue !== null) {
                                onChangeConfig('rootItemHeight', newValue);
                            }
                        }, children: [36, 44, 64, 80].map((i) => (_jsx(ToggleButton, { value: i, sx: { width: 1 }, children: i }, i))) })] }), _jsxs(Stack, { spacing: 1, children: [_jsx(Typography, { variant: "subtitle2", children: "Item Sub Height" }), _jsx(ToggleButtonGroup, { exclusive: true, size: "small", value: config.subItemHeight, onChange: (event, newValue) => {
                            if (newValue !== null) {
                                onChangeConfig('subItemHeight', newValue);
                            }
                        }, children: [36, 44, 64, 80].map((i) => (_jsx(ToggleButton, { value: i, sx: { width: 1 }, children: i }, i))) })] }), _jsx(TextField, { label: "Item Padding", value: config.padding || '', onChange: (event) => onChangeConfig('padding', event.target.value) }), _jsx(FormControlLabel, { control: _jsx(Switch, { checked: config.hiddenSubheader, onClick: () => onChangeConfig('hiddenSubheader', !config.hiddenSubheader) }), label: "Hidden subheader" })] }));
}
