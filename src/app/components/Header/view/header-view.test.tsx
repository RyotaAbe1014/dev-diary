import { render, screen } from '@testing-library/react';
import { HeaderView } from './header-view';

  test('未ログインの場合、Sign Upリンクが表示されること', () => {
    // given
    const pathName = 'Home';
    const isLogin = false;

    // when
    const { getByText } = render(<HeaderView isLogin={isLogin} />);
    const signUpLink = getByText('Sign Up');

    // then
    expect(signUpLink).toBeInTheDocument();
  });

  test('ログイン済の場合、Menuボタンが表示されること', () => {
    // given
    const pathName = 'Home';
    const isLogin = true;

    // when
    render(<HeaderView isLogin={isLogin} />);
    const openLink = screen.getByRole('button', { name: 'Menu' });

    // then
    expect(openLink).toBeInTheDocument();
  });