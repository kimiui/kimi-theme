import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import CodeTabs from 'lib/components/code-tabs';
import CodeBlock from 'lib/components/code-block';

const codeBlock = `import { ThemeProvider } from 'lib/theme/theme-provider';
import { SettingsDrawer, SettingsProvider } from 'lib/components/settings';
import CssBaseline from '@mui/material/CssBaseline';

export default function App() {
  return (
    <SettingsProvider>
      <ThemeProvider>
        <CssBaseline />
        <SettingsDrawer />
        <Router />
      </ThemeProvider>
    </SettingsProvider>
  );
}
`;

export default function Content() {
  return (
    <Stack spacing={3}>
      <Typography variant="h6">Getting Started</Typography>
      <Typography variant="body2">
        Requirements, installation, and build instructions for the template.
      </Typography>
      <Typography variant="h6">1. Requirements</Typography>
      <Typography variant="body2">
        - Node.js (v20.x or later)
        <br />- Yarn (v1.22.x or later) or npm (v7.x or later)
      </Typography>
      <Typography variant="h6">2. Installation</Typography>
      <Typography variant="body2">Install the package via npm or yarn</Typography>

      <CodeTabs
        tabs={{
          yarn: `yarn add src`,
          npm: `npm install src`,
        }}
      />
      <Typography variant="h4">Create Theme</Typography>

      <CodeBlock text={codeBlock} />
    </Stack>
  );
}
