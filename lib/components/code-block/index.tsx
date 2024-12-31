'use client';

import React, { useCallback } from 'react';
import { Box, Typography, IconButton } from '@mui/material';

import { toast } from 'lib/components/snackbar';
import { Iconify } from 'lib/components/iconify';
import { useCopyToClipboard } from 'lib/hooks/useCopyToClipboard';
// ----------------------------------------------------------------------
interface CodeTabsProps {
  text: string;
  sx?: any;
}

const CodeBlock: React.FC<CodeTabsProps> = ({ text, sx }) => {
  const { copy } = useCopyToClipboard();

  const onCopy = useCallback(
    (content: string) => {
      if (content) {
        toast.success('Copied!');
        copy(content);
      }
    },
    [copy]
  );

  return (
    <Box
      sx={{
        p: 2,
        backgroundColor: (theme) => theme.vars.palette.background.neutral,
        borderRadius: 1,
        mt: 2,
        position: 'relative',
        ...sx,
      }}
    >
      <IconButton onClick={() => onCopy(text)} sx={{ position: 'absolute', right: 5, top: 5 }}>
        <Iconify icon="eva:copy-fill" width={24} />
      </IconButton>

      <Typography
        component="pre"
        sx={{
          whiteSpace: 'pre-wrap',
          fontFamily: 'monospace',
          color: 'text.primary',
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default CodeBlock;
