'use client';
import { useRef, useState, useEffect, useCallback } from 'react';
import { useEventListener } from './useEventListener';
export function useClientRect(inputRef) {
    const initialRef = useRef(null);
    const elementRef = inputRef || initialRef;
    const [state, setState] = useState({
        elementRef: elementRef,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        scrollWidth: 0,
        scrollHeight: 0,
    });
    const handleResize = useCallback(() => {
        if (elementRef?.current) {
            const clientRect = elementRef.current.getBoundingClientRect();
            setState({
                elementRef: elementRef,
                top: clientRect.top,
                right: clientRect.right,
                bottom: clientRect.bottom,
                left: clientRect.left,
                x: clientRect.x,
                y: clientRect.y,
                width: clientRect.width,
                height: clientRect.height,
                scrollWidth: elementRef.current.scrollWidth,
                scrollHeight: elementRef.current.scrollHeight,
            });
        }
    }, [elementRef]);
    useEventListener('resize', handleResize);
    useEffect(() => {
        handleResize();
    }, [handleResize]);
    return state;
}
