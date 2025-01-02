import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useCallback } from 'react';
import Collapse from '@mui/material/Collapse';
import { isExternalLink } from '../../../../utils';
import { varAlpha } from '../../../../theme/styles';
import { useActiveLink } from '../../../../hooks/useActiveLink';
import { NavLi, navSectionClasses, NavSectionVertical } from '../../../../components/nav-section';
import { NavItem } from './nav-mobile-item';
// ----------------------------------------------------------------------
export function NavList({ data }) {
    const active = useActiveLink(data.path, !!data.children);
    const [openMenu, setOpenMenu] = useState(false);
    const handleToggleMenu = useCallback(() => {
        if (data.children) {
            setOpenMenu((prev) => !prev);
        }
    }, [data.children]);
    const renderNavItem = (_jsx(NavItem
    // slots
    , { 
        // slots
        path: data.path, icon: data.icon, title: data.title, 
        // state
        active: active, hasChild: !!data.children, open: data.children && !!openMenu, externalLink: isExternalLink(data.path), 
        // actions
        onClick: handleToggleMenu }));
    if (data.children) {
        return (_jsxs(NavLi, { children: [renderNavItem, _jsx(Collapse, { in: openMenu, children: _jsx(NavSectionVertical, { data: data.children, slotProps: { rootItem: { sx: { minHeight: 36 } } }, sx: {
                            px: 1.5,
                            [`& .${navSectionClasses.item.root}`]: {
                                '&[aria-label="Dashboard"]': {
                                    [`& .${navSectionClasses.item.title}`]: { display: 'none' },
                                    height: 180,
                                    borderRadius: 1.5,
                                    backgroundSize: 'auto 88%',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundImage: `url(/assets/illustrations/illustration-dashboard.webp)`,
                                    border: (theme) => `solid 1px ${varAlpha(theme.palette.grey['500Channel'], 0.12)}`,
                                },
                            },
                        } }) })] }));
    }
    return _jsx(NavLi, { children: renderNavItem });
}
