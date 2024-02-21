import React from 'react';
import { FlatList, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { YGroup, ListItem } from 'tamagui';  // Replace 'tamagui' with the actual library you are using
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
export default function SpendingPage({ navigation }) {
  const data = [
    { id: '1', description: "Grocery Shopping at Local Market", amount: "$75.43", date: "2023-01-02" },
    { id: '2', description: "Movie Night - Tickets for Two", amount: "$35.00", date: "2023-01-05" },
    { id: '3', description: "Online Course Subscription", amount: "$99.99", date: "2023-01-08" },
    { id: '4', description: "Dinner at Italian Restaurant", amount: "$60.75", date: "2023-01-12" },
    { id: '5', description: "Clothing Shopping at Fashion Store", amount: "$120.25", date: "2023-01-15" },
    { id: '6', description: "Electronics Purchase - Laptop", amount: "$899.99", date: "2023-01-18" },
    { id: '7', description: "Gas Refill at Shell Station", amount: "$40.50", date: "2023-01-21" },
    { id: '8', description: "Books and Magazines at Bookstore", amount: "$45.30", date: "2023-01-24" },
    { id: '9', description: "Healthcare - Doctor's Visit", amount: "$150.00", date: "2023-01-28" },
    { id: '10', description: "Home Improvement - Paint and Supplies", amount: "$85.60", date: "2023-02-02" },
    { id: '11', description: "Grocery Shopping at Farmer's Market", amount: "$62.20", date: "2023-02-05" },
    { id: '12', description: "Concert Tickets for Favorite Band", amount: "$80.00", date: "2023-02-09" },
    { id: '13', description: "Online Streaming Subscription", amount: "$14.99", date: "2023-02-13" },
    { id: '14', description: "Lunch with Friends at Cafe", amount: "$28.50", date: "2023-02-17" },
    { id: '15', description: "Sporting Goods at Outdoor Store", amount: "$95.25", date: "2023-02-21" },
    { id: '16', description: "Car Maintenance - Oil Change", amount: "$45.00", date: "2023-02-25" },
    { id: '17', description: "Electronics Accessories", amount: "$29.99", date: "2023-03-01" },
    { id: '18', description: "Dinner at Sushi Restaurant", amount: "$55.80", date: "2023-03-05" },
    { id: '19', description: "Monthly Gym Membership", amount: "$50.00", date: "2023-03-09" },
    { id: '20', description: "Home Decor - New Bedding", amount: "$120.50", date: "2023-03-13" },
    { id: '21', description: "Grocery Shopping at Supermarket", amount: "$90.30", date: "2023-03-17" },
    { id: '22', description: "Tech Gadgets - Smartwatch", amount: "$199.99", date: "2023-03-21" },
    { id: '23', description: "Coffee and Pastries at Local Cafe", amount: "$18.75", date: "2023-03-25" },
    { id: '24', description: "Home Office Supplies", amount: "$55.60", date: "2023-03-29" },
    { id: '25', description: "Concert Tickets for Comedy Show", amount: "$40.00", date: "2023-04-02" },
    { id: '26', description: "Online Shopping - Fashion Accessories", amount: "$65.20", date: "2023-04-06" },
    { id: '27', description: "Pet Supplies - Food and Toys", amount: "$32.50", date: "2023-04-10" },
    { id: '28', description: "Dinner at Steakhouse", amount: "$75.90", date: "2023-04-14" },
    { id: '29', description: "Home Renovation - Kitchen Upgrade", amount: "$1200.00", date: "2023-04-18" },
    { id: '30', description: "Grocery Shopping at Health Food Store", amount: "$80.00", date: "2023-04-22" },
  ];


  const handleIconPress = ( item ) => {
    // Navigate to another page
    navigation.navigate('ReceiptScreen', { item });
  };

  
  const renderItem = ({ item }) => (
    <View style={styles.rewardList}>
        <ListItem
          // icon={<Image style={styles.rewardIcon} source={require('../../assets/award.png')} />}
          onPress={() => handleIconPress(item)}
          iconAfter={<Text style={styles.text4}>{item.amount}</Text>}
          pressTheme hoverTheme title={item.description} subTitle={item.date}
        />
    </View>
  );

  return (
    <View style={styles.container}>
      <YGroup alignSelf="center" bordered width={'100%'} size="$4">
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </YGroup>
    </View>
  );
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text4: {
    color: 'red',
    fontSize: 10,
  },
});