import React, { Component } from 'react';
import Speedometer from 'react-native-speedometer-chart';

import {Platform, Text, StyleSheet, View } from "react-native";


export default class Gauge extends Component {
 
render() {
    
    return (
    
<View style={styles.boarderClass}>      

<Speedometer
    value={50}
    totalValue={150}
    showIndicator 
    size={250}
    outerColor="#d3d3d3"
    internalColor="green"
    showText
    text="50.00"
    textStyle={{ color: 'green' }}
    showLabels
    labelStyle={{ color: 'blue' }}
    labelFormatter={number => `${number}%`}
    showPercent
    percentStyle={{ color: 'red' }}
  />
</View>

    );
  }

}

const styles = StyleSheet.create({
boarderClass:
  {
       // Set border width.
       alignItems:'center',
       width: 400,
      paddingTop :10,
      paddingBottom :10,
      paddingLeft :10,
      paddingright :10,
      height: 200,
      borderWidth: 3,
      borderColor: 'black',
  },
}
)