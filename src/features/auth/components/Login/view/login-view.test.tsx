import { render, screen, fireEvent } from '@testing-library/react';
import { LoginView } from './login-view';

describe('LoginView', () => {
  test('ログインフォームが表示されること', () => {
    // given
    render(<LoginView />);
    // when
    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Password');

    // then
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  test('ログインボタンが表示されること', () => {
    // given
    render(<LoginView />);
    // when
    const loginButton = screen.getByRole('button', { name: 'Login' });

    // then
    expect(loginButton).toBeInTheDocument();
  });

});