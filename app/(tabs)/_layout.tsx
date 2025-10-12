import { Tabs } from "expo-router";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { LinearGradient } from "expo-linear-gradient";

export default function TabLayout() {
    return (
        <Tabs screenOptions={{
            headerShown: true,
            headerTitleAlign: 'center',
            headerStyle: { backgroundColor: 'transparent' },
            headerBackground: () => (
                <LinearGradient
                    colors={['#3cfd01ff', '#fbff00ff']}
                    style={{ flex: 1 }}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                />
            ),
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold', fontSize: 20 },
            tabBarStyle: {
                backgroundColor: 'transparent',
                height: 80,
                marginBottom: 0,
                paddingBottom: 10
            },
            tabBarBackground: () => (
                <LinearGradient
                    colors={['#3cfd01ff', '#fbff00ff']}
                    style={{ flex: 1 }}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 0, y: 0 }}
                />
            ),
            tabBarActiveTintColor: '#fff',
            tabBarInactiveTintColor: 'gray',
        }}>
            <Tabs.Screen name="index" options={{
                title: 'Home',
                tabBarIcon: ({ color, focused }) => (
                    <TabBarIcon name={ focused ? 'home' : 'home-outline'} color={color} />
                )
            }} />
            <Tabs.Screen name="contact" options={{
                title: 'Contact',
                tabBarIcon: ({ color, focused }) => (
                    <TabBarIcon name={ focused ? 'call' : 'call-outline'} color={color} />
                )
            }} />
            <Tabs.Screen name="(admin)" options={{
                title: 'Admin',
                tabBarIcon: ({ color, focused }) => (
                    <TabBarIcon name={ focused ? 'person' : 'person-outline'} color={color} />
                )
            }} />
        </Tabs>
    )
}