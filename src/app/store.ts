import { configureStore } from '@reduxjs/toolkit';
import citiesReducer from '../features/cities';
import weatherReducer from '../features/weather';
import weeksReducer from '../features/calendar';

export const store = configureStore({
  reducer: {
    cities: citiesReducer,
    weather: weatherReducer,
    weeks: weeksReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
