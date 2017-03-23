import { ADD_TODO, FETCH_TODOS_SUCCESS } from './types'

export const initialTodoState = []

export default function todos(state = initialTodoState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        {
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          completed: false,
          text: action.text
        },
        ...state
      ];

    case FETCH_TODOS_SUCCESS:
      return [
        ...action.payload,
        ...state,
      ];

    default:
      return state
  }
}
