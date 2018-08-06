export function selectBook(book) {
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
  console.log('this: ', this);

  return {
    type: 'ADD_BOOK',
    payload: book
  };
}

export function deleteBook(book) {
    console.log('delete it');
    return {
        type: 'DELETE_BOOK',
        payload: book
    }
}

export function openModal(obj) {
    console.log('open modal obj: ', obj);
    return {
        type: 'OPEN_MODAL',
        payload: obj,
    }
}

export function closeModal(obj) {
    console.log('close modal obj: ', obj);
    return {
        type: 'CLOSE_MODAL',
        payload: obj
    }
}
