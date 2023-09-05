import React, { useEffect } from 'react'
import CartItem from '../Components/CartItem';
import { colors } from "../Global/Theme";
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import { usePostCartMutation } from '../Services/shopServices';
import { setUserCart } from '../Features/Cart/cartSlice'
import { useGetOrdersQuery } from '../Services/shopServices'
import { removeAllCartItems } from '../Features/Cart/cartSlice'
import { Toast } from 'react-native-toast-message/lib/src/Toast'

const Cart = () => {
    const {items: CartData, total, updatedAt} = useSelector(state => state.cartReducer.value)
    const [triggerPostCart, result] = usePostCartMutation()
    const dispatch = useDispatch()
    const user = useSelector(state => state.cartReducer.value.user)
    const {data: orders, refetch} = useGetOrdersQuery(user)

    useEffect(() => {
        if (result.isSuccess) {
          refetch()
          dispatch(setUserCart(user))
          dispatch(removeAllCartItems())
        }
      }, [result.isSuccess, dispatch, user, refetch])

      const onConfirm = () => {
        const order = { items: CartData, total, user, updatedAt }
        triggerPostCart(order)
        Toast.show({
          type: "success",
          text1: "Your order was succesfuly created",
          autoHide: true,
          visibilityTime: 3000,
          position: "top"
        })
      }
    

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

