import { jsx as _jsx } from "react/jsx-runtime";
import { useMemo } from 'react';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import Link from '@mui/material/Link';
import rehypeHighlight from 'rehype-highlight';
import { isExternalLink } from '../../utils';
import { Image } from '../../components/image';
import './code-highlight-block.css';
import { StyledRoot } from './styles';
import { markdownClasses } from './classes';
import { htmlToMarkdown, isMarkdownContent } from './html-to-markdown';
// ----------------------------------------------------------------------
export function Markdown({ children, sx, ...other }) {
    const content = useMemo(() => {
        if (isMarkdownContent(`${children}`)) {
            return children;
        }
        return htmlToMarkdown(`${children}`.trim());
    }, [children]);
    return (_jsx(StyledRoot, { components: components, rehypePlugins: rehypePlugins, 
        /* base64-encoded images
         * https://github.com/remarkjs/react-markdown/issues/774
         * urlTransform={(value: string) => value}
         */
        className: markdownClasses.root, sx: sx, ...other, children: content }));
}
const rehypePlugins = [rehypeRaw, rehypeHighlight, [remarkGfm, { singleTilde: false }]];
const components = (RouterLink) => ({
    img: ({ node, ...other }) => (_jsx(Image, { ratio: "16/9", className: markdownClasses.content.image, sx: { borderRadius: 2 }, ...other })),
    a: ({ href, children, node, ...other }) => {
        const linkProps = isExternalLink(href)
            ? { target: '_blank', rel: 'noopener' }
            : { component: RouterLink };
        return (_jsx(Link, { ...linkProps, href: href, className: markdownClasses.content.link, ...other, children: children }));
    },
    pre: ({ children }) => (_jsx("div", { className: markdownClasses.content.codeBlock, children: _jsx("pre", { children: children }) })),
    code({ className, children, node, ...other }) {
        const language = /language-(\w+)/.exec(className || '');
        return language ? (_jsx("code", { ...other, className: className, children: children })) : (_jsx("code", { ...other, className: markdownClasses.content.codeInline, children: children }));
    },
});
