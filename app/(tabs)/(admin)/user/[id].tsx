import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useLocalSearchParams } from 'expo-router'

export default function UserByID() {

    // Get the dynamic route parameter 'id'
    const { id } = useLocalSearchParams()

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 24 }}>User ID: {id}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})