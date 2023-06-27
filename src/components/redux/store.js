import '../../index.css';
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { phoneBookApi } from './contactSlice';
import { filtersReducer } from './filterSlice';



export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    [phoneBookApi.reducerPath]: phoneBookApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(phoneBookApi.middleware),
});

setupListeners(store.dispatch)