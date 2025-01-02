import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { varAlpha } from '../../theme/styles';
import { NavSectionHorizontal } from '../../components/nav-section';
export function NavHorizontal({ data, layoutQuery, sx, ...other }) {
    return (_jsxs(Box, { sx: {
            width: 1,
            position: 'relative',
            flexDirection: 'column',
            display: { xs: 'none', [layoutQuery]: 'flex' },
            borderBottom: (theme) => `solid 1px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.08)}`,
            ...sx,
        }, children: [_jsx(Divider, { sx: { top: 0, left: 0, width: 1, zIndex: 9, position: 'absolute', borderStyle: 'dashed' } }), _jsx(Box, { sx: {
                    px: 1.5,
                    height: 'var(--layout-nav-horizontal-height)',
                    backgroundColor: 'var(--layout-nav-horizontal-bg)',
                    backdropFilter: `blur(var(--layout-header-blur))`,
                    WebkitBackdropFilter: `blur(var(--layout-header-blur))`,
                }, children: _jsx(NavSectionHorizontal, { data: data, ...other }) })] }));
}
