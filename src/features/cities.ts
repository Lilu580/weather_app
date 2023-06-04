import { PayloadAction, createAsyncThunk, createSlice, isRejectedWithValue } from '@reduxjs/toolkit';
import { getCities, getWeather } from '../api';
import { CityFromServer, SelectedCity } from '../types/currentWeather';

export const initCities = createAsyncThunk(
  'city/fetch',
  async (query: string, { rejectWithValue }) => {
    try {
      const citiesFromServer = await getCities(query);
      return citiesFromServer;
    } catch (error: any) {
      return Promise.reject(error.message);
    }
  }
);

type CitiesState = {
  query: string,
  SelectedCity: SelectedCity,
  SelectedCities: SelectedCity[],
  isOpenModal: boolean,
  citiesFromServer: CityFromServer[],
  isLoadingCitiesFromServer: boolean,
  isErrorCitiesFromServer: string | undefined,
}

const Warsaw = {
  id: 1988803,
  name: "Warsaw",
  region: "",
  country: "Poland",
  lat: 52.25,
  lon: 21.0,
  url: "warsaw-poland"
}

const initialState : CitiesState = {
  query: '',
  SelectedCity: Warsaw,
  SelectedCities: [Warsaw],
  isOpenModal: false,
  citiesFromServer: [],
  isLoadingCitiesFromServer: false,
  isErrorCitiesFromServer: '',
}

const citiesSlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {
    setSelectedCity(state, action: PayloadAction<SelectedCity>) {
      state.SelectedCity = action.payload;
    },
    setCity(state, action: PayloadAction<SelectedCity>) {
      if (!state.SelectedCities.find((city) => city.id === action.payload.id)) {
        state.SelectedCities = [...state.SelectedCities, action.payload];
      }
    },
    removeCity(state, action: PayloadAction<SelectedCity>) {
      state.SelectedCities = state.SelectedCities.filter(
        (city) => city.id !== action.payload.id
      );
    },
    setOpen(state, action: PayloadAction<boolean>) {
      state.isOpenModal = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(initCities.pending, (state) => {
      state.isLoadingCitiesFromServer = true;
    });
    builder.addCase(
      initCities.fulfilled,
      (state, action: PayloadAction<CityFromServer[]>) => {
        state.citiesFromServer = action.payload;
        state.isLoadingCitiesFromServer = false;
      }
    );
    builder.addCase(initCities.rejected, (state, action) => {
      state.isLoadingCitiesFromServer = false;
      state.isErrorCitiesFromServer = action.error.message;
    });
    builder.addMatcher(isRejectedWithValue, (state, action) => {
      switch (action.payload as string) {
        case 'This city is not Aviable':
          state.isErrorCitiesFromServer = action.payload as string;
          break;
        default:
          state.isErrorCitiesFromServer = 'An error occurred';
      }
    });
  }
});

export const { setCity, setSelectedCity, setOpen, removeCity } =
  citiesSlice.actions;
export default citiesSlice.reducer;
