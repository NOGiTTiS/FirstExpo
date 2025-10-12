import { Tabs } from "expo-router";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { LinearGradient } from "expo-linear-gradient";

export default function TabLayout() {
    return (
        <Tabs screenOptions={{
            headerShown: true,
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: 'transparent' }, // สีพื้นหลังของ header
            headerBackground: () => (
                <LinearGradient
                    colors={['#d61ca1ff', '#b410ddff']}
                    style={{ flex: 1 }}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                />
            ),
            headerTintColor: '#fff', // สีของข้อความและไอคอนใน header
            tabBarLabelStyle: { fontSize: 12, fontWeight: 'bold', }, // สไตล์ของป้ายกำกับแท็บ
            tabBarStyle: { 
                backgroundColor: 'transparent',
                height: 60,
                marginBottom: 0,
                paddingBottom: 5
            }, // สีพื้นหลังของแถบแท็บ
            tabBarBackground: () => (
                <LinearGradient
                    colors={['#d61ca1ff', '#b410ddff']}
                    style={{ flex: 1 }}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                />
            ),
            tabBarActiveTintColor: '#fff', // สีของไอคอนและป้ายกำกับเมื่อแท็บถูกเลือก
            tabBarInactiveTintColor: '#ddd', // สีของไอคอนและป้ายกำกับเมื่อแท็บไม่ถูกเลือก
        }}>
            <Tabs.Screen name="index" options={{
                title: "Home",
                tabBarIcon: ({ color, focused }) => (
                    <TabBarIcon name={ focused ? 'home' : 'home-outline'} color={color} />
                )
            }} />
            <Tabs.Screen name="contact" options={{
                title: "Contact",
                tabBarIcon: ({ color, focused }) => (
                    <TabBarIcon name={ focused ? 'call' : 'call-outline'} color={color} />
                )
            }} />
            <Tabs.Screen name="(admin)" options={{
                title: "Admin",
                tabBarIcon: ({ color, focused }) => (
                    <TabBarIcon name={ focused ? 'person' : 'person-outline'} color={color} />
                )
            }} />

        </Tabs>
    )
}