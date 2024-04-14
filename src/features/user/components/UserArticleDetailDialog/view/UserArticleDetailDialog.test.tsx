import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import { UserArticleDetailDialogView } from "./UserArticleDetailDialog";
import { mockUserArticle } from "../../UserArticleListItem/__mock__/mockUserArticle";
import { deleteArticle } from "@/features/article/actions";

const back = vi.fn();
vi.mock("next/navigation", () => ({
  useRouter: () => ({
    back: back
  }),
}));

vi.mock("@/features/article/actions", () => ({
  deleteArticle: vi.fn(),
}));

describe("UserArticleDetailDialog", () => {
  const articleDetail = mockUserArticle;

  test("記事の詳細が表示される", () => {
    const mock = {
      ...mockUserArticle,
      title: "Supabaseに値を入れる方法",
      description: "使ってみたシリーズ",
      body: "Test Content",
    };

    render(<UserArticleDetailDialogView article={mock} />);

    const titleElement = screen.getByText(mock.title);
    const descriptionElement = screen.getByText(mock.description);
    const contentElement = screen.getByText(mock.body);

    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
    expect(contentElement).toBeInTheDocument();
  });

  test('closeボタンをクリックするとダイアログが閉じる', () => {
    render(<UserArticleDetailDialogView article={articleDetail} />);

    const closeButton = screen.getByText("Close");
    fireEvent.click(closeButton);

    const titleElement = screen.queryByText(articleDetail.title);
    expect(titleElement).not.toBeInTheDocument();
    expect(back).toHaveBeenCalled();
  });

  test("Editボタンをクリックすると編集モードになる", () => {
    render(<UserArticleDetailDialogView article={articleDetail} />);

    const editButton = screen.getByText("Edit");
    fireEvent.click(editButton);

    const cancelButton = screen.getByText("Cancel");
    expect(cancelButton).toBeInTheDocument();
  });

  test("Saveボタンをクリックすると編集モードが解除される", () => {
    render(<UserArticleDetailDialogView article={articleDetail} />);

    const editButton = screen.getByText("Edit");
    fireEvent.click(editButton);

    const saveButton = screen.getByText("Save");
    fireEvent.click(saveButton);

    const cancelButton = screen.queryByText("Cancel");
    expect(cancelButton).not.toBeInTheDocument();
  });

  test("Deleteボタンをクリックすると記事が削除される", () => {
    render(<UserArticleDetailDialogView article={articleDetail} />);

    const deleteButton = screen.getByText("Delete");
    fireEvent.click(deleteButton);

    expect(deleteArticle).toHaveBeenCalledWith(1);
  });
});