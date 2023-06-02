import {
  PayloadAction,
  createAsyncThunk,
  createSlice,
  isRejectedWithValue,
} from '@reduxjs/toolkit';
import { WeatherData } from '../types/currentWeather';
import { getWeather } from '../api';

export const init = createAsyncThunk(
  'weather/fetch',
  async (selectedCity: string, { rejectWithValue }) => {
    try {
      const weatherFromServer = await getWeather(selectedCity);
      return weatherFromServer;
    } catch {
      rejectWithValue('This city is not Aviable')
    }
  }
);

type WeatherState = {
  weather: WeatherData | null;
  loading: boolean;
  error: string | undefined;
};

const initialState: WeatherState = {
  weather: null,
  loading: false,
  error: '',
};

const citiesSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setWeather(state, action: PayloadAction<WeatherData>) {
      state.weather = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(init.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(init.fulfilled, (state, action: PayloadAction<WeatherData>) => {
      state.weather = action.payload;
      state.loading = false;
    });
    builder.addCase(init.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addMatcher(isRejectedWithValue, (state, action) => {
      switch (action.payload as string) {
        case 'This city is not Aviable':
          state.error = 'This city is not available';
          break;
        default:
          state.error = 'An error occurred';
      }
    });
  },
});

export const { setWeather } = citiesSlice.actions;
export default citiesSlice.reducer;
