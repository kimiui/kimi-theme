'use client';

import React, { useCallback } from 'react';
import { toast } from 'kimi-theme/components/snackbar';
import { Iconify } from 'kimi-theme/components/iconify';
import { Box, Typography, IconButton } from '@mui/material';
import { useCopyToClipboard } from 'kimi-theme/hooks/useCopyToClipboard';
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
    <Box sx={{ ml: 2, ...sx }}>
      <Box
        sx={{
          p: 2,
          backgroundColor: (theme) => theme.vars?.palette.grey[700],
          borderRadius: 1,
          mt: 2,
          position: 'relative',
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
            color: 'white',
          }}
        >
          {text}
        </Typography>
      </Box>
    </Box>
  );
};

export default CodeBlock;
