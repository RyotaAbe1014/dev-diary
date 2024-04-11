import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { UserArticleListView } from "./user-article-list-view";
import { UserArticle } from "@/features/article/types/UserArticle";
import { mockUserArticleList } from "./__mock__/mockUserArticleList";

function getMockUserArticles(isEmpty: boolean): UserArticle[] {
  if (isEmpty) {
    return [];
  }

  return mockUserArticleList;
}

test("記事の数だけ記事のタイトルが表示されること", () => {
  // given
  const mockData = getMockUserArticles(false);


  // when
  render(<UserArticleListView userArticles={mockData} />);

  // then
  expect(screen.getByText("テスト1")).toBeInTheDocument();
  expect(screen.getByText("テスト2")).toBeInTheDocument();
  expect(screen.getByText("Supabaseに値を入れる方法")).toBeInTheDocument();
});

test("記事がない場合、'No articles found.' が表示されること", () => {
  // given
  const mockData = getMockUserArticles(true);

  // when
  render(<UserArticleListView userArticles={mockData} />);

  // then
  expect(screen.getByText("My Articles")).toBeInTheDocument();
  expect(screen.getByText("No articles found.")).toBeInTheDocument();
});