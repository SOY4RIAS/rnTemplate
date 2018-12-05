import storage from 'redux-persist/lib/storage'
import persistReducer from 'redux-persist/es/persistReducer'

import reducers from '../reducers/reducers'

const persistConfig = {
  key: 'root',
  storage,
  blacklist: []
}

const persisted = persistReducer(persistConfig, reducers)
console.log(persisted);

export default persisted