import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
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
    const [keyword, setKeyword] = useState("")

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder='Search...'
                    placeholderTextColor={colors.orange}
                    value={keyword}
                    onChangeText={setKeyword}
                />
                <Pressable onPress={() => onSearch(keyword)}>
                    <FontAwesome name="search" size={24} color={colors.orange} />
                </Pressable>
                <Pressable onPress={() => setKeyword("")}>
                    <FontAwesome5 name="eraser" size={24} color={colors.orange} />
                </Pressable>
                <Pressable onPress={goBack}>
                    <AntDesign name="back" size={24} color={colors.orange} />
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
        justifyContent: 'center',
        alignItems: 'center',
        height: '10%',
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
    }
})
