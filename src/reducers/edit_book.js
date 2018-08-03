//state argument is not application state, only
//the state this reducer is responsible for

export default function(state = null, action) {
    console.log('this is my edit state: ', state);
  switch(action.type) {
    case 'EDIT_BOOK':
      console.log(action.payload)
  }
  return state;
}
