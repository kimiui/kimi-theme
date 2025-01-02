import { jsx as _jsx } from "react/jsx-runtime";
import { Label } from '../../../components/label';
import { Iconify } from '../../../components/iconify';
import { SvgColor } from '../../../components/svg-color';
// ----------------------------------------------------------------------
export function navData(t) {
    return [
        {
            subheader: t('subheader'),
            items: [
                {
                    title: t('travel'),
                    path: '#disabled',
                    icon: _jsx(SvgColor, { src: "/assets/icons/navbar/ic-tour.svg" }),
                },
                {
                    title: t('job'),
                    path: '#label',
                    icon: _jsx(SvgColor, { src: "/assets/icons/navbar/ic-job.svg" }),
                    info: (_jsx(Label, { color: "info", variant: "inverted", startIcon: _jsx(Iconify, { icon: "solar:bell-bing-bold-duotone" }), children: "NEW" })),
                },
                {
                    title: t('blog.title'),
                    path: '#caption',
                    icon: _jsx(SvgColor, { src: "/assets/icons/navbar/ic-blog.svg" }),
                    caption: t('blog.caption'),
                },
                {
                    title: t('user'),
                    path: 'https://www.google.com/',
                    icon: _jsx(SvgColor, { src: "/assets/icons/navbar/ic-user.svg" }),
                },
            ],
        },
    ];
}
