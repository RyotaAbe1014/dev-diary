import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from "vitest";
import { useRouter } from "next/navigation";
import { UserArticleCreate } from './UserArticleCreate';

vi.mock("next/navigation", () => ({
  useRouter: () => ({
    back: vi.fn(),
  }),
}));

describe('UserArticleCreate', () => {
  test('記事作成画面が表示される', () => {
    render(<UserArticleCreate />);

    const cancelButton = screen.getByText('Cancel');
    const saveButton = screen.getByText('Save');

    expect(cancelButton).toBeInTheDocument();
    expect(saveButton).toBeInTheDocument();
  });

});