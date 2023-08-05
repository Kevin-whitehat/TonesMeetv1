import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './TabNavigator';
import Post from '../screens/Post';
import PosterProfile from '../screens/PosterProfile';
import ChatScreen from '../screens/ChatScreen';
import NotificationScreen from '../screens/NotificationScreen';
import CustomizeScreen from '../screens/Customize';
import FlashScreen from '../screens/FlashScreen';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      
      <Stack.Screen
        name="Home"
        component={TabNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Post"
        component={Post}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="PosterProfile"
        component={PosterProfile}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="NotificationScreen"
        component={NotificationScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CustomizeScreen"
        component={CustomizeScreen}
        options={{
          headerShown: false,
        }}
      />

    </Stack.Navigator>
  );
};

export default StackNavigator;
