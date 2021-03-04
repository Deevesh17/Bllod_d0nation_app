import "react-native-gesture-handler";
import React, { Component } from 'react';
import {
  NavigationContainer,Button
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Splash from './Screen/Splash';
import Home from './Screen/Home';
import Blood_donor from './Screen/Blood_donor';
import Emergency_Blood from './Screen/Emergency_Blood';
import Blood_camp from './Screen/Blood_camp';
import login from "./Screen/login";
import signup from "./Screen/signup";
import Emergency_List from "./Screen/Emergency List";
import Blood_Camp_Details from "./Screen/Blood_Camp_Details";


const Stack = createStackNavigator();


export default class App extends Component {

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName = "Splash">
          <Stack.Screen name="Splash" component={Splash} options={{
            headerShown: false
          }} />
          <Stack.Screen name="Home" component={Home} options={{
            headerShown: false
          }} />
          <Stack.Screen name="login" component={login} options={{
            headerShown: false
          }} />
          <Stack.Screen name="Signup" component={signup} options={{
            headerShown: false
          }} />
          <Stack.Screen name="Emergency_Blood" component={Emergency_Blood} options={{
            title : "Emergency Blood",
            headerStyle: {
              backgroundColor: '#ff0038',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            }
          }} />
          
          <Stack.Screen name="Emergency_List" component={Emergency_List} options={{
            title : "Emergency List",
            headerStyle: {
              backgroundColor: '#ff0038',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            }
          }} />
          <Stack.Screen name="Blood Doner" component={Blood_donor} options={{
            headerShown: false
          }} />
          <Stack.Screen name="Blood_Camp" component={Blood_camp} options={{
            title : "Blood Camp",
            headerStyle: {
              backgroundColor: '#ff0038',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            }
          }} />
          <Stack.Screen name="Blood_Camp_Details" component={Blood_Camp_Details} options={{
            title : "Blood Camp Details",
            headerStyle: {
              backgroundColor: '#ff0038',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            }
          }} />
        </Stack.Navigator>
      </NavigationContainer>
    )

  }
}
