import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect } from 'react';
import { IconButton, useColorScheme } from '@mui/material';
import { Iconify } from '../../components/iconify';
import { useSettingsContext } from '../../components/settings';
// ----------------------------------------------------------------------
export function ThemeModeToggle() {
    const settings = useSettingsContext();
    const { mode, setMode } = useColorScheme();
    const isLight = mode === 'light';
    useEffect(() => {
        setMode(settings.colorScheme);
    }, [settings, setMode]);
    return (_jsx(IconButton, { size: "large", onClick: () => settings.onUpdateField('colorScheme', isLight ? 'dark' : 'light'), sx: {
            color: 'text.primary',
            ...(isLight && { bgcolor: 'background.paper' }),
        }, children: isLight ? _jsx(Iconify, { icon: "line-md:moon-simple" }) : _jsx(Iconify, { icon: "line-md:sunny" }) }));
}
