import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../Screens/HomeScreen';
import Contact from '../Screens/Contact';
import Device from '../Screens/Device';
import NavPayload from '../Screens/NavPayload';
import Register from '../Screens/Register';
import Login from '../Screens/Login';
import Profile from '../Screens/Profile';

const Stack = createNativeStackNavigator();

export default function Navigation({navigation}) {
  return (
    <Stack.Navigator>
        <Stack.Screen options={{headerShown:false}} name='Register' component={Register}/>
        <Stack.Screen options={{headerShown:false}} name='Home' component={HomeScreen}/>
        <Stack.Screen options={{headerShown:false}} name='Contact' component={Contact}/>
        <Stack.Screen options={{headerShown:false}} name='Device' component={Device}/>
        <Stack.Screen options={{headerShown:false}} name='Payload' component={NavPayload}/>
        <Stack.Screen options={{headerShown:false}} name='Login' component={Login}/>
        <Stack.Screen options={{headerShown:false}} name='Profile' component={Profile}/>
      
    </Stack.Navigator>
  )
}