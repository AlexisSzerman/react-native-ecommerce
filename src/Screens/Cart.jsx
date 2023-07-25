import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CartData from '../Data/cart.json'
import CartItem from '../Components/CartItem';
import { colors } from "../Global/Theme";

const Cart = () => {
    const total = CartData.reduce((acumulador, currentItem) => acumulador += currentItem.price * currentItem.quantity, 0) 
    
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
        <View style={styles.totalContainer}>
            <Pressable>
                <Text style={styles.confirmButtonText}>
                    Confirm
                </Text>
            </Pressable>
            <Text style={styles.confirmButtonText}>Total: ${total}</Text>
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
        height: 80,
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
    }
})

