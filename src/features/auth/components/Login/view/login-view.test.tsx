import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import { LoginView } from './login-view';
import { login } from '@/features/auth/actions/login';

const user = userEvent.setup();

beforeEach(() => {
  jest.resetAllMocks();
});

jest.mock('@/features/auth/actions/login', () => {
  return {
    login: jest.fn(),
  };
});



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

  test('未入力の場合、ログインボタンが押せないこと', () => {
    // given
    render(<LoginView />);
    // when
    const loginButton = screen.getByRole('button', { name: 'Login' });
    // then
    expect(loginButton).toBeDisabled();
  });

  test('入力後、ログインボタンが活性化すること', async () => {
    // given
    render(<LoginView />);
    // when
    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Password');
    await user.type(emailInput, 'a');
    await user.type(passwordInput, 'a');

    const loginButton = screen.getByRole('button', { name: 'Login' });

    // then
    expect(loginButton).toBeEnabled();
  });

  test('ログインボタンを押すと、ログイン処理が呼ばれること', async () => {
    // given
    render(<LoginView />);
    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Password');
    await user.type(emailInput, 'a@a.com');
    await user.type(passwordInput, 'a');

    const loginButton = screen.getByRole('button', { name: 'Login' });

    // when
    await user.click(loginButton);

    // then
    expect(login).toHaveBeenCalled();
  });

});