import { View, Text, Image, ScrollView, StyleSheet, TextInput, SafeAreaView } from 'react-native'
import React, { useState } from 'react';
import { Button } from 'react-native-paper';


export default function App() {
 
  return (
    <ScrollView>
      <SafeAreaView>

        <Text style={{
          textAlign: 'center',
          fontSize: 50,
          marginTop: '20%',
          marginBottom:'1%'
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

   


        


        
      </SafeAreaView>
    </ScrollView>

  )
}

const styles = StyleSheet.create({


  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    marginTop: '20%',
  },
  


})
