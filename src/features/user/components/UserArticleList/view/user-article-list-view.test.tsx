import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { UserArticleListView } from "./user-article-list-view";
import { UserArticle } from "@/features/article/types/UserArticle";


function getMockUserArticles(isEmpty: boolean): UserArticle[] {
  if (isEmpty) {
    return [];
  }

  return [
    {
      id: '1',
      title: "Test Article 1",
      publishedAt: "2022-01-01",
      description: "This is a test article.",
    },
    {
      id: '2',
      title: "Test Article 2",
      publishedAt: "2022-01-02",
      description: "This is another test article.",
    },
  ];
}

test("記事の数だけ記事のタイトルが表示されること", () => {
  // given
  const mockData = getMockUserArticles(false);


  // when
  render(<UserArticleListView userArticles={mockData} />);

  // then
  expect(screen.getByText("My Articles")).toBeInTheDocument();
  expect(screen.getByText("Test Article 1")).toBeInTheDocument();
  expect(screen.getByText("Test Article 2")).toBeInTheDocument();
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