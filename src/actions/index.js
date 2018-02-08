export function selectBook(book) {
  console.log('book: ', book);
  //this is an action creator and needs to return an actions
  //which is an object with a 'type' property/key
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
