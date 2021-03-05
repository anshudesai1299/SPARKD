import React, { Component } from "react";
import { Picker, View, Text, StyleSheet } from "react-native";
export default class WindForce extends React.Component{

    state = {
            selectedcat: "5",
            category: [
              {
                itemName: "1",
                value: "1",
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
             
            ]
          };
        
          async onValueChangeCat(value) {
            this.setState({ selectedcat: value });
          }
    render()
    {
        return(
            <View style={styles.viewStyle}>
    
    
             
             
              
             <Text  style= {styles.textStyle}>Windforce less than :</Text>
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
          
        );
    }
    
    
    }
    
    const styles = StyleSheet.create({

          label: {
            margin: 8,
          },


          viewStyle: {
            flex: 1,
            alignSelf: "top",
            marginTop: 40,
            //marginLeft :20,
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
            marginLeft:0,
            //paddingTop: 40,
            //backgroundColor: 'white'
        },
          itemStyle: {
            fontSize: 40,
            fontFamily: "Roboto-Regular",
            color: "#007aff"
          },
          pickerStyle: {
            width: 100,
           // marginTop: 20,
            //marginHorizontal : "50%",
            marginLeft :"2%",
            alignItems: "top",
            height: 30,
            color: "#007aff",
            fontSize: 20,
            fontFamily: "SemiBold"
          },

          textStyle: {
            fontSize: 30,
            marginLeft:"20%",
            fontFamily: "SemiBold",
            textAlign:"left",
          }
      
      }
      
      );