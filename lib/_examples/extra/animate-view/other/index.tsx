'use client';

import { useState } from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';

import { _mock } from 'lib/_mock';
import { varAlpha } from 'lib/theme/styles';
import { Image } from 'lib/components/image';
import { Iconify } from 'lib/components/iconify';
import {
  AnimateBorder,
  AnimateAvatar,
  AnimateImageZoom,
  AnimateImageRotate,
} from 'lib/components/animate';

import { SvgPath } from './svg-path';
import { AnimateButton } from './buttons';
import { AnimateCountUpNumber } from './count-up-number';
import { ComponentBlock } from '../../../component-block';
// ----------------------------------------------------------------------

export function AnimateOther() {
  const theme = useTheme();

  const [count, setCount] = useState(0);

  return (
    <Box
      gap={3}
      display="grid"
      gridTemplateColumns={{ xs: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)' }}
    >
      <ComponentBlock title="Button Click" sx={{ gap: 3 }}>
        <AnimateButton />
      </ComponentBlock>

      <ComponentBlock title="Path">
        <IconButton
          onClick={() => setCount(count + 1)}
          sx={{ position: 'absolute', right: 16, top: 16 }}
        >
          <Iconify icon="eva:refresh-fill" />
        </IconButton>

        <SvgPath key={count} />
      </ComponentBlock>

      <ComponentBlock title="Path" sx={{ flexDirection: 'column' }}>
        <IconButton
          onClick={() => setCount(count + 1)}
          sx={{ position: 'absolute', right: 16, top: 16 }}
        >
          <Iconify icon="eva:refresh-fill" />
        </IconButton>

        <AnimateCountUpNumber key={count} />
      </ComponentBlock>

      <ComponentBlock title="Logo" sx={{ gap: 5 }}>
        <AnimateImageZoom
          image={
            <Image src="https://www.kimistores.com/images/logo-single.svg" sx={{ height: 40 }} />
          }
        />
        <AnimateImageRotate
          image={
            <Image src="https://www.kimistores.com/images/logo-single.svg" sx={{ height: 40 }} />
          }
        />
      </ComponentBlock>

      <ComponentBlock title="Avatar" sx={{ gap: 5 }}>
        <AnimateAvatar
          width={120}
          slotProps={{
            avatar: {
              alt: 'My avatar',
              src: _mock.image.avatar(24),
            },
            overlay: {
              border: 2,
              spacing: 2,
            },
          }}
        />
      </ComponentBlock>

      <ComponentBlock title="Border" sx={{ gap: 5 }}>
        <AnimateBorder animate={{ disableDoubleline: true }} sx={{ width: 160, height: 160 }} />
        <AnimateBorder
          animate={{
            width: '4px',
            color: theme.vars.palette.primary.dark,
            outline: `135deg, ${varAlpha(
              theme.vars.palette.warning.mainChannel,
              0.24
            )}, ${varAlpha(theme.vars.palette.primary.mainChannel, 0.24)}`,
          }}
          sx={{ width: 160, height: 160 }}
        />
      </ComponentBlock>
    </Box>
  );
}
