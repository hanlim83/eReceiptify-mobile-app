import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { Camera } from 'expo-camera';

export default function FaqScreen() {

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>How to make payments</Text>
            <Text style={styles.body}>jkeeecjnecwkjnewckjnecwnkjewcecjnjecnwejwecnwejknwekjnkjewcnewkjnckjewnkcejwncewkjncewkjnewckjneckjnkjewnckjwenkjewnckjwencewkjncewkjncwekjnckjewnjkewnkjwenewkjnwekjnwekjnwekjnewkjkjecnewkjncwekjn</Text>
            <Text style={styles.heading}>Scan to Pay</Text>
            <Text style={styles.body}>jkeeecjnecwkjnewckjnecwnkjewcecjnjecnwejwecnwejknwekjnkjewcnewkjnckjewnkcejwncewkjncewkjnewckjneckjnkjewnckjwenkjewnckjwencewkjncewkjncwekjnckjewnjkewnkjwenewkjnwekjnwekjnwekjnewkjkjecnewkjncwekjn</Text>
            <Text style={styles.heading}>Show your QR Code</Text>
            <Text style={styles.body}>jkeeecjnecwkjnewckjnecwnkjewcecjnjecnwejwecnwejknwekjnkjewcnewkjnckjewnkcejwncewkjncewkjnewckjneckjnkjewnckjwenkjewnckjwencewkjncewkjncwekjnckjewnjkewnkjwenewkjnwekjnwekjnwekjnewkjkjecnewkjncwekjn</Text>
            <Text style={styles.heading}>Hear about our Loyalty Program!</Text>
            <Text style={styles.body}>jkeeecjnecwkjnewckjnecwnkjewcecjnjecnwejwecnwejknwekjnkjewcnewkjnckjewnkcejwncewkjncewkjnewckjneckjnkjewnckjwenkjewnckjwencewkjncewkjncwekjnckjewnjkewnkjwenewkjnwekjnwekjnwekjnewkjkjecnewkjncwekjn</Text></View>
    );
}

const styles = StyleSheet.create({
    heading: {
        marginTop: 20,
        fontSize: 24,
        marginLeft:20,
    },
    body: {
        marginTop: 5,
        fontSize: 13,
        marginLeft:20,
        marginRight: 10,
        marginBottom: 20,
    },
    container: {
        flex: 1,
        flexDirection: 'column',
    },
});
