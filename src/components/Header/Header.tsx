import Location from '../../../assets/images/Location.svg';
import Vector from '../../../assets/images/Vector.svg';
import Notification from '../../../assets/images/Notification.svg';
import { StyleSheet, Text, View } from 'react-native';
import { styles } from './styles';

export const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.locationContainer}>
        <Location width={24} height={20} />
        <Text style={styles.city}> Kyiv </Text>
        <Vector width={10} height={10}/>
      </View>
      <View style={styles.notificationContainer}>
        <Notification width={24} height={24} />
        <View style={styles.notificationRing}></View>
      </View>
    </View>
  );
};