
export function selectBook(book) {
  const BOOK_SELECTED = 'BOOK_SELECTED';
  return {
    type: BOOK_SELECTED,
    payload: book
  };
}
