'use client';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { m } from 'framer-motion';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import { useBoolean } from 'ahooks';
import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import SvgIcon from '@mui/material/SvgIcon';
import Tooltip from '@mui/material/Tooltip';
import { useState, useCallback } from 'react';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Label } from '../../../components/label';
import { Iconify } from '../../../components/iconify';
import { varHover } from '../../../components/animate';
import { Scrollbar } from '../../../components/scrollbar';
import { CustomTabs } from '../../../components/custom-tabs';
import { NotificationItem } from './notification-item';
// ----------------------------------------------------------------------
const TABS = [
    { value: 'all', label: 'All', count: 22 },
    { value: 'unread', label: 'Unread', count: 12 },
    { value: 'archived', label: 'Archived', count: 10 },
];
export function NotificationsDrawer({ data = [], sx, ...other }) {
    const [drawer, { setTrue, setFalse }] = useBoolean();
    const [currentTab, setCurrentTab] = useState('all');
    const handleChangeTab = useCallback((event, newValue) => {
        setCurrentTab(newValue);
    }, []);
    const [notifications, setNotifications] = useState(data);
    const totalUnRead = notifications.filter((item) => item.isUnRead === true).length;
    const handleMarkAllAsRead = () => {
        setNotifications(notifications.map((notification) => ({ ...notification, isUnRead: false })));
    };
    const renderHead = (_jsxs(Stack, { direction: "row", alignItems: "center", sx: { py: 2, pl: 2.5, pr: 1, minHeight: 68 }, children: [_jsx(Typography, { variant: "h6", sx: { flexGrow: 1 }, children: "Notifications" }), !!totalUnRead && (_jsx(Tooltip, { title: "Mark all as read", children: _jsx(IconButton, { color: "primary", onClick: handleMarkAllAsRead, children: _jsx(Iconify, { icon: "eva:done-all-fill" }) }) })), _jsx(IconButton, { onClick: setFalse, sx: { display: { xs: 'inline-flex', sm: 'none' } }, children: _jsx(Iconify, { icon: "mingcute:close-line" }) }), _jsx(IconButton, { children: _jsx(Iconify, { icon: "solar:settings-bold-duotone" }) })] }));
    const renderTabs = (_jsx(CustomTabs, { variant: "fullWidth", value: currentTab, onChange: handleChangeTab, children: TABS.map((tab) => (_jsx(Tab, { iconPosition: "end", value: tab.value, label: tab.label, icon: _jsx(Label, { variant: ((tab.value === 'all' || tab.value === currentTab) && 'filled') || 'soft', color: (tab.value === 'unread' && 'info') ||
                    (tab.value === 'archived' && 'success') ||
                    'default', children: tab.count }) }, tab.value))) }));
    const renderList = (_jsx(Scrollbar, { children: _jsx(Box, { component: "ul", children: notifications?.map((notification) => (_jsx(Box, { component: "li", sx: { display: 'flex' }, children: _jsx(NotificationItem, { notification: notification }) }, notification.id))) }) }));
    return (_jsxs(_Fragment, { children: [_jsx(IconButton, { component: m.button, whileTap: "tap", whileHover: "hover", variants: varHover(1.05), onClick: setTrue, sx: sx, ...other, children: _jsx(Badge, { badgeContent: totalUnRead, color: "error", children: _jsxs(SvgIcon, { children: [_jsx("path", { fill: "currentColor", d: "M18.75 9v.704c0 .845.24 1.671.692 2.374l1.108 1.723c1.011 1.574.239 3.713-1.52 4.21a25.794 25.794 0 0 1-14.06 0c-1.759-.497-2.531-2.636-1.52-4.21l1.108-1.723a4.393 4.393 0 0 0 .693-2.374V9c0-3.866 3.022-7 6.749-7s6.75 3.134 6.75 7", opacity: "0.5" }), _jsx("path", { fill: "currentColor", d: "M12.75 6a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0zM7.243 18.545a5.002 5.002 0 0 0 9.513 0c-3.145.59-6.367.59-9.513 0" })] }) }) }), _jsxs(Drawer, { open: drawer, onClose: setFalse, anchor: "right", slotProps: { backdrop: { invisible: true } }, PaperProps: { sx: { width: 1, maxWidth: 420 } }, children: [renderHead, renderTabs, renderList, _jsx(Box, { sx: { p: 1 }, children: _jsx(Button, { fullWidth: true, size: "large", children: "View all" }) })] })] }));
}
