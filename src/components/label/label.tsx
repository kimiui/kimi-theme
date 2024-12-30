import { forwardRef } from 'react';

import { labelClasses } from './classes';
import { LabelRoot, LabelIcon } from './styles';

import type { LabelProps } from './types';

// ----------------------------------------------------------------------

export const Label = forwardRef<HTMLSpanElement, LabelProps>((props, ref) => {
  const {
    endIcon,
    children,
    startIcon,
    className,
    disabled,
    variant = 'soft',
    color = 'default',
    sx,
    ...other
  } = props;

  return (
    <LabelRoot
      ref={ref}
      color={color}
      variant={variant}
      disabled={disabled}
      className={[labelClasses.root, className].join(' ')}
      sx={sx}
      {...other}
    >
      {startIcon && <LabelIcon className={labelClasses.icon}>{startIcon}</LabelIcon>}

      {typeof children === 'string' ? upperFirst(children) : children}

      {endIcon && <LabelIcon className={labelClasses.icon}>{endIcon}</LabelIcon>}
    </LabelRoot>
  );
});

function upperFirst(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
