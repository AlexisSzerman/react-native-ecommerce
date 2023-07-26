import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../Global/Theme";
import Card from "./Card";
import { useDispatch } from "react-redux";
import { setCategorySelected } from "../Features/Shop/shopSlice";

const CategoryItem = ({ item, navigation }) => {
  const dispatch = useDispatch();

  const onSelectCategory = () => {
    dispatch(setCategorySelected(item));
    navigation.navigate("ItemListCategory", { category: item });
  };

  return (
    <Pressable onPress={onSelectCategory}>
      <Card>
        <Text style={styles.cardText}>{item}</Text>
      </Card>
    </Pressable>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  cardText: {
    color: colors.orange,
    fontSize: 20,
    fontWeight: "bold",
  },
});
