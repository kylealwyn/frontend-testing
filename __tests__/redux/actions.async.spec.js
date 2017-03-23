import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../../src/redux/actions'
import * as types from '../../src/redux/types'
import nock from 'nock'

describe('async actions', () => {
  const middlewares = [ thunk ]
  const mockStore = configureMockStore(middlewares)
  let store;

  beforeEach(() => {
    store = mockStore({ todos: [] });

    nock('http://example.com/')
      .get('/todos')
      .reply(200, { body: { todos: ['do something'] }})
  });

  afterEach(() => {
    nock.cleanAll()
  })

  it('creates FETCH_TODOS_SUCCESS when fetching todos has been done', () => {
    return store.dispatch(actions.fetchTodos())
      .then(() => { // return of async actions
        expect(store.getActions()).toMatchSnapshot()
      })
  })
})
