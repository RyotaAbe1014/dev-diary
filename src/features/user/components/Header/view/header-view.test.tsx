import { render } from '@testing-library/react';
import { HeaderView } from './header-view';

test('propsのpathNameが表示されること', () => {
  // given
  const pathName = 'Home';

  // when
  const { getByText } = render(<HeaderView pathName={pathName} />);
  const headerElement = getByText(pathName);

  // then
  expect(headerElement).toBeInTheDocument();
});

test('New Articleリンクが表示されること', () => {
  // given
  const pathName = 'Home';

  // when
  const { getByText } = render(<HeaderView pathName={pathName} />);
  const newArticleLink = getByText('New Article');

  // then
  expect(newArticleLink).toBeInTheDocument();
});