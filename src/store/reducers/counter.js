import * as actionType from '../actions';

const initialstate = {
  counter : 0
}

const reducer = (state = initialstate, action) => {
  switch(action.type) {
    case actionType.INCREMENT: 
      return { ...state, counter: state.counter + 1 }
      break;
    case actionType.DECREMENT: 
      return { ...state, counter: state.counter - 1 }
      break;
    case actionType.ADD: 
      return { ...state, counter: state.counter + action.value}
      break;
    case actionType.SUBTRACT: 
      return { ...state, counter: state.counter - action.value }
      break;
    default:
      return state;
  }
}

export default reducer;