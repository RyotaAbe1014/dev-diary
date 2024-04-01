import { describe, it, expect } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useGlobalSpinner } from './useGlobalSpinner';
import { Provider } from 'jotai';
import { ReactNode } from 'react';
import { isShowGlobalSpinnerAtom } from './globalSpinnerAtom';

describe('useGlobalSpinner', () => {
  it('初期状態ではisLoadingはfalseであること', () => {
    // given
    const wrapper = ({ children }: {children: ReactNode}) => {
      return (
      <Provider>{children}</Provider>
      )
    };

    // when
    const { result } = renderHook(() => useGlobalSpinner(), { wrapper });

    // then
    expect(result.current.isLoading).toBe(false);
  });

  it('startLoadingを呼ぶとisLoadingがtrueになること', () => {
    // given
    const wrapper = ({ children }: {children: ReactNode}) => {
      return (
      <Provider>{children}</Provider>
      )
    };

    // when
    const { result } = renderHook(() => useGlobalSpinner(), { wrapper });
    act(() => {
      result.current.startLoading();
    });

    // then
    expect(result.current.isLoading).toBe(true);
  });

  it('stopLoadingを呼ぶとisLoadingがfalseになること', () => {
    // given
    const wrapper = ({ children }: {children: ReactNode}) => {
      return (
      <Provider>{children}</Provider>
      )
    };

    // when
    const { result } = renderHook(() => useGlobalSpinner(), { wrapper });
    act(() => {
      result.current.startLoading();
      result.current.stopLoading();
    });

    // then
    expect(result.current.isLoading).toBe(false);
  });
});
