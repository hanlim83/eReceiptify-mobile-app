import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'tamagui';
import { ArrowBigLeft } from 'lucide-react-native';

const ReceiptNewScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <Button style={styles.submit} chromeless size="$5" title="Back" onPress={() => navigation.navigate('Home')} >
           <ArrowBigLeft color="black"/> Back
        </Button>
    <View>
    </View>
      <Text style={styles.heading}>Receipt</Text>
      <View style={styles.receipt}>
        <View style={styles.topHeader}>
          <Text style={styles.text}>Details</Text>
        </View>
        <View style={styles}>
          <Text>Receipt ID</Text>
          <Text>987654321</Text>
        </View>
        <View style={styles.item}>
          <Text>Invoice ID</Text>
          <Text>123456789</Text>
        </View>
        <View style={styles.topHeader}>
          <Text>Time Stamp</Text>
          <Text>11:59</Text>
        </View>
        <View style={styles.topHeader}>
          <Text style={styles.text}>Cart</Text>
        </View>
        <View style={styles.item}>
          <Text>Item 1</Text>
          <Text>$10.00</Text>
        </View>
        <View style={styles.item}>
          <Text></Text>
          <Text>Qty: 5</Text>
        </View>
        <View style={styles.item}>
          <Text>Item 2</Text>
          <Text>$15.00</Text>
        </View>
        <View style={styles.item}>
          <Text></Text>
          <Text>Qty: 1</Text>
        </View>
        <View style={styles.item}>
          <Text>Item 3</Text>
          <Text>$20.00</Text>
        </View>
        <View style={styles.item}>
          <Text></Text>
          <Text>Qty: 2</Text>
        </View>
        <View style={styles.total}>
          <Text style={styles.text}>Total:</Text>
          <Text>$45.00</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  receipt: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    borderRadius: 10,
    width: '100%',
  },
  topHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
    borderBottomWidth: 1,
    paddingTop: 10,
    paddingBottom: 5,
    fontWeight: 'bold',
  },
  text: {
    fontWeight: 'bold',
  },
  middleHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
    marginBottom: 5,
    borderTopWidth: 1,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  total: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingTop: 5,
    borderTopWidth: 1,
  },
  submit: {
    marginTop: 50, // Optionally change text color to white
    color: 'black',
    position: 'absolute',
    top:"5%",
    left: "5%"
},
});

export default ReceiptNewScreen;