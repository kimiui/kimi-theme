import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { StyledControlPanel } from '../styles';
export function ControlPanel({ mode, onModeChange }) {
    return (_jsx(StyledControlPanel, { children: _jsxs(ToggleButtonGroup, { color: "primary", value: mode, exclusive: true, onChange: onModeChange, children: [_jsx(ToggleButton, { value: "side-by-side", children: "Side by side" }), _jsx(ToggleButton, { value: "split-screen", children: "Split screen" })] }) }));
}
