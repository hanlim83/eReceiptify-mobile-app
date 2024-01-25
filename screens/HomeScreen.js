import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, View, Text } from 'react-native';
import ProfilePage from "./pages/ProfilePage";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ScanPayPage from "./pages/ScanPayPage";
import SpendingPage from "./pages/SpendingPage";
import Icon from 'react-native-vector-icons/MaterialIcons';



const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: { backgroundColor: '#ffffff' },
        }}
      >
        <Tab.Screen
          name="Spending"
          component={SpendingPage}
          options={{
            headerStyle: { backgroundColor: '#056272' },
            headerTintColor: 'white',
            tabBarIcon: ({ color, size }) => (
                <Icon name="attach-money" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Scan & Pay"
          component={ScanPayPage}
          options={{
            headerStyle: { backgroundColor: '#056272' }, 
            headerTintColor: 'white',
            tabBarIcon: ({ color, size }) => (
                <Icon name="qr-code" size={size} color={color} />
            ), 
            headerShown: false
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfilePage}
          options={{
            headerStyle: { backgroundColor: '#056272' },
            headerTintColor: 'white',
            tabBarIcon: ({ color, size }) => (
                <Icon name="person" size={size} color={color} />
            ), 
            // Set the header background color for User tab
          }}
        />
      </Tab.Navigator>
    );
}


export default function HomeScreen(){
    return (
        <MyTabs>

        </MyTabs>
    )
}