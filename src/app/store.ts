import { configureStore } from '@reduxjs/toolkit';
import citiesReducer from '../features/cities';
import weatherReducer from '../features/weather';

export const store = configureStore({
  reducer: {
    cities: citiesReducer,
    weather: weatherReducer
  }
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;