import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, View, Text } from 'react-native';

export default function ProfilePage( {navigation} ) {
  return (
    <View>
      <Text>ProfilePage</Text>
      <Button
        title="Go to Second Screen"
        onPress={() => navigation.navigate('RegisterScreen')}
      />
    </View>
  )
}
