import React, { Component } from "react";
import { Alert,Image,Platform,TouchableHighlight,Picker, View, Text,  StyleSheet, Dimensions, ScrollView } from "react-native";
//import {AnimatedCircularProgress} from 'react-native-circular-progress';
//import * as React from 'react';


//import checkbox from '../screens/checkbox.js';
import ReviewBar from './Dropdown.js';
import Sidebar from "./Sidebar.js";
import Gauge from "./Gauge.js";
import Linegraph from './Linegraph.js';
import Dropdown from './Dropdown.js';
import Dssdropdown, { windforce } from './Dssdropdown.js';
import WindForce from "./WindForce.js";

export default class CategoryScreen extends Component {
  render() {
    
    return (
      <div className="Dashboard">
      <View style={styles.viewStyle}>
      
      <View style={{ flex: 0.3 ,flexDirection:'row',justifyContent : 'flex-start'}}>
          <Text style={styles.textStyle}>Hello USER!</Text>
      </View>

       
      <Dropdown/>


       <View style={{flex:1,flexDirection: 'row', justifyContent: 'space-around', paddingTop :20}}>
          <Gauge/>
          <View style={styles.boarderClass}>
            <Text style={{fontSize :20,} }>CP Speed   : 11.50 kn</Text>
            <Text  style={{fontSize :20,}}>CP FuelCon : 15.00 MT</Text>
            <Text style={{fontSize :20,}}>avg Speed  : 12.50 kn</Text>
            <Text style={{fontSize :20,}}>avg FuelCon: 16.00 MT</Text>
          </View>
          <Gauge/>
        </View>




  <View style={{flex:1,flexDirection: 'row', justifyContent: 'space-around', paddingTop :20}}>
  <Dssdropdown/>
  <WindForce/>
  
</View>

<ScrollView>
<View style={styles.container}>
<Linegraph/>
</View>
</ScrollView>
</View>

      
      </div>
      );
      
  }
}

 const styles = StyleSheet.create({
  viewStyle: {
    //flex: 1,
    alignSelf: "top",
    marginTop: 40,
    //marginLeft :"5%",
//flexDirection: "row",
    width: "92%",
   // justifyContent: "space-around",
    alignItems: "top",
    backgroundColor:'white',
    opacity:50
  },
  
  boarderClass:
  {
       // Set border width.
       width: 300,
 
       // Setting up image height.
      paddingTop :10,
      paddingBottom :10,
      paddingLeft :10,
      paddingright :10,
 height: 200,
 alignItems:"center",
 borderWidth: 3,
 borderColor: 'black',
  },

  boarderClass1:
  {
       // Set border width.
       width: 1500,
 
       // Setting up image height.
    
 height: 150,
 alignItems:"center",
 borderWidth: 3,
 borderColor: 'black',
  },
  textStyle: {
    fontSize: 30,
    marginLeft:40,
    fontFamily: "Roboto-Regular"
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
    paddingTop: 30,
    backgroundColor: 'white',
    borderColor:'black',
    },
    label: {
      margin: 8,
    },

}

);
