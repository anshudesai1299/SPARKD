import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import {MaterialIcons} from '@expo/vector-icons';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

function Information({ navigation }) {
  return (
    <View style={{ marginTop:10}}>
      <MaterialIcons name='menu' size={28} onPress={() => navigation.dispatch(DrawerActions.openDrawer())} style={StyleSheet.icon} />
      {/* <Text>"Hi</Text> */}
    </View>
  );
}

function CharterParty({ navigation }) {
  return (
    <View style={{ marginTop:10}}>
      <MaterialIcons name='menu' size={28} onPress={() => navigation.dispatch(DrawerActions.openDrawer())} style={StyleSheet.icon}/>
    </View>
  );
}

function VesselPerformance({ navigation }) {
  return (
    <View style={{ marginTop:10}}>
      <MaterialIcons name='menu' size={28} onPress={() => navigation.dispatch(DrawerActions.openDrawer())} style={StyleSheet.icon}/>
    </View>
  );
}

function Environmental({ navigation }) {
    return (
      <View style={{ marginTop:10}}>
        <MaterialIcons name='menu' size={28} onPress={() => navigation.dispatch(DrawerActions.openDrawer())} style={StyleSheet.icon}/>
      </View>
    );
  }

  function Operational({ navigation }) {
    return (
      <View style={{ marginTop:10}}>
        <MaterialIcons name='menu' size={28} onPress={() => navigation.dispatch(DrawerActions.openDrawer())} style={StyleSheet.icon}/>
      </View>
    );
  }

  function Maintainence({ navigation }) {
    return (
      <View style={{ marginTop:10}}>
        <MaterialIcons name='menu' size={28} onPress={() => navigation.dispatch(DrawerActions.openDrawer())} style={StyleSheet.icon}/>
      </View>
    );
  }

  function About({ navigation }) {
    return (
      <View style={{ marginTop:10}}>
        <MaterialIcons name='menu' size={28} onPress={() => navigation.dispatch(DrawerActions.openDrawer())} style={StyleSheet.icon}/>
      </View>
    );
  }

  function LogOut({ navigation }) {
    return (
      <View style={{ marginTop:10}}>
        <MaterialIcons name='menu' size={28} onPress={() => navigation.dispatch(DrawerActions.openDrawer())} style={StyleSheet.icon}/>
        <Text>"Hi</Text>
      </View>
    );
  }
// function Notifications({navigation}) {
//   return (
//     <View>
//       <MaterialIcons name='menu' size={28} onPress={() => navigation.dispatch(DrawerActions.openDrawer())} style={StyleSheet.icon}/>
//       <View 
//     style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Notifications Screen</Text>
//     </View>
  
//     </View>
   
//   );  
// }

// function CustomDrawerContent(props) {
//   return (
//     <DrawerContentScrollView {...props}>
//       <DrawerItemList {...props} />
//       <DrawerItem
//         label="Close drawer"
//         onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())}
//       />
//       <DrawerItem
//         label="Toggle drawer"
//         onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}
//       />
//     </DrawerContentScrollView>
//   );
// }

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Information" component={Information} />
      <Drawer.Screen name="CharterParty" component={CharterParty} />
      <Drawer.Screen name="Vessel Performance" component={VesselPerformance} />
      <Drawer.Screen name="Environmental" component={Environmental} />
      <Drawer.Screen name="Operational" component={Operational} />
      <Drawer.Screen name="Maintainence" component={Maintainence} />
      <Drawer.Screen name="About" component={About} />
      <Drawer.Screen name="LogOut" component={LogOut} />
    </Drawer.Navigator>
  );
}

export default function Sidebar() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
