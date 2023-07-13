import { Image, StyleSheet, Text } from "react-native";
import React from "react";
import Card from "./Card";
import { colors } from "../Global/Theme";

const ProductItem = ({ item }) => {
  return (
    <Card additionalStyle={styles.additionalStylesCard}>
      <Text style={styles.textCategory}>{item.title}</Text>
      <Image
        resizeMode="cover"
        style={styles.image}
        source={{ uri: item.images[0] }}
      />
    </Card>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  image: {
    height: 100,
    width: 100,
    borderRadius: 8,
    margin: 10,
  },
  additionalStylesCard: {
    flexDirection: "row",
    height: 120,
    justifyContent: "space-between",
    borderColor: colors.orange,
  },
  textCategory:{
    color: colors.orange,
    marginLeft: 10,
    fontSize:18,
    fontFamily: 'Raleway'
  }
});
