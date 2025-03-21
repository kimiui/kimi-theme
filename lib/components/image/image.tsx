import { useInView } from 'motion/react';
import type { UseInViewOptions } from 'motion/react';
import type { Breakpoint } from '@mui/material/styles';
import { useRef, useState, forwardRef, useCallback, startTransition } from 'react';

import { mergeRefs, mergeClasses } from 'lib/utils/merge-classes';

import { imageClasses } from './classes';
import { ImageImg, ImageRoot, ImageOverlay, ImagePlaceholder } from './styles';

import type { EffectsType } from './styles';

// ----------------------------------------------------------------------

type AspectRatioType =
  | '2/3'
  | '3/2'
  | '4/3'
  | '3/4'
  | '6/4'
  | '4/6'
  | '16/9'
  | '9/16'
  | '21/9'
  | '9/21'
  | '1/1';

export type ImageProps = React.ComponentProps<typeof ImageRoot> & {
  src?: string;
  alt?: string;
  delayTime?: number;
  onLoad?: () => void;
  effect?: EffectsType;
  visibleByDefault?: boolean;
  disablePlaceholder?: boolean;
  viewportOptions?: UseInViewOptions;
  ratio?: AspectRatioType | Partial<Record<Breakpoint, AspectRatioType>>;
  slotProps?: {
    img?: Omit<React.ComponentProps<typeof ImageImg>, 'src' | 'alt'>;
    overlay?: React.ComponentProps<typeof ImageOverlay>;
    placeholder?: React.ComponentProps<typeof ImagePlaceholder>;
  };
};

const DEFAULT_DELAY = 0;
const DEFAULT_EFFECT: EffectsType = {
  style: 'blur',
  duration: 300,
  disabled: false,
};

export const Image = forwardRef<HTMLSpanElement, ImageProps>((props, ref) => {
  const {
    sx,
    src,
    ratio,
    onLoad,
    effect,
    alt = '',
    slotProps,
    className,
    viewportOptions,
    disablePlaceholder,
    visibleByDefault = false,
    delayTime = DEFAULT_DELAY,
    ...other
  } = props;

  const localRef = useRef<HTMLSpanElement | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const isInView = useInView(localRef as React.RefObject<Element>, {
    once: true,
    ...viewportOptions,
  });

  const handleImageLoad = useCallback(() => {
    const timer = setTimeout(() => {
      startTransition(() => {
        setIsLoaded(true);
        onLoad?.();
      });
    }, delayTime);

    return () => clearTimeout(timer);
  }, [delayTime, onLoad]);

  const finalEffect = {
    ...DEFAULT_EFFECT,
    ...effect,
  };

  const shouldRenderImage = visibleByDefault || isInView;
  const showPlaceholder = !visibleByDefault && !isLoaded && !disablePlaceholder;

  return (
    <ImageRoot
      ref={mergeRefs([localRef, ref])}
      effect={visibleByDefault || finalEffect.disabled ? undefined : finalEffect}
      className={mergeClasses([imageClasses.root, className], {
        [imageClasses.state.loaded]: !visibleByDefault && isLoaded,
      })}
      sx={[
        {
          '--aspect-ratio': ratio,
          ...(!!ratio && { width: 1 }),
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      {slotProps?.overlay && (
        <ImageOverlay className={imageClasses.overlay} {...slotProps.overlay} />
      )}
      {showPlaceholder && (
        <ImagePlaceholder className={imageClasses.placeholder} {...slotProps?.placeholder} />
      )}
      {shouldRenderImage && (
        <ImageImg
          src={src}
          alt={alt}
          onLoad={handleImageLoad}
          className={imageClasses.img}
          {...slotProps?.img}
        />
      )}
    </ImageRoot>
  );
});
