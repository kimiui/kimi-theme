'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import ApexChart from 'react-apexcharts';
// ----------------------------------------------------------------------
export function Chart({ sx, type, series, height, options, width = '100%', ...other }) {
    return (_jsx(Box, { dir: "ltr", sx: {
            width,
            height,
            flexShrink: 0,
            borderRadius: 1.5,
            position: 'relative',
            ...sx,
        }, ...other, children: _jsx(ApexChart, { type: type, series: series, options: options, width: "100%", height: "100%" }) }));
}
