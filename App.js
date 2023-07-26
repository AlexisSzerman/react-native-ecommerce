import { useFonts } from 'expo-font';
import Navigator from './src/Navigation/Navigator';
import { Provider } from 'react-redux';
import store from './src/Store/store'

export default function App() { 
  const [fontsLoaded] = useFonts({
    'LilitaOne': require('./src/Assets/Fonts/LilitaOne/LilitaOne-Regular.ttf'),
    'Raleway': require('./src/Assets/Fonts/Raleway/Raleway-SemiBold.ttf')   
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <Navigator/>
    </Provider>
  );
}



