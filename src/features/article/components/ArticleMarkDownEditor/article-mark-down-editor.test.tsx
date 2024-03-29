import { expect, test, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";

import { ArticleMarkDownEditor } from "./article-mark-down-editor";
import userEvent from "@testing-library/user-event";

const user = userEvent;

describe("ArticleMarkDownEditor", () => {
  test('propsで渡されたValueがtextareaに表示されること', () => {
    // given
    const value = 'test';
    const onChange = vi.fn();
    render(<ArticleMarkDownEditor value={value} onChange={onChange} />);

    // when
    const textarea = screen.getByRole('textbox');

    // then
    expect(textarea).toHaveValue(value);
  });

  test('textareaに入力するととonChangeが呼ばれること', async () => {
    // given
    const value = '';
    const onChange = vi.fn();
    render(<ArticleMarkDownEditor value={value} onChange={onChange} />);

    // when
    const textarea = screen.getByRole('textbox');
    await user.type(textarea, 'n');

    // then
    expect(onChange).toHaveBeenCalledWith('n');
  });

  test('textareaに入力するとmarkdownが表示されること', async () => {
    // given
    const value = '';
    const onChange = vi.fn();
    render(<ArticleMarkDownEditor value={value} onChange={onChange} />);

    // when
    const textarea = screen.getByRole('textbox');
    await user.type(textarea, '# test');

    // then
    waitFor(() => {
      const heading = screen.getByRole('heading');
      expect(heading).toHaveTextContent('test');
    });
  });

});