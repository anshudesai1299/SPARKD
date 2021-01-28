import React, { Component } from "react";
import { Picker, View, Text, StyleSheet } from "react-native";
export default class WindForce extends React.Component{

    state = {
            selectedcat: "",
            category: [
              {
                itemName: "0",
                value: "0 ",
              },
              {
                itemName: "1",
                value: "1 ",
              },
              {
                itemName: "2",
                value: "2",
              },
              {
                itemName: "3",
                value: "3",
              },
              {
                itemName: "4",
                value: "4",
              },
              {
                itemName: "5",
                value: "5",
              },
              {
                itemName: "6",
                value: "6",
              },
              {
                itemName: "7",
                value: "7",
              },
              {
                itemName: "8 ",
                value: "8 ",
              },
              {
                itemName: "9 ",
                value: "9 ",
              },
              {
                itemName: "10",
                value: "10",
              },
              {
                itemName: "11",
                value: "11",
              },
              {
                itemName: "12",
                value: "12",
              },
            ]
          };
        
          async onValueChangeCat(value) {
            this.setState({ selectedcat: value });
          }
    render()
    {
        return(
            <View style={styles.viewStyle}>
    
    
             <View style={{flex:1,flexDirection: 'row', paddingTop :20}}>
             
              
             <Text  style= {styles.textStyle}>windforce</Text>
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
          
        );
    }
    
    
    }
    
    const styles = StyleSheet.create({
        viewStyle: {
          flex: 1,
          alignSelf: "top",
          marginTop: 40,
          //marginLeft :"5%",
          flexDirection: "row",
          width: "92%",
          justifyContent: "space-around",
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
          width: "15%",
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
          fontSize: 20,
          marginLeft:40,
          fontFamily: "Roboto-Regular",
          textAlign:"left",
    
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