'use client';

import { styled } from '@mui/material/styles';

import { varAlpha, stylesMode } from 'src/theme/styles';

import type { PopoverArrow } from './types';

// ----------------------------------------------------------------------

export const StyledArrow = styled('span', {
  shouldForwardProp: (prop) => prop !== 'size' && prop !== 'placement' && prop !== 'offset',
})<PopoverArrow>(({ size, offset }) => ({ theme }) => {
  const POSITION = -(size / 2) + 0.5;
  const alignmentStyles = {
    top: { top: POSITION, transform: 'rotate(135deg)' },
    bottom: { bottom: POSITION, transform: 'rotate(-45deg)' },
    left: { left: POSITION, transform: 'rotate(45deg)' },
    right: { right: POSITION, transform: 'rotate(-135deg)' },
    hCenter: { left: 0, right: 0, margin: 'auto' },
    vCenter: { top: 0, bottom: 0, margin: 'auto' },
  };
  const backgroundStyles = (color: 'cyan' | 'red') => ({
    backgroundRepeat: 'no-repeat',
    backgroundSize: `${size * 3}px ${size * 3}px`,
    backgroundImage: `url(/assets/${color}-blur.png)`,
    ...(color === 'cyan' && {
      backgroundPosition: 'top right',
    }),
    ...(color === 'red' && {
      backgroundPosition: 'bottom left',
    }),
  });

  return {
    width: size,
    height: size,
    position: 'absolute',
    backdropFilter: '6px',
    borderBottomLeftRadius: size / 4,
    clipPath: 'polygon(0% 0%, 100% 100%, 0% 100%)',
    backgroundColor: theme.vars.palette.background.paper,
    border: `solid 1px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.12)}`,
    [stylesMode.dark]: {
      border: `solid 1px ${varAlpha(theme.vars.palette.common.blackChannel, 0.12)}`,
    },
    variants: [
      {
        props: {
          placement: 'top-left',
        },
        style: {
          ...alignmentStyles.top,
          left: offset,
        },
      },
      {
        props: {
          placement: 'top-center',
        },
        style: {
          ...alignmentStyles.top,
          ...alignmentStyles.hCenter,
        },
      },
      {
        props: {
          placement: 'top-right',
        },
        style: {
          ...backgroundStyles('cyan'),
          ...alignmentStyles.top,
          right: offset,
        },
      },
      {
        props: {
          placement: 'bottom-left',
        },
        style: {
          ...backgroundStyles('red'),
          ...alignmentStyles.bottom,
          left: offset,
        },
      },
      {
        props: {
          placement: 'bottom-center',
        },
        style: {
          ...alignmentStyles.bottom,
          ...alignmentStyles.hCenter,
        },
      },
      {
        props: {
          placement: 'bottom-right',
        },
        style: {
          ...alignmentStyles.bottom,
          right: offset,
        },
      },
      {
        props: {
          placement: 'left-top',
        },
        style: {
          ...alignmentStyles.left,
          top: offset,
        },
      },
      {
        props: {
          placement: 'left-center',
        },
        style: {
          ...backgroundStyles('red'),
          ...alignmentStyles.left,
          ...alignmentStyles.vCenter,
        },
      },
      {
        props: {
          placement: 'left-bottom',
        },
        style: {
          ...backgroundStyles('red'),
          ...alignmentStyles.left,
          bottom: offset,
        },
      },
      {
        props: {
          placement: 'right-top',
        },
        style: {
          ...backgroundStyles('cyan'),
          ...alignmentStyles.right,
          top: offset,
        },
      },
      {
        props: {
          placement: 'right-center',
        },
        style: {
          ...backgroundStyles('cyan'),
          ...alignmentStyles.right,
          ...alignmentStyles.vCenter,
        },
      },
      {
        props: {
          placement: 'right-bottom',
        },
        style: {
          ...alignmentStyles.right,
          bottom: offset,
        },
      },
    ],
  };
});
