import { render, screen, fireEvent } from '@testing-library/react';
import { AuthForm } from './AuthForm';
import { vi } from 'vitest';

describe('AuthForm', () => {
  const onSubmitMock = vi.fn();

  beforeEach(() => {
    onSubmitMock.mockClear();
  });

  test('ログインフォームを正しくレンダリングされること', () => {
    render(<AuthForm isLoginPage={true} onSubmit={onSubmitMock} errors={[]} isPending={false} />);

    expect(screen.getByText('Log in to your account')).toBeInTheDocument();
    expect(screen.getByText('Enter your information below')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Log in' })).toBeInTheDocument();
  });

  test('サインアップフォームを正しくレンダリングされること', () => {
    render(<AuthForm isLoginPage={false} onSubmit={onSubmitMock} errors={[]} isPending={false} />);

    expect(screen.getByText('Create an account')).toBeInTheDocument();
    expect(screen.getByText('Enter your information below')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Sign up' })).toBeInTheDocument();
  });

  test('フォームが正しく送信されること', () => {
    render(<AuthForm isLoginPage={true} onSubmit={onSubmitMock} errors={[]} isPending={false} />);

    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Password');
    const submitButton = screen.getByRole('button', { name: 'Log in' });

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(submitButton);

    expect(onSubmitMock).toHaveBeenCalledTimes(1);
    expect(onSubmitMock).toHaveBeenCalledWith(expect.anything());
  });

  test('送信ボタンが正しく無効/有効になること', () => {
    render(<AuthForm isLoginPage={true} onSubmit={onSubmitMock} errors={[]} isPending={false} />);

    const submitButton = screen.getByRole('button', { name: 'Log in' });

    expect(submitButton).toBeDisabled();

    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'test@example.com' } });
    expect(submitButton).toBeDisabled();

    fireEvent.change(screen.getByLabelText('Password'), { target: { value: 'password123' } });
    expect(submitButton).toBeEnabled();
  });

  test('エラーメッセージが正しく表示されること', () => {
    const errors = ['Invalid email', 'Password is too short'];
    render(<AuthForm isLoginPage={true} onSubmit={onSubmitMock} errors={errors} isPending={false} />);

    expect(screen.getByText('・Invalid email')).toBeInTheDocument();
    expect(screen.getByText('・Password is too short')).toBeInTheDocument();
  });

  test('ローディング中に正しく表示されること', () => {
    render(<AuthForm isLoginPage={true} onSubmit={onSubmitMock} errors={[]} isPending={true} />);

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});