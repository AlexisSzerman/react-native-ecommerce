import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../Global/Theme'

const Header = () => {
  return (
    <View style= {styles.containerHeader}>
      <Text style= {styles.headerText}>E-Commerce</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    containerHeader:{
        backgroundColor: colors.blue,
        justifyContent: 'center',
        alignItems:'center',
        paddingVertical: 10
    },
    headerText:{
        fontSize:33,
        color: colors.orange,
        fontFamily: 'LilitaOne'
    }
})