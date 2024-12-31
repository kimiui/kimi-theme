import { useMemo } from 'react';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import Link from '@mui/material/Link';
import type { Options } from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';

import { isExternalLink } from 'src/utils';
import { Image } from 'src/components/image';

import './code-highlight-block.css';
import { StyledRoot } from './styles';
import { markdownClasses } from './classes';
import { htmlToMarkdown, isMarkdownContent } from './html-to-markdown';

import type { MarkdownProps } from './types';

// ----------------------------------------------------------------------

export function Markdown({ children, sx, ...other }: Readonly<MarkdownProps>) {
  const content = useMemo(() => {
    if (isMarkdownContent(`${children}`)) {
      return children;
    }
    return htmlToMarkdown(`${children}`.trim());
  }, [children]);

  return (
    <StyledRoot
      components={components as unknown as Options['components']}
      rehypePlugins={rehypePlugins as Options['rehypePlugins']}
      /* base64-encoded images
       * https://github.com/remarkjs/react-markdown/issues/774
       * urlTransform={(value: string) => value}
       */
      className={markdownClasses.root}
      sx={sx}
      {...other}
    >
      {content}
    </StyledRoot>
  );
}

// ----------------------------------------------------------------------

type ComponentTag = {
  [key: string]: any;
};

const rehypePlugins = [rehypeRaw, rehypeHighlight, [remarkGfm, { singleTilde: false }]];

const components = (RouterLink: any) => ({
  img: ({ node, ...other }: ComponentTag) => (
    <Image
      ratio="16/9"
      className={markdownClasses.content.image}
      sx={{ borderRadius: 2 }}
      {...other}
    />
  ),
  a: ({ href, children, node, ...other }: ComponentTag) => {
    const linkProps = isExternalLink(href)
      ? { target: '_blank', rel: 'noopener' }
      : { component: RouterLink };

    return (
      <Link {...linkProps} href={href} className={markdownClasses.content.link} {...other}>
        {children}
      </Link>
    );
  },
  pre: ({ children }: ComponentTag) => (
    <div className={markdownClasses.content.codeBlock}>
      <pre>{children}</pre>
    </div>
  ),
  code({ className, children, node, ...other }: ComponentTag) {
    const language = /language-(\w+)/.exec(className || '');

    return language ? (
      <code {...other} className={className}>
        {children}
      </code>
    ) : (
      <code {...other} className={markdownClasses.content.codeInline}>
        {children}
      </code>
    );
  },
});
