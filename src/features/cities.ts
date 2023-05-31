import { PayloadAction, createSlice } from "@reduxjs/toolkit"

const citiesSlice = createSlice({
  name: "message",
  initialState: {
    SelectedCity: 'kyiv',
    SelectedCities: ['Kyiv'],
    isOpenModal: false,
  },
  reducers: {
    setSelectedCity(state, action: PayloadAction<string>) {
      state.SelectedCity = action.payload
    },
    setMessage(state, action: PayloadAction<string>) {
      state.SelectedCities = [...state.SelectedCities, action.payload];
    },
    setOpen(state, action: PayloadAction<boolean>) {
      state.isOpenModal = action.payload
    }
  }
})

export const { setMessage, setSelectedCity, setOpen } = citiesSlice.actions
export default citiesSlice.reducer