import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect } from 'react';
import createCache from '@emotion/cache';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
export function Rtl({ children, direction }) {
    const cacheRtl = createCache({
        key: 'rtl',
        prepend: true,
        stylisPlugins: [rtlPlugin],
    });
    useEffect(() => {
        document.dir = direction;
    }, [direction]);
    if (direction === 'rtl') {
        return _jsx(CacheProvider, { value: cacheRtl, children: children });
    }
    return _jsx(_Fragment, { children: children });
}
