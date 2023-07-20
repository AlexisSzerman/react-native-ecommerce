import {
  Image,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  Pressable,
} from "react-native";

import React from "react";
import Card from "./Card";
import { colors } from "../Global/Theme";

const ProductItem = ({ item, navigation }) => {
  const { height, width } = useWindowDimensions();

  console.log(height, width);

  const onSelect = (id) => {
    navigation.navigate ('ItemDetail', {productId: item.id})
  };

  return (
    <Pressable onPress={() => onSelect(item.id)}>
      <Card additionalStyle={width > 320 ? styles.additionalStylesCard: styles.cardXs}>
        <View style={styles.contentContainer}>
          <Text
            style={styles.textCategory}
            numberOfLines={2}
            ellipsizeMode="tail" 
          > {/* Encontré estas propiedades en la documentacion para que el texto no me empujara la imagen fuera de la Card */}
            {item.title}
          </Text>
        </View>
        <Image
          resizeMode="cover"
          style={styles.image}
          source={{ uri: item.images[0] }}
        />
      </Card>
    </Pressable>
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
  },
  cardXs :{
    flexDirection: "row",
    height: 120,
    justifyContent: "space-between",
    borderColor: colors.orange,
    width: 300
  }
});
