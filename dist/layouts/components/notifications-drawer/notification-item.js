import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import { Label } from '../../../components/label';
import { fToNow } from '../../../utils/format-time';
import { FileThumbnail } from '../../../components/file-thumbnail';
export function NotificationItem({ notification, }) {
    const renderAvatar = (_jsx(ListItemAvatar, { children: notification.avatarUrl ? (_jsx(Avatar, { src: notification.avatarUrl, sx: { bgcolor: 'background.neutral' } })) : (_jsx(Stack, { alignItems: "center", justifyContent: "center", sx: {
                width: 40,
                height: 40,
                borderRadius: '50%',
                bgcolor: 'background.neutral',
            }, children: _jsx(Box, { component: "img", src: `/assets/icons/notification/${(notification.type === 'order' && 'ic-order') || (notification.type === 'chat' && 'ic-chat') || (notification.type === 'mail' && 'ic-mail') || (notification.type === 'delivery' && 'ic-delivery')}.svg`, sx: { width: 24, height: 24 } }) })) }));
    const renderText = (_jsx(ListItemText, { disableTypography: true, primary: reader(notification.title), secondary: _jsxs(Stack, { direction: "row", alignItems: "center", sx: { typography: 'caption', color: 'text.disabled' }, divider: _jsx(Box, { sx: {
                    width: 2,
                    height: 2,
                    bgcolor: 'currentColor',
                    mx: 0.5,
                    borderRadius: '50%',
                } }), children: [fToNow(notification.createdAt), notification.category] }) }));
    const renderUnReadBadge = notification.isUnRead && (_jsx(Box, { sx: {
            top: 26,
            width: 8,
            height: 8,
            right: 20,
            borderRadius: '50%',
            bgcolor: 'info.main',
            position: 'absolute',
        } }));
    const friendAction = (_jsxs(Stack, { spacing: 1, direction: "row", sx: { mt: 1.5 }, children: [_jsx(Button, { size: "small", variant: "contained", children: "Accept" }), _jsx(Button, { size: "small", variant: "outlined", children: "Decline" })] }));
    const projectAction = (_jsxs(Stack, { alignItems: "flex-start", children: [_jsx(Box, { sx: {
                    p: 1.5,
                    my: 1.5,
                    borderRadius: 1.5,
                    color: 'text.secondary',
                    bgcolor: 'background.neutral',
                }, children: reader(`<p><strong>@Jaydon Frankie</strong> feedback by asking questions or just leave a note of appreciation.</p>`) }), _jsx(Button, { size: "small", variant: "contained", children: "Reply" })] }));
    const fileAction = (_jsxs(Stack, { spacing: 1, direction: "row", sx: {
            pl: 1,
            p: 1.5,
            mt: 1.5,
            borderRadius: 1.5,
            bgcolor: 'background.neutral',
        }, children: [_jsx(FileThumbnail, { file: "http://localhost:8080/httpsdesign-suriname-2015.mp3" }), _jsxs(Stack, { spacing: 1, direction: { xs: 'column', sm: 'row' }, flexGrow: 1, sx: { minWidth: 0 }, children: [_jsx(ListItemText, { disableTypography: true, primary: _jsx(Typography, { variant: "subtitle2", component: "div", sx: { color: 'text.secondary' }, noWrap: true, children: "design-suriname-2015.mp3" }), secondary: _jsxs(Stack, { direction: "row", alignItems: "center", sx: { typography: 'caption', color: 'text.disabled' }, divider: _jsx(Box, { sx: {
                                    mx: 0.5,
                                    width: 2,
                                    height: 2,
                                    borderRadius: '50%',
                                    bgcolor: 'currentColor',
                                } }), children: [_jsx("span", { children: "2.3 GB" }), _jsx("span", { children: "30 min ago" })] }) }), _jsx(Button, { size: "small", variant: "outlined", children: "Download" })] })] }));
    const tagsAction = (_jsxs(Stack, { direction: "row", spacing: 0.75, flexWrap: "wrap", sx: { mt: 1.5 }, children: [_jsx(Label, { variant: "outlined", color: "info", children: "Design" }), _jsx(Label, { variant: "outlined", color: "warning", children: "Dashboard" }), _jsx(Label, { variant: "outlined", children: "Design system" })] }));
    const paymentAction = (_jsxs(Stack, { direction: "row", spacing: 1, sx: { mt: 1.5 }, children: [_jsx(Button, { size: "small", variant: "contained", children: "Pay" }), _jsx(Button, { size: "small", variant: "outlined", children: "Decline" })] }));
    return (_jsxs(ListItemButton, { disableRipple: true, sx: {
            p: 2.5,
            alignItems: 'flex-start',
            borderBottom: (theme) => `dashed 1px ${theme.vars.palette.divider}`,
        }, children: [renderUnReadBadge, renderAvatar, _jsxs(Stack, { sx: { flexGrow: 1 }, children: [renderText, notification.type === 'friend' && friendAction, notification.type === 'project' && projectAction, notification.type === 'file' && fileAction, notification.type === 'tags' && tagsAction, notification.type === 'payment' && paymentAction] })] }));
}
// ----------------------------------------------------------------------
function reader(data) {
    return (_jsx(Box, { dangerouslySetInnerHTML: { __html: data }, sx: {
            mb: 0.5,
            '& p': { typography: 'body2', m: 0 },
            '& a': { color: 'inherit', textDecoration: 'none' },
            '& strong': { typography: 'subtitle2' },
        } }));
}
