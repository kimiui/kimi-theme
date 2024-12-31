'use client';

import React, { useState, useCallback } from 'react';
import { toast } from 'kimi-theme/components/snackbar';
import { Iconify } from 'kimi-theme/components/iconify';
import { Tab, Box, Tabs, Typography, IconButton } from '@mui/material';
import { useCopyToClipboard } from 'kimi-theme/hooks/useCopyToClipboard';
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
    <Box sx={{ ml: 2, ...sx }}>
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

      <Box
        sx={{
          p: 2,
          backgroundColor: (theme) => theme.vars?.palette.grey[700],
          borderRadius: 1,
          mt: 2,
          position: 'relative',
        }}
      >
        <IconButton
          onClick={() => onCopy(tabs[activeTab])}
          sx={{ position: 'absolute', right: 5, top: 5 }}
        >
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
          $ {tabs[activeTab]}
        </Typography>
      </Box>
    </Box>
  );
};

export default CodeTabs;
