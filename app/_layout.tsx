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
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="index" options={{ title: 'Home', headerShown: false }} />
            <Stack.Screen name="contact" options={{ title: 'Contact us' }} />
            <Stack.Screen name="textinputdemo" options={{ title: 'Simple Form', headerShown: true }} />
            <Stack.Screen name="switchdemo" options={{ title: 'Switch Demo', headerShown: true }} />
            <Stack.Screen name="flatlistdemo" options={{ title: 'Flat List Demo', headerShown: true }} />
        </Stack>
    )
}