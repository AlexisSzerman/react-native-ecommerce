import { StyleSheet, Text, View } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import React from "react";
import { colors } from "../Global/Theme";

const OrderItem = ({ order }) => {
    const title = order.items[0].title;
    const total = order.items.reduce(
        (acc, currentItem) => (acc += currentItem.price * currentItem.quantity),
        0
    );
    return (
        <View>
        <View style={styles.card} onPress={() => {}}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>
                    {new Date(order.createdAt).toLocaleString()}
                </Text>
                <Text style={styles.textTitle}>{title}</Text>
                <Text style={styles.text2}>${total}</Text>
            </View>
            <FontAwesome name="search" size={30} color={colors.orange} />
        </View>
        </View>
    );
};

export default OrderItem;

const styles = StyleSheet.create({
    card: {
        height: 100,
        backgroundColor: colors.navy,
        padding: 10,
        margin: 10,
        borderWidth: 2,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderColor:colors.blue
    },
    textContainer: {
        width: "90%",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
    text: {
        fontFamily: "Raleway",
        fontSize: 15,
        color: colors.orange,
    },
    text2: {
        fontFamily: "LilitaOne",
        fontSize: 17,
        color: colors.orange,
    },
    textTitle: {
        fontFamily: "Raleway",
        fontSize: 18,
        color: colors.orange,
        marginBottom: 5

    }
});
