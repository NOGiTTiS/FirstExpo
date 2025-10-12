import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { useRouter, useLocalSearchParams } from 'expo-router'

export default function Contact() {
    const router = useRouter()

    const { name, age, fullname, city, country } = useLocalSearchParams()

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 50, textAlign: 'center' }}>Contact Page</Text>
            <Text style={{ fontSize: 50, textAlign: 'center' }}>Name: {name}</Text>
            <Text style={{ fontSize: 50, textAlign: 'center' }}>Age: {age}</Text>
            <Text style={{ fontSize: 50, textAlign: 'center' }}>FullName: {fullname}</Text>
            <Text style={{ fontSize: 50, textAlign: 'center' }}>Age: {age}</Text>
            <Text style={{ fontSize: 50, textAlign: 'center' }}>City: {city}</Text>
            <Text style={{ fontSize: 50, textAlign: 'center' }}>Country: {country}</Text>
            <Text>&nbsp;</Text>

            <Button 
                title='Go to Home Page'
                onPress={() => router.back()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})