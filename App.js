import { useFonts } from 'expo-font';
import Navigator from './src/Navigation/Navigator';
import { Provider } from 'react-redux';
import store from './src/Store/store'
import { dropTableSessions, init } from './src/SQLite';
import { useEffect } from 'react';

export default function App() { 

  useEffect(()=> {
    init()
      .then((result)=> {
        console.log('Db initialized/dropped')
        console.log(result);
      })
      .catch(err => {
        console.log("Initialization of DB failed:");
        console.log(err.message);
    })
  }, [])

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



