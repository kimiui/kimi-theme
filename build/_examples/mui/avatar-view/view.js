'use client';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import { useTheme } from '@mui/material/styles';
import AvatarGroup, { avatarGroupClasses } from '@mui/material/AvatarGroup';
import { _mock } from '../../../_mock';
import { paths } from '../../../routes/paths';
import { Iconify } from '../../../components/iconify';
import { CustomBreadcrumbs } from '../../../components/custom-breadcrumbs';
import { ComponentHero } from '../../component-hero';
import { ComponentBlock } from '../../component-block';
import { ScrollToViewTemplate } from '../../component-template';
// ----------------------------------------------------------------------
const COLORS = ['default', 'primary', 'secondary', 'info', 'success', 'warning', 'error'];
const SIZES = [24, 32, 40, 56];
const VARIANTS = ['circular', 'rounded', 'square'];
const STATUS = ['online', 'alway', 'busy', 'offline'];
// ----------------------------------------------------------------------
export function AvatarView() {
    const theme = useTheme();
    const DEMO = [
        {
            name: 'Image',
            component: (_jsx(ComponentBlock, { children: [1, 2, 3, 4, 5].map((_, index) => (_jsx(Avatar, { alt: _mock.fullName(index + 1), src: _mock.image.avatar(index + 1) }, index))) })),
        },
        {
            name: 'Letter',
            component: (_jsx(ComponentBlock, { children: COLORS.map((color, index) => (_jsx(Tooltip, { title: color, children: _jsx(Avatar, { alt: _mock.fullName(index + 3), children: _mock
                            .fullName(index + 3)
                            .charAt(0)
                            .toUpperCase() }) }, color))) })),
        },
        {
            name: 'Icon',
            component: (_jsx(ComponentBlock, { children: COLORS.map((color) => (_jsx(Avatar, { color: color, children: _jsx(Iconify, { icon: "eva:folder-add-outline", width: 24 }) }, color))) })),
        },
        {
            name: 'Variant',
            component: (_jsx(ComponentBlock, { children: VARIANTS.map((variant) => (_jsx(Avatar, { variant: variant, sx: { bgcolor: 'primary.main', color: 'primary.contrastText' }, children: _jsx(Iconify, { icon: "eva:folder-add-outline", width: 24 }) }, variant))) })),
        },
        {
            name: 'Grouped',
            component: (_jsxs(ComponentBlock, { flexDirection: "column", alignItems: "center", children: [SIZES.map((size) => (_jsx(Tooltip, { title: size, children: _jsx(AvatarGroup, { sx: {
                                [`& .${avatarGroupClasses.avatar}`]: {
                                    width: size,
                                    height: size,
                                },
                            }, children: COLORS.map((color, index) => (_jsx(Avatar, { alt: _mock.fullAddress(index + 1), src: _mock.image.avatar(index + 1) }, color))) }, size) }, size))), _jsx(Tooltip, { title: "compact", children: _jsx(Badge, { variant: "online", anchorOrigin: { vertical: 'bottom', horizontal: 'right' }, children: _jsx(AvatarGroup, { variant: "compact", sx: { width: 48, height: 48 }, children: COLORS.slice(0, 2).map((color, index) => (_jsx(Avatar, { alt: _mock.fullName(index + 1), src: _mock.image.avatar(index + 1) }, color))) }) }) })] })),
        },
        {
            name: 'With badge',
            component: (_jsxs(ComponentBlock, { children: [_jsx(Badge, { overlap: "circular", anchorOrigin: { vertical: 'bottom', horizontal: 'right' }, badgeContent: _jsx(Avatar, { alt: _mock.fullName(7), src: _mock.image.avatar(7), sx: {
                                p: 0,
                                width: 24,
                                height: 24,
                                border: `solid 2px ${theme.vars.palette.background.paper}`,
                            } }), children: _jsx(Avatar, { alt: _mock.fullName(8), src: _mock.image.avatar(8) }) }), STATUS.map((status, index) => (_jsx(Badge, { variant: status, anchorOrigin: { vertical: 'bottom', horizontal: 'right' }, children: _jsx(Avatar, { alt: _mock.fullName(index + 1), src: _mock.image.avatar(index + 1) }) }, status)))] })),
        },
        {
            name: 'Sizes',
            component: (_jsx(ComponentBlock, { children: [24, 32, 48, 56, 64, 80, 128].map((size, index) => (_jsx(Avatar, { alt: _mock.fullName(index + 4), src: _mock.image.avatar(index + 4), sx: { width: size, height: size } }, size))) })),
        },
    ];
    return (_jsxs(_Fragment, { children: [_jsx(ComponentHero, { children: _jsx(CustomBreadcrumbs, { heading: "Avatar", links: [{ name: 'Components', href: paths.docs.components.root }, { name: 'Avatar' }], moreLink: ['https://mui.com/components/avatars'] }) }), _jsx(ScrollToViewTemplate, { data: DEMO })] }));
}
