'use client';

import { m } from 'framer-motion';
import Button from '@mui/material/Button';
import { RouterLink } from 'routes-react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { SimpleLayout } from 'kimi-theme/layouts/simple';
import { ServerErrorIllustration } from 'kimi-theme/assets/illustrations';
import { varBounce, MotionContainer } from 'kimi-theme/components/animate';

// ----------------------------------------------------------------------

export function View500() {
  return (
    <SimpleLayout content={{ compact: true }}>
      <Container component={MotionContainer}>
        <m.div variants={varBounce().in}>
          <Typography variant="h3" sx={{ mb: 2 }}>
            500 Internal server error
          </Typography>
        </m.div>

        <m.div variants={varBounce().in}>
          <Typography sx={{ color: 'text.secondary' }}>
            There was an error, please try again later.
          </Typography>
        </m.div>

        <m.div variants={varBounce().in}>
          <ServerErrorIllustration sx={{ my: { xs: 5, sm: 10 } }} />
        </m.div>

        <Button component={RouterLink as any} href="/" size="large" variant="contained">
          Go to home
        </Button>
      </Container>
    </SimpleLayout>
  );
}
