import React from 'react';
import {Text,View,Image, TextInput, Alert} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';

export default class Register extends React.Component{

    render(){
        
        return(
            <View style={{backgroundColor:"#FFF",height:"100%"}}>
                <Image source ={require('../images/image.jpg')}
                    style={{width:"50%",height:"60%",opacity:1,alignSelf:'center'}}
                />
                <Text
                 style={{
                     fontSize:30,
                     fontFamily:"SemiBold",
                     alignSelf:"center",
                     marginTop:5,
                 }}
                >SPARKS</Text>

                <Text
                style={{
                    fontFamily:"SemiBold",
                    marginHorizontal:450,
                    textAlign:'center',
                    marginTop:5,
                    opacity:0.4
                }}
                >
                Ship Performance Alert Reporting KPI System
                </Text>

                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:450,
                    borderWidth:2,
                    marginTop:50,
                    paddingHorizontal:10,
                    borderColor:"#00716F",
                    borderRadius:23,
                    paddingVertical:2
                }}>
                   <Icon name="mail" color="#00716F" size={24}/>
                    <TextInput 
                        placeholder="Email"
                        placeholderTextColor="#00716F"
                        style={{paddingHorizontal:10}}
                    />

                    

                </View>
                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:450,
                    borderWidth:2,
                    marginTop:15,
                    paddingHorizontal:10,
                    borderColor:"#00716F",
                    borderRadius:23,
                    paddingVertical:2
                }}>
                   <Icon name="key" color="#00716F" size={24}/>
                   <TextInput 
                        secureTextEntry
                        placeholder="Password"
                        placeholderTextColor="#00716F"
                        style={{paddingHorizontal:10}}
                    />


                    

                </View>
                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:450,
                    borderWidth:2,
                    marginTop:15,
                    paddingHorizontal:10,
                    borderColor:"#00716F",
                    borderRadius:23,
                    paddingVertical:2
                }}>
                   
                   <Icon name="key" color="#00716F" size={24}/>
                   <TextInput 
                        secureTextEntry
                        placeholder="Confirm Password"
                        placeholderTextColor="#00716F"
                        style={{paddingHorizontal:10}}
                    />
                    

                </View>

                <View style={{
                    marginHorizontal:450,
                    alignItems:"center",
                    justifyContent:"center",
                    marginTop:30,
                    backgroundColor:"#00716F",
                    paddingVertical:10,
                    borderRadius:23
                }}>
                    <Text 
                    onPress = {()=>alert("Succesfully Registered!")}
                    style={{
                        color:"white",
                        fontFamily:"SemiBold"
                    }}>Register</Text>
                </View>
              
            </View>
        )
    }
}