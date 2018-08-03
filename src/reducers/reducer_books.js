export default function(state = null, action) {
  const books = [
    {id: 1, title: 'JavaScript', pages: 101},
    {id: 2, title: 'Harry Potter', pages: 512},
    {id: 3, title: 'The Dark Tower', pages: 640},
    {id: 4, title: 'Eloquent Ruby', pages: 28}
  ];

  switch(action.type) {
    case 'ADD_BOOK':
        const lastId = state[state.length - 1].id;
        const newId = lastId + 1;
        const newBook = action.payload;
        newBook.id = newId;
      return state.concat(newBook);

    case 'DELETE_BOOK':
        const book = action.payload;
        const index = state.indexOf(book);
        const start = state.slice(0, index);
        const end = state.slice(index + 1);
        return start.concat(end);
  }
  if (state) return state;
  return books;
}
