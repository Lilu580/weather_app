import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: 310,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  temperaturesContainer: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
  day: {
    marginRight: 10,
  },
  dayText: {
    fontWeight: '500',
    color: '#fff',
    fontSize: 18,
  },
  nightText: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: 18,
    fontWeight: '500',
  },
  celsius: {
    fontSize: 12,
  },
  isActive: {
    paddingHorizontal: 10,
    width: 330,
    borderColor: '#5096FF',
    borderWidth: 2,
    borderRadius: 20,
    backgroundColor: '#2566A3',
  },
  imageAndInfoContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  weatherIcon: {
    marginRight: 20,
  },
});
