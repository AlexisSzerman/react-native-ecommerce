import { StyleSheet, View } from "react-native";
import Header from "./src/Components/Header";
import ItemListCategory from "./src/Screens/ItemListCategory";
import { useFonts } from 'expo-font';
import { useState } from 'react';
import Home from "./src/Screens/Home"

export default function App() {

  const [categorySelected, setCategorySelected] = useState("")
  
  const [fontsLoaded] = useFonts({
    'LilitaOne': require('./src/Assets/Fonts/LilitaOne/LilitaOne-Regular.ttf'),
    'Raleway': require('./src/Assets/Fonts/Raleway/Raleway-SemiBold.ttf')
    
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style = {styles.container}>
    <Header/>
    {
      categorySelected ? 
      <ItemListCategory 
        category={categorySelected}
        setCategory={setCategorySelected}
      /> :
      <Home
        setCategorySelected={setCategorySelected}
      />
    }
  </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
