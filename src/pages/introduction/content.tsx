'use client';

import { Box, Link, Stack, Typography } from '@mui/material';

export default function Content() {
  return (
    <Stack spacing={2}>
      <Typography variant="h6">Kimi UI Kits</Typography>
      <Typography variant="body2">
        Kimi UI Kits is a modern and responsive components built using the latest version of
        Material-UI and React. It is built to be responsive across all screen sizes.
      </Typography>

      <Typography variant="h6">Features</Typography>
      <Typography variant="body1">
        Kimi includes a variety of features that are essential for building modern web applications.
      </Typography>
      <ul>
        <li>Responsive design</li>
        <li>Customizable components</li>
        <li>Dark mode</li>
        <li>RTL support</li>
        <li>Ready-to-use components</li>
        <li>Easy to customize</li>
        <li>
          Built on top of <Link href="https://mui.com/">MUI 6.x</Link>
        </li>
        <li>Ready for production launch</li>
      </ul>

      <Typography variant="h6">Built with Kimi UI Kits</Typography>
      <Typography variant="subtitle1" sx={{ color: (theme) => theme.vars.palette.primary.main }}>
        Kimi Admin
      </Typography>
      <Box
        sx={{
          height: 400,
          width: 1,
          backgroundImage: 'url(https://www.kimistores.com/images/dashboard.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'top',
          borderRadius: '4px 4px 0 0',
          border: (theme) => `4px solid ${theme.palette.mode === 'dark' ? '#333' : '#f5f5f5'}`,
        }}
      />
    </Stack>
  );
}
