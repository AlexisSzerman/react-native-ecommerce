import { Pressable, StyleSheet, Text, TextInput, View, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { colors } from '../Global/Theme'
import { AntDesign } from '@expo/vector-icons';

const Search = ({
    onSearch,
    error = "",
    goBack
}) => {
    const [keyword, setKeyword] = useState("");
    const {width, height}  = useWindowDimensions();
    console.log(width, height);
    const iconSize = width > 320 ? 24 : 18; /* Para poder controlar el tamaño de los iconos */

    return (
        <View style ={styles.container}>
            <View style ={width > 320 ? styles.inputContainer : styles.inputContainerXs}>
                <TextInput
                    style={width > 320 ? styles.input: styles.inputXs}
                    placeholder='Search...'
                    placeholderTextColor={colors.orange}
                    value={keyword}
                    onChangeText={setKeyword}
                />
                <Pressable onPress={() => onSearch(keyword)}>
                    <FontAwesome name="search" size={iconSize} color={colors.orange} />
                </Pressable>
                <Pressable onPress={() => setKeyword("")}>
                    <FontAwesome5 name="eraser" size={iconSize} color={colors.orange} />
                </Pressable>
                <Pressable onPress={goBack}>
                    <AntDesign name="back" size={iconSize} color={colors.orange} />
                </Pressable>
            </View>
            {error ? (
                <Text style={styles.textError}>{error}</Text>
            ) : null}
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 18,
    },
    input: {
        width: 250,
        padding: 8,
        fontSize: 18,
        backgroundColor: colors.teal,
        borderRadius: 10,
        borderColor: colors.orange,
        borderWidth: 1,
        color: colors.orange
    },
    textError: {
        marginTop: 10,
        color: colors.orange,
        borderColor: colors.orange,
        borderWidth: 1,
        padding: 5,
        backgroundColor: colors.navy
    },
    inputContainerXs: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 15
      },
    inputXs: {
        width: 200,

        padding: 8,
        fontSize: 18,
        backgroundColor: colors.teal,
        borderRadius: 10,
        borderColor: colors.orange,
        borderWidth: 1,
        color: colors.orange
    }
})

