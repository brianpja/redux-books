export function selectBook(book) {
  //this is an action creator and needs to return an actions
  //which is an object with a 'type' property/key
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}

export function addBook(book = null) {
  return {
    type: 'ADD_BOOK',
    payload: book
  };
}

export function deleteBook(book) {
    return {
        type: 'DELETE_BOOK',
        payload: book
    }
}

export function openModal(obj) {
    return {
        type: 'OPEN_MODAL',
        payload: obj,
    }
}

export function closeModal(obj) {
    return {
        type: 'CLOSE_MODAL',
        payload: obj
    }
}

export function updateBook(book) {
    return {
        type: 'UPDATE_BOOK',
        payload: book
    }
}

export function moveUp(book) {
    return {
        type: 'MOVE_UP',
        payload: book
    }
}

export function moveDown(book) {
    return {
        type: 'MOVE_DOWN',
        payload: book
    }
}

export function updateSearch(str) {
    str = str.toLowerCase();
    return {
        type: 'UPDATE_SEARCH',
        payload: str
    };
}
