import todoReducer, { initialTodoState } from '../../src/redux/reducers';
import * as types from '../../src/redux/types';

describe('todos reducer', () => {
  it('should return the initial state', () => {
    expect(
      todoReducer(undefined, {})
    ).toEqual(initialTodoState);
  });

  it('should handle ADD_TODO', () => {
    // create our first todo
    const firstTodoState = todoReducer(initialTodoState, {
      type: types.ADD_TODO,
      text: 'First Todo'
    });

    expect(firstTodoState).toMatchSnapshot();

    // add a second todo
    const secondTodoState = todoReducer(firstTodoState, {
      type: types.ADD_TODO,
      text: 'Second Todo'
    });

    expect(secondTodoState).toMatchSnapshot();
  });

  it('should handle FETCH_TODOS_SUCCESS', () => {
    const state = todoReducer(initialTodoState, {
      type: types.FETCH_TODOS_SUCCESS,
      payload: ['todo1', 'todo2'],
    });

    expect(state).toEqual(['todo1', 'todo2'])
  });
});
