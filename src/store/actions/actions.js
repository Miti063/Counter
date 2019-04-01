export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const SHOW_RESULT = 'SHOW_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';

export const increment = () => {
  return {
    type: INCREMENT
  }
}

export const decrement = () => {
  return {
    type: DECREMENT
  }
}

export const add = (val) => {
  return {
    type: ADD,
    value: val
  }
}

export const subtract = (val) => {
  return {
    type: SUBTRACT,
    value: val
  }
}

export const show_result = (result) => {
  return {
    type: SHOW_RESULT,
    value: result
  }
}

export const delete_result = (id) => {
  return {
    type: DELETE_RESULT,
    resultElId: id
  }
}