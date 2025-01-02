'use client';
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useState, useEffect } from 'react';
import { paths } from '../../../routes/paths';
import { CustomBreadcrumbs } from '../../../components/custom-breadcrumbs';
import { ProgressLinear } from './progress-linear';
import { ComponentHero } from '../../component-hero';
import { ProgressCircular } from './progress-circular';
import { ScrollToViewTemplate } from '../../component-template';
// ----------------------------------------------------------------------
export function ProgressView() {
    const [progress, setProgress] = useState(0);
    const [buffer, setBuffer] = useState(10);
    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress === 100) {
                    return 0;
                }
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 100);
            });
        }, 500);
        return () => {
            clearInterval(timer);
        };
    }, []);
    const progressRef = useRef(() => { });
    useEffect(() => {
        progressRef.current = () => {
            if (progress > 100) {
                setProgress(0);
                setBuffer(10);
            }
            else {
                const diff = Math.random() * 10;
                const diff2 = Math.random() * 10;
                setProgress(progress + diff);
                setBuffer(progress + diff + diff2);
            }
        };
    });
    useEffect(() => {
        const timer = setInterval(() => {
            progressRef.current();
        }, 500);
        return () => {
            clearInterval(timer);
        };
    }, []);
    const DEMO = [
        { name: 'Circular', component: _jsx(ProgressCircular, { progress: progress }) },
        {
            name: 'Linear',
            component: _jsx(ProgressLinear, { progress: progress, buffer: buffer }),
        },
    ];
    return (_jsxs(_Fragment, { children: [_jsx(ComponentHero, { children: _jsx(CustomBreadcrumbs, { heading: "Progress", links: [{ name: 'Components', href: paths.docs.components.root }, { name: 'Progress' }], moreLink: ['https://mui.com/components/progress'] }) }), _jsx(ScrollToViewTemplate, { data: DEMO })] }));
}
