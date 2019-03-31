import * as actionType from '../actions';

const initialstate = {
  results: []
}

const reducer = (state = initialstate, action) => {
  switch (action.type) {
    case actionType.SHOW_RESULT:
      return { ...state, results: state.results.concat(action.value) }
    case actionType.DELETE_RESULT:
      // const id = 2;
      // const newArray = [...state.results];
      // newArray.splice(id, 1)
      const updatedArray = state.results.filter(result => result.id !== action.resultElId);
      return {...state,results: updatedArray}
    default:
      return state;
  }
}

export default reducer;