import type { Theme, Components, ComponentsVariants } from '@mui/material/styles';

import { buttonClasses } from '@mui/material/Button';
import { loadingButtonClasses } from '@mui/lab/LoadingButton';

import { varAlpha, stylesMode } from '../../styles';

// ----------------------------------------------------------------------

// NEW VARIANT
declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    soft: true;
  }
}

const COLORS = ['primary', 'secondary', 'info', 'success', 'warning', 'error'] as const;

// ----------------------------------------------------------------------

const MuiButtonBase: Components<Theme>['MuiButtonBase'] = {
  /** **************************************
   * STYLE
   *************************************** */
  styleOverrides: {
    root: ({ theme }) => ({
      fontFamily: theme.typography.fontFamily,
      borderRadius: theme.shape.borderRadius,
    }),
  },
};

// ----------------------------------------------------------------------

const softVariant: Record<string, ComponentsVariants<Theme>['MuiButton']> = {
  colors: COLORS.map((color) => ({
    props: ({ ownerState }) =>
      !ownerState.disabled && ownerState.variant === 'soft' && ownerState.color === color,
    style: ({ theme }) => ({
      color: theme.vars.palette[color].dark,
      backgroundColor: varAlpha(theme.vars.palette[color].mainChannel, 0.16),
      '&:hover': {
        backgroundColor: varAlpha(theme.vars.palette[color].mainChannel, 0.32),
      },
      [stylesMode.dark]: { color: theme.vars.palette[color].light },
    }),
  })),
  base: [
    {
      props: ({ ownerState }) => ownerState.variant === 'soft',
      style: ({ theme }) => ({
        backgroundColor: varAlpha(theme.vars.palette.grey['500Channel'], 0.08),
        '&:hover': {
          backgroundColor: varAlpha(theme.vars.palette.grey['500Channel'], 0.24),
        },
        [`&.${buttonClasses.disabled}`]: {
          backgroundColor: theme.vars.palette.action.disabledBackground,
        },
        [`& .${loadingButtonClasses.loadingIndicatorStart}`]: { left: 14 },
        [`& .${loadingButtonClasses.loadingIndicatorEnd}`]: { right: 14 },
        [`&.${buttonClasses.sizeSmall}`]: {
          [`& .${loadingButtonClasses.loadingIndicatorStart}`]: { left: 10 },
          [`& .${loadingButtonClasses.loadingIndicatorEnd}`]: { right: 10 },
        },
      }),
    },
  ],
};

const MuiButton: Components<Theme>['MuiButton'] = {
  /** **************************************
   * DEFAULT PROPS
   *************************************** */
  defaultProps: { color: 'inherit', disableElevation: true },

  /** **************************************
   * STYLE
   *************************************** */
  styleOverrides: {
    root: {
      borderRadius: 1000,
      /** **************************************
       * VARIANTS
       *************************************** */
      variants: [
        /**
         * @variant soft
         */
        ...[...softVariant.base!, ...softVariant.colors!],
      ],
    },
    /**
     * @variant contained
     */
    contained: ({ theme }) => ({
      variants: [
        {
          props: ({ ownerState }) => ownerState.color === 'inherit' && !ownerState.disabled,
          style: {
            color: theme.vars.palette.common.white,
            backgroundColor: theme.vars.palette.grey[800],
            '&:hover': {
              boxShadow: theme.shadows[8],
              backgroundColor: theme.vars.palette.grey[700],
            },
            [stylesMode.dark]: {
              color: theme.vars.palette.grey[800],
              backgroundColor: theme.vars.palette.common.white,
              '&:hover': { backgroundColor: theme.vars.palette.grey[400] },
            },
          },
        },
        {
          style: {
            boxShadow: theme.shadows[8],
            '&:hover': { boxShadow: theme.shadows[1] },
          },
        },
      ],
    }),
    /**
     * @variant outlined
     */
    outlined: ({ theme }) => ({
      '&:hover': {
        borderColor: 'currentColor',
        boxShadow: '0 0 0 0.75px currentColor',
      },
      variants: [
        {
          props: ({ ownerState }) => ownerState.color === 'inherit' && !ownerState.disabled,
          style: {
            borderColor: varAlpha(theme.vars.palette.grey['500Channel'], 0.24),
            '&:hover': { backgroundColor: theme.vars.palette.action.hover },
          },
        },
        {
          style: {
            borderColor: varAlpha(theme.vars.palette.text.primary, 0.24),
          },
        },
      ],
    }),
    /**
     * @variant text
     */
    text: ({ theme }) => ({
      variants: [
        {
          props: ({ ownerState }) => ownerState.color === 'inherit' && !ownerState.disabled,
          style: {
            color: theme.vars.palette.text.primary,
            '&:hover': { backgroundColor: theme.vars.palette.action.hover },
            [stylesMode.dark]: { color: theme.vars.palette.text.secondary },
          },
        },
        {
          style: {
            color: theme.vars.palette.text.secondary,
            '&:hover': { backgroundColor: theme.vars.palette.action.hover },
          },
        },
      ],
    }),
    /**
     * @size
     */
    sizeSmall: () => ({
      height: 30,
      variants: [
        {
          props: {
            variant: 'text',
          },
          style: { paddingLeft: '4px', paddingRight: '4px' },
        },
        {
          props: ({ ownerState }) => ownerState.variant !== 'text',
          style: { paddingLeft: '8px', paddingRight: '8px' },
        },
      ],
    }),
    sizeMedium: () => ({
      variants: [
        {
          props: {
            variant: 'text',
          },
          style: { paddingLeft: '8px', paddingRight: '8px' },
        },
        {
          props: ({ ownerState }) => ownerState.variant !== 'text',
          style: { paddingLeft: '12px', paddingRight: '12px' },
        },
      ],
    }),
    sizeLarge: () => ({
      height: 48,
      variants: [
        {
          props: {
            variant: 'text',
          },
          style: { paddingLeft: '10px', paddingRight: '10px' },
        },
        {
          props: ({ ownerState }) => ownerState.variant !== 'text',
          style: { paddingLeft: '16px', paddingRight: '16px' },
        },
      ],
    }),
  },
};

// ----------------------------------------------------------------------

export const button = { MuiButtonBase, MuiButton };
