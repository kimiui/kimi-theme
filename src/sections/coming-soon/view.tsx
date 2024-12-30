'use client';

import Box from '@mui/material/Box';
import { useCountDown } from 'ahooks';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';

import { _socials } from 'src/_mock';
import { varAlpha } from 'src/theme/styles';
import { Waiting } from 'src/assets/illustrations';
import { SocialIcon } from 'src/components/iconify';

// ----------------------------------------------------------------------

export function ComingSoonView() {
  const [, formattedRes] = useCountDown({
    targetDate: `${new Date().getFullYear()}-12-31 23:59:59`,
  });

  const { days, hours, minutes, seconds } = formattedRes;

  return (
    <Container>
      <Typography variant="h3" sx={{ mb: 2 }}>
        Coming soon!
      </Typography>

      <Typography sx={{ color: 'text.secondary' }}>
        We are currently working hard on this page!
      </Typography>

      <Waiting sx={{ my: { xs: 5, sm: 5 } }} />

      <Stack
        direction="row"
        justifyContent="center"
        divider={<Box sx={{ mx: { xs: 1, sm: 2.5 } }}>:</Box>}
        sx={{ typography: 'h2' }}
      >
        <TimeBlock label="days" value={days} />
        <TimeBlock label="hours" value={hours} />
        <TimeBlock label="minutes" value={minutes} />
        <TimeBlock label="seconds" value={seconds} />
      </Stack>

      <TextField
        fullWidth
        placeholder="Enter your email"
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end">
                <Button variant="contained" size="large">
                  Notify me
                </Button>
              </InputAdornment>
            ),
            sx: {
              pr: 0.5,
              [`&.${outlinedInputClasses.focused}`]: {
                boxShadow: (theme) => theme.shadows[20],
                transition: (theme) =>
                  theme.transitions.create(['box-shadow'], {
                    duration: theme.transitions.duration.shorter,
                  }),
                [`& .${outlinedInputClasses.notchedOutline}`]: {
                  border: (theme) =>
                    `solid 1px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.32)}`,
                },
              },
            },
          },
        }}
        sx={{ my: 5 }}
      />

      <Stack spacing={1} alignItems="center" justifyContent="center" direction="row">
        {_socials.map((social) => (
          <IconButton key={social.name}>
            <SocialIcon icon={social.name} />
          </IconButton>
        ))}
      </Stack>
    </Container>
  );
}

// ----------------------------------------------------------------------

type TimeBlockProps = {
  label: string;
  value: string | number;
};

function TimeBlock({ label, value }: Readonly<TimeBlockProps>) {
  return (
    <div>
      <div> {value} </div>
      <Box sx={{ color: 'text.secondary', typography: 'body1' }}>{label}</Box>
    </div>
  );
}
