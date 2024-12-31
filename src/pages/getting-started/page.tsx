import Container from '@mui/material/Container';

import Content from './content';
// ----------------------------------------------------------------------
export const metadata = {
  title: 'Kimi UI | Quick Start',
  description: 'Welcome to the documentation for the Kimi UI component library.',
  layout: 'docs',
  theme: 'Default',
  category: 'Introduction',
  keywords: ['MUI', 'Kimi UI', 'documentation', 'react'],
};

export default function Page() {
  return (
    <Container sx={{ mt: 10, mb: 15 }}>
      <Content />
    </Container>
  );
}
