import { Button, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MyStyle from '@/constants/Style'
import About from '@/components/About'
import { Link, useRouter } from 'expo-router'

export default function Index() {
    const router = useRouter()

    return (
        <ScrollView style={{flex: 1}}>
            <View style={styles.container}>
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

            </View>
        </ScrollView>
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