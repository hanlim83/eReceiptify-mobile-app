import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet } from 'react-native';
import { Avatar, View, Form, Text, Input, Label, XStack, Button } from 'tamagui';
import { LinearGradient } from 'expo-linear-gradient';

export default function RegisterScreen({ navigation }) {

    return (
        <LinearGradient colors={['#EDEDED', '#B2BEB5','#EDEDED']} style={styles.gradient}>
            <Text></Text>
            <View style={styles.container}>
                <Form>
                    <Text style={styles.textHeader}>
                        Log In
                    </Text>
                    <Text style={styles.textBody}>
                        Welcome to eReceiptify
                    </Text>
                    <XStack style={styles.input}>
                        <Label style={styles.label} htmlFor="email">
                            <Avatar size="$2">
                                <Avatar.Image source={require('../assets/mail.png')} />
                            </Avatar>
                        </Label>
                        <Input placeholder="Email or phone number" flex={1} id="email" />
                    </XStack>
                    <Text></Text>
                    <XStack style={styles.input}>
                        <Label style={styles.label} htmlFor="password">
                            <Avatar size="$2">
                                <Avatar.Image source={require('../assets/password.png')} />
                            </Avatar>
                        </Label>
                        <Input placeholder="Password" secureTextEntry={true} flex={1} id="password" />
                    </XStack>
                    <Text></Text>
                    <Text></Text>
                    <Form.Trigger asChild>
                        <Button style={styles.submit} size="$5" title="Submit" onPress={() => navigation.navigate('Home')} >
                            Submit
                        </Button>
                    </Form.Trigger>
                    <Text style={styles.textBody}>
                        New to eReceiptify?
                    </Text>
                    <Button style={styles.signIn} size="$2" chromeless onPress={() => navigation.navigate('RegisterScreen')}>
                        Sign up
                    </Button>
                </Form>
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    gradient: {
        flex: 1,
    },
    
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        margin: 30,
        marginVertical:50,
        backgroundColor: "#191919",
        borderRadius: 40, // Add border radius for rounded corners
        shadowColor: 'black', // Add shadow color
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5, // Add elevation for shadow (for Android)
        padding: 20, // Add padding for inner spacing
    },

    textHeader: {
        textAlign: 'center',
        fontSize: 28, // Adjust font size as needed
        fontWeight: 'bold', // Make text bold
        color: 'white', // Optionally change text color to white
        marginTop: 100,
    },

    textBody: {
        textAlign: 'center',
        fontSize: 12, // Adjust font size as needed
        color: '#FFFFFF', // Optionally change text color to white
        marginTop: 20,
        marginHorizontal: 50,
        marginBottom: 50,
    },

    input: {
        space: "$4",
        color: '#FFFFFF', // Optionally change text color to white
        padding: '$4',
    },

    label: {
        fontSize: 12,
        color: 'white',
        width: 40,
    },
    submit: {
        marginTop: 50,
        backgroundColor: '#329AD8', // Optionally change text color to white
        color: 'white',
    },
    signIn: {
        color: '#329AD8',
        top: -50,
        marginHorizontal: 50,
    },
});

