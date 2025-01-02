import { jsx as _jsx } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
export function ChartLoading({ sx, type, ...other }) {
    const circularTypes = ['donut', 'radialBar', 'pie', 'polarArea'];
    return (_jsx(Box, { alignItems: "center", justifyContent: "center", sx: {
            top: 0,
            left: 0,
            width: 1,
            zIndex: 9,
            height: 1,
            p: 'inherit',
            overflow: 'hidden',
            position: 'absolute',
            borderRadius: 'inherit',
            ...sx,
        }, ...other, children: _jsx(Skeleton, { variant: "circular", sx: {
                width: 1,
                height: 1,
                borderRadius: 'inherit',
                ...(circularTypes.includes(type) && {
                    borderRadius: '50%',
                }),
            } }) }));
}
