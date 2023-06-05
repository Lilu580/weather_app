import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    position: 'absolute',
    top: 90,
    left: 30,
    zIndex: 2,
    backgroundColor: '#104084',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    gap: 0,
    borderRadius: 10,
  },
  input: {
    minWidth: 150,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    borderWidth: 2,
    borderRadius: 5,
    width: '100%',
    height: 40,
    borderColor: '#5096FF',
    padding: 10,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
