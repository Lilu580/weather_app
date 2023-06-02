import { PayloadAction, createAsyncThunk, createSlice, isRejectedWithValue } from "@reduxjs/toolkit"
import { WeatherData } from "../types/currentWeather"
import { getWeather } from "../api";

export const init = createAsyncThunk ('weather/fetch', async (selectedCity: string, { rejectWithValue }) => {
  const weatherFromserver = await getWeather(selectedCity);
})

type WeatherState = {
  weather: WeatherData | null,
  loading: boolean,
  error: string | undefined,
}

const initialState: WeatherState = {
  weather: null,
  loading: false,
  error: '',
}

const citiesSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setWeather(state, action: PayloadAction<string>) {
      state.weather = action.payload
    }
  },
  extraReducers: builder => {
    builder.addCase(init.pending, state => {
      state.loading = true;
    });
    builder.addCase(init.fulfilled, (state, action) => {
      state.weather = action.payload;
      state.loading = false;
    });
    builder.addCase(init.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addMatcher(isRejectedWithValue, (state, action) => {
      action.type = 'weather/fetch';
      switch (action.type) {
        case 'weather/fetch':
          return 
      }
    })
  },
})

export const { setWeather } = citiesSlice.actions
export default citiesSlice.reducer