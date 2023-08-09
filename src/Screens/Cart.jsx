import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CartItem from '../Components/CartItem';
import { useSelector } from 'react-redux';
import { usePostCartMutation } from '../Services/shopServices';

import { colors } from "../Global/Theme";

const Cart = () => {
    const {items: CartData, total, updatedAt, user} = useSelector(state => state.cartReducer.value)
    const [triggerPostCart, result] = usePostCartMutation()

    const onConfirm = () => {
        if (total > 0) {
            triggerPostCart({ items: CartData, total, user, updatedAt });
        } else {
            console.log("There's no items in the Cart");
        }
    }

    console.log(result);

    return (
    <View style={styles.container}>
       <FlatList
            data={CartData}
            keyExtractor={cartItem => cartItem.id}
            renderItem={({item})=> {
                return (
                    <CartItem
                        cartItem={item}
                    />
                )
            }}
        />            
        <Text style={styles.totalText}>Total: ${total}</Text>
        
        <View style={styles.totalContainer}>
            <Pressable onPress = {onConfirm}>
                <Text style={styles.confirmButtonText}>
                    Confirm
                </Text>
            </Pressable>

        </View> 
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignItems: "center",
        flex: 1,
        backgroundColor: colors.teal
    },
    totalContainer: {
        height: 50,
        width:200,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: colors.navy,
        alignItems: "center",
        borderColor: colors.orange,
        borderWidth: 1,
        marginBottom: 20,
        borderRadius: 20      
    },
    confirmButton: {
        backgroundColor: colors.navy,
        borderColor: colors.orange,
        borderWidth: 1,
        borderRadius: 20,
        height:50
    },
    confirmButtonText: {
        color: colors.orange,
        fontSize: 18,
        fontFamily: "Raleway",
    },
    totalText: {
        color: colors.orange,
        fontSize: 30,
        fontFamily: "Raleway",
        marginBottom: 20
    }
})

