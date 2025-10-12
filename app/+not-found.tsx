import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'

export default function NotFoundScreen() {
  return (
    <View style={styles.container}>
      <Link href="/">Go to home screen</Link>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
})