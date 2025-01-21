'use client';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { forwardRef, useCallback } from 'react';
import type { BoxProps } from '@mui/material/Box';
import type { Theme } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';
import { styled, alpha as hexAlpha } from '@mui/material/styles';

import { varAlpha } from 'lib/theme/styles';

import { Iconify } from '../iconify';

import type { ColorPickerProps } from './types';

// ----------------------------------------------------------------------
const StyledUl = styled('ul')(({ theme }) => ({}));
export const ColorPicker = forwardRef<HTMLUListElement, BoxProps & ColorPickerProps>(
  ({ colors, selected, onSelectColor, limit = 'auto', sx, slotProps }, ref) => {
    const singleSelect = typeof selected === 'string';
    const handleSelect = useCallback(
      (color: string) => {
        if (singleSelect) {
          if (color !== selected) {
            onSelectColor(color);
          }
        } else {
          const newSelected = selected.includes(color)
            ? selected.filter((value) => value !== color)
            : [...selected, color];
          onSelectColor(newSelected);
        }
      },
      [onSelectColor, selected, singleSelect]
    );

    return (
      <StyledUl
        ref={ref}
        sx={{
          flexWrap: 'wrap',
          flexDirection: 'row',
          display: 'inline-flex',
          ...(limit !== 'auto' && {
            width: limit * 36,
            justifyContent: 'flex-end',
          }),
          ...sx,
        }}
      >
        {colors.map((color) => {
          const hasSelected = singleSelect ? selected === color : selected.includes(color);

          return (
            <Box component="li" key={color} sx={{ display: 'inline-flex' }}>
              <ButtonBase
                aria-label={color}
                onClick={() => handleSelect(color)}
                sx={{
                  width: 36,
                  height: 36,
                  borderRadius: '50%',
                  ...slotProps?.button,
                }}
              >
                <Stack
                  alignItems="center"
                  justifyContent="center"
                  sx={{
                    width: 20,
                    height: 20,
                    bgcolor: color,
                    borderRadius: '50%',
                    border: (theme: Theme) =>
                      `solid 1px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.16)}`,
                    ...(hasSelected && {
                      transform: 'scale(1.3)',
                      boxShadow: `4px 4px 8px 0 ${hexAlpha(color, 0.48)}`,
                      outline: `solid 2px ${hexAlpha(color, 0.08)}`,
                      transition: (theme: Theme) =>
                        theme.transitions.create('all', {
                          duration: theme.transitions.duration.shortest,
                        }),
                    }),
                  }}
                >
                  <Iconify
                    width={hasSelected ? 12 : 0}
                    icon="eva:checkmark-fill"
                    sx={{
                      color: (theme: Theme) => theme.palette.getContrastText(color),
                      transition: (theme: Theme) =>
                        theme.transitions.create('all', {
                          duration: theme.transitions.duration.shortest,
                        }),
                    }}
                  />
                </Stack>
              </ButtonBase>
            </Box>
          );
        })}
      </StyledUl>
    );
  }
);
