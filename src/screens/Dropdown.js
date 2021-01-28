import React, { Component } from "react";
import { Picker, View, Text, StyleSheet } from "react-native";
export default class ReviewBar extends React.Component{
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
render()
{
    return(
        <View style={styles.viewStyle}>
          <View style={{ flex: 0.3 ,flexDirection:'row',justifyContent : 'flex-end'}}>
          <Text style={styles.textStyle}>Ship Names</Text>
        </View>
        <View style={{ flex: 0.7, fontSize: 14 }}>
        <View style={{ flex: 0.3 ,flexDirection:'row',justifyContent : 'flex-end'}}>
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
        </View>
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
      alignItems: "top",
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
      justifyContent: 'center',
      padding: 8,
      paddingTop: 30,
      backgroundColor: 'white',
      },
      label: {
        margin: 8,
      },
  
  }
  
  );