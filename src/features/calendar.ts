import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { SelectedDate } from '../types/SelectedDate';

type Week = {
  selectedWeek: SelectedDate[] | [];
  isOpenModal: boolean;
};

const initialState: Week = {
  selectedWeek: [],
  isOpenModal: false,
};

const weeksSlice = createSlice({
  name: 'week',
  initialState,
  reducers: {
    setSelectedWeek(state, action: PayloadAction<SelectedDate[]>) {
      state.selectedWeek = action.payload;
    },
    setOpen(state, action: PayloadAction<boolean>) {
      state.isOpenModal = action.payload;
    },
  },
});

export const { setSelectedWeek, setOpen } = weeksSlice.actions;
export default weeksSlice.reducer;
