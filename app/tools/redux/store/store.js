import { createStore, applyMiddleware } from 'redux'
import persistStore from 'redux-persist/es/persistReducer'

import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers'

import persistedReducer from './persistConfig'

/**
 * TODO: test this, (is this working?, Do I need it?)
*/
const navigationMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.navigation
)

const store = createStore(persistedReducer, applyMiddleware())

const persistor = persistStore(store);

export { store, persistor }
