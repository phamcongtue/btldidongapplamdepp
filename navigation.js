import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/Ionicons';
import RateScreen from "./screens/RateScreen";
import NotifyScreen from "./screens/NotifyScreen";
import ProfileScreen from "./screens/ProfileScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import SearchScreen from "./screens/SearchScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import PaymentScreen from "./screens/PaymentScreen";
import OrderSuccessScreen from "./screens/OrderSuccessScreen";
import SplashScreen from "./screens/SplashScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Home" component={HomeScreen} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="home-outline" color={color} size={size} />
                    ),
                  }}
            />
            <Tab.Screen name="Rate" component={RateScreen} 
            options={{
                tabBarIcon: ({ color, size }) => (
                    <Icon name="pulse-outline" color={color} size={size} />
                ),
              }}
              />
            <Tab.Screen name="Notify" component={NotifyScreen} 
            options={{
                tabBarIcon: ({ color, size }) => (
                    <Icon name="notifications-outline" color={color} size={size} />
                ),
              }}
              />
            <Tab.Screen name="Profile" component={ProfileScreen} 
            options={{
                tabBarIcon: ({ color, size }) => (
                    <Icon name="person-outline" color={color} size={size} />
                ),
              }}
              />
        </Tab.Navigator>
    );
}

const SignedInStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Splash"
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen name="MyTabs" component={MyTabs} />
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
                <Stack.Screen
                    name="RegisterScreen"
                    component={RegisterScreen}
                />
                <Stack.Screen name="SearchScreen" component={SearchScreen} />
                <Stack.Screen name="ProductScreen" component={ProductScreen} />
                <Stack.Screen name="CartScreen" component={CartScreen} />
                <Stack.Screen name="Payment" component={PaymentScreen} />
                <Stack.Screen
                    name="OrderSuccess"
                    component={OrderSuccessScreen}
                />
                <Stack.Screen name="Splash" component={SplashScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default SignedInStack;
