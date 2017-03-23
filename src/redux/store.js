import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import todoReducer from './reducers';

export const configureStore = () => {
  const store = createStore(todoReducer, {}, applyMiddleware(
   thunkMiddleware,
 ))

 return store;
}
