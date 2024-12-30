'use client';

import { z as zod } from 'zod';
import { useState } from 'react';
import Box from '@mui/material/Box';
import { useBoolean } from 'ahooks';
import Link from '@mui/material/Link';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { useForm } from 'react-hook-form';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import { useRouter, RouterLink } from 'routes-react';
import { zodResolver } from '@hookform/resolvers/zod';
import InputAdornment from '@mui/material/InputAdornment';

import { paths } from 'src/routes/paths';
import { signUp } from 'src/auth/context';
import { Logo } from 'src/components/logo';
import { Iconify } from 'src/components/iconify';
import { Form, Field } from 'src/components/hook-form';
// ----------------------------------------------------------------------

export type SignUpSchemaType = zod.infer<typeof SignUpSchema>;

export const SignUpSchema = zod.object({
  firstName: zod.string().min(1, { message: 'First name is required!' }),
  lastName: zod.string().min(1, { message: 'Last name is required!' }),
  email: zod
    .string()
    .min(1, { message: 'Email is required!' })
    .email({ message: 'Email must be a valid email address!' }),
  password: zod
    .string()
    .min(1, { message: 'Password is required!' })
    .min(6, { message: 'Password must be at least 6 characters!' }),
});

// ----------------------------------------------------------------------

export function SignUpView() {
  const [errorMsg, setErrorMsg] = useState('');

  const router = useRouter();

  const [password, passwordActinos] = useBoolean();

  const defaultValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };

  const methods = useForm<SignUpSchemaType>({
    resolver: zodResolver(SignUpSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      await signUp({
        email: data.email,
        password: data.password,
        firstName: data.firstName,
        lastName: data.lastName,
      });

      const searchParams = new URLSearchParams({
        email: data.email,
      }).toString();

      const href = `${paths.auth.verify}?${searchParams}`;

      router.push(href);
    } catch (error) {
      console.error(error);
      setErrorMsg(error instanceof Error ? error.message : String(error));
    }
  });

  return (
    <Stack direction="row" spacing={2}>
      <Box sx={{ display: 'flex', flexDirection: 'column', width: 400 }}>
        <Logo sx={{ mb: 5 }} />
        <Typography variant="h3">Manage the job more effectively</Typography>

        <img
          src="/assets/illustrations/illustration-auth.svg"
          alt="illustration-auth"
          loading="lazy"
          height={200}
        />
      </Box>

      <Box sx={{ flexGrow: 1, width: 400 }}>
        <Stack spacing={1.5} sx={{ mb: 5 }}>
          <Typography variant="h5">Get started absolutely free</Typography>

          <Stack direction="row" spacing={0.5}>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Already have an account?
            </Typography>

            <Link component={RouterLink as any} href={paths.auth.signIn} variant="subtitle2">
              Sign in
            </Link>
          </Stack>
        </Stack>

        {!!errorMsg && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {errorMsg}
          </Alert>
        )}

        <Form methods={methods} onSubmit={onSubmit}>
          <Stack spacing={3}>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <Field.Text name="firstName" label="First name" InputLabelProps={{ shrink: true }} />
              <Field.Text name="lastName" label="Last name" InputLabelProps={{ shrink: true }} />
            </Stack>

            <Field.Text name="email" label="Email address" InputLabelProps={{ shrink: true }} />

            <Field.Text
              name="password"
              label="Password"
              placeholder="6+ characters"
              type={password ? 'text' : 'password'}
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={passwordActinos.toggle} edge="end">
                        <Iconify icon={password ? 'solar:eye-bold' : 'solar:eye-closed-bold'} />
                      </IconButton>
                    </InputAdornment>
                  ),
                },
                inputLabel: { shrink: true },
              }}
            />

            <LoadingButton
              fullWidth
              color="inherit"
              size="large"
              type="submit"
              variant="contained"
              loading={isSubmitting}
              loadingIndicator="Create account..."
            >
              Create account
            </LoadingButton>
          </Stack>
        </Form>

        <Typography
          component="div"
          sx={{
            mt: 3,
            textAlign: 'center',
            typography: 'caption',
            color: 'text.secondary',
          }}
        >
          {'By signing up, I agree to '}
          <Link underline="always" color="text.primary">
            Terms of service
          </Link>
          {' and '}
          <Link underline="always" color="text.primary">
            Privacy policy
          </Link>
        </Typography>
      </Box>
    </Stack>
  );
}
