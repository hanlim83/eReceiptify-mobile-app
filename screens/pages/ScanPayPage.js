import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { XStack, YGroup, Button, ListItem, Separator } from 'tamagui'

export default function ScanPayPage({ navigation }) {
  return (
    <View>
      <Text style={styles.text}>Your Card</Text>
      <View style={styles.menuIcon}>
        <Button style={styles.menuButton} size="$2" chromeless onPress={() => navigation.navigate('FaqScreen')}>
          <Image source={require('../../assets/menu.png')} />
        </Button>
      </View>

      <Button alignSelf="center" style={styles.card}>
        <View>
          <View style={styles.cardTextContainerTop}>
            <Text style={styles.cardTextName}>Sathwik C.</Text>
            <Image style={{width:"100%", height:"100%", zIndex: 1, marginLeft:"15%"}} 
                source={require('../../assets/mastercard-icon.png')}
                resizeMode="contain"/>
          </View>
          <View style={styles.cardTextContainerMiddle}>
            <Text style={styles.cardNum}>**** **** **** 4444</Text>
          </View>
          <View style={styles.cardTextContainerBottom}>
            <View>
              <Text style={styles.cardName1}>CardHolder</Text>
              <Text style={styles.cardName2}>Sathwik Chilveru</Text>
            </View>
            <View>
              <Text style={styles.cardName1}>Expiry</Text>
              <Text style={styles.cardName2}>10/26</Text>
            </View>
          </View>
        </View>
      </Button>

      <Button alignSelf="center" style={styles.points}>Points = 10000</Button>

      <View style={styles.buttonContainer}>
        <Button alignSelf="center" style={styles.qrCode} variant="outlined"  onPress={() => navigation.navigate('QrCodeScreen')}>
          <View style={styles.box}>
            <Image source={require('../../assets/qr-code.png')} style={styles.image} />
          </View>
          <View style={styles.buttonContent}>
            <Text style={styles.topButtonText}>Receive Money</Text>
            <Text>QR Code</Text>
          </View>
        </Button>
        <Button alignSelf="center" style={styles.scan} variant="outlined" onPress={() => navigation.navigate('ScanScreen')}>
          <View style={styles.box}>
            <Image source={require('../../assets/scan-line.png')} style={styles.image} />
          </View>
          <View style={styles.buttonContent}>
            <Text style={styles.topButtonText}>Spend Money</Text>
            <Text>Scan</Text>
          </View>
        </Button>
      </View>

      <ScrollView contentContainerStyle={styles.rewardContainer}>
        <YGroup alignSelf="center" bordered width={'100%'} size="$4">
          <View style={styles.rewardList}>
            <Text style={styles.text2} >Rewards List</Text>
            <Text style={styles.text3} >Expiry Date</Text>
          </View>
          <View style={styles.rewardList}>
            <View style={styles.rewardList}>
              <ListItem 
              icon={<Image style={styles.rewardIcon} source={require('../../assets/award.png')} />}
              iconAfter={<Text style={styles.text4}>01/01/24</Text>}
              pressTheme hoverTheme title="$10 OFF" subTitle="Jack's Place" />
            </View>
            <Text style={styles.text3} >01/01/24</Text>
          </View>
          <View style={styles.rewardList}>
            <View style={styles.rewardList}>
              <ListItem 
              icon={<Image style={styles.rewardIcon} source={require('../../assets/award.png')} />}
              iconAfter={<Text style={styles.text4}>01/01/24</Text>}
              pressTheme hoverTheme title="$10 OFF" subTitle="Jack's Place" />
            </View>
            <Text style={styles.text3} >01/01/24</Text>
          </View>
          <View style={styles.rewardList}>
            <View style={styles.rewardList}>
              <ListItem 
              icon={<Image style={styles.rewardIcon} source={require('../../assets/award.png')} />}
              iconAfter={<Text style={styles.text4}>01/01/24</Text>}
              pressTheme hoverTheme title="$10 OFF" subTitle="Jack's Place" />
            </View>
            <Text style={styles.text3} >01/01/24</Text>
          </View>
          <View style={styles.rewardList}>
            <View style={styles.rewardList}>
              <ListItem 
              icon={<Image style={styles.rewardIcon} source={require('../../assets/award.png')} />}
              iconAfter={<Text style={styles.text4}>01/01/24</Text>}
              pressTheme hoverTheme title="$10 OFF" subTitle="Jack's Place" />
            </View>
            <Text style={styles.text3} >01/01/24</Text>
          </View>
          <YGroup.Item>
            <ListItem hoverTheme title="$10 OFF" subTitle="Jack's Place" />
          </YGroup.Item>
        </YGroup>
      </ScrollView>


    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginTop: 50,
    marginLeft: 20,
    marginBottom: 10,
    fontSize: 20,
  },
  menuIcon: {
    position: 'absolute',
    alignItems: 'center',
    top: 50,
    right: 20,
  },
  card: {
    marginTop: 10,
    backgroundColor: '#056272',
    width: 350,
    height: 200,
  },
  cardTextContainerTop: {
    padding: 20,
    width: 330,
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardTextName: {
    color: 'white',
    fontSize: 20,
  },
  cardTextBank: {
    color: 'white',
    fontSize: 25,
  },
  cardTextContainerMiddle: {
    paddingTop: 10,
    paddingLeft: 10,
    color: 'white',
    width: 330,
    height: 70,
  },
  cardNum: {
    color: 'white',
    fontSize: 30,
  },
  cardTextContainerBottom: {
    padding: 10,
    backgroundColor: '#4b8e99',
    color: 'white',
    width: 350,
    height: 60,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardName1: {
    color: '#97bdc3',
    fontSize: 10,
  },
  cardName2: {
    color: 'white',
    fontSize: 10,
  },



  points: {
    marginTop: 10,
    backgroundColor: '#4b8e99',
    color: 'white',
    width: 350,
    height: 50,
    fontsize: 50,
    borderRadius: 15,
  },



  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  qrCode: {
    marginTop: 10,
    marginRight: -20,
    width: 150,
    height: 70,
    fontsize: 15,
  },
  scan: {
    marginTop: 10,
    marginLeft: -20,
    width: 150,
    height: 70,
    fontsize: 15,
  },
  box: {
    width: 50,
    height: 50,
    backgroundColor: '#399DDC',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topButtonText: {
    fontSize: 8,
    color: "#808080",
  },
  buttonContent: {
    alignItems: 'left',
  },
  image: {
    padding: 5,
    width: 45,
    height: 45,
  },
  rewardContainer: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginTop: 20,
    alignItems: 'center',
    backgroundColor: "#F7FAFC",
  },
  text2: {
    marginTop: 10,
    marginLeft: 20,
    marginBottom: 10,
    fontSize: 20,
  },
  text3: {
    color: '#399DDC',
    marginTop: 10,
    marginRight: 20,
    marginBottom: 10,
    fontSize: 10,
  },
  text4: {
    color: 'red',
    fontSize: 10,
  },
  rewardList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rewardIcon: {
    width: 35,
    height: 35,
  },
});