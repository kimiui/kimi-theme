import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { RouterLink } from 'routes-react';
export function BreadcrumbsLink({ link, activeLast, disabled }) {
    const styles = {
        typography: 'body2',
        alignItems: 'center',
        color: 'text.primary',
        display: 'inline-flex',
        ...(disabled &&
            !activeLast && {
            cursor: 'default',
            pointerEvents: 'none',
            color: 'text.disabled',
        }),
    };
    const renderContent = (_jsxs(_Fragment, { children: [link.icon && (_jsx(Box, { component: "span", sx: {
                    mr: 1,
                    display: 'inherit',
                    '& svg, & img': {
                        width: 20,
                        height: 20,
                    },
                }, children: link.icon })), link.name] }));
    if (link.href) {
        return (_jsx(Link, { component: RouterLink, href: link.href, sx: styles, children: renderContent }));
    }
    return _jsxs(Box, { sx: styles, children: [" ", renderContent, " "] });
}
