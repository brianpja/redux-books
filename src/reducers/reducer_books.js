export default function(state = null, action) {
    console.log('this is my state: ', state)
  const books = [
    {title: 'JavaScript', pages: 101},
    {title: 'Harry Potter', pages: 512},
    {title: 'The Dark Tower', pages: 640},
    {title: 'Eloquent Ruby', pages: 28}
  ];

  switch(action.type) {
    case 'ADD_BOOK':
      // console.log('action: ', action.payload)
      // console.log(state);

      return state.concat(action.payload);
    case 'DELETE_BOOK':
        // console.log(action.payload);
        const book = action.payload;
        const index = state.indexOf(book);
        // console.log(books);
        console.log(index);
        const start = state.slice(0, index);
        const end = state.slice(index + 1);
        return start.concat(end);
  }
  if (state) return state;
  return books;
}
