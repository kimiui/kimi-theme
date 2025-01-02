import { borderGradient } from './border';
import { maxLine, textGradient } from './text';
import { bgBlur, bgGradient } from './background';
import { paperStyles, menuItemStyles } from './global-styles-components';

// ----------------------------------------------------------------------

export type * from './text';
export type * from './border';
export type * from './background';
export type * from './global-styles-components';

export type BgBlurMixin = typeof bgBlur;
export type MaxLineMixin = typeof maxLine;
export type BgGradientMixin = typeof bgGradient;
export type PaperStylesMixin = typeof paperStyles;
export type TextGradientMixin = typeof textGradient;
export type MenuItemStylesMixin = typeof menuItemStyles;
export type BorderGradientProps = typeof borderGradient;

/**
 * TypeScript (type definition and extension)
 * @to {@link file://./../../extend-theme-types.d.ts}
 */

export const mixins = {
  hideScrollX: {
    msOverflowStyle: 'none' as any,
    scrollbarWidth: 'none' as any,
    overflowX: 'auto' as any,
    '&::-webkit-scrollbar': { display: 'none' },
  },
  hideScrollY: {
    msOverflowStyle: 'none' as any,
    scrollbarWidth: 'none' as any,
    overflowY: 'auto' as any,
    '&::-webkit-scrollbar': { display: 'none' },
  },
  borderGradient,
  bgGradient,
  bgBlur,
  textGradient,
  paperStyles,
  menuItemStyles,
  maxLine,
};
