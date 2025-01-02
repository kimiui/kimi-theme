import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Masonry from '@mui/lab/Masonry';
import Divider from '@mui/material/Divider';
import { MenuTags } from './menu-tags';
import { NavSubList } from './nav-sub-list';
import { MenuCarousel } from './menu-carousel';
import { MenuMoreLink } from './menu-more-link';
import { NavUl, navSectionClasses } from '../../nav-section';
// ----------------------------------------------------------------------
export function NavContent({ data, slotProps, singleList, }) {
    if (!data.children) {
        return null;
    }
    return (_jsx(_Fragment, { children: singleList ? (_jsx(NavUl, { children: _jsx(NavSubList, { data: data.children, slotProps: slotProps }) })) : (_jsxs(_Fragment, { children: [_jsx(Masonry, { component: "ul", className: navSectionClasses.ul, columns: 4, defaultColumns: 4, spacing: 3, defaultSpacing: 3, sx: { p: 0 }, children: _jsx(NavSubList, { data: data.children, slotProps: slotProps }) }), !!data.moreLink && (_jsx(MenuMoreLink, { path: data.moreLink.path, title: data.moreLink.title, sx: slotProps?.moreLink })), !!data.slides && (_jsxs(_Fragment, { children: [_jsx(Divider, { sx: { borderStyle: 'dashed', my: 3 } }), _jsx(MenuCarousel, { slides: data.slides, displayCount: slotProps?.carousel?.displayCount, sx: slotProps?.carousel?.sx })] })), !!data.tags && (_jsxs(_Fragment, { children: [_jsx(Divider, { sx: { borderStyle: 'dashed', my: 3 } }), _jsx(MenuTags, { tags: data.tags, sx: slotProps?.tags })] }))] })) }));
}
