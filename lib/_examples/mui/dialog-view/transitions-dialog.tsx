'use client';

import { forwardRef } from 'react';
import { useBoolean } from 'ahooks';
import Slide from '@mui/material/Slide';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import type { TransitionProps } from '@mui/material/transitions';

// ----------------------------------------------------------------------

const Transition = forwardRef(
  (
    props: TransitionProps & {
      children: React.ReactElement;
    },
    ref?: any
  ) => <Slide direction="up" ref={ref} {...props} />
);

export function TransitionsDialog() {
  const [dialog, dialogActions] = useBoolean();

  return (
    <div>
      <Button variant="outlined" color="success" onClick={dialogActions.setTrue}>
        Transitions dialogs
      </Button>

      <Dialog
        keepMounted
        open={dialog}
        TransitionComponent={Transition}
        onClose={dialogActions.setFalse}
      >
        <DialogTitle>{`Use Google's location service?`}</DialogTitle>

        <DialogContent sx={{ color: 'text.secondary' }}>
          Let Google help apps determine location. This means sending anonymous location data to
          Google, even when no apps are running.
        </DialogContent>

        <DialogActions>
          <Button variant="outlined" onClick={dialogActions.setFalse}>
            Disagree
          </Button>
          <Button variant="contained" onClick={dialogActions.setFalse} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
