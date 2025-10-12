import { Button, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MyStyle from '@/constants/Style'
import About from '@/components/About'
import { Link, useRouter } from 'expo-router'

export default function Index() {
    const router = useRouter()

    return (
        <ScrollView style={{ flex: 1}}>
            <View style={styles.container}>
                <Text style={[styles.text, { fontSize: 40, fontWeight: 'bold', textAlign: 'center' }]}>Expo App</Text>
                <Text style={[styles.text, { textAlign: 'center' }]}>Lorem ipsum dolor sit amet consectetur </Text>
                <Text style={[MyStyle.text, { textAlign: 'center' }]}>Lorem ipsum dolor sit amet consectetur </Text>

                <Text style={[styles.text, { textAlign: 'center' }]}>ตัวอย่างการโหลด Component "About" เข้ามา</Text>
                {/* About Page */}
                <About />

                <Text style={[styles.text, { textAlign: 'center' }]}>ตัวอย่างการโหลด Link ใน Expo</Text>
                {/* Link to Contact Page */}
                <Link href="/contact?name=sitiigon&age=40" style={[MyStyle.text, {
                    borderColor: '#fff',
                    borderStyle: 'solid', 
                    borderWidth: 2, 
                    padding: 10, 
                    textAlign: 'center'
                }]}>Go to Contact Page</Link>

                <Text style={[styles.text, { textAlign: 'center' }]}>การใช้ปุ่ม Button ใน Expo พร้อม Query String</Text>
                {/* Button to Contact Page */}
                <Button
                    title='Go to Contact Page'
                    // onPress={() => { console.log('Button Pressed') }}
                    onPress={() => router.push('/contact?name=sitiigon&age=40')}
                // onPress={() => router.replace('/contact')}
                // onPress={() => router.navigate('/contact')}
                />

                <Text style={[styles.text, { textAlign: 'center' }]}>การใช้ปุ่ม Button ใน Expo พร้อม Parameter</Text>
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
                    title='Go to User ID'
                    onPress={() => router.push('/user/4567')}
                />
                <Text style={[styles.text, { textAlign: 'center' }]}>Button ใน Expo แบบ Stack</Text>
                <Button
                    title='Go to User Profile'
                    onPress={() => router.push('/user/profile')}
                />
                <Text style={[styles.text, { textAlign: 'center' }]}>Router to Found Page</Text>
                <Button
                    title='Go to Not Found'
                    onPress={() => router.push('/adssgrtsefsdg')}
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
        gap: 12,
        padding: 20,
    },
    text: {
        fontSize: 16,
        color: '#fff',
        margin: 2,
    }
})