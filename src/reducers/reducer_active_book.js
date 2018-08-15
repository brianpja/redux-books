//state argument is not application state, only
//the state this reducer is responsible for

export default function(state = null, action) {
  switch(action.type) {
    case 'BOOK_SELECTED':
      return action.payload;

    case 'DELETE_BOOK':
        console.log('active book state', state);
        if (action.payload == state) {
            return null;
        }
    case 'UPDATE_BOOK':
        if(state) {
            if (action.payload.id === state.id) {
                return action.payload;
            }
        }
    }
  return state;
}
