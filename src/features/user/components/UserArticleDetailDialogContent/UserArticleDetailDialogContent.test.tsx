import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import { UserArticleDetailDialogContent } from './UserArticleDetailDialogContent';

describe('UserArticleDetailDialogContent', () => {
  const mockArticleDetail = {
    id: '1',
    title: 'Test Title',
    description: 'Test Description',
    content: 'Test Content',
  };

  const mockHandleSave = vi.fn();
  const mockHandleDelete = vi.fn();
  const setIsEdit = vi.fn();

  it('テキストが表示されること', () => {
    // given
    const mockArticleDetail = {
      id: '1',
      title: 'Test Title',
      description: 'Test Description',
      content: 'Test Content',
    };

    // when
    const { getByText } = render(
      <UserArticleDetailDialogContent
        articleDetail={mockArticleDetail}
        isEdit={false}
        setIsEdit={setIsEdit}
        handleSave={mockHandleSave}
        handleDelete={mockHandleDelete}
      />
    );

    // then
    expect(getByText('Test Title')).toBeInTheDocument();
    expect(getByText('Test Description')).toBeInTheDocument();
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
      />
    );
    const descriptionInput = getByPlaceholderText('Description') as HTMLTextAreaElement;

    // when
    fireEvent.change(descriptionInput, { target: { value: 'New Description' } });

    // then
    expect(descriptionInput.value).toBe('New Description');
  });

});
