'use client';

import NProgress from 'nprogress';
import { useState, useEffect } from 'react';

import './styles.css';

// ----------------------------------------------------------------------

export function ProgressBar() {
  const { pathname } = window.location;

  const [mounted, setMounted] = useState(false);

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!visible) {
      NProgress.start();
      setVisible(true);
    }

    if (visible) {
      NProgress.done();
      setVisible(false);
    }

    if (!visible && mounted) {
      setVisible(false);
      NProgress.done();
    }

    return () => {
      NProgress.done();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, mounted]);

  if (!mounted) {
    return null;
  }

  return null;
}
