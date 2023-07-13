import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../Global/Theme'

const Header = () => {
  return (
    <View style= {styles.containerHeader}>
      <Text style= {styles.headerText}>Categories</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    containerHeader:{
        height: '10%',
        backgroundColor: colors.blue,
        justifyContent: 'center',
        alignItems:'center',
    },
    headerText:{
        fontSize:33,
        color: colors.orange,
        fontFamily: 'LilitaOne'
    }
})