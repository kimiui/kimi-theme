'use client';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import { _mock } from '../../../_mock';
import { paths } from '../../../routes/paths';
import { Image } from '../../../components/image';
import { Lightbox, useLightBox } from '../../../components/lightbox';
import { CustomBreadcrumbs } from '../../../components/custom-breadcrumbs';
import { ComponentHero } from '../../component-hero';
import { ComponentContainer } from '../../component-block';
// ----------------------------------------------------------------------
const images = [...Array(4)].map((_, index) => ({
    src: _mock.image.cover(index + 1),
    title: 'Flamingo',
    description: 'Vicko Mozara \n Veliki zali, Dubravica, Croatia',
}));
const slides = [
    ...images,
    {
        type: 'video',
        width: 1280,
        height: 720,
        poster: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg',
        sources: [
            {
                src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
                type: 'video/mp4',
            },
        ],
    },
];
// ----------------------------------------------------------------------
export function LightboxView() {
    const lightbox = useLightBox(slides);
    const [state, setState] = useState({
        disableZoom: false,
        disableVideo: false,
        disableTotal: false,
        disableCaptions: false,
        disableSlideshow: false,
        disableThumbnails: false,
        disableFullscreen: false,
    });
    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };
    return (_jsxs(_Fragment, { children: [_jsx(ComponentHero, { children: _jsx(CustomBreadcrumbs, { heading: "Lightbox", links: [{ name: 'Components', href: paths.docs.components.root }, { name: 'Lightbox' }], moreLink: ['https://www.npmjs.com/package/yet-another-react-lightbox'] }) }), _jsx(ComponentContainer, { children: _jsxs(Card, { sx: { display: 'flex' }, children: [_jsx(Box, { gap: 2, display: "grid", gridTemplateColumns: {
                                xs: 'repeat(2, 1fr)',
                                sm: 'repeat(3, 1fr)',
                                md: 'repeat(4, 1fr)',
                            }, sx: { p: 3 }, children: slides.map((slide) => {
                                const thumbnail = slide.type === 'video' ? slide.poster : slide.src;
                                return (_jsx(Image, { alt: thumbnail, src: thumbnail, ratio: "1/1", onClick: () => lightbox.onOpen(`${thumbnail}`), sx: { borderRadius: 1, cursor: 'pointer', width: 200 } }, thumbnail));
                            }) }), _jsx(Stack, { sx: {
                                p: 2.5,
                                width: 320,
                                flexShrink: 0,
                                borderLeft: (theme) => `solid 1px ${theme.vars.palette.divider}`,
                            }, children: _jsx(FormControl, { component: "fieldset", variant: "standard", children: _jsxs(Stack, { spacing: 2, children: [_jsx(FormLabel, { component: "legend", sx: { typography: 'body2' }, children: "Controls" }), _jsx(FormControlLabel, { control: _jsx(Switch, { size: "small", name: "disableZoom", checked: state.disableZoom, onChange: handleChange }), label: "Disable zoom" }), _jsx(FormControlLabel, { control: _jsx(Switch, { size: "small", name: "disableTotal", checked: state.disableTotal, onChange: handleChange }), label: "Disable total" }), _jsx(FormControlLabel, { control: _jsx(Switch, { size: "small", name: "disableVideo", checked: state.disableVideo, onChange: handleChange }), label: "Disable video" }), _jsx(FormControlLabel, { control: _jsx(Switch, { size: "small", name: "disableCaptions", checked: state.disableCaptions, onChange: handleChange }), label: "Disable captions" }), _jsx(FormControlLabel, { control: _jsx(Switch, { size: "small", name: "disableSlideshow", checked: state.disableSlideshow, onChange: handleChange }), label: "Disable slideshow" }), _jsx(FormControlLabel, { control: _jsx(Switch, { size: "small", name: "disableThumbnails", checked: state.disableThumbnails, onChange: handleChange }), label: "Disable thumbnails" }), _jsx(FormControlLabel, { control: _jsx(Switch, { size: "small", name: "disableFullscreen", checked: state.disableFullscreen, onChange: handleChange }), label: "Disable fullscreen" })] }) }) })] }) }), _jsx(Lightbox, { open: lightbox.open, close: lightbox.onClose, slides: slides, index: lightbox.selected, disableZoom: state.disableZoom, disableTotal: state.disableTotal, disableVideo: state.disableVideo, disableCaptions: state.disableCaptions, disableSlideshow: state.disableSlideshow, disableThumbnails: state.disableThumbnails, disableFullscreen: state.disableFullscreen })] }));
}
