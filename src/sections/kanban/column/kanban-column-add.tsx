'use client';

import type { BoxProps } from '@mui/material/Box';

import Box from '@mui/material/Box';
import { useBoolean } from 'ahooks';
import Button from '@mui/material/Button';
import { useState, useCallback } from 'react';
import TextField from '@mui/material/TextField';
import { inputBaseClasses } from '@mui/material/InputBase';
import ClickAwayListener from '@mui/material/ClickAwayListener';

import { uuidv4 } from 'src/utils/uuidv4';
import { Iconify } from 'src/components/iconify';
import { createColumn } from 'src/actions/kanban';

// ----------------------------------------------------------------------

export function KanbanColumnAdd({ sx, ...other }: BoxProps) {
  const [columnName, setColumnName] = useState('');

  const [openAddColumn, openAddColumnActions] = useBoolean();

  const handleChangeName = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setColumnName(event.target.value);
  }, []);

  const handleCreateColumn = useCallback(async () => {
    try {
      const columnData = {
        id: uuidv4(),
        name: columnName.trim() ? columnName : 'Untitled',
      };

      createColumn(columnData);

      setColumnName('');
      openAddColumnActions.setFalse();
    } catch (error) {
      console.error(error);
    }
  }, [columnName, openAddColumnActions]);

  const handleKeyUpCreateColumn = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
        handleCreateColumn();
      }
    },
    [handleCreateColumn]
  );

  const handleCancel = useCallback(() => {
    setColumnName('');
    openAddColumnActions.setFalse();
  }, [openAddColumnActions]);

  return (
    <>
      <Box sx={{ width: 'var(--column-width)', flex: '0 0 auto', ...sx }} {...other}>
        {openAddColumn ? (
          <ClickAwayListener onClickAway={handleCancel}>
            <TextField
              autoFocus
              fullWidth
              placeholder="Untitled"
              value={columnName}
              onChange={handleChangeName}
              onKeyUp={handleKeyUpCreateColumn}
              helperText="Press Enter to create the column."
              sx={{ [`& .${inputBaseClasses.input}`]: { typography: 'h6' } }}
            />
          </ClickAwayListener>
        ) : (
          <Button
            fullWidth
            size="large"
            color="inherit"
            variant="outlined"
            startIcon={<Iconify icon="mingcute:add-line" sx={{ mr: -0.5 }} />}
            onClick={openAddColumnActions.setTrue}
          >
            Add column
          </Button>
        )}
      </Box>

      <Box sx={{ width: '1px', flexShrink: 0 }} />
    </>
  );
}
