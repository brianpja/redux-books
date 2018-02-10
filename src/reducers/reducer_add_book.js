export default function(state = null, action) {
  console.log('reducing add')
  console.log(action)
  switch(action.type) {
    case 'ADD_BOOK':
      return action.payload;
  }
  return state;
}
