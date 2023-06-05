import { Calendar, DateData } from 'react-native-calendars';
import { useCallback } from 'react';
import { View, TouchableWithoutFeedback, Modal } from 'react-native';
import { styles } from './styles';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setOpen, setSelectedWeek } from '../../features/calendar';

export const CustomCalendar = () => {
  const { selectedWeek, isOpenModal } = useAppSelector((state) => state.weeks);
  const dispatch = useAppDispatch();

  const handleCloseModals = () => {
    dispatch(setOpen(false));
  };

  const handleWeekSelect = useCallback((date: DateData) => {
    const startOfWeek = date.dateString;
    const endOfWeek = new Date(date.timestamp);
    endOfWeek.setDate(endOfWeek.getDate() + 6);
    const weekDates = [];
    let currentDate = new Date(startOfWeek);

    while (currentDate <= endOfWeek) {
      const formattedDate = currentDate.toISOString().split('T')[0];
      const weekDay = currentDate
        .toLocaleString('en-US', { weekday: 'long' })
        .split(',')[0];
      const date = {
        currDate: currentDate.toISOString(), // Зміна типу на рядок
        day: formattedDate,
        weekDay,
      };

      weekDates.push(date);
      currentDate.setDate(currentDate.getDate() + 1);
    }

    dispatch(setSelectedWeek(weekDates));
  }, []);

  const markedDates: {[key: string]: { selected: boolean; marked: boolean }} = {};

  for (const date of selectedWeek) {
    const dateString = new Date(date.currDate).toISOString().split('T')[0];
    markedDates[dateString] = { selected: true, marked: true };
  }

  return (
    <Modal visible={isOpenModal} transparent animationType="slide">
      <TouchableWithoutFeedback onPress={handleCloseModals}>
        <View style={styles.modalOverlay}>
          <TouchableWithoutFeedback>
            <View style={styles.container}>
              <Calendar
                onDayLongPress={handleWeekSelect}
                onDayPress={handleWeekSelect}
                markedDates={markedDates}
                markingType="period"
              />
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};
