'use client';

import React, { useState } from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Textarea } from '@/lib/components/ui/textarea';

export function ArticleMarkDownEditor() {
  const [text, setText] = useState('');
  return (
    <div className='flex gap-4 h-[calc(100vh-4rem)]'>
      <Textarea value={text} onChange={(e) => setText(e.target.value)} className='resize-none w-1/2' placeholder='Write something here...' />
      <Markdown
        children={text}
        className='markdown w-1/2 p-4 rounded-lg border border-slate-200 dark:border-slate-800 overflow-y-auto overflow-x-auto'
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
