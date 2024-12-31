'use client';

import { _mock } from 'lib/_mock';
import { paths } from 'lib/routes/paths';
import { CustomBreadcrumbs } from 'lib/components/custom-breadcrumbs';

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
  { name: 'Align', component: <CarouselAlign data={SLIDES.slice(0, 4)} /> },
  {
    name: 'Progress',
    component: <CarouselProgress data={SLIDES.slice(0, 4)} />,
  },
  { name: 'Opacity', component: <CarouselOpacity data={SLIDES.slice(0, 6)} /> },
  { name: 'Scale', component: <CarouselScale data={SLIDES.slice(0, 4)} /> },
  {
    name: 'Parallax',
    component: <CarouselParallax data={SLIDES.slice(0, 6)} />,
  },
  {
    name: 'Right-to-left',
    component: <CarouselRightToLeft data={SLIDES.slice(0, 4)} />,
  },
  {
    name: 'Autoplay',
    component: <CarouselAutoplay data={SLIDES.slice(0, 4)} />,
  },
  {
    name: 'Auto Scroll',
    component: <CarouselAutoScroll data={SLIDES.slice(0, 4)} />,
  },
  {
    name: 'Thumbs-x',
    component: <CarouselThumbsX data={SLIDES.slice(0, 8)} />,
  },
  {
    name: 'Thumbs-y',
    component: <CarouselThumbsY data={SLIDES.slice(0, 8)} />,
  },
  {
    name: 'Variable widths',
    component: <CarouselVariableWidths data={SLIDES.slice(0, 4)} />,
  },
  {
    name: 'Auto height',
    component: <CarouselAutoHeight data={SLIDES.slice(0, 4)} />,
  },
  { name: 'Y-axis', component: <CarouselYaxis data={SLIDES.slice(0, 4)} /> },
  {
    name: 'Dots number',
    component: <CarouselDotsNumber data={SLIDES.slice(0, 8)} />,
  },
  {
    name: 'Animation',
    component: <CarouselAnimation data={SLIDES.slice(0, 4)} />,
  },
  { name: 'Customs', component: <CarouselCustoms data={SLIDES.slice(0, 6)} /> },
];

// ----------------------------------------------------------------------

export function CarouselView() {
  return (
    <>
      <ComponentHero>
        <CustomBreadcrumbs
          heading="Carousel"
          links={[{ name: 'Components', href: paths.docs.components.root }, { name: 'Carousel' }]}
          moreLink={['https://www.embla-carousel.com/']}
        />
      </ComponentHero>

      <ScrollToViewTemplate data={DEMO} />
    </>
  );
}
