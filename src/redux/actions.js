import fetch from 'isomorphic-fetch';
import * as Types from './types';

export const addTodo = (text) => ({
  type: Types.ADD_TODO,
  payload: text,
});

function fetchTodosRequest() {
  return {
    type: Types.FETCH_TODOS_REQUEST
  }
}

function fetchTodosSuccess(body) {
  return {
    type: Types.FETCH_TODOS_SUCCESS,
    payload: body
  }
}

function fetchTodosFailure(error) {
  return {
    type: Types.FETCH_TODOS_FAILURE,
    payload: error
  }
}

export function fetchTodos() {
  return dispatch => {
    dispatch(fetchTodosRequest())
    return fetch('http://example.com/todos')
      .then(res => res.json())
      .then(json => dispatch(fetchTodosSuccess(json.body)))
      .catch(ex => dispatch(fetchTodosFailure(ex)))
  }
}
