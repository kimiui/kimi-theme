import type { SettingsState } from 'lib/components/settings';
import type { ThemeOptions } from '../types';
/**
 * Update the core theme with the settings state.
 * @contrast
 * @primaryColor
 */
export declare function updateCoreWithSettings(theme: ThemeOptions, settingsState?: SettingsState): ThemeOptions;
