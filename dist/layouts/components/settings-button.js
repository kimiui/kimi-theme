import { jsx as _jsx } from "react/jsx-runtime";
import { memo, useMemo } from 'react';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import { Iconify } from '../../components/iconify';
import { useSettingsContext } from '../../components/settings/context';
export const SettingsButton = memo(({ sx, ...other }) => {
    const settings = useSettingsContext();
    const memoizedSx = useMemo(() => ({ p: 0, width: 40, height: 40, ...sx }), [sx]);
    return (_jsx(IconButton, { "aria-label": "settings", onClick: settings.onToggleDrawer, sx: memoizedSx, ...other, children: _jsx(Badge, { color: "error", variant: "dot", invisible: !settings.canReset, children: _jsx(Iconify, { icon: "material-symbols:settings-rounded" }) }) }));
});
