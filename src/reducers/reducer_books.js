export default function(state = null, action) {
  const books = [
    {id: 1, title: 'JavaScript', pages: 101, show: true},
    {id: 2, title: 'Harry Potter', pages: 512, show: true},
    {id: 3, title: 'The Dark Tower', pages: 640, show: true},
    {id: 4, title: 'Eloquent Ruby', pages: 28, show: true}
  ];

  switch(action.type) {

    case 'ADD_BOOK':
        const lastId = state[state.length - 1].id;
        const newId = lastId + 1;
        const newBook = action.payload;
        newBook.id = newId;
        newBook.show = true;
      return state.concat(newBook);

    case 'DELETE_BOOK':
        // const book = action.payload;
        // const index = state.indexOf(book);
        // const start = state.slice(0, index);
        // const end = state.slice(index + 1);
        // return start.concat(end);
        return state.filter((book) => {
            return book.id !== action.payload.id;
        });

    case 'UPDATE_BOOK':
        return state.map((book) => {
            if (book.id === action.payload.id) return action.payload;
            return book;
        });

    case 'MOVE_UP':
        if (state.indexOf(action.payload) === 0) return state;
        let newState = Object.assign([], state);
        const currentIndex = newState.indexOf(action.payload);
        newState[currentIndex] = newState[currentIndex - 1];
        newState[currentIndex - 1] = action.payload;
        return newState;

    case 'MOVE_DOWN':
        if (state.indexOf(action.payload) === state.length - 1) return state;
        let downState = Object.assign([], state);
        const currentDownIndex = downState.indexOf(action.payload);
        downState[currentDownIndex] = downState[currentDownIndex + 1];
        downState[currentDownIndex + 1] = action.payload;
        return downState;

    case 'FILTER_LIST':
        return state.map((item) => {
            const str = item.title.toLowerCase();
            if (!str.includes(action.payload)) {
                item.show = false;
                return item;
            } else {
                item.show = true;
                return item;
            }
        })
  }
  if (state) return state;
  return books;
}
