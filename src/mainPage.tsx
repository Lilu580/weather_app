import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { Header } from './components/Header';
import { useFonts } from 'expo-font';
import { WeatherIcon } from './components/WeatherIcon';
import { ShowInfo } from './components/showInfo';
import { ShortInfo } from './components/ShortInfo';
import { InfoCard } from './components/InfoCard';
import { WeekForecast } from './components/WeekForecast';
import { ModalChooseCity } from './components/ModalChoseCity';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { setOpen } from './features/cities';

export default function MainPage() {
  const { isOpenModal } = useAppSelector(state => state.cities)
  const dispatch = useAppDispatch();

  const handleCloseModals = () => {
    dispatch(setOpen(false));
  }

  console.log(isOpenModal)
  return (
    <ScrollView>
      <TouchableWithoutFeedback onPress={handleCloseModals}>
        <View>
          <StatusBar style="auto" />
          <LinearGradient
            colors={['#08244F', '#134CB5', '#0B42AB']}
            style={styles.container}
          > 
            <ModalChooseCity />
            <Header />
            <WeatherIcon />
            <ShowInfo />
            <ShortInfo />
            <InfoCard />
            <WeekForecast/>
          </LinearGradient>
        </View>
        </TouchableWithoutFeedback>
      </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: '100%',
    paddingVertical: 70,
    paddingHorizontal: 30,
  },
});