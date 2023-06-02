import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const citiesSlice = createSlice({
  name: 'cities',
  initialState: {
    SelectedCity: 'Warsaw',
    SelectedCities: ['Warsaw'],
    isOpenModal: false,
  },
  reducers: {
    setSelectedCity(state, action: PayloadAction<string>) {
      state.SelectedCity = action.payload;
    },
    setCity(state, action: PayloadAction<string>) {
      if (!state.SelectedCities.find((city) => city === action.payload)) {
        state.SelectedCities = [...state.SelectedCities, action.payload];
      }
    },
    removeCity(state, action: PayloadAction<string>) {
      state.SelectedCities = state.SelectedCities.filter(
        (city) => city !== action.payload
      );
    },
    setOpen(state, action: PayloadAction<boolean>) {
      state.isOpenModal = action.payload;
    },
  },
});

export const { setCity, setSelectedCity, setOpen, removeCity } =
  citiesSlice.actions;
export default citiesSlice.reducer;
