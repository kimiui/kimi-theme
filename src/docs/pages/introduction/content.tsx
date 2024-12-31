'use client';

import { Box, Link, Stack, Typography, Grid2 as Grid } from '@mui/material';

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
        <li>
          Support <Link href="https://nextjs.org">NextJs</Link> 15.x
        </li>
        <li>
          Support <Link href="https://v2.vitejs.dev/">Vite 5.x</Link>
        </li>
        <li>
          Includes a complete design component{' '}
          <Link href="https://www.figma.com/design/WjUkAtHeEgw0MxEFp2MTON/Kimi-Admin?node-id=37-19098&t=fwfJJBPrKrV7oGu9-1">
            Figma
          </Link>{' '}
          file to extend your project development
        </li>
        <li>Ready for production launch</li>
      </ul>

      <Typography variant="h6">Products built from Kimi UI Kits</Typography>
      <Typography variant="body2">Kimi UI Kits is used to build the following products:</Typography>

      <Grid container spacing={2}>
        <Grid size={3}>
          <Typography variant="subtitle1">Kimi Admin</Typography>
        </Grid>
        <Grid size={9}>
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
        </Grid>

        <Grid size={3}>
          <Typography variant="subtitle1">Kimi Landing</Typography>
        </Grid>
        <Grid size={9}>
          <Box
            sx={{
              height: 400,
              width: 1,
              backgroundImage: 'url(https://www.kimistores.com/images/landing.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'top',
              borderRadius: '4px 4px 0 0',
              border: (theme) => `4px solid ${theme.palette.mode === 'dark' ? '#333' : '#f5f5f5'}`,
            }}
          />
        </Grid>
      </Grid>
    </Stack>
  );
}
