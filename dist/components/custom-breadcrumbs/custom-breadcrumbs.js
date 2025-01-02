import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { BreadcrumbsLink } from './breadcrumb-link';
// ----------------------------------------------------------------------
export function CustomBreadcrumbs({ links, action, heading, moreLink, activeLast, slotProps, sx, ...other }) {
    const lastLink = links[links.length - 1].name;
    const renderHeading = (_jsx(Typography, { variant: "h4", sx: { mb: 2, ...slotProps?.heading }, children: heading }));
    const renderLinks = (_jsx(Breadcrumbs, { separator: _jsx(Separator, {}), sx: slotProps?.breadcrumbs, ...other, children: links.map((link, index) => (_jsx(BreadcrumbsLink, { link: link, activeLast: activeLast, disabled: link.name === lastLink }, link.name ?? index))) }));
    const renderAction = _jsxs(Box, { sx: { flexShrink: 0, ...slotProps?.action }, children: [" ", action, " "] });
    const renderMoreLink = (_jsx(Box, { component: "ul", sx: { p: 0 }, children: moreLink?.map((href) => (_jsx(Box, { component: "li", sx: { display: 'flex' }, children: _jsx(Link, { href: href, variant: "body2", target: "_blank", rel: "noopener", sx: slotProps?.moreLink, children: href }) }, href))) }));
    return (_jsxs(Stack, { spacing: 2, sx: sx, children: [_jsxs(Stack, { direction: "row", alignItems: "center", children: [_jsxs(Box, { sx: { flexGrow: 1 }, children: [heading && renderHeading, !!links.length && renderLinks] }), action && renderAction] }), !!moreLink && renderMoreLink] }));
}
// ----------------------------------------------------------------------
function Separator() {
    return (_jsx(Box, { component: "span", sx: {
            width: 4,
            height: 4,
            borderRadius: '50%',
            bgcolor: 'text.disabled',
        } }));
}
