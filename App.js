import { View, Text, ScrollView, StyleSheet, TextInput, SafeAreaView, Image, ImageBackground } from 'react-native'
import React, { useState } from 'react';
import { Button } from 'react-native-paper';


export default function App() {

  const [text, setText] = React.useState("");
  const [idNumber, setIdNumber] = React.useState("");
  const [getDob, setGetDob] = React.useState("");
  const [getGender, setGetGender] = React.useState("")
  const lankaNIC = require("lanka-nic");

  const renderItem = () => {
    let { dateOfBirth, gender } = lankaNIC.getInfoFromNIC(idNumber);
    setGetDob(dateOfBirth);
    setGetGender(gender);
  };

  const clearItems = () => {
    setGetDob("");
    setGetGender("");
    setIdNumber("");
  };



  return (

    <ScrollView >
      <SafeAreaView style={{flex:1, backgroundColor:'#22A39F'}}>
      
        


        <Text style={styles.baseText} >
          Sri Lanka NIC Details
        </Text>

        <View style={styles.container5}>
          <Image
            style={styles.tinyLogo}
            source={require('./Img/lanka.png')} />
        </View>


        <View style={styles.container}>
          <View style={styles.SectionStyle}>
            <TextInput
              style={{ flex: 1 }}
              placeholder="Enter Your Nic Number (88XXXXXXXV)"
              underlineColorAndroid="transparent"
            />
          </View>
        </View>

        <View >
          <Button style={styles.btn} mode="contained" onPress={() => renderItem()}>
            SEARCH
          </Button>
        </View>

        <View style={styles.container2}>

          <View style={styles.SectionStyle}>
            <TextInput
              style={{ flex: 1 }}
              placeholder="Your Birthday"
              underlineColorAndroid="transparent"
              value={getDob.toString()}

            />
          </View>
        </View>

        <View style={styles.container3}>

          <View style={styles.SectionStyle}>
            <TextInput
              style={{ flex: 1 }}
              placeholder="Gender"
              underlineColorAndroid="transparent"
              value={getGender}
            />
          </View>
        </View>

        <View style={styles.container4}>
          <Button style={styles.btn2} mode="contained" onPress={() => clearItems()}>
            CLEAR  DETAILS
          </Button>
        </View>
       
      </SafeAreaView>
    </ScrollView>

  )
}


const styles = StyleSheet.create({

  FullScreen:{
    
    
  },

  baseText: {
    textAlign: 'center',
    fontSize: 30,
    color: '#00337C',
    fontWeight: 'bold',
    marginTop: '10%',
    marginBottom: '1%'
  },

  SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: `#EFF5F5`,
    borderWidth: 1,
    borderColor: `#251B37`,
    height: 45,
    borderRadius: 2.5,
    margin: 4
  },


  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    marginTop: '20%',
  },


  container2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    marginTop: '5%'

  },
  container3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    marginTop: '1%'

  },

  container4: {
    marginBottom: '15%',
  },

  container5: {
    marginLeft: '25%',

    height: 100,
    resizeMode: 'contain'


  },

  btn: {
    marginTop: '1%',
    marginBottom: '1%',
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '25%',
    backgroundColor: `#5D3891`,
    fontSize: '20',
    borderRadius: 4

  },
  btn2: {
    marginTop: '1%',
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '25%',
    backgroundColor: `#F99417`,
    borderRadius: 4


  }

})
