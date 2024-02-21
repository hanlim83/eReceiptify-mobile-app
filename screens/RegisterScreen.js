import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet } from 'react-native';
import { Avatar, View, Form, Text, Input, Label, XStack, Button } from 'tamagui';
import { LinearGradient } from 'expo-linear-gradient';
import { CircleUser } from '@tamagui/lucide-icons'

export default function RegisterScreen({ navigation }) {
    // const [dob, setDOB] = useState(new Date());
    // const [showDatePicker, setShowDatePicker] = useState(false);

    // const handleDateChange = (event, selectedDate) => {
    //     const currentDate = selectedDate || dob;
    //     setShowDatePicker(Platform.OS === 'ios');
    //     setDOB(currentDate);
    // };

    // const showDatepicker = () => {
    //     if (showDatePicker) {
    //       setShowDatePicker(false); // Hide date picker if already shown
    //       setDOB(null); // Clear current date
    //     } else {
    //       setShowDatePicker(true); // Show date picker if not shown
    //     }
    //   };

    return (
        <LinearGradient colors={['#EDEDED', '#B2BEB5', '#EDEDED']} style={styles.gradient}>
            <Text></Text>
            <View style={styles.container}>
                <Form>
                    <Text style={styles.textHeader}>
                        Sign up
                    </Text>
                    <Text style={styles.textBody}>
                        Fill this form to create new acount & continue
                    </Text>
                    <XStack style={styles.input}>
                        <Label style={styles.label} htmlFor="email">
                            <Avatar size="$2">
                                <Avatar.Image source={require('../assets/mail.png')} />
                            </Avatar>
                        </Label>
                        <Input placeholder="Email" flex={1} id="email" />
                    </XStack>
                    <Text></Text>
                    <XStack style={styles.input}>
                        <Label style={styles.label} htmlFor="phone">
                            <Avatar size="$2">
                                <Avatar.Image source={require('../assets/phone.png')} />
                            </Avatar>
                        </Label>
                        <Input placeholder="Phone Number" flex={1} id="phone" />
                    </XStack>
                    <Text></Text>
                    <XStack style={styles.input}>
                        <Label style={styles.label} htmlFor="fName">
                            <Avatar size="$2">
                                <Avatar.Image source={require('../assets/circle-user-round.png')} />
                            </Avatar>
                        </Label>
                        <Input placeholder="First Name" flex={1} id="fName" />
                    </XStack>
                    <Text></Text>
                    <XStack style={styles.input}>
                        <Label style={styles.label} htmlFor="lName">
                            <Avatar size="$2">
                                <Avatar.Image source={require('../assets/circle-user-round.png')} />
                            </Avatar>
                        </Label>
                        <Input placeholder="Last Name" flex={1} id="lName" />
                    </XStack>
                    {/* <Text></Text>
                    <XStack style={styles.input}>
                        <Label style={styles.label} htmlFor="dob">
                            <Avatar size="$2">
                                <Avatar.Image source={require('../assets/mail.png')} />
                            </Avatar>
                        </Label>
                        <Input
                            placeholder="Date of Birth"
                            value={dob.toLocaleDateString()}
                            editable={false}
                        />
                        <Button
                            title="Set DOB"
                            onPress={showDatepicker}
                        />
                        {showDatePicker && (
                            <DateTimePicker
                                value={dob}
                                mode="date"
                                is24Hour={true}
                                display="default"
                                onChange={handleDateChange}
                            />
                        )} */}
                    {/* </XStack> */}
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
                    <XStack style={styles.input}>
                        <Label style={styles.label} htmlFor="retypePassword">
                            <Avatar size="$2">
                                <Avatar.Image source={require('../assets/password.png')} />
                            </Avatar>
                        </Label>
                        <Input placeholder="Retype password" secureTextEntry={true} flex={1} id="retypePassword" />
                    </XStack>
                    <Text></Text>
                    <Form.Trigger asChild>
                        <Button style={styles.submit} size="$5" title="Submit" onPress={() => navigation.navigate('Home')} >
                            Submit
                        </Button>
                    </Form.Trigger>
                    <Text style={styles.textBody}>
                        Have another account?
                    </Text>
                    <Button style={styles.signIn} size="$2" chromeless onPress={() => navigation.navigate('LoginScreen')}>
                        Sign in
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
        marginTop: 20,
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
    dob: {
        color: 'white', // Set text color to white
    },
});

