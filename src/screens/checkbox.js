import React, { Component,useState } from 'react';
import { Platform, View, Text,StyleSheet, CheckBox } from 'react-native';


const checkboxComponent = () => {

  const [checkboxValue, setCheckboxValue] = React.useState([
   { label: ' Ballast        ', value: 'ballast', checked: false },
   { label: ' Loaded         ', value: 'loaded', checked: false },
   { label: ' Ignore         ', value: 'ignore', checked: false },
 ])

 const checkboxHandler = (value, index) => {
   const newValue = checkboxValue.map((checkbox, i) => {
    if (i !== index)
      return {
        ...checkbox,
        checked: false,
      }
    if (i === index) {
      const item = {
        ...checkbox,
        checked: !checkbox.checked,
      }
      return item
    }
   return checkbox
 })
 setCheckboxValue(newValue)
 }    

return (
   <View>

<View style={styles.container}>
              
                  <Text style={styles.paragraph}>
                      Vessel Condition
                  </Text>

                  <View style={{ flexDirection: 'row' , justifyContent: 'space-around', paddingTop :20}}>


    {checkboxValue.map((checkbox, i) => (
        <View style={styles.checkboxContainer} key={i}>
          
          <CheckBox
            value={checkbox.checked}
            onValueChange={(value) => checkboxHandler(value, i)}
            style={{height:30 , width : 30}}
          >
         
 
 </CheckBox>
 <Text 
          style={{ fontSize:25}}
 >{checkbox.label}</Text>
        </View>
      ))}


</View>
                  
              
          </View>
   </View>


 )
}
//export default checkboxComponent
const styles = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection:'row',
     //alignItems: 'center',
     //justifyContent: 'center',
     marginLeft:50,
      paddingTop: 20,
      //backgroundColor: 'white'
  },
  paragraph: {
      margin: 24,
      //fontSize: 25,
      //fontWeight: 'bold',
      //textAlign: 'center',
     
     // color: '#34495e'
     fontSize: 30,
     fontFamily: "Roboto-Regular",
     //color: "#007aff"
  },

  checkboxContainer:
  {
    flex: 0,
    flexDirection:'row',
    //size={wp('4%')},
  }

});
export default checkboxComponent