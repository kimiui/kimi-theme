import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Stack from '@mui/material/Stack';
import LoadingButton from '@mui/lab/LoadingButton';
import Button, { buttonClasses } from '@mui/material/Button';
import { Iconify } from '../../../components/iconify';
import { ComponentBlock } from '../../component-block';
// ----------------------------------------------------------------------
const COLORS = ['inherit', 'primary', 'secondary', 'info', 'success', 'warning', 'error'];
const SIZES = ['small', 'medium', 'large'];
export function ButtonVariants({ variant = 'text' }) {
    return (_jsxs(Stack, { sx: {
            rowGap: 5,
            columnGap: 3,
            display: 'grid',
            gridTemplateColumns: { xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' },
            [`& .${buttonClasses.root}`]: { textTransform: 'capitalize' },
        }, children: [_jsxs(ComponentBlock, { title: "Base", sx: { gap: 1 }, children: [_jsx(Button, { variant: variant, color: "inherit", children: "Default" }), _jsx(Button, { variant: variant, color: "primary", children: "Primary" }), _jsx(Button, { variant: variant, color: "secondary", children: "Secondary" }), _jsx(Button, { variant: variant, color: "primary", disabled: true, children: "Disabled" }), _jsx(Button, { variant: variant, children: "Link" })] }), _jsx(ComponentBlock, { title: "Colors", sx: { gap: 1 }, children: COLORS.map((color) => (_jsx(Button, { variant: variant, color: color, children: color === 'inherit' ? 'default' : color }, color))) }), _jsxs(ComponentBlock, { title: "With icon & loading", sx: { gap: 1 }, children: [_jsx(Button, { color: "error", variant: variant, startIcon: _jsx(Iconify, { icon: "ic:round-access-alarm" }), children: "Icon Left" }), _jsx(Button, { variant: variant, color: "error", endIcon: _jsx(Iconify, { icon: "ic:round-access-alarm" }), children: "Icon Right" }), _jsx(LoadingButton, { loading: true, variant: variant, children: "Submit" }), _jsx(LoadingButton, { loading: true, loadingIndicator: "Loading...", variant: variant, children: "Fetch data" }), _jsx(LoadingButton, { loading: true, size: "large", loadingPosition: "start", startIcon: _jsx(Iconify, { icon: "ic:round-access-alarm" }), variant: variant, children: "Start" }), _jsx(LoadingButton, { loading: true, size: "large", loadingPosition: "end", endIcon: _jsx(Iconify, { icon: "ic:round-access-alarm" }), variant: variant, children: "End" })] }), _jsxs(ComponentBlock, { title: "Sizes", sx: { gap: 1 }, children: [SIZES.map((size) => (_jsx(Button, { variant: variant, color: "info", size: size, children: size }, size))), SIZES.map((size) => (_jsx(LoadingButton, { loading: true, size: size, loadingPosition: "start", startIcon: _jsx(Iconify, { icon: "ic:round-access-alarm" }), variant: variant, children: size }, size))), SIZES.map((size) => (_jsx(LoadingButton, { loading: true, size: size, loadingPosition: "end", endIcon: _jsx(Iconify, { icon: "ic:round-access-alarm" }), variant: variant, children: size }, size)))] })] }));
}
