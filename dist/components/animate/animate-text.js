'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import { useRef, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import { m, useInView, useAnimation } from 'framer-motion';
import { varFade, varContainer } from './variants';
// ----------------------------------------------------------------------
export const animateTextClasses = {
    root: 'animate-text-root',
    lines: 'animate-text-lines',
    line: 'animate-text-line',
    word: 'animate-text-word',
    char: 'animate-text-char',
    space: 'animate-text-space',
    srOnly: 'sr-only',
    dataIndex: '[data-columns="3"]',
};
export function AnimateText({ sx, text, variants, once = true, amount = 1 / 3, component = 'p', repeatDelay = 500, // 1000 = 1s
...other }) {
    const ref = useRef(null);
    const controls = useAnimation();
    const textArray = Array.isArray(text) ? text : [text];
    const isInView = useInView(ref, { once, amount });
    useEffect(() => {
        let timeout;
        const show = () => {
            if (repeatDelay) {
                timeout = setTimeout(async () => {
                    await controls.start('initial');
                    controls.start('animate');
                }, repeatDelay);
            }
            else {
                controls.start('animate');
            }
        };
        if (isInView) {
            show();
        }
        else {
            controls.start('initial');
        }
        return () => clearTimeout(timeout);
    }, [controls, isInView, repeatDelay]);
    return (_jsxs(Typography, { component: component, className: animateTextClasses.root, sx: {
            p: 0,
            m: 0,
            /**
             * Utilities for improving accessibility with screen readers.
             * https://v1.tailwindcss.com/docs/screen-readers
             */
            [`& .${animateTextClasses.srOnly}`]: {
                p: 0,
                width: '1px',
                height: '1px',
                margin: '-1px',
                borderWidth: 0,
                overflow: 'hidden',
                position: 'absolute',
                whiteSpace: 'nowrap',
                clip: 'rect(0, 0, 0, 0)',
            },
            ...sx,
        }, ...other, children: [_jsx("span", { className: animateTextClasses.srOnly, children: textArray.join(' ') }), _jsx(Box, { component: m.span, ref: ref, initial: "initial", animate: controls, exit: "exit", variants: varContainer(), "aria-hidden": true, className: animateTextClasses.lines, children: textArray.map((line, lineIndex) => (_jsx(Box, { component: "span", "data-index": lineIndex, className: animateTextClasses.line, sx: { display: 'block' }, children: line.split(' ').map((word, wordIndex) => {
                        const lastWordInline = line.split(' ')[line.split(' ').length - 1];
                        return (_jsxs(Box, { component: "span", "data-index": wordIndex, className: animateTextClasses.word, sx: { display: 'inline-block' }, children: [word.split('').map((char, charIndex) => (_jsx(Box, { component: m.span, variants: variants ?? varFade().in, "data-index": charIndex, className: animateTextClasses.char, sx: { display: 'inline-block' }, children: char }, `${char}-${charIndex}`))), lastWordInline !== word && (_jsx(Box, { component: "span", className: animateTextClasses.space, sx: { display: 'inline-block' }, children: "\u00A0" }))] }, `${word}-${wordIndex}`));
                    }) }, `${line}-${lineIndex}`))) })] }));
}
