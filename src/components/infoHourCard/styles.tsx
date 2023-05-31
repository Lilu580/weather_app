import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 13,
    height: 155,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    color: '#fff',
    fontWeight: '400',
    fontSize: 18,
  },
  isActive: {
    borderColor: '#5096FF',
    borderWidth: 2,
    borderRadius: 20,
    backgroundColor: '#2566A3'
  }
})