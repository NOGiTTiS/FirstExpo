import { Stack } from "expo-router";

export default function RootLayout() {
    return (
        <Stack screenOptions={{
            headerShown: true,
            headerTitleAlign: 'center',
            headerStyle: { backgroundColor: '#f4511e' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' }
        }}>
            <Stack.Screen name="index" options={{ title: 'Home', headerShown: false }} />
            <Stack.Screen name="contact" options={{ title: 'Contact us' }} />
        </Stack>
    )
}