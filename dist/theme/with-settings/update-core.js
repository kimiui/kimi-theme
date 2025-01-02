import { setFont, hexToRgbChannel } from '../../theme/styles';
// ----------------------------------------------------------------------
/**
 * Update the core theme with the settings state.
 * @contrast
 * @primaryColor
 */
export function updateCoreWithSettings(theme, settingsState) {
    const { direction, fontFamily, contrast = 'default' } = settingsState ?? {};
    const isDefaultContrast = contrast === 'default';
    const lightPalette = theme.colorSchemes?.light.palette;
    const updateColorScheme = (scheme) => {
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
