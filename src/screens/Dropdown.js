import React, { Component } from "react";
import { Picker, View, Text, StyleSheet } from "react-native";
//import { ShipList } from "./example_1.json";
import {ShipList} from "C:/Users/BEPROJECT/SPARKS/example_1.json";

export default class ReviewBar extends React.Component{
    state = {
        selectedcat: "",
      };
    
      async onValueChangeCat(value) {
        this.setState({ selectedcat: value });
      }
render()
{
    return(
        <View style={styles.viewStyle}>
          <View style={{ flex: 1, flexDirection:'row',justifyContent:'flex-end'}}>
          <Text style={styles.textStyle}>Ship Names</Text>
        </View>
        <View style={{ fontSize: 14 }}>
        <View style={{flex: 1,flexDirection:'row',justifyContent:'flex-end'}}>
          <Picker
            itemStyle={styles.itemStyle}
            mode="dropdown"
            style={styles.pickerStyle}
            selectedValue={this.state.selectedcat}
            onValueChange={this.onValueChangeCat.bind(this)}
          >
            {ShipList.map((item, index) => (
              <Picker.Item
                color="#0087F0"
                label={item.ShipName}
                value={item.ShipName}
                index={index}
              />
            ))}
          </Picker>
          </View>
        </View>
      </View>
    );
}

}


/*const styles = StyleSheet.create({
    viewStyle: {
      //flex: 1,
     // alignSelf: "top",
      marginTop: 20,
      //marginLeft :"5%",
  //flexDirection: "row",
      width: "92%",
     // justifyContent: "space-around",
    //  alignItems: "top",
      backgroundColor:'white',
      opacity:50
    },
    itemStyle: {
      fontSize: 20,
      fontFamily: "Roboto-Regular",
      color: "#007aff"
    },
    pickerStyle: {
      width: "30%",
      marginTop: 10,
      //marginHorizontal : "50%",
      marginLeft :"2%",
      //alignItems: "top",
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
      justifyContent: 'center',
      padding: 8,
      paddingTop: 30,
      backgroundColor: 'white',
      },
      label: {
        margin: 8,
      },
  
  }
  
  );*/




  const styles = StyleSheet.create({
    viewStyle: {
      flex: 1,
      alignSelf: "top",
      //marginTop: 20,
      //marginLeft :50,
      flexDirection: "row",
      width: "92%",
     // justifyContent: "space-around",
     // alignItems: "top",
      //backgroundColor:'white',
      opacity:50
    },

    container: {
      flex: 1,
      flexDirection:'row',
      alignItems: 'left',
     //justifyContent: 'center',
     
      paddingTop: 20,
     // backgroundColor: 'white'
  },
    itemStyle: {
      fontSize: 25,
      fontFamily: "Roboto-Regular",
      color: "#007aff"
    },
    pickerStyle: {
      width: 250,
     // marginTop: 20,
      //marginHorizontal : "50%",
      marginLeft :50,
      //alignItems: "top",
      height: 30,
      color: "#007aff",
      fontSize: 20,
      fontFamily: "Roboto-Regular"
    },
    textStyle: {
      fontSize: 30,
      //marginLeft:"20%",
      fontFamily: "Roboto-Regular",
      textAlign:"right",

    },
   
  });