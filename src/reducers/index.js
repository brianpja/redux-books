import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBookReducer from './reducer_active_book';
import ModalsReducer from './reducer_modals';
import SearchReducer from './reducer_search';
import undoable, { distinctState } from 'redux-undo';


const undoableBooksReducer = undoable(BooksReducer, {
    filter: distinctState()
});

const undoableActiveBookReducer = undoable(ActiveBookReducer, {
    filter: distinctState()
})

const rootReducer = combineReducers({
  books: undoableBooksReducer,
  activeBook: ActiveBookReducer,
  modals: ModalsReducer,
  search: SearchReducer
});

const undoableReducer = undoable(rootReducer, {
    filter: distinctState()
})

export default rootReducer;
