import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
    paddingVertical: 5,
    borderBottomColor: '#5096FF',
    borderBottomWidth: 1,
  },
  contentContainer: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
    alignSelf: 'flex-start',
  },
});
