import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { UserArticleListItem } from "./user-article-list-item";

const mockUserArticle = {
  id: '1',
  title: "Test Article",
  publishedAt: "2022-01-01",
  description: "This is a test article.",
};

test("アイテムが正しく表示されること", () => {
  // when
  render(<UserArticleListItem userArticle={mockUserArticle} />);

  // then
  expect(screen.getByText("Test Article")).toBeInTheDocument();
  expect(screen.getByText("Published on 2022-01-01")).toBeInTheDocument();
  expect(screen.getByText("This is a test article.")).toBeInTheDocument();
});

test("リンクが正しく設定されていること", () => {
  // when
  render(<UserArticleListItem userArticle={mockUserArticle} />);
  const linkElement = screen.getByRole("link");

  // then
  expect(linkElement).toHaveAttribute("href", "/user/article/1");
});