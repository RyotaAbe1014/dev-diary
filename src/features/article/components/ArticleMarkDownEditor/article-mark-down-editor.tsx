'use client';

import React, { useState } from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export function ArticleMarkDownEditor() {
  const [text, setText] = useState('');
  return (
    <div>
      <textarea value={text} onChange={(e) => setText(e.target.value)} className='w-full h-96' placeholder='Write something here...'></textarea>
      <Markdown
        children={text}
        className='markdown'
        remarkPlugins={[remarkGfm]}
        components={{
          code(props) {
            const { children, className, node, ...rest } = props
            const match = /language-(\w+)/.exec(className || '')
            return match ? (
              <SyntaxHighlighter
                PreTag="div"
                children={String(children).replace(/\n$/, '')}
                language={match[1]}
                style={materialDark}
              />
            ) : (
              <code {...rest} className={className}>
                {children}
              </code>
            )
          }
        }}
      />
    </div >
  )
}
