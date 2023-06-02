import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Header } from './src/components/Header';
import { useFonts } from 'expo-font';
import { WeatherIcon } from './src/components/WeatherIcon';
import { ShowInfo } from './src/components/showInfo';
import { ShortInfo } from './src/components/ShortInfo';
import { InfoCard } from './src/components/InfoCard';
import { WeekForecast } from './src/components/WeekForecast';
import { ModalChooseCity } from './src/components/ModalChoseCity';
import { Provider } from 'react-redux';
import { store } from './src/app/store';
import { useAppSelector } from './src/app/hooks';
import MainPage from './src/mainPage';

export default function App() {
  return (
    <Provider store={store}>
      <MainPage />
    </Provider>
  );
}
