import { useEffect } from 'react';
import { Iconify } from 'kimi-theme/components/iconify';
import { IconButton, useColorScheme } from '@mui/material';
import { useSettingsContext } from 'kimi-theme/components/settings';

// ----------------------------------------------------------------------

export function ThemeModeToggle() {
  const settings = useSettingsContext();
  const { mode, setMode } = useColorScheme();

  const isLight = mode === 'light';

  useEffect(() => {
    setMode(settings.colorScheme);
  }, [settings, setMode]);

  return (
    <IconButton
      size="large"
      onClick={() => settings.onUpdateField('colorScheme', isLight ? 'dark' : 'light')}
      sx={{
        color: 'text.primary',
        ...(isLight && { bgcolor: 'background.paper' }),
      }}
    >
      {isLight ? <Iconify icon="line-md:moon-simple" /> : <Iconify icon="line-md:sunny" />}
    </IconButton>
  );
}
