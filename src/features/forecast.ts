import {
  PayloadAction,
  createAsyncThunk,
  createSlice,
  isRejectedWithValue,
} from '@reduxjs/toolkit';
import { WeatherData } from '../types/WeatherData';
import { getHistoryWeather, getFutureWeather } from '../api';

type Props = {
  selectedCity: string;
  selectedDay: string;
};

export const getHistoryFromServer = createAsyncThunk(
  'forecastHistory/fetch',
  async ({ selectedCity, selectedDay }: Props, { rejectWithValue }) => {
    try {
      const forecastFromServer = await getHistoryWeather(
        selectedCity,
        selectedDay
      );
      return forecastFromServer;
    } catch (error: any) {
      return Promise.reject(error.message);
    }
  }
);

export const getFutureFromServer = createAsyncThunk(
  'forecastFuture/fetch',
  async ({ selectedCity, selectedDay }: Props, { rejectWithValue }) => {
    try {
      const forecastFromServer = await getFutureWeather(
        selectedCity,
        selectedDay
      );
      return forecastFromServer;
    } catch (error: any) {
      return Promise.reject(error.message);
    }
  }
);

type WeatherState = {
  history: WeatherData[] | [];
  loadingHistroty: boolean;
  isErrorHistory: string | undefined;
  future: WeatherData[] | [];
  loadingFuture: boolean;
  isErrorFuture: string | undefined;
};

const initialState: WeatherState = {
  history: [],
  loadingHistroty: false,
  isErrorHistory: '',
  future: [],
  loadingFuture: false,
  isErrorFuture: '',
};

const forecastSlice = createSlice({
  name: 'forecast',
  initialState,
  reducers: {
    clearForecast(state) {
      state.future = [];
      state.history = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getHistoryFromServer.pending, (state) => {
      state.loadingHistroty = true;
    });
    builder.addCase(
      getHistoryFromServer.fulfilled,
      (state, action: PayloadAction<WeatherData>) => {
        state.history = [...state.history, action.payload];
        state.loadingHistroty = false;
      }
    );
    builder.addCase(getHistoryFromServer.rejected, (state, action) => {
      state.loadingHistroty = false;
      state.isErrorHistory = action.error.message;
    });
    builder.addCase(getFutureFromServer.pending, (state) => {
      state.loadingFuture = true;
    });
    builder.addCase(
      getFutureFromServer.fulfilled,
      (state, action: PayloadAction<WeatherData>) => {
        state.future = [...state.future, action.payload];
        state.loadingFuture = false;
      }
    );
    builder.addCase(getFutureFromServer.rejected, (state, action) => {
      state.loadingFuture = false;
      state.isErrorFuture = action.error.message;
    });
    builder.addMatcher(isRejectedWithValue, (state, action) => {
      switch (action.payload as string) {
        case 'This city is not Aviable':
          state.isErrorFuture = action.payload as string;
          break;
        default:
          state.isErrorFuture = 'An error occurred';
      }
    });
  },
});

export const { clearForecast } = forecastSlice.actions;
export default forecastSlice.reducer;
