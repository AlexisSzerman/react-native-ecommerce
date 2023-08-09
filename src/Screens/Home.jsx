import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../Global/Theme";
import CategoryItem from "../Components/CategoryItem";
import { useGetCategoriesQuery } from "../Services/shopServices";
import { ActivityIndicator } from "react-native";

const Home = ({ navigation }) => {
  const { data: categories, isLoading, isError } = useGetCategoriesQuery();
  console.log(isLoading);
  console.log(isError);
  console.log(categories);

  return (
    <View style={styles.containerLoading}>
      {isLoading ? (
        <ActivityIndicator size="large" color={colors.orange} />
      ) : (
        <View style={styles.containerHome}>
        <FlatList
          data={categories}
          keyExtractor={(category) => category}
          renderItem={({ item }) => (
            <CategoryItem item={item} navigation={navigation} />
          )}
          showsVerticalScrollIndicator={false}
        />
        </View>
      )}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  containerHome: {
    backgroundColor: colors.teal,
    alignItems: "center",
  },
  containerLoading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.teal,
  }
});
