'use client';

import type { EmblaEventType, EmblaCarouselType } from 'embla-carousel';

import { useState, useEffect, useCallback } from 'react';

import type { UseCarouselAutoPlayReturn } from '../types';

// ----------------------------------------------------------------------

export function useCarouselAutoScroll(mainApi?: EmblaCarouselType): UseCarouselAutoPlayReturn {
  const [isPlaying, setIsPlaying] = useState(false);

  const onClickAutoplay = useCallback(
    (callback: () => void) => {
      const autoScroll = mainApi?.plugins()?.autoScroll;
      if (!autoScroll) return;

      const resetOrStop = (
        (autoScroll.options as { stopOnInteraction: boolean }).stopOnInteraction === false
          ? autoScroll.reset
          : autoScroll.stop
      ) as () => void;

      resetOrStop();
      callback();
    },
    [mainApi]
  );

  const onTogglePlay = useCallback(() => {
    const autoScroll = mainApi?.plugins()?.autoScroll as unknown as {
      play: () => void;
      stop: () => void;
      isPlaying: () => boolean;
    };

    if (!autoScroll) return;

    const playOrStop = autoScroll.isPlaying() ? autoScroll.stop : autoScroll.play;
    playOrStop();
  }, [mainApi]);

  useEffect(() => {
    if (!mainApi) return;

    const autoScroll = mainApi?.plugins()?.autoScroll as unknown as {
      isPlaying: () => boolean;
    };
    if (!autoScroll) return;

    setIsPlaying(autoScroll.isPlaying());
    mainApi
      .on('autoScroll:play' as EmblaEventType, () => setIsPlaying(true))
      .on('autoScroll:stop' as EmblaEventType, () => setIsPlaying(false))
      .on('reInit' as EmblaEventType, () => setIsPlaying(false));
  }, [mainApi]);

  return { isPlaying, onTogglePlay, onClickAutoplay };
}
