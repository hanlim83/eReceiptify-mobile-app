import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { Button } from 'tamagui';


export default function ConfirmScreen({ navigation }) {
    const [qrCode, setQrCode] = useState(null);

    const userInfo = {
        name: "Sathwik C.",
        cardNum: "1111 1111 1111 4444",
        cardHolder: "Sathwik Chilveru",
        expiry: "10/26",
        points: 10000,
      }
    
      const getUserQRCode = async() => {
          fetch('https://ereceiptify.as.r.appspot.com/generate-qr-code', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userInfo),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            setQrCode(data.data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
      }
    
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Transaction Confirmed!</Text>
            <Text></Text>  
            <View style={styles.cameraContainer}>
                <Image style={styles.image} source={require('../assets/checked.png')} />
                <View style={styles.textContainer}>
                    <Text style={{fontSize:"25px"}}>You have earned <Text style={{color:"limegreen"}}>200</Text> points </Text>
                </View>

                <View style={styles.buttonGroup}>
                    <Button style={styles.submit1} size="$5" title="Submit" onPress={() => navigation.navigate('Home')} >
                        Back Home 
                    </Button>
                    <Button style={styles.submit} size="$5" title="Submit" onPress={() => navigation.navigate('ReceiptNewScreen')} >
                        View Receipt
                    </Button>
                </View>
                
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 15
    },
    heading: {
        marginTop: 100,
        fontSize: 20,
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },
    cameraContainer: {
        width: '100%', // Adjust size as needed
        aspectRatio: 1, // Square aspect ratio
        borderRadius: 30,
        alignItems: "center",
        marginTop:"15%"
    },
    textContainer: {
        marginTop: "15%",
    },
    camera: {
        flex: 1,
    },
    barcodeData: {
        backgroundColor: 'white',
        padding: 10,
        margin: 20,
        borderRadius: 10,
    },
    overlayImage: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: 1, // Ensure the overlay image appears above the camera
    },
    qrCode: {
        width: 200,
        height: 200,
    },
    image: {
        width: "50%", // Adjust the width as needed
        height: "50%", // Adjust the height as needed
        resizeMode: 'cover', // or 'contain' based on your preference
    },
    submit: {
        marginTop: 50,
        backgroundColor: '#329AD8', // Optionally change text color to white
        color: 'white',
    },
    submit1: {
        marginTop: 50,
        backgroundColor: 'limegreen', // Optionally change text color to white
        color: 'white',
    },
});