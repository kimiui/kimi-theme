import type { ColorSystem } from '@mui/material/styles';
import type { SettingsState } from 'kimi-theme/components/settings';

import { setFont, hexToRgbChannel } from 'kimi-theme/theme/styles';

import type { ThemeOptions, ThemeColorScheme } from '../types';

// ----------------------------------------------------------------------

/**
 * Update the core theme with the settings state.
 * @contrast
 * @primaryColor
 */

export function updateCoreWithSettings(
  theme: ThemeOptions,
  settingsState?: SettingsState
): ThemeOptions {
  const { direction, fontFamily, contrast = 'default' } = settingsState ?? {};

  const isDefaultContrast = contrast === 'default';

  const lightPalette = theme.colorSchemes?.light.palette as ColorSystem['palette'];

  const updateColorScheme = (scheme: ThemeColorScheme) => {
    const colorSchemes = theme.colorSchemes?.[scheme];

    const updatedPalette = {
      ...colorSchemes?.palette,

      ...(scheme === 'light' && {
        background: {
          ...lightPalette?.background,
          ...(!isDefaultContrast && {
            default: lightPalette.grey[200],
            defaultChannel: hexToRgbChannel(lightPalette.grey[200]),
          }),
        },
      }),
    };

    return {
      ...colorSchemes,
      palette: updatedPalette,
    };
  };

  return {
    ...theme,
    direction,
    colorSchemes: {
      light: updateColorScheme('light'),
      dark: updateColorScheme('dark'),
    },
    typography: {
      ...theme.typography,
      fontFamily: setFont(fontFamily),
    },
  };
}
