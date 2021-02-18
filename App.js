import "react-native-gesture-handler";
import React, { Component } from 'react';
import {
  NavigationContainer,StackActions
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Splash from './Screen/Splash';
import Home from './Screen/Home';
import Blood_donor from './Screen/Blood_donor';
import Emergency_Blood from './Screen/Emergency_Blood';
import Blood_camp from './Screen/Blood_camp';
import login from "./Screen/login";
import sign_up from "./Screen/sign_up";


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
          <Stack.Screen name="Signup" component={sign_up} options={{
            headerShown: false
          }} />
          <Stack.Screen name="Emergency_Blood" component={Emergency_Blood} options={{
            headerShown: false
          }} />
          <Stack.Screen name="Blood_Camp" component={Blood_camp} options={{
            headerShown: false
          }} />
        </Stack.Navigator>
      </NavigationContainer>
    )

  }
}
