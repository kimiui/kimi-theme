'use client';

import { z as zod } from 'zod';
import { useBoolean } from 'ahooks';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import { useForm } from 'react-hook-form';
import { paths } from 'kimi-theme/routes/paths';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import { SentIcon } from 'kimi-theme/assets/icons';
import { memo, useEffect, useCallback } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCountdownSeconds } from 'kimi-theme/hooks';
import { Iconify } from 'kimi-theme/components/iconify';
import InputAdornment from '@mui/material/InputAdornment';
import { Form, Field } from 'kimi-theme/components/hook-form';
import { useRouter, RouterLink, useSearchParams } from 'routes-react';
import { resetPassword, updatePassword } from 'kimi-theme/auth/context';
// ----------------------------------------------------------------------

export type UpdatePasswordSchemaType = zod.infer<typeof UpdatePasswordSchema>;

export const UpdatePasswordSchema = zod
  .object({
    code: zod
      .string()
      .min(1, { message: 'Code is required!' })
      .min(6, { message: 'Code must be at least 6 characters!' }),
    email: zod
      .string()
      .min(1, { message: 'Email is required!' })
      .email({ message: 'Email must be a valid email address!' }),
    password: zod
      .string()
      .min(1, { message: 'Password is required!' })
      .min(6, { message: 'Password must be at least 6 characters!' }),
    confirmPassword: zod.string().min(1, { message: 'Confirm password is required!' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match!',
    path: ['confirmPassword'],
  });

// ----------------------------------------------------------------------

export const UpdatePasswordView = memo(() => {
  const router = useRouter();

  const searchParams = useSearchParams();

  const email = searchParams.get('email');

  const [password, passwordActions] = useBoolean();
  const [verified, verifiedActions] = useBoolean();

  const { countdown, counting, startCountdown } = useCountdownSeconds(60);

  const defaultValues = {
    code: '',
    email: email ?? '',
    password: '',
    confirmPassword: '',
  };

  const methods = useForm<UpdatePasswordSchemaType>({
    resolver: zodResolver(UpdatePasswordSchema),
    defaultValues,
  });

  const {
    watch,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const values = watch();

  useEffect(() => {
    if (values.code.length === 6) {
      verifiedActions.setTrue();
    } else {
      verifiedActions.setFalse();
    }
  }, [values.code, verifiedActions]);

  const onSubmit = handleSubmit(async (data) => {
    try {
      await updatePassword({
        email: data.email,
        confirmationCode: data.code,
        newPassword: data.password,
      });

      router.push(paths.auth.signIn);
    } catch (error) {
      console.error(error);
    }
  });

  const handleResendCode = useCallback(async () => {
    try {
      startCountdown();
      await resetPassword({ email: values.email });
    } catch (error) {
      console.error(error);
    }
  }, [startCountdown, values.email]);

  return (
    <Stack width={400}>
      <SentIcon sx={{ mx: 'auto' }} />

      <Stack spacing={1} sx={{ mt: 3, mb: 5, textAlign: 'center', whiteSpace: 'pre-line' }}>
        <Typography variant="h5">Request sent successfully!</Typography>

        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {`We've sent a 6-digit confirmation email to your email. \nPlease enter the code in below box to verify your email.`}
        </Typography>
      </Stack>

      <Form methods={methods} onSubmit={onSubmit}>
        <Stack spacing={3}>
          <Field.Text
            name="email"
            label="Email address"
            placeholder="example@gmail.com"
            InputLabelProps={{ shrink: true }}
            disabled
          />

          {!verified && <Field.Code name="code" />}

          {verified && (
            <>
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

              <Field.Text
                name="confirmPassword"
                label="Confirm new password"
                type={password ? 'text' : 'password'}
                slotProps={{
                  input: {
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={passwordActions.toggle} edge="end">
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
                size="large"
                type="submit"
                variant="contained"
                loading={isSubmitting}
                loadingIndicator="Update password..."
              >
                Update password
              </LoadingButton>
            </>
          )}

          <Typography variant="body2" sx={{ mx: 'auto' }}>
            Don’t have a code? &nbsp;
            <Link
              variant="subtitle2"
              onClick={handleResendCode}
              sx={{
                cursor: 'pointer',
                ...(counting && {
                  color: 'text.disabled',
                  pointerEvents: 'none',
                }),
              }}
            >
              Resend code {counting && `(${countdown}s)`}
            </Link>
          </Typography>

          <Link
            component={RouterLink as any}
            href={paths.auth.signIn}
            color="inherit"
            variant="subtitle2"
            sx={{
              gap: 0.5,
              alignSelf: 'center',
              alignItems: 'center',
              display: 'inline-flex',
            }}
          >
            <Iconify width={16} icon="eva:arrow-ios-back-fill" />
            Return to sign in
          </Link>
        </Stack>
      </Form>
    </Stack>
  );
});
