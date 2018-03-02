export default function(state = null, action) {
  const books = [
    {title: 'JavaScript', pages: 101},
    {title: 'Harry Potter', pages: 512},
    {title: 'The Dark Tower', pages: 640},
    {title: 'Eloquent Ruby', pages: 28}
  ];

  switch(action.type) {
    case 'ADD_BOOK':
      console.log('action: ', action.payload)
      return books.concat(action.payload);
  }
  return books;
}
