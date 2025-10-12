import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MyStyle from '@/constants/Style'

export default function About() {
  return (
    <View>
      <Text style={[MyStyle.text,{
        backgroundColor: '#ff0ad255',
        borderColor: '#000',
        borderStyle: 'solid',
        borderWidth: 1,
        padding: 5,
        marginVertical: 10,
        textAlign: 'center',
      }]}>About Component</Text>
    </View>
  )
}

const styles = StyleSheet.create({})