import * as Actions from '../../src/redux/actions'
import * as Types from '../../src/redux/types';

describe('Redux Actions', () => {
  it('should create an action and match expected object', () => {
    const text = 'Finish docs';
    const expectedAction = {
      type: Types.ADD_TODO,
      payload: text,
    };

    expect(Actions.addTodo(text)).toEqual(expectedAction);
  });

  it('should create an action and match snapshot', () => {
    const text = 'Finish docs';

    expect(Actions.addTodo(text)).toMatchSnapshot();
  })
})
