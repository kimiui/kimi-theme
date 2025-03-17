'use client';

import Tooltip from '@mui/material/Tooltip';
import { useState, useCallback } from 'react';
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';

import { SvgColor, svgColorClasses } from '../../svg-color';
// ----------------------------------------------------------------------

export function FullScreenButton() {
  const theme: any = useTheme();
  const [fullscreen, setFullscreen] = useState(false);

  const onToggleFullScreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setFullscreen(true);
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
      setFullscreen(false);
    }
  }, []);

  return (
    <Tooltip title={fullscreen ? 'Exit' : 'Full Screen'}>
      <IconButton
        onClick={onToggleFullScreen}
        sx={{
          [`& .${svgColorClasses.root}`]: {
            background: `linear-gradient(135deg, ${theme.vars.palette.grey[500]} 0%, ${theme.vars.palette.grey[600]} 100%)`,
            ...(fullscreen && {
              background: `linear-gradient(135deg, ${theme.vars.palette.primary.light} 0%, ${theme.vars.palette.primary.main} 100%)`,
            }),
          },
        }}
        size="medium"
      >
        <SvgColor
          src={`/assets/icons/setting/${fullscreen ? 'ic-exit-full-screen' : 'ic-full-screen'}.svg`}
          sx={{ width: 18, height: 18 }}
        />
      </IconButton>
    </Tooltip>
  );
}
