import {
  Pressable,
  Image,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import allProducts from "../Data/products.json";
import { colors } from "../Global/Theme";
/* import Counter from '../Components/Counter' */
import { useDispatch } from "react-redux";
import { addCartItem } from "../Features/Cart/cartSlice";

const ItemDetail = ({ navigation, route }) => {
  const { productId: idSelected } = route.params;
  const [product, setProduct] = useState(null);
  const [orientation, setOrientation] = useState("portrait");
  const { width, height } = useWindowDimensions();
  const dispatch = useDispatch()



  useEffect(() => {
    if (width > height) setOrientation("landscape");
    else setOrientation("portrait");
  }, [width, height]);

  useEffect(() => {
    const productSelected = allProducts.find(
      (product) => product.id === idSelected
    );
    setProduct(productSelected);
  }, [idSelected]);

  const onAddCart = () => {
    dispatch(addCartItem({
        ...product,
        quantity: 1
    }))
}

  return (
    <View style={orientation === "portrait" ? styles.mainContainer : styles.mainContainerLandscape}>
      {product ? (
        <View style={styles.productContainer}>
          <Image
            source={{ uri: product.images[0] }}
            style={styles.image}
            resizeMode="cover"
          />
          <View style={styles.textContainer}>
            <Text style={styles.textHeader}>{product.title}</Text>
            <Text style={styles.textDescription}>{product.description}</Text>
            <Text style={styles.textPrice}>Price: ${product.price}</Text>
          </View>
{/*           <Counter/> */}
          <View style={styles.addToCartButton}>
            <Pressable>
              <Text style={styles.addToCartButtonText} onPress={onAddCart} >Add to Cart</Text>
            </Pressable>
          </View>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "flex-start", 
    alignItems: "center", 
    padding: 10,
    backgroundColor: colors.teal,
  },
  mainContainerLandscape: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: colors.teal,
  },
  productContainer: {
    justifyContent: "center", 
    alignItems: "center", 
  },
  image: {
    width: 300,
    height: 250,
  },
  textContainer: {
    flexDirection: "column",
    gap: 18,
  },
  button: {
    height: 50,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: colors.navy,
    alignItems: "center",
    borderColor: colors.orange,
    borderWidth: 1,
    marginBottom: 20,
    borderRadius: 20
  },
  buttonText: {
    color: colors.orange,
    fontSize: 18,
    fontFamily: "Raleway",
  },
  addToCartButton: {
    height: 50,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: colors.navy,
    alignItems: "center",
    borderColor: colors.orange,
    borderWidth: 1,
    marginBottom: 20,
    borderRadius: 20
  },
  addToCartButtonText: {
    color: colors.orange,
    fontSize: 18,
    fontFamily: "Raleway",
  },
  textHeader: {
    marginTop: 15,
    color: colors.orange,
    fontSize: 18,
    fontFamily: "LilitaOne",
  },
  textDescription: {
    color: colors.orange,
    fontSize: 16,
  },
  textPrice: {
    color: colors.orange,
    fontSize: 24,
    fontFamily: "LilitaOne",
    marginBottom: 15
  },
});

export default ItemDetail;
