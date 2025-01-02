import { jsx as _jsx } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import { alpha as hexAlpha } from '@mui/material/styles';
import { Block } from './styles';
import { SvgColor } from '../../svg-color';
export function PresetsOptions({ value, options, onClickOption }) {
    return (_jsx(Block, { title: "Presets", children: _jsx(Box, { component: "ul", gap: 1.5, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", children: options.map((option) => {
                const selected = value === option.name;
                return (_jsx(Box, { component: "li", sx: { display: 'flex' }, children: _jsx(ButtonBase, { onClick: () => onClickOption(option.name), sx: {
                            width: 1,
                            height: 64,
                            borderRadius: 1.5,
                            color: option.value,
                            ...(selected && {
                                bgcolor: hexAlpha(option.value, 0.08),
                            }),
                        }, children: _jsx(SvgColor, { src: "/assets/icons/setting/ic-siderbar-duotone.svg", sx: { width: 28, height: 28, color: 'currentColor' } }) }) }, option.name));
            }) }) }));
}
