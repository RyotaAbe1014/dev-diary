import { render, screen } from '@testing-library/react';
import { LoginErrorCard } from './login-error-card';

describe('LoginErrorCard', () => {
  test('エラーメッセージが表示されること', () => {
    // given
    const errors = ['Invalid email', 'Password is required'];

    // when
    render(<LoginErrorCard errors={errors} />);

    // then
    const errorMessages = screen.getAllByText(/・/);
    expect(errorMessages).toHaveLength(errors.length);
    errors.forEach((error, index) => {
      expect(errorMessages[index]).toHaveTextContent(error);
    });
  });

  test('エラーメッセージが表示されないこと', () => {
    // given
    const errors: string[] = [];

    // when
    render(<LoginErrorCard errors={errors} />);

    // then
    const errorMessages = screen.queryAllByText(/・/);
    expect(errorMessages).toHaveLength(0);
  });
});