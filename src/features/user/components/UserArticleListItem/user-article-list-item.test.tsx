import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { UserArticleListItem } from "./user-article-list-item";
import { mockUserArticle } from "./__mock__/mockUserArticle";

test("アイテムが正しく表示されること", () => {
  // when
  render(<UserArticleListItem userArticle={mockUserArticle} />);

  // then
  expect(screen.getByText("Supabaseに値を入れる方法")).toBeInTheDocument();
  expect(screen.getByText("使ってみたシリーズ")).toBeInTheDocument();
});

test("リンクが正しく設定されていること", () => {
  // when
  render(<UserArticleListItem userArticle={mockUserArticle} />);
  const linkElement = screen.getByRole("link");

  // then
  expect(linkElement).toHaveAttribute("href", "/user/article/detail/1");
});