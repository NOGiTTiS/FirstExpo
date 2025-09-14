import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MyStyle from '@/constants/Style'
import About from '@/components/About'
import { Link, useRouter } from 'expo-router'

export default function Index() {
    const router = useRouter()

    return (
        <View style={styles.container}>
            <Text style={[styles.text, { fontSize: 80, fontWeight: 'bold' }]}>Expo App</Text>
            <Text style={MyStyle.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, ut!</Text>
            <Text style={MyStyle.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, ut!</Text>
            

            {/* About Page */}
            <About />

            {/* Link to Contact Page */}
            <Link href="/contact?name=sitiigon&age=40" style={MyStyle.text}>Go to Contact Page</Link>

            <Button
                title='Go to Contact Page'
                // onPress={() => { console.log('Button Pressed') }}
                onPress={() => router.push('/contact?name=sitiigon&age=40')}
                // onPress={() => router.replace('/contact')}
                // onPress={() => router.navigate('/contact')}
            />
            <Text>&nbsp;</Text>
            <Button
                title='Go to Contact Page with Params'
                onPress={() => {
                    router.push({
                        pathname: '/contact',
                        params:{
                            fullname: 'Sittigon Bunkerd',
                            age: 40,
                            city: 'Bangkok',
                            country: 'Thailand',
                        }
                    })
                }}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e68d52ff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 24,
        color: '#fff',
        margin: 10,
    }
})