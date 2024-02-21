import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

const ReceiptScreen = () => {

  const route = useRoute();
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Receipt</Text>
      <View style={styles.receipt}>
        <View style={styles.topHeader}>
          <Text style={styles.text}>Details</Text>
        </View>
        <View style={styles.item}>
          <Text>Description</Text>
          <Text>{item.description}</Text>
        </View>
        <View style={styles.item}>
          <Text>Amount</Text>
          <Text>{item.amount}</Text>
        </View>
        <View style={styles.item}>
          <Text>Date</Text>
          <Text>{item.date}</Text>
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
});

export default ReceiptScreen;
