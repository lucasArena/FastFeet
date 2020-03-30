import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

export default reducers => {
  const persistedReducers = persistReducer(
    {
      key: 'fastfeet',
      storage: AsyncStorage,
      whitelist: ['auth', 'user'],
    },
    reducers
  );

  return persistedReducers;
};
