'use client';

import { z as zod } from 'zod';
import { useState } from 'react';
import Box from '@mui/material/Box';
import { useBoolean } from 'ahooks';
import Link from '@mui/material/Link';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { useForm } from 'react-hook-form';
import { paths } from 'kimi-theme/routes/paths';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Logo } from 'kimi-theme/components/logo';
import LoadingButton from '@mui/lab/LoadingButton';
import { useRouter, RouterLink } from 'routes-react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAuthContext } from 'kimi-theme/auth/hooks';
import { Iconify } from 'kimi-theme/components/iconify';
import InputAdornment from '@mui/material/InputAdornment';
import { signInWithPassword } from 'kimi-theme/auth/context';
import { Form, Field } from 'kimi-theme/components/hook-form';
// ----------------------------------------------------------------------

export type SignInSchemaType = zod.infer<typeof SignInSchema>;

export const SignInSchema = zod.object({
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

export function SignInView() {
  const router = useRouter();

  const [password, passwordActions] = useBoolean();

  const [errorMsg, setErrorMsg] = useState('');

  const { checkUserSession } = useAuthContext();

  const defaultValues = {
    email: '',
    password: '',
  };

  const methods = useForm<SignInSchemaType>({
    resolver: zodResolver(SignInSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      await signInWithPassword({ email: data.email, password: data.password });
      await checkUserSession?.();

      console.log('Sign in success');

      router.refresh();
    } catch (error) {
      console.error(error);
      setErrorMsg(error instanceof Error ? error.message : String(error));
    }
  });

  return (
    <Stack direction="row" spacing={2} sx={{ height: 1 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', width: 400, height: 1 }}>
        <Box sx={{ flexGrow: 1 }}>
          <Logo sx={{ mb: 5 }} />
          <Typography variant="h3">Welcome back!</Typography>
        </Box>

        <img
          src="/assets/illustrations/illustration-auth.svg"
          alt="illustration-auth"
          loading="lazy"
          height={200}
        />
      </Box>

      <Box sx={{ flexGrow: 1, width: 400 }}>
        <Stack spacing={1.5} sx={{ mb: 5 }}>
          <Typography variant="h5">Sign in to your account</Typography>

          <Stack direction="row" spacing={0.5}>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {`Don't have an account?`}
            </Typography>

            <Link component={RouterLink as any} href={paths.auth.signUp} variant="subtitle2">
              Get started
            </Link>
          </Stack>

          <Alert severity="info">
            <Typography variant="body2">
              This is a demo website. <br />
              You can use any email and password to sign in.
            </Typography>
          </Alert>
        </Stack>

        {!!errorMsg && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {errorMsg}
          </Alert>
        )}

        <Form methods={methods} onSubmit={onSubmit}>
          <Stack spacing={3}>
            <Field.Text name="email" label="Email address" InputLabelProps={{ shrink: true }} />

            <Stack spacing={1.5}>
              <Link
                component={RouterLink as any}
                href={paths.auth.resetPassword}
                variant="body2"
                color="inherit"
                sx={{ alignSelf: 'flex-end' }}
              >
                Forgot password?
              </Link>

              <Field.Text
                name="password"
                label="Password"
                placeholder="6+ characters"
                type={password ? 'text' : 'password'}
                InputLabelProps={{ shrink: true }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={passwordActions.toggle} edge="end">
                        <Iconify icon={password ? 'solar:eye-bold' : 'solar:eye-closed-bold'} />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Stack>

            <LoadingButton
              fullWidth
              color="inherit"
              size="large"
              type="submit"
              variant="contained"
              loading={isSubmitting}
              loadingIndicator="Sign in..."
            >
              Sign in
            </LoadingButton>
          </Stack>
        </Form>
      </Box>
    </Stack>
  );
}
