import React, { Component } from "react";
import { Picker, View, Text,  StyleSheet, Dimensions, ScrollView } from "react-native";
//import {AnimatedCircularProgress} from 'react-native-circular-progress';
//import * as React from 'react';

import {
LineChart,
BarChart,
PieChart,
ProgressChart,
ContributionGraph,
StackedBarChart,
} from 'react-native-chart-kit';
export default class CategoryScreen extends Component {
  state = {
    selectedcat: "",
    category: [
      {
        itemName: "DEMO SHIP ASPL ",
        value: "DEMO SHIP ASPL ",
      },
      {
        itemName: "Fujaira Bulk",
        value:"Fujaira Bulk",
      },
      {
        itemName: "IrianJaya",
        value : "IrianJaya",
      },
      {
        itemName: "Kulu Bulk",
        value: "Kulu Bulk",
      },
      {
        itemName: "Shanghai Ocean",
        value:"Shanghai Ocean",
      }
    ]
  };

  async onValueChangeCat(value) {
    this.setState({ selectedcat: value });
  }

  render() {
    return (


      <View style={styles.viewStyle}>
        <View style={{ flex: 0.3 }}>
          <Text style={styles.textStyle}>Ship Names</Text>
        </View>
        <View style={{ flex: 0.7, fontSize: 14 }}>
          <Picker
            itemStyle={styles.itemStyle}
            mode="dropdown"
            style={styles.pickerStyle}
            selectedValue={this.state.selectedcat}
            onValueChange={this.onValueChangeCat.bind(this)}
          >
            {this.state.category.map((item, index) => (
              <Picker.Item
                color="#0087F0"
                label={item.itemName}
                value={item.itemName}
                index={index}
              />
            ))}
          </Picker>
       </View>

       <ScrollView>
<View style={styles.container}>
<View>
{/*It is an Example of LineChart*/}
<Text
style={{
textAlign: 'center', fontSize: 18,
padding: 16,
marginTop: 16,
}}>
Line Chart
</Text>
<LineChart data={{
labels: [ '1-Jan-16'
,'2-Jan-16'
,'3-Jan-16'
,'4-Jan-16'
,'5-Jan-16'
,'6-Jan-16'
,'7-Jan-16'
,'8-Jan-16'
,'13-Jan-16'
,'14-Jan-16'
,'15-Jan-16'
,'16-Jan-16'
,'17-Jan-16'
,'18-Jan-16'
,'19-Jan-16'
,'23-Jan-16'
,'24-Jan-16'
,'25-Jan-16'
,'26-Jan-16'
,'27-Jan-16'
,'28-Jan-16'
,'29-Jan-16'
,'30-Jan-16'
],
datasets: [
{
data: [12.46,11.62,9.83,11.71,11.74,11.13,11.88,11,11.94,12,12.92,11.17,11,11.71,12.03,12.39,11.19,11.42,11.25,11.13,11.79,12.63,10.63],
strokeWidth: 4,
stroke:'#8800cc',
},
{
    data: [13,13,13,13,13,13,13,13,12,12,12,12,12,12,12,13,13,13,13,13,13,13,13],
    strokeWidth: 2,
    stroke:'green',
    },
    
],
}}
width={Dimensions.get('window').width - 16}
height={220}
chartConfig={{
backgroundColor: '#c92ac7',
backgroundGradientFrom: '#7bede2',
backgroundGradientTo: '#dbb8cd',
decimalPlaces: 2,
color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
style: {
borderRadius: 16,
},
}}
style={{ marginVertical: 8,
borderRadius: 16,
}}
/>
</View>
</View>
</ScrollView>
   
      </View>
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
    alignItems: "top"
  },
  itemStyle: {
    fontSize: 20,
    fontFamily: "Roboto-Regular",
    color: "#007aff"
  },
  pickerStyle: {
    width: "30%",
    marginTop: 20,
    //marginHorizontal : "50%",
    marginLeft :"2%",
    alignItems: "top",
    height: 40,
    color: "#007aff",
    fontSize: 20,
    fontFamily: "Roboto-Regular"
  },
  textStyle: {
    fontSize: 30,
    marginLeft:40,
    fontFamily: "Roboto-Regular"
  },
  container: {
    flex: 1,
    justifyContent: 'center', padding: 8,
    paddingTop: 30,
    backgroundColor: '#ecf0f1',
    },
});