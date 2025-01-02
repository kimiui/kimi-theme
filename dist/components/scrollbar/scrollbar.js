import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from 'react';
import Box from '@mui/material/Box';
import SimpleBar from 'simplebar-react';
import { scrollbarClasses } from './classes';
// ----------------------------------------------------------------------
export const Scrollbar = forwardRef((props, ref) => {
    const { slotProps, children, fillContent, sx, ...other } = props;
    return (_jsx(Box, { component: SimpleBar, scrollableNodeProps: { ref }, clickOnTrack: false, className: scrollbarClasses.root, sx: {
            minWidth: 0,
            minHeight: 0,
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            '& .simplebar-wrapper': slotProps?.wrapper,
            '& .simplebar-content-wrapper': slotProps?.contentWrapper,
            '& .simplebar-content': {
                ...(fillContent && {
                    minHeight: 1,
                    display: 'flex',
                    flex: '1 1 auto',
                    flexDirection: 'column',
                }),
                ...slotProps?.content,
            },
            ...sx,
        }, ...other, children: children }));
});
Scrollbar.displayName = 'Scrollbar';
