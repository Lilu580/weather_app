import { View, TouchableWithoutFeedback, TextInput, Modal } from 'react-native';
import { styles } from './styles';
import { ModalChooseCityList } from '../ModalChooseCityList';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setCity, setOpen } from '../../features/cities';
import { useState } from 'react';

export const ModalChooseCity = () => {
  const { isOpenModal } = useAppSelector(state => state.cities)
  const dispatch = useAppDispatch();
  const [query, setQuery] = useState('');

  const handleCloseModals = () => {
    dispatch(setOpen(false));
  }

  const handleFindCity = () => {
    dispatch(setCity(query))
    setQuery('');
  }

  return ( 
    <Modal visible={isOpenModal} transparent animationType="slide">
      <TouchableWithoutFeedback onPress={handleCloseModals}>
        <View style={styles.modalOverlay}>
        <TouchableWithoutFeedback>
          <View style={styles.container}>
            <TextInput
              value={query}
              onChangeText={setQuery}
              style={styles.input}
              placeholder="choose city..."
              keyboardType="default"
              onSubmitEditing={handleFindCity}
            />
            <ModalChooseCityList />
          </View>
        </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
  </Modal>
  );
};