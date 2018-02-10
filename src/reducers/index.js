import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';
import AddBook from './reducer_add_book';

const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook,
  newBook: AddBook
});

export default rootReducer;
