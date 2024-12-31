'use client';

import Box from '@mui/material/Box';
import { useBoolean } from 'ahooks';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { useState, useCallback } from 'react';
import { DialogContent } from '@mui/material';
import Typography from '@mui/material/Typography';
import DialogTitle from '@mui/material/DialogTitle';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

const emails = ['username@gmail.com', 'user02@gmail.com'];

export function SimpleDialog() {
  const [dialog, dialogActions] = useBoolean();

  const [selectedValue, setSelectedValue] = useState(emails[1]);

  const handleClose = useCallback(
    (value: string) => {
      dialogActions.setFalse();
      setSelectedValue(value);
    },
    [dialogActions]
  );

  return (
    <>
      <Button variant="outlined" onClick={dialogActions.setTrue}>
        Open simple dialog
      </Button>

      <Typography variant="subtitle1">Selected: {selectedValue}</Typography>

      <Dialog open={dialog} onClose={() => handleClose(selectedValue)}>
        <DialogTitle>Set backup account</DialogTitle>
        <DialogContent>
          <Box component="ul" sx={{ p: 0 }}>
            {emails.map((email) => (
              <Box key={email} component="li" sx={{ display: 'flex' }}>
                <ListItemButton onClick={() => handleClose(email)}>
                  <Avatar sx={{ mr: 2, color: 'info.lighter', bgcolor: 'info.darker' }}>
                    <Iconify icon="solar:user-rounded-bold" />
                  </Avatar>
                  <ListItemText primary={email} />
                </ListItemButton>
              </Box>
            ))}

            <Box component="li" sx={{ display: 'flex' }}>
              <ListItemButton autoFocus onClick={() => handleClose('addAccount')}>
                <Avatar sx={{ mr: 2 }}>
                  <Iconify icon="mingcute:add-line" />
                </Avatar>
                <ListItemText primary="Add account" />
              </ListItemButton>
            </Box>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
}
