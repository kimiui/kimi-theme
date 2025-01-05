'use client';

import { forwardRef } from 'react';
import { motion as m } from 'motion/react';
import { styled } from '@mui/material/styles';
import type { Theme, SxProps } from '@mui/material/styles';

import { varAlpha } from 'lib/theme/styles';

import { Image } from '../image';

import type { ImageProps } from '../image';

// ----------------------------------------------------------------------

export type AnimateImageProps = React.ComponentProps<'div'> & {
  sx?: SxProps<Theme>;
  image?: React.ReactNode;
  slotProps?: {
    image?: ImageProps;
  };
};

export const AnimateImageZoom = forwardRef<HTMLDivElement, AnimateImageProps>((props, ref) => {
  const { image, slotProps, sx, ...other } = props;

  return (
    <ZoomRoot ref={ref} sx={sx} {...other}>
      <m.span
        animate={{ scale: [1, 0.9, 0.9, 1, 1], opacity: [1, 0.48, 0.48, 1, 1] }}
        transition={{
          duration: 2,
          repeatDelay: 1,
          repeat: Infinity,
          ease: 'easeInOut',
          whileInView: 'animate',
        }}
      >
        {image ?? (
          <Image
            disabled
            {...slotProps?.image}
            sx={[
              { width: 64, height: 64 },
              ...(Array.isArray(slotProps?.image?.sx)
                ? (slotProps?.image?.sx ?? [])
                : [slotProps?.image?.sx]),
            ]}
          />
        )}
      </m.span>

      <ZoomPrimaryOutline
        animate={{
          scale: [1.6, 1, 1, 1.6, 1.6],
          rotate: [270, 0, 0, 270, 270],
          opacity: [0.25, 1, 1, 1, 0.25],
          borderRadius: ['25%', '25%', '50%', '50%', '25%'],
        }}
        transition={{ ease: 'linear', duration: 3.2, repeat: Infinity }}
      />

      <ZoomSecondaryOutline
        animate={{
          scale: [1, 1.2, 1.2, 1, 1],
          rotate: [0, 270, 270, 0, 0],
          opacity: [1, 0.25, 0.25, 0.25, 1],
          borderRadius: ['25%', '25%', '50%', '50%', '25%'],
        }}
        transition={{ ease: 'linear', duration: 3.2, repeat: Infinity }}
      />
    </ZoomRoot>
  );
});

const ZoomRoot = styled('div')({
  width: 120,
  height: 120,
  alignItems: 'center',
  position: 'relative',
  display: 'inline-flex',
  justifyContent: 'center',
});

const ZoomPrimaryOutline = styled(m.span)(({ theme }) => ({
  position: 'absolute',
  width: 'calc(100% - 20px)',
  height: 'calc(100% - 20px)',
  border: `solid 3px ${varAlpha(theme.vars.palette.primary.darkChannel, 0.24)}`,
}));

const ZoomSecondaryOutline = styled(m.span)(({ theme }) => ({
  width: '100%',
  height: '100%',
  position: 'absolute',
  border: `solid 8px ${varAlpha(theme.vars.palette.primary.darkChannel, 0.24)}`,
}));

// ----------------------------------------------------------------------

export const AnimateImageRotate = forwardRef<HTMLDivElement, AnimateImageProps>((props, ref) => {
  const { image, sx, slotProps, ...other } = props;

  return (
    <RotateRoot ref={ref} sx={sx} {...other}>
      {image ?? (
        <Image
          {...slotProps?.image}
          sx={[
            { zIndex: 9, width: 40, height: 40 },
            ...(Array.isArray(slotProps?.image?.sx)
              ? (slotProps?.image?.sx ?? [])
              : [slotProps?.image?.sx]),
          ]}
        />
      )}

      <RotateBackground
        animate={{ rotate: 360 }}
        transition={{ duration: 10, ease: 'linear', repeat: Infinity }}
      />
    </RotateRoot>
  );
});

const RotateRoot = styled('div')({
  width: 96,
  height: 96,
  alignItems: 'center',
  position: 'relative',
  display: 'inline-flex',
  justifyContent: 'center',
});

const RotateBackground = styled(m.span)(({ theme }) => ({
  width: '100%',
  height: '100%',
  opacity: 0.16,
  borderRadius: '50%',
  position: 'absolute',
  backgroundImage: `linear-gradient(135deg, transparent 50%, ${theme.vars.palette.primary.main} 100%)`,
  transition: theme.transitions.create(['opacity'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter,
  }),
}));
