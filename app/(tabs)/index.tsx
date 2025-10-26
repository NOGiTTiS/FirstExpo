import { Button, ScrollView, StyleSheet, TouchableOpacity, Text, View, TouchableHighlight, TouchableWithoutFeedback, Image, Alert, Modal, StatusBar, SafeAreaView, SafeAreaViewBase } from 'react-native'
import { useState } from 'react'
import React from 'react'
import MyStyle from '@/constants/Style'
import About from '@/components/About'
import { Link, useRouter } from 'expo-router'

import KiwiProfile from '@/assets/images/1.jpg'

export default function Index() {
    const router = useRouter()

    // สร้างฟังก์ชันแสดง alert
    const showAlert = () => {
        Alert.alert(
            'แจ้งเตือน',
            'Lorem ipsum dolor sit amet.',
            [
                {
                    text: 'ยกเลิก',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel'
                },
                {
                    text: 'ตกลง',
                    onPress: () => console.log('OK Pressed')
                },
                {
                    text: 'ใช่',
                    onPress: () => console.log('Yes Pressed')
                }
            ],
            { cancelable: false }
        )
    }

    const [modalVisible, setModalVisible] = useState(false)

    return (
        <SafeAreaView style={{flex:1}}>
            <ScrollView>
                <View style={styles.container}>

                    <StatusBar
                        // backgroundColor="#8a47ffff"
                        // barStyle="dark-content"
                        backgroundColor="tansparent"
                        translucent={true}
                        barStyle="light-content"
                    />

                    <Text style={[styles.text, { fontSize: 40, fontWeight: 'bold', textAlign: 'center' }]}>Expo App</Text>
                    <Text style={[styles.text, { textAlign: 'center' }]}>Lorem ipsum dolor sit amet</Text>
                    <Text style={[MyStyle.text, { textAlign: 'center' }]}>Lorem ipsum dolor sit amet</Text>

                    <Text style={[styles.text, { textAlign: 'center' }]}>ตัวอย่างการโหลด Component เข้ามา</Text>
                    {/* About Page */}
                    <About />

                    <Text style={[styles.text, { textAlign: 'center' }]}>ตัวอย่างการโหลด Link ใน Expo</Text>
                    {/* Link to Contact Page */}
                    <Link href="/contact?name=sitiigon&age=40" style={[MyStyle.text,{
                        backgroundColor: '#ff1a2d55',
                        borderColor: '#000',
                        borderStyle: 'solid',
                        borderWidth: 1,
                        padding: 5,
                        marginVertical: 10,
                        textAlign: 'center',
                    }]}>Go to Contact Page</Link>

                    <Text style={[styles.text, { textAlign: 'center' }]}>การใช้ Button ใน Expo พร้อม Query String</Text>
                    <Button
                        title='Go to Contact Page'
                        // onPress={() => { console.log('Button Pressed') }}
                        onPress={() => router.push('/contact?name=sitiigon&age=40')}
                    // onPress={() => router.replace('/contact')}
                    // onPress={() => router.navigate('/contact')}
                    />
                    <Text style={[styles.text, { textAlign: 'center' }]}>การใช้ Button ใน Expo พร้อม Parameter</Text>
                    <Button
                        title='Go to Contact Page with Params'
                        onPress={() => {
                            router.push({
                                pathname: '/contact',
                                params: {
                                    fullname: 'Sittigon Bunkerd',
                                    age: 40,
                                    city: 'Bangkok',
                                    country: 'Thailand',
                                }
                            })
                        }}
                    />
                    <Text style={[styles.text, { textAlign: 'center' }]}>Button ใน Expo แบบ Dynamic Router</Text>
                    <Button
                        title='Go to User 1234'
                        onPress={() => router.push('/user/1234')}
                    />
                    <Text style={[styles.text, { textAlign: 'center' }]}>Button ใน Expo แบบ Stack</Text>
                    <Button
                        title='Go to User Profile'
                        onPress={() => router.push('/user/profile')}
                    />
                    <Text style={[styles.text, { textAlign: 'center' }]}>Router to Not Found</Text>
                    <Button
                        title='Go to Not Found'
                        onPress={() => router.push('/42grg;3532234')}
                    />

                    <Text style={[styles.text, { textAlign: 'center' }]}>การใช้ TouchableOpacity</Text>
                    <TouchableOpacity
                        activeOpacity={0.5}
                        style={{
                            backgroundColor: '#4a33ccff',
                            paddingVertical: 20,
                            borderRadius: 5,
                        }}
                        onPress={()=>{
                            console.log('TouchableOpacity Clicked')
                        }}
                    >
                        <Text style={{color:'white', textAlign: 'center' }}>TouchableOpacity Button</Text>
                    </TouchableOpacity>

                    <Text style={[styles.text, { textAlign: 'center' }]}>การใช้ TouchableHilight</Text>
                    <TouchableHighlight
                        underlayColor="#ff33ddff"
                        style={{
                            backgroundColor: '#3396ccff',
                            paddingVertical: 20,
                            borderRadius: 5,
                        }}
                        onPress={()=>{
                            console.log('TouchableHighlight Clicked')
                        }}
                    >
                        <Text style={{color:'white', textAlign: 'center' }}>TouchableHighlight Button</Text >

                    </TouchableHighlight>

                    <Text style={[styles.text, { textAlign: 'center' }]}>การใช้ Touchable Without Feedback</Text>
                    <TouchableWithoutFeedback
                        onPress={()=>{
                            console.log('Touchable Without Feedback Clicked')
                        }}
                    >
                        <Text style={{color:'white', textAlign: 'center' }}>Touchable Without Feedback Button</Text >
                    </TouchableWithoutFeedback>

                    <Text style={[styles.text, { textAlign: 'center' }]}>การใช้ Image จาก assets</Text>
                    <Image
                        source={require('@/assets/images/2.jpg')}
                        style={{ width: 120, height: 120, borderRadius: 60, marginHorizontal: 'auto' }}
                        resizeMode='cover'
                    />
                    <Text style={[styles.text, { textAlign: 'center' }]}>การใช้ Image จาก assets แบบ Import</Text>
                    <Image
                        source={KiwiProfile}
                        style={{ width: 120, height: 120, borderRadius: 60, marginHorizontal: 'auto' }}
                        resizeMode='cover'
                    />
                    <Text style={[styles.text, { textAlign: 'center' }]}>การใช้ Image จาก URL</Text>
                    <Image
                        source={{ uri: 'https://cdn.pixabay.com/photo/2024/06/30/10/28/sky-8862862_1280.png'}}
                        style={{ width: 300, height: 200, borderRadius: 0, marginHorizontal: 'auto' }}
                        resizeMode='cover'
                    />

                    <Text style={[styles.text, { textAlign: 'center' }]}>การใช้ Alert</Text>
                    <TouchableHighlight
                        underlayColor="#ff33ddff"
                        style={{
                            backgroundColor: '#3396ccff',
                            paddingVertical: 20,
                            borderRadius: 5,
                        }}
                        onPress={()=>{
                            showAlert()
                        }}
                    >
                        <Text style={{color:'white', textAlign: 'center' }}>Show Alert</Text >

                    </TouchableHighlight>

                    <Text style={[styles.text, { textAlign: 'center' }]}>การใช้ Modal</Text>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onShow={()=>{console.log('Modal Show')}}
                        onRequestClose={()=>{console.log('Modal Close')}}
                    >
                        <View style={{flex: 1, backgroundColor: '#000000aa', justifyContent: 'center', alignItems: 'center'}}>
                            <View style={{width: 300, backgroundColor: '#ffffff',borderRadius: 10,padding: 20, alignItems: 'center'}}>
                                <Text style={{ marginBottom: 20}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                    Facilis possimus non quo nulla nostrum reprehenderit.
                                </Text>
                            <View style={{flexDirection: 'row', justifyContent: 'space-evenly',width: 300 }}>
                                <Button
                                    title="Submit"
                                    onPress={() => {
                                        console.log('Submit Pressed')
                                    }}
                                />
                                <Button
                                    title="X Close"
                                    onPress={() => {
                                        setModalVisible(false)
                                    }}
                                />
                            </View>
                            </View>
                        </View>
                    </Modal>

                    <TouchableHighlight
                        underlayColor="#ff33ddff"
                        style={{
                            backgroundColor: '#3396ccff',
                            paddingVertical: 20,
                            borderRadius: 5,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                        onPress={()=>{
                            setModalVisible(true)
                        }}
                    >
                        <Text style={{color:'white', textAlign: 'center' }}>Show Modal</Text >

                    </TouchableHighlight>      

                    <Text style={[styles.text, { textAlign: 'center' }]}>การใช้ Text Input</Text>
                    <TouchableHighlight
                        underlayColor="#ff33ddff"
                        style={{
                            backgroundColor: '#3396ccff',
                            paddingVertical: 20,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 5,
                        }}
                        onPress={()=>{
                            router.push('/textinputdemo') 
                        }}
                    >
                        <Text style={{color:'white', textAlign: 'center' }}>Open Form</Text >

                    </TouchableHighlight>          

                    <Text style={[styles.text, { textAlign: 'center' }]}>การใช้ Switch</Text>
                    <TouchableHighlight
                        underlayColor="#ff33ddff"
                        style={{
                            backgroundColor: '#3396ccff',
                            paddingVertical: 20,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 5,
                        }}
                        onPress={()=>{
                            router.push('/switchdemo') 
                        }}
                    >
                        <Text style={{color:'white', textAlign: 'center' }}>Switch Demo</Text >

                    </TouchableHighlight>  

                    <Text style={[styles.text, { textAlign: 'center' }]}>การใช้ Flatlist</Text>
                    <TouchableHighlight
                        underlayColor="#ff33ddff"
                        style={{
                            backgroundColor: '#3396ccff',
                            paddingVertical: 20,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 5,
                        }}
                        onPress={()=>{
                            router.push('/flatlistdemo') 
                        }}
                    >
                        <Text style={{color:'white', textAlign: 'center' }}>Flatlist Demo</Text >

                    </TouchableHighlight>          

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e68d52ff',
        justifyContent: 'center',
        gap: 10,
        padding: 20,
    },
    text: {
        fontSize: 16,
        color: '#fff',
        margin: 2,
    }
})