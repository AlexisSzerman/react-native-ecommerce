import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../Global/Theme";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const CartItem = ({ cartItem }) => {
    console.log(cartItem);
    return (
        <View style={styles.card} onPress={() => {}}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>{cartItem.title} ({cartItem.quantity})</Text>
                <Text style={styles.text2}>{cartItem.brand}</Text>
                <Text style={styles.text2}>${cartItem.price}</Text>
            </View>
            <MaterialCommunityIcons name="trash-can" size={30} color={colors.orange} />
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


/* const deleteTask = (taskId) => {
    setList((prevList) => prevList.filter((task) => task.id !== taskId));
  }; */