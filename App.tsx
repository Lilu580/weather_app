import { Provider } from 'react-redux';
import { store } from './src/app/store';
import MainPage from './src/mainPage';

export default function App() {
  return (
    <Provider store={store}>
      <MainPage />
    </Provider>
  );
}
