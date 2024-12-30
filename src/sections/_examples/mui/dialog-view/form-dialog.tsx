'use client';

import { useBoolean } from 'ahooks';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

// ----------------------------------------------------------------------

export function FormDialog() {
  const [dialog, dialogActions] = useBoolean();

  return (
    <div>
      <Button variant="outlined" color="warning" onClick={dialogActions.setTrue}>
        Form Dialogs
      </Button>

      <Dialog open={dialog} onClose={dialogActions.setFalse}>
        <DialogTitle>Subscribe</DialogTitle>

        <DialogContent>
          <Typography sx={{ mb: 3 }}>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </Typography>

          <TextField
            autoFocus
            fullWidth
            type="email"
            margin="dense"
            variant="outlined"
            label="Email address"
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={dialogActions.setFalse} variant="outlined" color="inherit">
            Cancel
          </Button>
          <Button onClick={dialogActions.setFalse} variant="contained">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
