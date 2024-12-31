'use client';

import type { TransitionProps } from '@mui/material/transitions';

import { forwardRef } from 'react';
import Box from '@mui/material/Box';
import { useBoolean } from 'ahooks';
import Slide from '@mui/material/Slide';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Divider from '@mui/material/Divider';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';
import { Iconify } from 'kimi-theme/components/iconify';
import ListItemButton from '@mui/material/ListItemButton';

// ----------------------------------------------------------------------

const Transition = forwardRef(
  (
    props: TransitionProps & {
      children: React.ReactElement;
    },
    ref?: any
  ) => <Slide direction="up" ref={ref} {...props} />
);

export function FullScreenDialog() {
  const [dialog, dialogActions] = useBoolean();

  return (
    <>
      <Button variant="outlined" color="error" onClick={dialogActions.setTrue}>
        Full screen dialogs
      </Button>

      <Dialog
        fullScreen
        open={dialog}
        onClose={dialogActions.setFalse}
        TransitionComponent={Transition}
      >
        <AppBar position="relative" color="default">
          <Toolbar>
            <IconButton color="inherit" edge="start" onClick={dialogActions.setFalse}>
              <Iconify icon="mingcute:close-line" />
            </IconButton>

            <Typography variant="h6" sx={{ flex: 1, ml: 2 }}>
              Sound
            </Typography>

            <Button autoFocus color="inherit" variant="contained" onClick={dialogActions.setFalse}>
              Save
            </Button>
          </Toolbar>
        </AppBar>

        <Box component="ul">
          <Box component="li" sx={{ display: 'flex' }}>
            <ListItemButton>
              <ListItemText primary="Phone ringtone" secondary="Titania" />
            </ListItemButton>
          </Box>

          <Divider />

          <Box component="li" sx={{ display: 'flex' }}>
            <ListItemButton>
              <ListItemText primary="Default notification ringtone" secondary="Tethys" />
            </ListItemButton>
          </Box>
        </Box>
      </Dialog>
    </>
  );
}
