'use client';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { m } from 'framer-motion';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { paths } from '../../../routes/paths';
import { Iconify } from '../../../components/iconify';
import { varHover } from '../../../components/animate';
import { CustomBreadcrumbs } from '../../../components/custom-breadcrumbs';
import { ComponentHero } from '../../component-hero';
import { ComponentBlock } from '../../component-block';
import { ScrollToViewTemplate } from '../../component-template';
// ----------------------------------------------------------------------
const LONG_TEXT = `
Aliquam eget finibus ante, non facilisis lectus. Sed vitae dignissim est, vel aliquam tellus.
Praesent non nunc mollis, fermentum neque at, semper arcu.
Nullam eget est sed sem iaculis gravida eget vitae justo.
`;
// ----------------------------------------------------------------------
const CustomWidthTooltip = styled(({ className, ...props }) => (_jsx(Tooltip, { ...props, classes: { popper: className } })))({ [`& .${tooltipClasses.tooltip}`]: { maxWidth: 500 } });
const NoMaxWidthTooltip = styled(({ className, ...props }) => (_jsx(Tooltip, { ...props, classes: { popper: className } })))({ [`& .${tooltipClasses.tooltip}`]: { maxWidth: 'none' } });
// ----------------------------------------------------------------------
export function TooltipView() {
    const DEMO = [
        {
            name: 'Simple',
            component: (_jsxs(ComponentBlock, { children: [_jsx(Tooltip, { title: "Delete", children: _jsx(IconButton, { children: _jsx(Iconify, { icon: "solar:trash-bin-trash-bold", width: 24 }) }) }), _jsx(Tooltip, { title: "Add", children: _jsx(Fab, { children: _jsx(Iconify, { icon: "mingcute:add-line", width: 24 }) }) }), _jsx(Tooltip, { title: "Delete", children: _jsx(IconButton, { color: "info", children: _jsx(Iconify, { icon: "solar:trash-bin-trash-bold", width: 24 }) }) }), _jsx(Tooltip, { title: "Add", children: _jsx(Fab, { component: m.button, whileTap: "tap", whileHover: "hover", variants: varHover(), color: "info", children: _jsx(Iconify, { icon: "mingcute:add-line", width: 24 }) }) }), _jsx(Tooltip, { title: "Add", children: _jsx(Button, { variant: "outlined", color: "info", children: "Button" }) })] })),
        },
        {
            name: 'Arrow',
            component: (_jsx(ComponentBlock, { children: _jsx(Tooltip, { title: "Add", arrow: true, children: _jsx(Fab, { children: _jsx(Iconify, { icon: "mingcute:add-line", width: 24 }) }) }) })),
        },
        {
            name: 'Variable width',
            component: (_jsxs(ComponentBlock, { children: [_jsx(Tooltip, { title: LONG_TEXT, children: _jsx(Button, { color: "inherit", children: "Default width [300px]" }) }), _jsx(CustomWidthTooltip, { title: LONG_TEXT, children: _jsx(Button, { color: "inherit", children: "Custom width [500px]" }) }), _jsx(NoMaxWidthTooltip, { title: LONG_TEXT, children: _jsx(Button, { color: "inherit", children: "No wrapping" }) })] })),
        },
        {
            name: 'Transitions',
            component: (_jsxs(ComponentBlock, { children: [_jsx(Tooltip, { title: "Add", children: _jsx(Button, { color: "inherit", children: "Grow" }) }), _jsx(Tooltip, { TransitionComponent: Fade, TransitionProps: { timeout: 600 }, title: "Add", children: _jsx(Button, { color: "inherit", children: "Fade" }) }), _jsx(Tooltip, { TransitionComponent: Zoom, title: "Add", children: _jsx(Button, { color: "inherit", children: "Zoom" }) })] })),
        },
        {
            name: 'Positioned',
            component: (_jsxs(ComponentBlock, { children: [_jsx(Tooltip, { title: "Add", placement: "top-start", children: _jsx(Button, { color: "inherit", children: "top-start" }) }), _jsx(Tooltip, { title: "Add", placement: "top", children: _jsx(Button, { color: "inherit", children: "top" }) }), _jsx(Tooltip, { title: "Add", placement: "top-end", children: _jsx(Button, { color: "inherit", children: "top-end" }) }), _jsx(Tooltip, { title: "Add", placement: "left-start", children: _jsx(Button, { color: "inherit", children: "left-start" }) }), _jsx(Tooltip, { title: "Add", placement: "left", children: _jsx(Button, { color: "inherit", children: "left" }) }), _jsx(Tooltip, { title: "Add", placement: "left-end", children: _jsx(Button, { color: "inherit", children: "left-end" }) }), _jsx(Tooltip, { title: "Add", placement: "right-start", children: _jsx(Button, { color: "inherit", children: "right-start" }) }), _jsx(Tooltip, { title: "Add", placement: "right", children: _jsx(Button, { color: "inherit", children: "right" }) }), _jsx(Tooltip, { title: "Add", placement: "right-end", children: _jsx(Button, { color: "inherit", children: "right-end" }) }), _jsx(Tooltip, { title: "Add", placement: "bottom-start", children: _jsx(Button, { color: "inherit", children: "bottom-start" }) }), _jsx(Tooltip, { title: "Add", placement: "bottom", children: _jsx(Button, { color: "inherit", children: "bottom" }) }), _jsx(Tooltip, { title: "Add", placement: "bottom-end", children: _jsx(Button, { color: "inherit", children: "bottom-end" }) })] })),
        },
    ];
    return (_jsxs(_Fragment, { children: [_jsx(ComponentHero, { children: _jsx(CustomBreadcrumbs, { heading: "Tooltip", links: [{ name: 'Components', href: paths.docs.components.root }, { name: 'Tooltip' }], moreLink: ['https://mui.com/components/tooltips'] }) }), _jsx(ScrollToViewTemplate, { data: DEMO })] }));
}
