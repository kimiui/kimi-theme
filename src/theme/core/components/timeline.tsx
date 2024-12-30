import type { Theme } from '@mui/material/styles';
import type { LabComponents } from '@mui/lab/themeAugmentation';
// ----------------------------------------------------------------------

const MuiTimelineDot: LabComponents['MuiTimelineDot'] = {
  /** **************************************
   * STYLE
   *************************************** */
  styleOverrides: { root: { boxShadow: 'none' } },
};

const MuiTimelineConnector: LabComponents['MuiTimelineConnector'] = {
  /** **************************************
   * STYLE
   *************************************** */
  styleOverrides: {
    root: ({ theme }: { theme: Theme }) => ({ backgroundColor: theme.vars.palette.divider }),
  },
};

// ----------------------------------------------------------------------

export const timeline = { MuiTimelineDot, MuiTimelineConnector };
