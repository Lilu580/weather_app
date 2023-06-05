import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    height: 30,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  locationContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  city: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFF',
  },
  notificationRing: {
    width: 8,
    height: 8,
    borderWidth: 1,
    borderColor: '#47BBE1',
    borderRadius: 50,
    backgroundColor: '#FF7C7C',
    position: 'absolute',
    right: 0,
  },
  notificationContainer: {
    position: 'relative',
  },
  touch: {
    top: 5,
    width: 20,
    height: 20,
  },
});
