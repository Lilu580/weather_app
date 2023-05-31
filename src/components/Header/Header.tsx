import Location from '../../../assets/images/Location.svg';
import { StyleSheet, Text, View } from 'react-native';

export const Header = () => {
  return (
    <View style={styles.container}>
      <Location width={24} height={20} />
      <Text> Kyiv </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    height: 30,
  },
  city: {},
});
