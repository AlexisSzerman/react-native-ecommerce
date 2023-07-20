import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../Global/Theme";

const Card = ({ children, additionalStyle = []}) => {

  return <View style={[styles.containerCard, additionalStyle]}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  containerCard: {
    height:60,
    width:350,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderWidth: 2,
    borderColor: colors.blue,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.navy,
    borderRadius: 20,
    marginVertical: 10
  },
});
