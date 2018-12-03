import storage from 'redux-persist/lib/storage'
import persistReducer from 'redux-persist/es/persistReducer'

import reducers from '../reducers/reducers'

const persistConfig = {
  key: 'root',
  storage,
  blacklist: []
}

export default persistReducer(persistConfig, reducers)