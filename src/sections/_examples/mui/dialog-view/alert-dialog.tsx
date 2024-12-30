'use client';

import { useBoolean } from 'ahooks';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

// ----------------------------------------------------------------------

export function AlertDialog() {
  const [dialog, dialogActions] = useBoolean();

  return (
    <>
      <Button color="info" variant="outlined" onClick={dialogActions.setTrue}>
        Open alert dialog
      </Button>

      <Dialog open={dialog} onClose={dialogActions.setFalse}>
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
    </>
  );
}
