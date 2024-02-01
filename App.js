import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';

import '@tamagui/core/reset.css';
import { TamaguiProvider, createTamagui } from 'tamagui';
import { config } from '@tamagui/config/v2';

const tamaguiConfig = createTamagui(config);

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <TamaguiProvider config={tamaguiConfig}>
      <NavigationContainer>
        <Stack.Navigator>
        {/* <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} /> */}
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />

        </Stack.Navigator>
      </NavigationContainer>
    </TamaguiProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
