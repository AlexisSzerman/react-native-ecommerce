import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { colors } from "../Global/Theme";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { removeCartItem } from "../Features/Cart/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({ cartItem }) => {
    const dispatch = useDispatch()

    const onRemove = () => {
        dispatch(removeCartItem(cartItem.id)); 
    };



    return (
        <View style={styles.card}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>{cartItem.title} ({cartItem.quantity})</Text>
                <Text style={styles.text2}>{cartItem.brand}</Text>
                <Text style={styles.text2}>${cartItem.price}</Text>
            </View>
            <Pressable>
            <MaterialCommunityIcons name="trash-can" size={30} color={colors.orange} onPress={onRemove}/>
            </Pressable>

        </View>
    );
};

export default CartItem;

const styles = StyleSheet.create({
    card: {
        height: 100,
        backgroundColor: colors.navy,
        borderColor: colors.teal,
        padding: 10,
        margin: 10,
        borderWidth: 2,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    textContainer: {
        width: "70%",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
    text: {
        fontFamily: "LilitaOne",
        fontSize: 19,
        color: colors.orange,
    },
    text2: {
        fontFamily: "Raleway",
        fontSize: 14,
        color: colors.orange,
    },
});

