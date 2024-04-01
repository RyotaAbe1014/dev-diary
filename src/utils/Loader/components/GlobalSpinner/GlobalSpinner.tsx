'use client';

import React from 'react';
import { useAtom } from 'jotai';
import { GlobalSpinnerView } from './view/GlobalSpinnerView';
import { isShowGlobalSpinnerAtom } from './globalSpinnerAtom';

export function GlobalSpinner() {
  const [isShowGlobalSpinner] = useAtom(isShowGlobalSpinnerAtom);
  return (
    isShowGlobalSpinner ? <GlobalSpinnerView /> : null
  );
}
