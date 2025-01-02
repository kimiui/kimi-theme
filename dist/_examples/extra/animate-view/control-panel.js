import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import Stack from '@mui/material/Stack';
import RadioGroup from '@mui/material/RadioGroup';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
export function ControlPanel({ variantKey, selectVariant, onChangeVariant, sx, ...other }) {
    return (_jsx(Stack, { sx: {
            p: 2.5,
            width: 320,
            overflowX: 'auto',
            borderLeft: (theme) => `solid 1px ${theme.vars.palette.divider}`,
            ...sx,
        }, ...other, children: _jsx(RadioGroup, { value: selectVariant, onChange: onChangeVariant, children: variantKey.map((variant) => (_jsxs(Box, { sx: { my: 1.5 }, children: [_jsx(Typography, { variant: "overline", sx: { px: 1, mb: 1, display: 'block' }, children: variant.type }), variant.values.map((value) => (_jsx(FormControlLabel, { value: value, label: value, control: _jsx(Radio, { sx: { display: 'none' } }), sx: {
                            px: 1,
                            py: 0.5,
                            mx: 0,
                            my: 0.25,
                            width: '100%',
                            borderRadius: 0.75,
                            color: 'text.secondary',
                            ...(selectVariant === value && { color: 'warning.contrastText' }),
                            ...(selectVariant === value && { bgcolor: 'warning.main' }),
                        } }, value)))] }, variant.type))) }) }));
}
