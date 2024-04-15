import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import { UserArticleDetailDialogContent } from './UserArticleDetailDialogContent';
import { mockUserArticle } from '../UserArticleListItem/__mock__/mockUserArticle';

describe('UserArticleDetailDialogContent', () => {
  const mockArticleDetail = mockUserArticle;
  const mockHandleSave = vi.fn();
  const mockHandleDelete = vi.fn();
  const mockChangePublishStatus = vi.fn();
  const setIsEdit = vi.fn();


  it('テキストが表示されること', () => {
    // given
    const mockArticleDetail = {
      ...mockUserArticle,
      title: 'Supabaseに値を入れる方法',
      description: '使ってみたシリーズ',
      body: 'Test Content',
    }
    // when
    const { getByText } = render(
      <UserArticleDetailDialogContent
        articleDetail={mockArticleDetail}
        isEdit={false}
        setIsEdit={setIsEdit}
        handleSave={mockHandleSave}
        handleDelete={mockHandleDelete}
        changePublishStatus={mockChangePublishStatus}
      />
    );

    // then
    expect(getByText('Supabaseに値を入れる方法')).toBeInTheDocument();
    expect(getByText('使ってみたシリーズ')).toBeInTheDocument();
    expect(getByText('Test Content')).toBeInTheDocument();
  });

  it('Edit ボタンがクリックされたときに編集モードに切り替わること', () => {
    // given
    const setIsEdit = vi.fn();

    // when
    const { getByText } = render(
      <UserArticleDetailDialogContent
        articleDetail={mockArticleDetail}
        isEdit={false}
        setIsEdit={setIsEdit}
        handleSave={mockHandleSave}
        handleDelete={mockHandleDelete}
        changePublishStatus={mockChangePublishStatus}
      />
    );
    fireEvent.click(getByText('Edit'));

    // then
    expect(setIsEdit).toHaveBeenCalledWith(true);
  });


  it('Save ボタンがクリックされたときに handleSave が呼ばれること', () => {
    // given
    const { getByText } = render(
      <UserArticleDetailDialogContent
        articleDetail={mockArticleDetail}
        isEdit={true}
        setIsEdit={setIsEdit}
        handleSave={mockHandleSave}
        handleDelete={mockHandleDelete}
        changePublishStatus={mockChangePublishStatus}
      />
    );

    // when
    fireEvent.click(getByText('Save'));

    // then
    expect(mockHandleSave).toHaveBeenCalled();
  });

  it('Delete ボタンがクリックされたときに handleDelete が呼ばれること', () => {
    // given
    const { getByText } = render(
      <UserArticleDetailDialogContent
        articleDetail={mockArticleDetail}
        isEdit={false}
        setIsEdit={setIsEdit}
        handleSave={mockHandleSave}
        handleDelete={mockHandleDelete}
        changePublishStatus={mockChangePublishStatus}
      />
    );

    // when
    fireEvent.click(getByText('Delete'));

    // then
    expect(mockHandleDelete).toHaveBeenCalled();
  });

  it('Cancel ボタンがクリックされたときに編集モードが解除されること', () => {
    // given
    const setIsEdit = vi.fn();

    // when
    const { getByText } = render(
      <UserArticleDetailDialogContent
        articleDetail={mockArticleDetail}
        isEdit={true}
        setIsEdit={setIsEdit}
        handleSave={mockHandleSave}
        handleDelete={mockHandleDelete}
        changePublishStatus={mockChangePublishStatus}
      />
    );
    fireEvent.click(getByText('Cancel'));

    // then
    expect(setIsEdit).toHaveBeenCalledWith(false);
  });

  it('Title が変更されたときに state が更新されること', () => {
    // given
    const { getByPlaceholderText } = render(
      <UserArticleDetailDialogContent
        articleDetail={mockArticleDetail}
        isEdit={true}
        setIsEdit={setIsEdit}
        handleSave={mockHandleSave}
        handleDelete={mockHandleDelete}
        changePublishStatus={mockChangePublishStatus}
      />
    );
    const titleInput = getByPlaceholderText('Title') as HTMLInputElement;

    // when
    fireEvent.change(titleInput, { target: { value: 'New Title' } });

    // then
    expect(titleInput.value).toBe('New Title');
  });

  it('Description が変更されたときに state が更新されること', () => {
    // given
    const { getByPlaceholderText } = render(
      <UserArticleDetailDialogContent
        articleDetail={mockArticleDetail}
        isEdit={true}
        setIsEdit={setIsEdit}
        handleSave={mockHandleSave}
        handleDelete={mockHandleDelete}
        changePublishStatus={mockChangePublishStatus}
      />
    );
    const descriptionInput = getByPlaceholderText('Description') as HTMLTextAreaElement;

    // when
    fireEvent.change(descriptionInput, { target: { value: 'New Description' } });

    // then
    expect(descriptionInput.value).toBe('New Description');
  });

});
