'use client';

import { useMemo, useState, useCallback, createContext } from 'react';

import { useLocalStorage } from 'lib/hooks';

import { STORAGE_KEY, defaultSettings } from '../config-settings';

import type { SettingsState, SettingsContextValue, SettingsProviderProps } from '../types';

// ----------------------------------------------------------------------

export const SettingsContext = createContext<SettingsContextValue | undefined>(undefined);

export const SettingsConsumer = SettingsContext.Consumer;

// ----------------------------------------------------------------------

export function SettingsProvider({ children, settings }: Readonly<SettingsProviderProps>) {
  const values = useLocalStorage<SettingsState>(STORAGE_KEY, settings ?? defaultSettings);

  const [openDrawer, setOpenDrawer] = useState(false);

  const onToggleDrawer = useCallback(() => {
    setOpenDrawer((prev) => !prev);
  }, []);

  const onCloseDrawer = useCallback(() => {
    setOpenDrawer(false);
  }, []);

  const memoizedValue = useMemo(
    () => ({
      ...values.state,
      canReset: values.canReset,
      onReset: values.resetState,
      onUpdate: values.setState,
      onUpdateField: values.setField,
      openDrawer,
      onCloseDrawer,
      onToggleDrawer,
    }),
    [
      values.state,
      values.canReset,
      values.resetState,
      values.setState,
      values.setField,
      openDrawer,
      onCloseDrawer,
      onToggleDrawer,
    ]
  );

  return <SettingsContext.Provider value={memoizedValue}>{children}</SettingsContext.Provider>;
}
