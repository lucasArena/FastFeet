import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';

import rootSagas from './modules/rootSagas';
import rootReducers from './modules/rootReducers';

import createStore from './createStore';
import persistReducer from './persistReducer';

const sagaMonitor =
  __DEV__ === 'development' ? console.tron.createSagaMonitor() : null;

const sagaMiddlewares = createSagaMiddleware({ sagaMonitor });

const middlewares = [sagaMiddlewares];

const store = createStore(persistReducer(rootReducers), middlewares);
const persistor = persistStore(store);

sagaMiddlewares.run(rootSagas);

export { store, persistor };
