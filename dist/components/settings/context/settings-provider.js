'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { useMemo, useState, useCallback, createContext } from 'react';
import { useLocalStorage } from '../../../hooks';
import { STORAGE_KEY, defaultSettings } from '../config-settings';
// ----------------------------------------------------------------------
export const SettingsContext = createContext(undefined);
export const SettingsConsumer = SettingsContext.Consumer;
// ----------------------------------------------------------------------
export function SettingsProvider({ children, settings }) {
    const values = useLocalStorage(STORAGE_KEY, settings ?? defaultSettings);
    const [openDrawer, setOpenDrawer] = useState(false);
    const onToggleDrawer = useCallback(() => {
        setOpenDrawer((prev) => !prev);
    }, []);
    const onCloseDrawer = useCallback(() => {
        setOpenDrawer(false);
    }, []);
    const memoizedValue = useMemo(() => ({
        ...values.state,
        canReset: values.canReset,
        onReset: values.resetState,
        onUpdate: values.setState,
        onUpdateField: values.setField,
        openDrawer,
        onCloseDrawer,
        onToggleDrawer,
    }), [
        values.state,
        values.canReset,
        values.resetState,
        values.setState,
        values.setField,
        openDrawer,
        onCloseDrawer,
        onToggleDrawer,
    ]);
    return _jsx(SettingsContext.Provider, { value: memoizedValue, children: children });
}
