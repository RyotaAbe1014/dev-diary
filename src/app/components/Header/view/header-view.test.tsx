import { render } from '@testing-library/react';
import { HeaderView } from './header-view';

test('propsのpathNameが表示されること', () => {
  // given
  const pathName = 'Home';
  const isLogin = false;

  // when
  const { getByText } = render(<HeaderView pathName={pathName} isLogin={isLogin} />);
  const headerElement = getByText(pathName);

  // then
  expect(headerElement).toBeInTheDocument();
});

test('New Articleリンクが表示されること', () => {
  // given
  const pathName = 'Home';
  const isLogin = false;


  // when
  const { getByText } = render(<HeaderView pathName={pathName} isLogin={isLogin} />);
  const newArticleLink = getByText('New Article');

  // then
  expect(newArticleLink).toBeInTheDocument();


  test('未ログインの場合、Sign Upリンクが表示されること', () => {
    // given
    const pathName = 'Home';
    const isLogin = false;

    // when
    const { getByText } = render(<HeaderView pathName={pathName} isLogin={isLogin} />);
    const signUpLink = getByText('Sign Up');

    // then
    expect(signUpLink).toBeInTheDocument();
  });

  test('ログイン済の場合、New Articleリンクが表示されること', () => {
    // given
    const pathName = 'Home';
    const isLogin = true;

    // when
    const { getByText, queryByText } = render(<HeaderView pathName={pathName} isLogin={isLogin} />);
    const newArticleLink = getByText('New Article');
    const signUpLink = queryByText('Sign Up');

    // then
    expect(newArticleLink).toBeInTheDocument();
    expect(signUpLink).toBeNull();
  });
});