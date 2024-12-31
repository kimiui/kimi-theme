'use client';

import type { ISocialLink } from 'kimi-theme/types/common';

import Card from '@mui/material/Card';
import { useForm } from 'react-hook-form';
import LoadingButton from '@mui/lab/LoadingButton';
import { toast } from 'kimi-theme/components/snackbar';
import InputAdornment from '@mui/material/InputAdornment';
import { SocialIcon } from 'kimi-theme/components/iconify';
import { Form, Field } from 'kimi-theme/components/hook-form';

// ----------------------------------------------------------------------

type Props = {
  socialLinks: ISocialLink;
};

export function AccountSocialLinks({ socialLinks }: Props) {
  const defaultValues = {
    facebook: socialLinks.facebook || '',
    instagram: socialLinks.instagram || '',
    linkedin: socialLinks.linkedin || '',
    twitter: socialLinks.twitter || '',
  };

  const methods = useForm({ defaultValues });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      toast.success('Update success!');
      console.info('DATA', data);
    } catch (error) {
      console.error(error);
    }
  });

  return (
    <Form methods={methods} onSubmit={onSubmit}>
      <Card sx={{ p: 3, gap: 3, display: 'flex', flexDirection: 'column' }}>
        {Object.keys(socialLinks).map((link) => (
          <Field.Text
            key={link}
            name={link}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SocialIcon width={24} icon={link} />
                </InputAdornment>
              ),
            }}
          />
        ))}

        <LoadingButton type="submit" variant="contained" loading={isSubmitting} sx={{ ml: 'auto' }}>
          Save changes
        </LoadingButton>
      </Card>
    </Form>
  );
}
