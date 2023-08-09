import { FlatList, StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import ProductItem from "../Components/ProductItem";
import { colors } from "../Global/Theme";
import Search from "../Components/Search";
import { useSelector } from "react-redux";
import { useGetProductsByCategoryQuery } from "../Services/shopServices";
import { ActivityIndicator } from "react-native";

const ItemListCategory = ({ navigation, route }) => {
  const [products, setProducts] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [keywordError, setKeywordError] = useState("");

  const { category } = route.params;
  const categorySelected = useSelector(
    (state) => state.shopReducer.value.categorySelected
  );
  const {
    data: productsSelected,
    isError,
    isLoading,
  } = useGetProductsByCategoryQuery(categorySelected);

  useEffect(() => {
    if (productsSelected) {
      const productsFiltered = productsSelected.filter((product) =>
        product.title.toLocaleLowerCase().includes(keyword.toLowerCase())
      );
      setProducts(productsFiltered);
    }
  }, [productsSelected, keyword]);

  const onSearch = (input) => {
    const expression = /^[a-zA-Z0-9\ ]*$/;
    const evaluation = expression.test(input);

    if (evaluation) {
      setKeyword(input);
      setKeywordError("");
    } else {
      setKeywordError("Just letters and numbers!");
    }
  };

  return (
    <View style={styles.containerLoading}>
      {isLoading ? (
        <ActivityIndicator size="large" color={colors.orange} />
      ) : (
        <View style={styles.container}>
          <Search
            onSearch={onSearch}
            error={keywordError}
            goBack={() => {
              navigation.goBack();
            }}
          />
          <FlatList
            data={products}
            keyExtractor={(product) => product.id}
            renderItem={({ item }) => (
              <ProductItem item={item} navigation={navigation} />
            )}
            showsVerticalScrollIndicator={false}
          />
        </View>
      )}
    </View>
  );
};

export default ItemListCategory;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
    alignItems: "center",
  },
  containerLoading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.teal,
  },
});
