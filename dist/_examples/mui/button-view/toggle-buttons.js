'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Iconify } from '../../../components/iconify';
import { ComponentBlock } from '../../component-block';
// ----------------------------------------------------------------------
const COLORS = ['standard', 'primary', 'secondary', 'info', 'success', 'warning', 'error'];
const SIZES = ['small', 'medium', 'large'];
// ----------------------------------------------------------------------
export function ToggleButtons() {
    const [alignment, setAlignment] = useState('left');
    const [formats, setFormats] = useState(() => ['bold', 'italic']);
    const [view, setView] = useState('list');
    const [selected, setSelected] = useState(true);
    const handleAlignment = (event, newAlignment) => {
        setAlignment(newAlignment);
    };
    const handleFormat = (event, newFormats) => {
        setFormats(newFormats);
    };
    const handleChange = (event, nextView) => {
        setView(nextView);
    };
    const viewContent = [
        _jsx(ToggleButton, { value: "list", children: _jsx(Iconify, { icon: "ic:round-view-list" }) }, "list"),
        _jsx(ToggleButton, { value: "module", children: _jsx(Iconify, { icon: "ic:round-view-module" }) }, "module"),
        _jsx(ToggleButton, { value: "quilt", children: _jsx(Iconify, { icon: "ic:round-view-quilt" }) }, "quilt"),
    ];
    const alignContent = [
        _jsx(ToggleButton, { value: "left", children: _jsx(Iconify, { icon: "ic:round-format-align-left" }) }, "left"),
        _jsx(ToggleButton, { value: "center", children: _jsx(Iconify, { icon: "ic:round-format-align-center" }) }, "center"),
        _jsx(ToggleButton, { value: "right", children: _jsx(Iconify, { icon: "ic:round-format-align-right" }) }, "right"),
        _jsx(ToggleButton, { value: "justify", disabled: true, children: _jsx(Iconify, { icon: "ic:round-format-align-justify" }) }, "justify"),
    ];
    const formatContent = [
        _jsx(ToggleButton, { value: "bold", children: _jsx(Iconify, { icon: "ic:round-format-bold" }) }, "bold"),
        _jsx(ToggleButton, { value: "italic", children: _jsx(Iconify, { icon: "ic:round-format-italic" }) }, "italic"),
        _jsx(ToggleButton, { value: "underlined", children: _jsx(Iconify, { icon: "ic:round-format-underlined" }) }, "underlined"),
        _jsxs(ToggleButton, { value: "color", disabled: true, children: [_jsx(Iconify, { icon: "ic:baseline-format-color-fill" }), _jsx(Iconify, { icon: "ic:baseline-arrow-drop-down" })] }, "color"),
    ];
    return (_jsxs(Stack, { rowGap: 5, columnGap: 2.5, display: "grid", gridTemplateColumns: { xs: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }, children: [_jsx(ComponentBlock, { title: "Exclusive selection", children: _jsx(ToggleButtonGroup, { value: alignment, exclusive: true, onChange: handleAlignment, children: alignContent }) }), _jsx(ComponentBlock, { title: "Multiple selection", children: _jsx(ToggleButtonGroup, { value: formats, onChange: handleFormat, children: formatContent }) }), _jsxs(ComponentBlock, { title: "Sizes", children: [SIZES.map((size) => (_jsx(ToggleButton, { size: size, value: "check", children: _jsx(Iconify, { icon: "eva:checkmark-fill" }) }, size))), SIZES.map((size) => (_jsx(ToggleButtonGroup, { exclusive: true, size: size, value: alignment, onChange: handleAlignment, children: alignContent }, size)))] }), _jsxs(ComponentBlock, { title: "Disabled", children: [_jsx(ToggleButton, { value: "check", disabled: true, children: _jsx(Iconify, { icon: "eva:checkmark-fill" }) }), _jsx(ToggleButton, { value: "check", disabled: true, selected: true, children: _jsx(Iconify, { icon: "eva:checkmark-fill" }) }), _jsx(ToggleButtonGroup, { value: "left", exclusive: true, children: alignContent }), _jsx(ToggleButtonGroup, { disabled: true, value: "left", exclusive: true, children: alignContent })] }), _jsxs(ComponentBlock, { title: "Colors", children: [COLORS.map((color) => (_jsx(ToggleButtonGroup, { exclusive: true, color: color, value: view, onChange: handleChange, children: viewContent }, color))), _jsx(Box, { sx: { display: 'block', width: 1, height: 16 } }), COLORS.map((color) => (_jsx(ToggleButton, { color: color, value: "check", selected: selected, onChange: () => {
                            setSelected(!selected);
                        }, children: _jsx(Iconify, { icon: "eva:checkmark-fill" }) }, color)))] }), _jsxs(ComponentBlock, { title: "Vertical & Standalone buttons", children: [_jsx(ToggleButtonGroup, { orientation: "vertical", value: view, exclusive: true, onChange: handleChange, children: viewContent }), _jsx(ToggleButton, { value: "check", selected: selected, onChange: () => {
                            setSelected(!selected);
                        }, children: _jsx(Iconify, { icon: "eva:checkmark-fill" }) })] })] }));
}
