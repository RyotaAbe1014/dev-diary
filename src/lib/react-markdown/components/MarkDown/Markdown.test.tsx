import { render, screen, within } from "@testing-library/react";
import { MarkDown } from "./MarkDown";

describe("MarkDown", () => {

  // test('textareaに入力するとmarkdownが表示されること', async () => {
  //   // given
  //   const value = '';
  //   const onChange = vi.fn();
  //   render(<ArticleMarkDownEditor value={value} onChange={onChange} />);

  //   // when
  //   const textarea = screen.getByRole('textbox');
  //   await user.type(textarea, '# test');

  //   // then
  //   waitFor(() => {
  //     const heading = screen.getByRole('heading');
  //     expect(heading).toHaveTextContent('test');
  //   });
  // });
  test("マークダウンを表示する", () => {
    // given
    const value = "# Heading";

    // when
    render(<MarkDown value={value} />);

    // then
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent("Heading");
  });

  test("コードブロックを表示する", () => {
    // given
    const value = "```javascript\nconsole.log('Hello, World!');\n```";

    // when
    render(<MarkDown value={value}  />);

    // then
  const codeDivElement = screen.getByTestId('code');
  const codeElement = codeDivElement.querySelector('code');
    expect(codeElement).toHaveClass("language-javascript");
    expect(codeElement).toHaveTextContent("console.log('Hello, World!');");
  });
});