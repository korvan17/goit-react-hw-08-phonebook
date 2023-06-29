import '../../index.css';
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { phoneBookApi } from './contactSlice';
import { filtersReducer } from './filterSlice';
import { authReducer } from './authSlice';



export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    auth: authReducer,
    [phoneBookApi.reducerPath]: phoneBookApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(phoneBookApi.middleware),
});

// api.initCache().then(() => {
//   const savedToken = api.getState().queries.authToken?.data;

//   if (savedToken) {
//     store.dispatch(setAuthToken(savedToken));
//   }
// });

setupListeners(store.dispatch)