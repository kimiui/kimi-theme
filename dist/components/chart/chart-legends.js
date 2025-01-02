'use client';
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
// ----------------------------------------------------------------------
export const StyledLegend = styled(Box)(({ theme }) => ({
    gap: 6,
    alignItems: 'center',
    display: 'inline-flex',
    justifyContent: 'flex-start',
    fontSize: theme.typography.pxToRem(13),
    fontWeight: theme.typography.fontWeightMedium,
}));
export const StyledDot = styled('span')({
    width: 12,
    height: 12,
    flexShrink: 0,
    display: 'flex',
    borderRadius: '50%',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'currentColor',
});
export function ChartLegends({ labels = [], colors = [], values, sublabels, icons, ...other }) {
    return (_jsx(Stack, { direction: "row", flexWrap: "wrap", spacing: 2, ...other, children: labels?.map((series, index) => (_jsxs(Stack, { spacing: 1, children: [_jsxs(StyledLegend, { children: [icons?.length ? (_jsx(Box, { component: "span", sx: {
                                color: colors[index],
                                '& svg, & img': { width: 20, height: 20 },
                            }, children: icons?.[index] })) : (_jsx(StyledDot, { sx: { color: colors[index] } })), _jsxs(Box, { component: "span", sx: { flexShrink: 0 }, children: [series, sublabels && _jsxs(_Fragment, { children: [" ", ` (${sublabels[index]})`] })] })] }), values && _jsx(Box, { sx: { typography: 'h6' }, children: values[index] })] }, series))) }));
}
