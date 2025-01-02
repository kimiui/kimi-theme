'use client';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import GlobalStyles from '@mui/material/GlobalStyles';
import { layoutClasses } from '../classes';
export function LayoutSection({ sx, cssVars, children, footerSection, headerSection, sidebarSection, }) {
    const inputGlobalStyles = (_jsx(GlobalStyles, { styles: {
            body: {
                '--layout-nav-zIndex': 1101,
                '--layout-nav-mobile-width': '320px',
                '--layout-header-blur': '8px',
                '--layout-header-zIndex': 1100,
                '--layout-header-mobile-height': '64px',
                '--layout-header-desktop-height': '72px',
                ...cssVars,
            },
        } }));
    return (_jsxs(_Fragment, { children: [inputGlobalStyles, _jsx(Box, { id: "root__layout", className: layoutClasses.root, sx: sx, children: sidebarSection ? (_jsxs(_Fragment, { children: [sidebarSection, _jsxs(Box, { display: "flex", flex: "1 1 auto", flexDirection: "column", className: layoutClasses.hasSidebar, children: [headerSection, children, footerSection] })] })) : (_jsxs(_Fragment, { children: [headerSection, children, footerSection] })) })] }));
}
