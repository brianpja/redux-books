export default function(state = null, action) {


  switch(action.type) {
    case 'ADD_BOOK':
      console.log('state', state)
      return action.payload;
  }
  return state;
}
