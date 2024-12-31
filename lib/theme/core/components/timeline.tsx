import type { Theme, Components } from '@mui/material/styles';

// ----------------------------------------------------------------------

const MuiTimelineDot: Components<Theme>['MuiTimelineDot'] = {
  /** **************************************
   * STYLE
   *************************************** */
  styleOverrides: { root: { boxShadow: 'none' } },
};

const MuiTimelineConnector: Components<Theme>['MuiTimelineConnector'] = {
  /** **************************************
   * STYLE
   *************************************** */
  styleOverrides: {
    root: ({ theme }: { theme: Theme }) => ({ backgroundColor: theme.vars.palette.divider }),
  },
};

// ----------------------------------------------------------------------export the type
export const timeline = {
  MuiTimelineDot,
  MuiTimelineConnector,
} as const;
