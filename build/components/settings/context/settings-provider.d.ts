import type { SettingsContextValue, SettingsProviderProps } from '../types';
export declare const SettingsContext: import("react").Context<SettingsContextValue | undefined>;
export declare const SettingsConsumer: import("react").Consumer<SettingsContextValue | undefined>;
export declare function SettingsProvider({ children, settings }: Readonly<SettingsProviderProps>): import("react/jsx-runtime").JSX.Element;
