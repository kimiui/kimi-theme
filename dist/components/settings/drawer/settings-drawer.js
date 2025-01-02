'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Drawer, { drawerClasses } from '@mui/material/Drawer';
import { useTheme, useColorScheme } from '@mui/material/styles';
import { paper, varAlpha } from '../../../theme/styles';
import { Iconify } from '../../iconify';
import { BaseOption } from './base-option';
import { NavOptions } from './nav-options';
import { Scrollbar } from '../../scrollbar';
import { useSettingsContext } from '../context';
import { defaultSettings } from '../config-settings';
import { FullScreenButton } from './fullscreen-button';
// ----------------------------------------------------------------------
export function SettingsDrawer({ sx, hideNavColor, hideNavLayout, hideDirection, hideColorScheme, }) {
    const theme = useTheme();
    const settings = useSettingsContext();
    const { mode, setMode } = useColorScheme();
    const renderHead = (_jsxs(Box, { display: "flex", alignItems: "center", sx: { py: 2, pr: 1, pl: 2.5 }, children: [_jsx(Typography, { variant: "h6", sx: { flexGrow: 1 }, children: "Settings" }), _jsx(FullScreenButton, {}), _jsx(Tooltip, { title: "Reset", children: _jsx(IconButton, { onClick: () => {
                        settings.onReset();
                        setMode(defaultSettings.colorScheme);
                    }, children: _jsx(Badge, { color: "error", variant: "dot", invisible: !settings.canReset, children: _jsx(Iconify, { icon: "solar:restart-bold" }) }) }) }), _jsx(Tooltip, { title: "Close", children: _jsx(IconButton, { onClick: settings.onCloseDrawer, children: _jsx(Iconify, { icon: "mingcute:close-line" }) }) })] }));
    const renderMode = (_jsx(BaseOption, { label: "Dark mode", icon: "moon", selected: settings.colorScheme === 'dark', onClick: () => {
            settings.onUpdateField('colorScheme', mode === 'light' ? 'dark' : 'light');
            setMode(mode === 'light' ? 'dark' : 'light');
        } }));
    const renderRTL = (_jsx(BaseOption, { label: "Right to left", icon: "align-right", selected: settings.direction === 'rtl', onClick: () => settings.onUpdateField('direction', settings.direction === 'ltr' ? 'rtl' : 'ltr') }));
    const renderNav = (_jsx(NavOptions, { value: {
            color: settings.navColor,
            layout: settings.navLayout,
        }, onClickOption: {
            color: (newValue) => settings.onUpdateField('navColor', newValue),
            layout: (newValue) => settings.onUpdateField('navLayout', newValue),
        }, options: {
            colors: ['integrate', 'apparent'],
            layouts: ['vertical', 'horizontal'],
        }, hideNavColor: hideNavColor, hideNavLayout: hideNavLayout }));
    return (_jsxs(Drawer, { anchor: "right", open: settings.openDrawer, onClose: settings.onCloseDrawer, slotProps: { backdrop: { invisible: true } }, sx: {
            [`& .${drawerClasses.paper}`]: {
                ...paper({
                    theme,
                    color: varAlpha(theme.vars.palette.background.defaultChannel, 0.9),
                }),
                width: 360,
                ...sx,
            },
        }, children: [renderHead, _jsx(Scrollbar, { children: _jsxs(Stack, { spacing: 6, sx: { px: 2.5, pb: 5 }, children: [_jsxs(Box, { gap: 2, display: "grid", gridTemplateColumns: "repeat(2, 1fr)", children: [!hideColorScheme && renderMode, !hideDirection && renderRTL] }), !(hideNavLayout && hideNavColor) && renderNav] }) })] }));
}
