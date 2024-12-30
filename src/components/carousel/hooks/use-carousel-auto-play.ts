'use client';

import type { EmblaEventType, EmblaCarouselType } from 'embla-carousel';

import { useState, useEffect, useCallback } from 'react';

import type { UseCarouselAutoPlayReturn } from '../types';

// ----------------------------------------------------------------------

export function useCarouselAutoPlay(mainApi?: EmblaCarouselType): UseCarouselAutoPlayReturn {
  const [isPlaying, setIsPlaying] = useState(false);

  const onClickAutoplay = useCallback(
    (callback: () => void) => {
      const autoplay = mainApi?.plugins()?.autoplay;
      if (!autoplay) return;

      const resetOrStop = (
        (autoplay.options as { stopOnInteraction: boolean }).stopOnInteraction === false
          ? autoplay.reset
          : autoplay.stop
      ) as () => void;

      resetOrStop();
      callback();
    },
    [mainApi]
  );

  const onTogglePlay = useCallback(() => {
    const autoplay = mainApi?.plugins()?.autoplay as unknown as {
      play: () => void;
      stop: () => void;
      isPlaying: () => boolean;
    };
    if (!autoplay) return;

    const playOrStop = autoplay.isPlaying() ? autoplay.stop : autoplay.play;
    playOrStop();
  }, [mainApi]);

  useEffect(() => {
    if (!mainApi) return;

    const autoplay = mainApi?.plugins()?.autoplay as unknown as {
      isPlaying: () => boolean;
    };

    if (!autoplay) return;

    setIsPlaying(autoplay.isPlaying());
    mainApi
      .on('autoplay:play' as EmblaEventType, () => setIsPlaying(true))
      .on('autoplay:stop' as EmblaEventType, () => setIsPlaying(false))
      .on('reInit' as EmblaEventType, () => setIsPlaying(false));
  }, [mainApi]);

  return { isPlaying, onTogglePlay, onClickAutoplay };
}
