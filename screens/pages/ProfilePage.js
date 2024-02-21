import {
  View,
  Text,
  Image,
  TouchableOpacity,
  useWindowDimensions,
  FlatList,
  StyleSheet
} from "react-native";
import { YGroup, ListItem } from 'tamagui';  // Replace 'tamagui' with the actual library you are using
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from '@expo/vector-icons';
import { SceneMap, TabBar, TabView } from "react-native-tab-view";


const VoucherRoutes = () => (
  <View style={{ flex: 1 }}>
    <FlatList
      data={["Origami", "Indonesian Cuisine", "Korean Cuisine", "Carpentry", "Full Stack Development"]} // Manually provide the titles
      numColumns={2}
      renderItem={({ item, index }) => (
        <View
          style={{
            container: {
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              borderWidth: 1,
              borderColor: "black",
              borderRadius: 25,
              margin: 16,
              aspectRatio: 2,
            },
          }}
        >
          {/* Use item to display the title */}
          <Text>{item}</Text>
          {/* Add other styles or components as needed */}
        </View>
      )}
    />
  </View>
);

const renderScene = SceneMap({
  first: VoucherRoutes,
});

const Profile = ({navigation}) => {
  const layout = useWindowDimensions();
  const data = [
  { id: '1', title: "$10 OFF", subTitle: "Jack's Place", transactionType: "Grocery Shopping", expiryDate: "2023-01-15" },
  { id: '2', title: "$20 OFF", subTitle: "Movie Theater", transactionType: "Movie Tickets", expiryDate: "2023-02-02" },
  { id: '3', title: "$5 OFF", subTitle: "Online Course", transactionType: "Education Payment", expiryDate: "2023-03-10" },
  { id: '4', title: "$15 OFF", subTitle: "Local Market", transactionType: "Grocery Shopping", expiryDate: "2023-05-20" },
  { id: '5', title: "$15 OFF", subTitle: "Local Market", transactionType: "Grocery Shopping", expiryDate: "2023-05-20" },
  { id: '6', title: "$20 OFF", subTitle: "Local Market", transactionType: "Grocery Shopping", expiryDate: "2023-05-20" },
  { id: '7', title: "$40 OFF", subTitle: "Local Market", transactionType: "Grocery Shopping", expiryDate: "2023-05-20" },

];
  

  const renderItem = ({ item }) => (
    <View style={styles.rewardList}>
      <ListItem
        // icon={<Image style={styles.rewardIcon} source={require('../../assets/award.png')} />}
        iconAfter={<Text style={styles.text4}>{item.expiryDate}</Text>}
        pressTheme hoverTheme title={item.title} subTitle={item.subTitle}
      />
    </View>
  );

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#FFFFFF",
      }}
    >
      <StatusBar backgroundColor="#056272" />
      <View style={{ width: "100%" }}>
        <Image
          source="../assets/log2.jpg"
          resizeMode="cover"
          style={{
            height: 55,
            width: "100%",
          }}
        />
      </View>

      <View style={{ flex: 1, alignItems: "center", marginTop: 75 }}>
        <Image
          source={require("../../assets/icon.png")}
          resizeMode="contain"
          style={{
            height: 155,
            width: 155,
            borderRadius: 999,
            borderColor: "#056272",
            borderWidth: 2,
            marginTop: -90,
          }}
        />
        <Text
          style={{
            color: "#056272",
            marginVertical: 8,
          }}
        >
         <FontAwesome5 name="crown" size={16} color="#056272" /> Marco
        </Text>
        <Text
          style={{
            color: "#222222"
          }}
        >
          Web Developer
        </Text>

        <View
          style={{
            flexDirection: "row",
            marginVertical: 6,
            alignItems: "center",
          }}
        >
          <MaterialIcons name="location-on" size={24} color="black" />
          <Text
            style={{
              marginLeft: 4,
            }}
          >
            Bencoolen, Singapore
          </Text>
        </View>

        <View
          style={{
            paddingVertical: 8,
            flexDirection: "row",
          }}
        >
          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              marginHorizontal: 10,
            }}
          >
          </View>

          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              marginHorizontal: 10,
            }}
          >

          </View>
        </View>

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={{
              width: 124,
              height: 36,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#ffcc15",
              borderRadius: 10,
              marginHorizontal: 10 * 2,
            }}
          >
            <Text
              style={{
                color: "#FFFFFF",
              }}
            >
              Edit Profile
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Login')}
            style={{
              width: 124,
              height: 36,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#FF0000",
              borderRadius: 10,
              marginHorizontal: 10 * 2,
              
            }}
          >
            <Text
              style={{
                color: "#FFFFFF",
              }}
            >
              Logout
            </Text>
          </TouchableOpacity>
        </View>
      </View>



        <View style={styles.container}>
        <View style={styles.tabHeader}>
          <Text style={styles.tabHeaderText}>My Vouchers</Text>
        </View>
          <YGroup alignSelf="center" bordered width={'100%'} size="$4">
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
          </YGroup>
        </View>

      


    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabHeader: {
    backgroundColor: '#056272',
    paddingVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
  tabHeaderText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  rewardList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  text4: {
    color: 'black',
    fontSize: 10,
  },
  // ... (other styles)
});

export default Profile;
