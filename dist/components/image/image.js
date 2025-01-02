import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useInView } from 'framer-motion';
import { useRef, useState, forwardRef, useCallback, startTransition } from 'react';
import { mergeRefs, mergeClasses } from '../../utils/merge-classes';
import { imageClasses } from './classes';
import { ImageImg, ImageRoot, ImageOverlay, ImagePlaceholder } from './styles';
const DEFAULT_DELAY = 0;
const DEFAULT_EFFECT = {
    style: 'blur',
    duration: 300,
    disabled: false,
};
export const Image = forwardRef((props, ref) => {
    const { sx, src, ratio, onLoad, effect, alt = '', slotProps, className, viewportOptions, disablePlaceholder, visibleByDefault = false, delayTime = DEFAULT_DELAY, ...other } = props;
    const localRef = useRef(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const isInView = useInView(localRef, {
        once: true,
        ...viewportOptions,
    });
    const handleImageLoad = useCallback(() => {
        const timer = setTimeout(() => {
            startTransition(() => {
                setIsLoaded(true);
                onLoad?.();
            });
        }, delayTime);
        return () => clearTimeout(timer);
    }, [delayTime, onLoad]);
    const finalEffect = {
        ...DEFAULT_EFFECT,
        ...effect,
    };
    const shouldRenderImage = visibleByDefault || isInView;
    const showPlaceholder = !visibleByDefault && !isLoaded && !disablePlaceholder;
    return (_jsxs(ImageRoot, { ref: mergeRefs([localRef, ref]), effect: visibleByDefault || finalEffect.disabled ? undefined : finalEffect, className: mergeClasses([imageClasses.root, className], {
            [imageClasses.state.loaded]: !visibleByDefault && isLoaded,
        }), sx: [
            {
                '--aspect-ratio': ratio,
                ...(!!ratio && { width: 1 }),
            },
            ...(Array.isArray(sx) ? sx : [sx]),
        ], ...other, children: [slotProps?.overlay && (_jsx(ImageOverlay, { className: imageClasses.overlay, ...slotProps.overlay })), showPlaceholder && (_jsx(ImagePlaceholder, { className: imageClasses.placeholder, ...slotProps?.placeholder })), shouldRenderImage && (_jsx(ImageImg, { src: src, alt: alt, onLoad: handleImageLoad, className: imageClasses.img, ...slotProps?.img }))] }));
});
