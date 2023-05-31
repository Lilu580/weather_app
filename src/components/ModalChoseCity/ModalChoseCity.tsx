import { View, TouchableWithoutFeedback, TextInput, Modal } from 'react-native';
import { styles } from './styles';
import { ModalChooseCityList } from '../ModalChooseCityList';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setOpen } from '../../features/cities';

export const ModalChooseCity = () => {
  const { isOpenModal } = useAppSelector(state => state.cities)
  const dispatch = useAppDispatch();

  const handleCloseModals = () => {
    dispatch(setOpen(false));
  }

  return ( 
    <Modal visible={isOpenModal} transparent animationType="slide">
      <TouchableWithoutFeedback onPress={handleCloseModals}>
      <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="choose city..."
        keyboardType="default"
      />
      <ModalChooseCityList />
    </View>
    </TouchableWithoutFeedback>
  </Modal>
  );
};