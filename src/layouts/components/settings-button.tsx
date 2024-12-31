import type { IconButtonProps } from '@mui/material/IconButton';

import { memo, useMemo } from 'react';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import { Iconify } from 'kimi-theme/components/iconify';
import { useSettingsContext } from 'kimi-theme/components/settings/context';

// ----------------------------------------------------------------------

export type SettingsButtonProps = IconButtonProps;

export const SettingsButton = memo(({ sx, ...other }: SettingsButtonProps) => {
  const settings = useSettingsContext();

  const memoizedSx = useMemo(() => ({ p: 0, width: 40, height: 40, ...sx }), [sx]);

  return (
    <IconButton aria-label="settings" onClick={settings.onToggleDrawer} sx={memoizedSx} {...other}>
      <Badge color="error" variant="dot" invisible={!settings.canReset}>
        <Iconify icon="material-symbols:settings-rounded" />
      </Badge>
    </IconButton>
  );
});
