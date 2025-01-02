'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from 'react';
import { styled } from '@mui/material/styles';
// ----------------------------------------------------------------------
const ViewBox = styled('svg')(({ theme }) => ({
    width: '100%',
    height: '100%',
    fill: 'none',
    viewBox: '0 0 144 62',
    xmlns: 'http://www.w3.org/2000/svg',
}));
function AvatarShape({ sx, ...other }) {
    return (_jsx(ViewBox, { sx: { color: 'background.paper', ...sx }, children: _jsx("path", { d: "m111.34 23.88c-10.62-10.46-18.5-23.88-38.74-23.88h-1.2c-20.24 0-28.12 13.42-38.74 23.88-7.72 9.64-19.44 11.74-32.66 12.12v26h144v-26c-13.22-.38-24.94-2.48-32.66-12.12z", fill: "currentColor", fillRule: "evenodd" }) }));
}
export default memo(AvatarShape);
