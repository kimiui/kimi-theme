import { Box, Stack, Typography } from '@mui/material';

export default function Content() {
  return (
    <Stack spacing={2}>
      <Typography variant="h4" gutterBottom>
        Create Theme
      </Typography>

      <Box
        sx={{
          p: 2,
          backgroundColor: (theme) => theme.vars?.palette.grey[800],
          borderRadius: 1,
          mt: 2,
          position: 'relative',
        }}
      >
        <Typography
          component="pre"
          sx={{
            whiteSpace: 'pre-wrap',
            fontFamily: 'monospace',
            color: 'white',
          }}
        >
          {`          import { createTheme } from "lib/theme/create-theme";
          import { CssBaseline, ThemeProvider } from "@mui/material";
          
          export default function App() {
            const theme = createTheme();
            
            return (
              <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
              </ThemeProvider>
            );
          }`}
        </Typography>
      </Box>
    </Stack>
  );
}
