'use client';

import React from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export type MarkDownProps = {
  value?: string;
  className?: string;
};

export function MarkDown({ value, className }: MarkDownProps) {
  return (
      <Markdown
        // eslint-disable-next-line react/no-children-prop
        children={value}
        className={`markdown ${className}`}
        remarkPlugins={[remarkGfm]}
        components={{
          code(props) {
            const { children, className, node, ...rest } = props
            const match = /language-(\w+)/.exec(className || '')
            return match ? (
              <SyntaxHighlighter
              data-testid="code"
                PreTag="div"
                // eslint-disable-next-line react/no-children-prop
                children={String(children).replace(/\n$/, '')}
                language={match[1]}
                style={materialDark}
              />
            ) : (
              <code {...rest} className={className} data-testid="code">
                {children}
              </code>
            )
          }
        }}
      />
  )
}
