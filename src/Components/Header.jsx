import React from 'react'
import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from '../Global/Theme'
import { AntDesign } from "@expo/vector-icons";

const Header = ({ route, navigation }) => {
  let title
  if (route.name === 'Home') title = 'Home'
  if (route.name === 'ItemListCategory') title = route.params.category
  if (route.name === 'ItemDetail') title = route.params.title
  return (
      <View style={styles.containerHeader}>
          <Text style={styles.headerText}>{title}</Text>
          {route.name !== "Home" ? (
              <Pressable
                  style={styles.pressable}
                  onPress={() => navigation.goBack()}
              >
                  <AntDesign name="back" size={20} color={colors.orange} />
              </Pressable>
          ) : null}
      </View>
  );
};

export default Header

const styles = StyleSheet.create({
    containerHeader:{
        backgroundColor: colors.blue,
        justifyContent: 'center',
        alignItems:'center',
        paddingVertical: 10
    },
    headerText:{
        fontSize:33,
        color: colors.orange,
        fontFamily: 'LilitaOne'
    },
    pressable: {
      position: "absolute",
      left: 20,
      top: "50%",
      borderColor: colors.orange,
      borderRadius: 20,
      borderWidth: 2,
      padding: 5,
      backgroundColor: colors.navy
  }
})