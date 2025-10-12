import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MyStyle from '@/constants/Style'

export default function About() {
  return (
    <View>
      <Text style={[MyStyle.text, {
        backgroundColor: '#4ef75cff',
        borderColor: '#53e47eff', borderStyle: 'solid',
        textAlign: 'center', borderWidth: 2, padding: 10,
      }]}>About
        Component</Text>
    </View>
  )
}

const styles = StyleSheet.create({})