'use client';
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { _mock } from '../../../_mock';
import { paths } from '../../../routes/paths';
import { CustomBreadcrumbs } from '../../../components/custom-breadcrumbs';
import { CarouselYaxis } from './carousel-yaxis';
import { CarouselAlign } from './carousel-align';
import { CarouselScale } from './carousel-scale';
import { ComponentHero } from '../../component-hero';
import { CarouselOpacity } from './carousel-opacity';
import { CarouselCustoms } from './carousel-customs';
import { CarouselThumbsX } from './carousel-thumbs-x';
import { CarouselThumbsY } from './carousel-thumbs-y';
import { CarouselAutoplay } from './carousel-autoplay';
import { CarouselProgress } from './carousel-progress';
import { CarouselParallax } from './carousel-parallax';
import { CarouselAnimation } from './carousel-animation';
import { CarouselAutoScroll } from './carousel-auto-scroll';
import { CarouselDotsNumber } from './carousel-dots-number';
import { CarouselAutoHeight } from './carousel-auto-height';
import { CarouselRightToLeft } from './carousel-right-to-left';
import { ScrollToViewTemplate } from '../../component-template';
import { CarouselVariableWidths } from './carousel-variable-widths';
// ----------------------------------------------------------------------
const SLIDES = [...Array(8)].map((_, index) => ({
    id: _mock.id(index),
    title: _mock.postTitle(index),
    coverUrl: _mock.image.cover(index),
    description: _mock.description(index),
}));
const DEMO = [
    { name: 'Align', component: _jsx(CarouselAlign, { data: SLIDES.slice(0, 4) }) },
    {
        name: 'Progress',
        component: _jsx(CarouselProgress, { data: SLIDES.slice(0, 4) }),
    },
    { name: 'Opacity', component: _jsx(CarouselOpacity, { data: SLIDES.slice(0, 6) }) },
    { name: 'Scale', component: _jsx(CarouselScale, { data: SLIDES.slice(0, 4) }) },
    {
        name: 'Parallax',
        component: _jsx(CarouselParallax, { data: SLIDES.slice(0, 6) }),
    },
    {
        name: 'Right-to-left',
        component: _jsx(CarouselRightToLeft, { data: SLIDES.slice(0, 4) }),
    },
    {
        name: 'Autoplay',
        component: _jsx(CarouselAutoplay, { data: SLIDES.slice(0, 4) }),
    },
    {
        name: 'Auto Scroll',
        component: _jsx(CarouselAutoScroll, { data: SLIDES.slice(0, 4) }),
    },
    {
        name: 'Thumbs-x',
        component: _jsx(CarouselThumbsX, { data: SLIDES.slice(0, 8) }),
    },
    {
        name: 'Thumbs-y',
        component: _jsx(CarouselThumbsY, { data: SLIDES.slice(0, 8) }),
    },
    {
        name: 'Variable widths',
        component: _jsx(CarouselVariableWidths, { data: SLIDES.slice(0, 4) }),
    },
    {
        name: 'Auto height',
        component: _jsx(CarouselAutoHeight, { data: SLIDES.slice(0, 4) }),
    },
    { name: 'Y-axis', component: _jsx(CarouselYaxis, { data: SLIDES.slice(0, 4) }) },
    {
        name: 'Dots number',
        component: _jsx(CarouselDotsNumber, { data: SLIDES.slice(0, 8) }),
    },
    {
        name: 'Animation',
        component: _jsx(CarouselAnimation, { data: SLIDES.slice(0, 4) }),
    },
    { name: 'Customs', component: _jsx(CarouselCustoms, { data: SLIDES.slice(0, 6) }) },
];
// ----------------------------------------------------------------------
export function CarouselView() {
    return (_jsxs(_Fragment, { children: [_jsx(ComponentHero, { children: _jsx(CustomBreadcrumbs, { heading: "Carousel", links: [{ name: 'Components', href: paths.docs.components.root }, { name: 'Carousel' }], moreLink: ['https://www.embla-carousel.com/'] }) }), _jsx(ScrollToViewTemplate, { data: DEMO })] }));
}
