import { Grid, Container } from '@mui/material';

import { ChartRadar } from '../chart-radar';
import { ChartRadianBar } from '../chart-radian-bar';
// ----------------------------------------------------------------------
export function ChartsView() {
  return (
    <Container sx={{ my: 5 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <ChartRadar />
        </Grid>

        <Grid item xs={12} md={6}>
          <ChartRadianBar />
        </Grid>
      </Grid>
    </Container>
  );
}
