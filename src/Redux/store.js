import { configureStore } from '@reduxjs/toolkit';
import rootReducers from './Reducers/rootReducers';
import pokemonSaga from './Sagas/saga';
import createSagaMiddleware from '@redux-saga/core';

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
    reducer: rootReducers,
    middleware: () => [sagaMiddleware]
});

sagaMiddleware.run(pokemonSaga);
export default store;
