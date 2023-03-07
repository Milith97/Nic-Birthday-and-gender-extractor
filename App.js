import { View, Text, Image, ScrollView, StyleSheet, TextInput, SafeAreaView } from 'react-native'
import React, { useState } from 'react';
import { Button } from 'react-native-paper';


export default function App() {

  const [text, setText] = React.useState("");
  const [idNumber, setIdNumber] = React.useState("");
  const [getDob, setGetDob] = React.useState("");
  const [getGender, setGetGender] = React.useState("")

  return (
    <ScrollView>
      <SafeAreaView>

        <Text style={{
          textAlign: 'center',
          fontSize: 50,
          marginTop: '20%',
          marginBottom: '1%'
        }} >
          Sri Lanka NIC Details
        </Text>

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







      </SafeAreaView>
    </ScrollView>

  )
}

const styles = StyleSheet.create({

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

  btn: {
    marginTop: '1%',
    marginBottom: '1%',
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '30%',
    backgroundColor: `#1C82AD`,
    fontSize: '10'

  },
  btn2: {
    marginTop: '1%',
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '30%',
    backgroundColor: `#FFB100`

  }

})
