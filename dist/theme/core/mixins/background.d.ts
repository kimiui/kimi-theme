import type { CSSObject } from '@mui/material/styles';
/**
 * Generates a background gradient CSS object.
 *
 * @param {BgGradientProps} props - The properties for the background gradient.
 * @param {string[]} props.images - The background images or gradients.
 * @param {string[]} [props.sizes] - The sizes of the background images.
 * @param {string[]} [props.positions] - The positions of the background images.
 * @param {string[]} [props.repeats] - The repeat settings for the background images.
 * @returns {CSSObject} The CSS object for the background gradient.
 *
 * @example
 * ...theme.mixins.bgGradient({
 *   images: [
 *     `linear-gradient(0deg, ${varAlpha(theme.vars.palette.primary.darkerChannel, 0.8)}, ${varAlpha(theme.vars.palette.primary.darkerChannel, 0.8)})`,
 *     `url(/assets/background/overlay.png)`,
 *   ],
 *   sizes: ['cover', '80px 80px'],
 *   positions: ['center', 'top right'],
 * });
 */
export type BgGradientProps = {
    images: string[];
    sizes?: string[];
    positions?: string[];
    repeats?: string[];
};
export declare function bgGradient({ sizes, repeats, images, positions }: BgGradientProps): CSSObject;
/**
 * Generates a background blur CSS object.
 *
 * @param {BgBlurProps} props - The properties for the background blur.
 * @param {string} props.color - The background color.
 * @param {number} [props.blur=6] - The blur intensity.
 * @param {string} [props.imgUrl] - The background image URL.
 * @returns {CSSObject} The CSS object for the background blur.
 *
 * @example
 * ...theme.mixins.bgBlur({
 *   color: varAlpha(theme.vars.palette.background.paperChannel, 0.8),
 *   imgUrl: '/assets/background/overlay.png',
 *   blur: 6,
 * });
 */
export type BgBlurProps = {
    color: string;
    blur?: number;
    imgUrl?: string;
};
export declare function bgBlur({ color, blur, imgUrl }: BgBlurProps): CSSObject;