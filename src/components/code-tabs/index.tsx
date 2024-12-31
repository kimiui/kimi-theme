'use client';

import React, { useState, useCallback } from 'react';
import { Tab, Box, Tabs, Divider, Typography, IconButton } from '@mui/material';

import { toast } from 'src/components/snackbar';
import { Iconify } from 'src/components/iconify';
import { useCopyToClipboard } from 'src/hooks/useCopyToClipboard';
// ----------------------------------------------------------------------
interface CodeTabsProps {
  tabs: {
    [key: string]: string;
  };
  sx?: any;
}

const CodeTabs: React.FC<CodeTabsProps> = ({ tabs, sx }) => {
  const { copy } = useCopyToClipboard();

  const [activeTab, setActiveTab] = useState(Object.keys(tabs)[0]);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setActiveTab(newValue);
  };

  const onCopy = useCallback(
    (text: string) => {
      if (text) {
        toast.success('Copied!');
        copy(text);
      }
    },
    [copy]
  );

  return (
    <Box
      sx={{
        borderRadius: 1,
        backgroundColor: (theme) => theme.vars.palette.background.neutral,
        ...sx,
      }}
    >
      <Box sx={{ pt: 1, px: 2 }}>
        <Tabs
          value={activeTab}
          onChange={handleChange}
          aria-label="code tabs"
          variant="standard"
          scrollButtons="auto"
          textColor="primary"
          indicatorColor="primary"
        >
          {Object.keys(tabs).map((tab) => (
            <Tab key={tab} label={tab} value={tab} />
          ))}
        </Tabs>
      </Box>

      <Divider />

      <Box sx={{ mt: 2, p: 2, position: 'relative' }}>
        <IconButton
          onClick={() => onCopy(tabs[activeTab])}
          sx={{ position: 'absolute', right: 5, top: 0 }}
        >
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
          $ {tabs[activeTab]}
        </Typography>
      </Box>
    </Box>
  );
};

export default CodeTabs;
