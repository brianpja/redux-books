export function selectBook(book) {
  console.log('book: ', book);
  //this is an action creator and needs to return an actions
  //which is an object with a 'type' property/key
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}

export function addBook(book = null) {
  console.log('adding');
  console.log('book', book)

  return {
    type: 'ADD_BOOK',
    payload: book
  };
}
