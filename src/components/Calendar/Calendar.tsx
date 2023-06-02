import { Calendar } from 'react-native-calendars';
import { View } from 'react-native';
import { styles } from './styles';

export const CustomCalendar = () => {
  return (
    <View>
      <Calendar style={styles.container}>
      </Calendar>
    </View>
  )
}
