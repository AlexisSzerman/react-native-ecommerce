import { useFonts } from 'expo-font';
import Navigator from './src/Navigation/Navigator';

export default function App() { 
  const [fontsLoaded] = useFonts({
    'LilitaOne': require('./src/Assets/Fonts/LilitaOne/LilitaOne-Regular.ttf'),
    'Raleway': require('./src/Assets/Fonts/Raleway/Raleway-SemiBold.ttf')   
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Navigator/>
  );
}

