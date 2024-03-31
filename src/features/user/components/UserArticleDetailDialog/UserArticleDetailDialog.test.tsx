import { render, screen, fireEvent } from "@testing-library/react";
import { UserArticleDetailDialog } from "./UserArticleDetailDialog";
import { vi } from "vitest";

vi.mock("next/navigation", () => ({
  useRouter: vi.fn(),
}));

describe("UserArticleDetailDialog", () => {
  const articleDetail = {
    id: "1",
    title: "Sample Title",
    description: "Sample Description",
    content: "Sample Content",
  };

  test("記事の詳細が表示される", () => {
    render(<UserArticleDetailDialog articleDetail={articleDetail} />);

    const titleElement = screen.getByText(articleDetail.title);
    const descriptionElement = screen.getByText(articleDetail.description);
    const contentElement = screen.getByText(articleDetail.content);

    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
    expect(contentElement).toBeInTheDocument();
  });

  test("Editボタンをクリックすると編集モードになる", () => {
    render(<UserArticleDetailDialog articleDetail={articleDetail} />);

    const editButton = screen.getByText("Edit");
    fireEvent.click(editButton);

    const cancelButton = screen.getByText("Cancel");
    expect(cancelButton).toBeInTheDocument();
  });

  test("Saveボタンをクリックすると編集モードが解除される", () => {
    render(<UserArticleDetailDialog articleDetail={articleDetail} />);

    const editButton = screen.getByText("Edit");
    fireEvent.click(editButton);

    const saveButton = screen.getByText("Save");
    fireEvent.click(saveButton);

    const cancelButton = screen.queryByText("Cancel");
    expect(cancelButton).not.toBeInTheDocument();
  });
});