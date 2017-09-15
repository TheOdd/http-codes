import { createStore } from 'redux';
import rootReducer from '../reducers';

// Seperate file to create store from the rootReducer and initialState.
// Flexible for implementing future reducers and managing them all in one place.

export function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState
  )
}
