'use client';

import { useRef, useState, useCallback } from 'react';

// ----------------------------------------------------------------------

export type UseCountdownSecondsReturn = {
  counting: boolean;
  countdown: number;
  startCountdown: () => void;
  setCountdown: React.Dispatch<React.SetStateAction<number>>;
};

export function useCountdownSeconds(initCountdown: number): UseCountdownSecondsReturn {
  const [countdown, setCountdown] = useState(initCountdown);

  const remainingSecondsRef = useRef(countdown);

  const startCountdown = useCallback(() => {
    remainingSecondsRef.current = countdown;

    const intervalId = setInterval(() => {
      remainingSecondsRef.current -= 1;

      if (remainingSecondsRef.current === 0) {
        clearInterval(intervalId);
        setCountdown(initCountdown);
      } else {
        setCountdown(remainingSecondsRef.current);
      }
    }, 1000);
  }, [initCountdown, countdown]);

  const counting = initCountdown > countdown;

  return {
    counting,
    countdown,
    startCountdown,
    setCountdown,
  };
}

// Usage
// const { countdown, startCountdown, counting } = useCountdownSeconds(30);
