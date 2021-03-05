// React Native Navigation Drawer
// https://aboutreact.com/react-native-navigation-drawer/
import 'react-native-gesture-handler';

import * as React from 'react';
import {
  Button,
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

//import FirstPage from './pages/FirstPage';
import DashBoard from './DashBoard';
import VesselPerformance from './VesselPerformance';


import Environment from './Environment';
import Operational from './Operational';
import Maintenance from './Maintenance';
import Login from './Login';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = (props)=> {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={()=> toggleDrawer()}>
        {/*Donute Button Image */}
        <Image
          source={{uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png'}}
          style={{
            width: 25,
            height: 25,
            marginLeft: 5
          }}
        />
      </TouchableOpacity>
    </View>
  );
}

function firstScreenStack({ navigation }) {
  return (
      <Stack.Navigator initialRouteName="DashBoard">
        <Stack.Screen
          name="DashBoard"
          component={DashBoard}
          options={{
            title: 'Charter Party KPI\'s', //Set Header Title
            headerLeft: ()=>
              <NavigationDrawerStructure
                navigationProps={navigation}
              />,
            headerStyle: {
              backgroundColor: '#00716F', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
      </Stack.Navigator>
  );
}

function environmentScreenStack({ navigation }) {
  return (
      <Stack.Navigator initialRouteName="Environment">
        <Stack.Screen
          name="Environmental KPI's"
          component={Environment}
          options={{
            title: 'Environmental KPI\'s ', //Set Header Title
            headerLeft: ()=>
              <NavigationDrawerStructure
                navigationProps={navigation}
              />,
            headerStyle: {
              backgroundColor: '#00716F', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
      </Stack.Navigator>
  );
}

function operationalScreenStack({ navigation }) {
  return (
      <Stack.Navigator initialRouteName="Operational">
        <Stack.Screen
          name="OPerational KPI's"
          component={Operational}
          options={{
            title: 'Operational KPI\'s ', //Set Header Title
            headerLeft: ()=>
              <NavigationDrawerStructure
                navigationProps={navigation}
              />,
            headerStyle: {
              backgroundColor: '#00716F', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
      </Stack.Navigator>
  );
}

function maintenanceScreenStack({ navigation }) {
  return (
      <Stack.Navigator initialRouteName="Maintenance">
        <Stack.Screen
          name="Maintenance KPI's"
          component={Maintenance}
          options={{
            title: 'Maintenance KPI\'s ', //Set Header Title
            headerLeft: ()=>
              <NavigationDrawerStructure
                navigationProps={navigation}
              />,
            headerStyle: {
              backgroundColor: '#00716F', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
      </Stack.Navigator>
  );
}

function LoginStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="Logout">
      <Stack.Screen
        name="Logut"
        component={Login}
        options={{
          //title: 'login page', //Set Header Title
         /* headerLeft: ()=>
            <NavigationDrawerStructure
              navigationProps={navigation}
            />,
          headerStyle: {
            backgroundColor: '#00716F', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },*/
          
        }}
      />
    </Stack.Navigator>
                     
    //const //Environment = ({ route, navigation }) => {
      //return (onPress={()=>navigate('Login')};
                    
                
);
    
}

function Sidebar() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: "#00716F",
          itemStyle: { marginVertical: 5 },
        }}>
        <Drawer.Screen
          name="Charter Party KPI"
          options={{ drawerLabel: 'Charter Party KPI' }}
          component={firstScreenStack} />

        
        <Drawer.Screen
          name="Environment"
          options={{ drawerLabel: 'Environmental KPI' }}
          component={environmentScreenStack} />

        <Drawer.Screen
          name="operational"
          options={{ drawerLabel: 'Operational KPI' }}
          component={operationalScreenStack} />

        <Drawer.Screen
          name="Maintenance"
          options={{ drawerLabel: 'Maintenace KPI' }}
          component={maintenanceScreenStack} />

        <Drawer.Screen
          name="Logout"
          options={{ drawerLabel: 'Logout' }}
          component={LoginStack} />

     
      </Drawer.Navigator>
      
    </NavigationContainer>
  );
}

export default Sidebar;