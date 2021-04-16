import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import UserProvider from '../context/User';

import {createStackNavigator} from '@react-navigation/stack';

import MainNavigation from './mainNavigation';
import Login from '../pages/Login';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <UserProvider>
        <Stack.Navigator
          screenOptions={{headerShown: false, unmountOnBlur: true}}
          initialRouteName={'Login'}
        >
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="MainNavigation" component={MainNavigation}/>
        </Stack.Navigator>
      </UserProvider>
    </NavigationContainer>
  );
};