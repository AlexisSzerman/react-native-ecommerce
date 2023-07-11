import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../Global/Theme'

const Home = () => {
  return (
    <View>
        <FlatList style= {styles.containerHome}
        />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    containerHome:{
        height: '90%',
        backgroundColor: colors.beige
    }
})