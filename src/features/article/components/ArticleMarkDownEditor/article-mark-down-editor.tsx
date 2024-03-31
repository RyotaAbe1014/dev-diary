'use client';

import React from 'react';
import { Textarea } from '@/lib/components/ui/textarea';
import { MarkDown } from '@/lib/react-markdown/components/MarkDown/MarkDown';

export type ArticleMarkDownEditorProps = {
  value: string;
  onChange: (value: string) => void;
};

export function ArticleMarkDownEditor({ value, onChange }: ArticleMarkDownEditorProps) {
  return (
    <div className='flex gap-4 h-max'>
      <Textarea value={value} onChange={(e) => onChange(e.target.value)} className='resize-none w-1/2' placeholder='Write something here...' />
      <MarkDown value={value} className='w-1/2 p-2 rounded-lg border border-slate-200 dark:border-slate-800 overflow-y-auto overflow-x-auto' />
    </div >
  )
}
