import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Card from "./Card";
import { colors } from "../Global/Theme";

const ProductItem = ({ item }) => {
  return (
    <Card additionalStyle={styles.additionalStylesCard}>
      <View style={styles.contentContainer}>
        <Text style={styles.textCategory} numberOfLines={2} ellipsizeMode="tail"> 
        //Encontré estas propiedades en la documentacion para que el texto no me empujara la imagen fuera de la Card
          {item.title}
        </Text>
      </View>
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
  contentContainer: {
    flex: 1,
    marginRight: 10,
  },
  textCategory: {
    color: colors.orange,
    fontSize: 18,
    fontFamily: "Raleway",
  }
});
