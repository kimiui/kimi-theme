import { useEffect } from 'react';
import { IconButton, useColorScheme } from '@mui/material';

import { Iconify } from 'lib/components/iconify';
import { useSettingsContext } from 'lib/components/settings';

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
      size="medium"
      onClick={() => settings.onUpdateField('colorScheme', isLight ? 'dark' : 'light')}
    >
      {isLight ? <Iconify icon="line-md:moon-simple" /> : <Iconify icon="line-md:sunny" />}
    </IconButton>
  );
}
