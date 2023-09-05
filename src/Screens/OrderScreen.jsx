import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import OrderItem from '../Components/OrderItem'
import { colors } from "../Global/Theme";
import { useGetOrdersQuery } from '../Services/shopServices'
import { useSelector } from 'react-redux'

const OrderScreen = () => {

  const email = useSelector(state => state.userReducer.value.email);
  const { data: orders } = useGetOrdersQuery(email);

console.log(orders)
  return (
    <View style={styles.container}>
    <FlatList
        data={orders}
        keyExtractor={(orderItem, index) => `${orderItem.createdAt}-${index}`}
        renderItem={({item}) => {
            return (
                <OrderItem 
                  order={item}
                />
            )
        }}
    />
</View>
  )
}

export default OrderScreen

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: colors.teal
  }
})