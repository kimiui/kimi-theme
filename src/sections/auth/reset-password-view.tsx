'use client';

import { z as zod } from 'zod';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import { useForm } from 'react-hook-form';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import { useRouter, RouterLink } from 'routes-react';
import { zodResolver } from '@hookform/resolvers/zod';

import { paths } from 'src/routes/paths';
import { resetPassword } from 'src/auth/context';
import { Iconify } from 'src/components/iconify';
import { Form, Field } from 'src/components/hook-form';

// ----------------------------------------------------------------------

export type ResetPasswordSchemaType = zod.infer<typeof ResetPasswordSchema>;

export const ResetPasswordSchema = zod.object({
  email: zod
    .string()
    .min(1, { message: 'Email is required!' })
    .email({ message: 'Email must be a valid email address!' }),
});

// ----------------------------------------------------------------------

export function ResetPasswordView() {
  const router = useRouter();

  const defaultValues = {
    email: '',
  };

  const methods = useForm<ResetPasswordSchemaType>({
    resolver: zodResolver(ResetPasswordSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      await resetPassword({ email: data.email });

      const searchParams = new URLSearchParams({
        email: data.email,
      }).toString();

      const href = `${paths.auth.updatePassword}?${searchParams}`;
      router.push(href);
    } catch (error) {
      console.error(error);
    }
  });

  return (
    <Stack sx={{ width: 400 }}>
      <Iconify icon="mdi:forgot-password" sx={{ mx: 'auto' }} width={80} />

      <Stack spacing={1} sx={{ mt: 3, mb: 5, textAlign: 'center', whiteSpace: 'pre-line' }}>
        <Typography variant="h5">Forgot your password?</Typography>

        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {`Please enter the email address associated with your account and we'll email you a link to reset your password.`}
        </Typography>
      </Stack>

      <Form methods={methods} onSubmit={onSubmit}>
        <Stack spacing={3}>
          <Field.Text
            autoFocus
            name="email"
            label="Email address"
            placeholder="example@gmail.com"
            InputLabelProps={{ shrink: true }}
          />

          <LoadingButton
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            loading={isSubmitting}
            loadingIndicator="Send request..."
          >
            Send request
          </LoadingButton>

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
}
