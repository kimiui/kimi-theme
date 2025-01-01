"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationItem = NotificationItem;
var jsx_runtime_1 = require("react/jsx-runtime");
var Box_1 = __importDefault(require("@mui/material/Box"));
var Stack_1 = __importDefault(require("@mui/material/Stack"));
var Button_1 = __importDefault(require("@mui/material/Button"));
var Avatar_1 = __importDefault(require("@mui/material/Avatar"));
var Typography_1 = __importDefault(require("@mui/material/Typography"));
var ListItemText_1 = __importDefault(require("@mui/material/ListItemText"));
var ListItemAvatar_1 = __importDefault(require("@mui/material/ListItemAvatar"));
var ListItemButton_1 = __importDefault(require("@mui/material/ListItemButton"));
var label_1 = require("lib/components/label");
var format_time_1 = require("lib/utils/format-time");
var file_thumbnail_1 = require("lib/components/file-thumbnail");
function NotificationItem(_a) {
    var notification = _a.notification;
    var renderAvatar = ((0, jsx_runtime_1.jsx)(ListItemAvatar_1.default, { children: notification.avatarUrl ? ((0, jsx_runtime_1.jsx)(Avatar_1.default, { src: notification.avatarUrl, sx: { bgcolor: 'background.neutral' } })) : ((0, jsx_runtime_1.jsx)(Stack_1.default, { alignItems: "center", justifyContent: "center", sx: {
                width: 40,
                height: 40,
                borderRadius: '50%',
                bgcolor: 'background.neutral',
            }, children: (0, jsx_runtime_1.jsx)(Box_1.default, { component: "img", src: "/assets/icons/notification/".concat((notification.type === 'order' && 'ic-order') || (notification.type === 'chat' && 'ic-chat') || (notification.type === 'mail' && 'ic-mail') || (notification.type === 'delivery' && 'ic-delivery'), ".svg"), sx: { width: 24, height: 24 } }) })) }));
    var renderText = ((0, jsx_runtime_1.jsx)(ListItemText_1.default, { disableTypography: true, primary: reader(notification.title), secondary: (0, jsx_runtime_1.jsxs)(Stack_1.default, { direction: "row", alignItems: "center", sx: { typography: 'caption', color: 'text.disabled' }, divider: (0, jsx_runtime_1.jsx)(Box_1.default, { sx: {
                    width: 2,
                    height: 2,
                    bgcolor: 'currentColor',
                    mx: 0.5,
                    borderRadius: '50%',
                } }), children: [(0, format_time_1.fToNow)(notification.createdAt), notification.category] }) }));
    var renderUnReadBadge = notification.isUnRead && ((0, jsx_runtime_1.jsx)(Box_1.default, { sx: {
            top: 26,
            width: 8,
            height: 8,
            right: 20,
            borderRadius: '50%',
            bgcolor: 'info.main',
            position: 'absolute',
        } }));
    var friendAction = ((0, jsx_runtime_1.jsxs)(Stack_1.default, { spacing: 1, direction: "row", sx: { mt: 1.5 }, children: [(0, jsx_runtime_1.jsx)(Button_1.default, { size: "small", variant: "contained", children: "Accept" }), (0, jsx_runtime_1.jsx)(Button_1.default, { size: "small", variant: "outlined", children: "Decline" })] }));
    var projectAction = ((0, jsx_runtime_1.jsxs)(Stack_1.default, { alignItems: "flex-start", children: [(0, jsx_runtime_1.jsx)(Box_1.default, { sx: {
                    p: 1.5,
                    my: 1.5,
                    borderRadius: 1.5,
                    color: 'text.secondary',
                    bgcolor: 'background.neutral',
                }, children: reader("<p><strong>@Jaydon Frankie</strong> feedback by asking questions or just leave a note of appreciation.</p>") }), (0, jsx_runtime_1.jsx)(Button_1.default, { size: "small", variant: "contained", children: "Reply" })] }));
    var fileAction = ((0, jsx_runtime_1.jsxs)(Stack_1.default, { spacing: 1, direction: "row", sx: {
            pl: 1,
            p: 1.5,
            mt: 1.5,
            borderRadius: 1.5,
            bgcolor: 'background.neutral',
        }, children: [(0, jsx_runtime_1.jsx)(file_thumbnail_1.FileThumbnail, { file: "http://localhost:8080/httpsdesign-suriname-2015.mp3" }), (0, jsx_runtime_1.jsxs)(Stack_1.default, { spacing: 1, direction: { xs: 'column', sm: 'row' }, flexGrow: 1, sx: { minWidth: 0 }, children: [(0, jsx_runtime_1.jsx)(ListItemText_1.default, { disableTypography: true, primary: (0, jsx_runtime_1.jsx)(Typography_1.default, { variant: "subtitle2", component: "div", sx: { color: 'text.secondary' }, noWrap: true, children: "design-suriname-2015.mp3" }), secondary: (0, jsx_runtime_1.jsxs)(Stack_1.default, { direction: "row", alignItems: "center", sx: { typography: 'caption', color: 'text.disabled' }, divider: (0, jsx_runtime_1.jsx)(Box_1.default, { sx: {
                                    mx: 0.5,
                                    width: 2,
                                    height: 2,
                                    borderRadius: '50%',
                                    bgcolor: 'currentColor',
                                } }), children: [(0, jsx_runtime_1.jsx)("span", { children: "2.3 GB" }), (0, jsx_runtime_1.jsx)("span", { children: "30 min ago" })] }) }), (0, jsx_runtime_1.jsx)(Button_1.default, { size: "small", variant: "outlined", children: "Download" })] })] }));
    var tagsAction = ((0, jsx_runtime_1.jsxs)(Stack_1.default, { direction: "row", spacing: 0.75, flexWrap: "wrap", sx: { mt: 1.5 }, children: [(0, jsx_runtime_1.jsx)(label_1.Label, { variant: "outlined", color: "info", children: "Design" }), (0, jsx_runtime_1.jsx)(label_1.Label, { variant: "outlined", color: "warning", children: "Dashboard" }), (0, jsx_runtime_1.jsx)(label_1.Label, { variant: "outlined", children: "Design system" })] }));
    var paymentAction = ((0, jsx_runtime_1.jsxs)(Stack_1.default, { direction: "row", spacing: 1, sx: { mt: 1.5 }, children: [(0, jsx_runtime_1.jsx)(Button_1.default, { size: "small", variant: "contained", children: "Pay" }), (0, jsx_runtime_1.jsx)(Button_1.default, { size: "small", variant: "outlined", children: "Decline" })] }));
    return ((0, jsx_runtime_1.jsxs)(ListItemButton_1.default, { disableRipple: true, sx: {
            p: 2.5,
            alignItems: 'flex-start',
            borderBottom: function (theme) { return "dashed 1px ".concat(theme.vars.palette.divider); },
        }, children: [renderUnReadBadge, renderAvatar, (0, jsx_runtime_1.jsxs)(Stack_1.default, { sx: { flexGrow: 1 }, children: [renderText, notification.type === 'friend' && friendAction, notification.type === 'project' && projectAction, notification.type === 'file' && fileAction, notification.type === 'tags' && tagsAction, notification.type === 'payment' && paymentAction] })] }));
}
// ----------------------------------------------------------------------
function reader(data) {
    return ((0, jsx_runtime_1.jsx)(Box_1.default, { dangerouslySetInnerHTML: { __html: data }, sx: {
            mb: 0.5,
            '& p': { typography: 'body2', m: 0 },
            '& a': { color: 'inherit', textDecoration: 'none' },
            '& strong': { typography: 'subtitle2' },
        } }));
}
