import Location from '../../../assets/images/Location.svg';
import Vector from '../../../assets/images/Vector.svg';
import Notification from '../../../assets/images/Notification.svg';
import { TouchableOpacity, Text, View } from 'react-native';
import { styles } from './styles';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setOpen } from '../../features/cities';

export const Header = () => {
  const dispatch = useAppDispatch();
  const { weather } = useAppSelector(state => state.weather);

  const handleOpenModal = () => {
    dispatch(setOpen(true));
  };

  return (
    <View style={styles.container}>
      <View style={styles.locationContainer}>
        <Location width={24} height={20} />
        <Text style={styles.city}>{weather?.location.name}</Text>
        <TouchableOpacity onPress={handleOpenModal} style={styles.touch}>
          <Vector width={10} height={10} />
        </TouchableOpacity>
      </View>
      <View style={styles.notificationContainer}>
        <Notification width={24} height={24} />
        <View style={styles.notificationRing}></View>
      </View>
    </View>
  );
};
