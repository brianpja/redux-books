//state argument is not application state, only
//the state this reducer is responsible for

export default function(state = null, action) {
    console.log('this is my detail state: ', state);
  switch(action.type) {
    case 'BOOK_SELECTED':
      return action.payload;

    case 'DELETE_BOOK':
        if (action.payload === state) {
            return null;
        }
  }
  return state;
}
