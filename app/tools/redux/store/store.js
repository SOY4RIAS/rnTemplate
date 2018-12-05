import { createStore, applyMiddleware } from 'redux'
import persistStore from 'redux-persist/es/persistReducer'
import persistReducer from 'redux-persist/es/persistReducer'

import reducers from "../reducers/user/user";

import storage from 'redux-persist/lib/storage'

// import reducers from '../reducers/reducers'

import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers'


/**
 * TODO: test this, (is this working?, Do I need it?)
*/
const navigationMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.navigation
)

const persistConfig = {
  key: 'root',
  storage,
  blacklist: []
}

const persisted = persistReducer(persistConfig, reducers)

const store = createStore(persisted, applyMiddleware())

const persistor = persistStore(store);

export { store, persistor }
