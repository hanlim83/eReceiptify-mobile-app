import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Image,  } from 'react-native';
import { Camera } from 'expo-camera';
import { Button } from 'tamagui';
import ConfirmScreen from './ConfirmScreen';

export default function CameraScreen({navigation}) {
    const [hasPermission, setHasPermission] = useState(null);
    const [scannedData, setScannedData] = useState(null);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = async ({ type, data }) => {
        console.log(`Bar code with type ${type} and data ${data} has been scanned!`);
        setScannedData(data);
        // navigation.navigate(ConfirmScreen);
        
        // const dataObject = JSON.stringify(data);
        // console.log(dataObject);

        await fetch('https://ereceiptify.as.r.appspot.com/api/receipt/payment-transaction', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: data,
          })
          .then(response => console.log(response.json()))
          .then(data => {
              console.log('Success:', data);
              navigation.navigate(ConfirmScreen);
          })
          .catch((error) => {
              console.error('Error:', error);
          });
    };

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Scan QR Code here</Text>
            <Text></Text>
            <View style={styles.cameraContainer}>
                <Camera
                    style={styles.camera}
                    type={Camera.Constants.Type.back}
                    onBarCodeScanned={scannedData ? undefined : handleBarCodeScanned}
                />
                <Image source={require('../assets/scan.png')} style={styles.overlayImage} />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
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
        width: '80%', // Adjust size as needed
        aspectRatio: 1, // Square aspect ratio
        borderRadius: 30,
    },
    camera: {
        flex: 1,
        height: "010%"
    },
    barcodeData: {
        // backgroundColor: 'white',
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
    
});
