import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LandingPage from '../screens/LandingPage';
import Login from '../screens/Login';
import Profile from '../screens/Profile';
import Subscription from '../screens/Subscription';
import Tutor from '../screens/Tutor';

const Stack = createStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="LandingPage">
      <Stack.Screen name="LandingPage" component={LandingPage} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Profile" component={Profile} />
      {/* <Stack.Screen name="Subscription" component={Subscription} /> */}
      {/* <Stack.Screen name="Tutor" component={Tutor} /> */}
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
