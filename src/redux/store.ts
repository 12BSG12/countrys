import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { countriesAPI } from './reducers/countriesAPI';
import sortReducer from './reducers/sort';

const rootReducer = combineReducers({
  [countriesAPI.reducerPath]: countriesAPI.reducer,
  sort: sortReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(countriesAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;