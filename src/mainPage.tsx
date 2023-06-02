import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  ScrollView,
} from 'react-native';
import { Header } from './components/Header';
import { WeatherIcon } from './components/WeatherIcon';
import { ShowInfo } from './components/showInfo';
import { ShortInfo } from './components/ShortInfo';
import { InfoCard } from './components/InfoCard';
import { WeekForecast } from './components/WeekForecast';
import { ModalChooseCity } from './components/ModalChoseCity';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { useEffect } from 'react';
import * as weatherActions from './features/weather';
import { CustomCalendar } from './components/Calendar/Calendar';

export default function MainPage() {
  const { SelectedCity } = useAppSelector((state) => state.cities);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(weatherActions.init(SelectedCity));
  }, [SelectedCity]);

  return (
    <ScrollView>
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
        <WeekForecast />
        <CustomCalendar></CustomCalendar>
      </LinearGradient>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: '100%',
    paddingVertical: 70,
    paddingHorizontal: 30,
  },
});
