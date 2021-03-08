import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

//Reducers
import favorites from './favorites';

const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: [],
};

//combine reducers
const rootReducer = combineReducers({
  favorites,
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export default persistedReducer;
