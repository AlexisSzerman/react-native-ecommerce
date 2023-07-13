import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../Global/Theme";
import Card from "./Card";

const CategoryItem = ({ item, setCategorySelected }) => {
  return (
    <Pressable
    onPress={()=>setCategorySelected(item)}
    >
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