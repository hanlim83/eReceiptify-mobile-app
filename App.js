import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import ScanScreen from './screens/ScanScreen';
import FaqScreen from './screens/FaqScreen';
import ReceiptScreen from './screens/ReceiptScreen';
import QrCodeScreen from './screens/QRCodeScreen';
import ConfirmScreen from './screens/ConfirmScreen';


import '@tamagui/core/reset.css';
import { TamaguiProvider, createTamagui } from 'tamagui';
import { config } from '@tamagui/config/v2';
import ReceiptNewScreen from './screens/ReceiptNewScreen';

const loadFonts = async () => {
  await Font.loadAsync({
    'Comic-Sans-MS': require('./assets/fonts/ComicSansMS3.ttf'), // Replace with the actual path to your font
  });
};

const Stack = createStackNavigator();
const tamaguiConfig = createTamagui(config);

export default function App() {
  return (
    <TamaguiProvider config={tamaguiConfig}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="ScanScreen" component={ScanScreen} options={{ headerShown: true }} />
          <Stack.Screen name="FaqScreen" component={FaqScreen} options={{ headerShown: true }} />
          <Stack.Screen name="ReceiptScreen" component={ReceiptScreen} options={{ headerShown: true }} />
          <Stack.Screen name="QrCodeScreen" component={QrCodeScreen} options={{ headerShown: true }} />
          <Stack.Screen name="ConfirmScreen" component={ConfirmScreen} options={{ headerShown: false }} />
          <Stack.Screen name="ReceiptNewScreen" component={ReceiptNewScreen} options={{ headerShown: false }} />
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
