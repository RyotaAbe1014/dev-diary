import "@testing-library/jest-dom";
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import { LoginView } from './login-view';
import * as loginModule from '@/features/auth/actions/login';
import { login } from '@/features/auth/actions/login';
import { expect, test, vi } from "vitest";

const user = userEvent.setup();

beforeEach(() => {
  vi.resetAllMocks();
});

vi.mock('@/features/auth/actions/login');


function mockLogin(error: boolean) {
  if (error) {
    vi.spyOn(loginModule, 'login').mockResolvedValue(['・エラー']);
  } else {
    vi.spyOn(loginModule, 'login').mockResolvedValue();
  }
}

describe('LoginView', () => {
  test('ログインフォームが表示されること', () => {
    // given
    mockLogin(false);
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
    mockLogin(false);
    render(<LoginView />);
    // when
    const loginButton = screen.getByRole('button', { name: 'Log in' });
    // then
    expect(loginButton).toBeInTheDocument();
  });

  test('未入力の場合、ログインボタンが押せないこと', () => {
    // given
    mockLogin(false);
    render(<LoginView />);
    // when
    const loginButton = screen.getByRole('button', { name: 'Log in' });
    // then
    expect(loginButton).toBeDisabled();
  });

  test('入力後、ログインボタンが活性化すること', async () => {
    // given
    mockLogin(false);
    render(<LoginView />);
    // when
    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Password');
    await user.type(emailInput, 'a');
    await user.type(passwordInput, 'a');

    const loginButton = screen.getByRole('button', { name: 'Log in' });

    // then
    expect(loginButton).toBeEnabled();
  });

  test('ログインボタンを押すと、ログイン処理が呼ばれること', async () => {
    // given
    mockLogin(false);
    render(<LoginView />);
    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Password');
    await user.type(emailInput, 'a@a.com');
    await user.type(passwordInput, 'a');

    const loginButton = screen.getByRole('button', { name: 'Log in' });

    // when
    await user.click(loginButton);

    // then
    expect(login).toHaveBeenCalled();
  });

  test('エラーがある場合、エラーメッセージが表示されること', async () => {
    // given
    mockLogin(true);
    render(<LoginView />);
    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Password');
    await user.type(emailInput, 'aaa@aaa.com');
    await user.type(passwordInput, 'a');

    const loginButton = screen.getByRole('button', { name: 'Log in' });

    // when
    await user.click(loginButton);
    expect(login).toHaveBeenCalled();

    // then
    waitFor(() => {
      expect(screen.getByText('・エラー')).toBeInTheDocument();
    });
  });
});