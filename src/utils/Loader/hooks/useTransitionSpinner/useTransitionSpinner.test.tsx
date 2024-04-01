import { describe, it, expect, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useTransitionSpinner } from './useTransitionSpinner';

describe('useTransitionSpinner', () => {
  it('startTransitionSpinnerが呼ばれるとactionが呼ばれること', () => {
    // given
    const actionMock = vi.fn().mockResolvedValue(null);

    // when
    const { result } = renderHook(() => useTransitionSpinner());
    act(async () => {
      result.current.startTransitionSpinner([{ action: actionMock, args: [] }]);
    });

    // then
    expect(actionMock).toHaveBeenCalled();
  });
});
