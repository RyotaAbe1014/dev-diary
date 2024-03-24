'use client';

import React from 'react'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm';

export function ArticleMarkDownEditor() {
  const text = `
  # Markdown Editor
  A paragraph with *emphasis* and **strong importance**.

  > A block quote with ~strikethrough~ and a URL: https://reactjs.org.

  * Lists
  * [ ] todo
  * [x] done

  A table:

  | a | b |
  | - | - |
  `
  return (
    <div>
      <Markdown remarkPlugins={[remarkGfm]} className='markdown'>
        {text}
      </Markdown>
    </div >
  )
}
