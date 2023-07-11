import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../Global/Theme";
import Card from "./Card";

const CategoryItem = ({ item }) => {
  return (
    <Card>
      <Text style={styles.cardText}>{item}</Text>
    </Card>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  cardText: {
    color: colors.beige,
    fontSize: 20,
    fontWeight: "bold",
  },
});
