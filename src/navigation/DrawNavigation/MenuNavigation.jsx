import React from 'react'
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/Home';
import Register from '../screens/Register';
import Login from '../screens/Login';

const Menu = createDrawerNavigator()

export default function MenuNavigation() {
  return (
    <Menu.Navigator>
        <Menu.Screen name='Home' component={Home}/>
        <Menu.Screen name='Register' component={Register}/>
        <Menu.Screen name='Login' component={Login}/>
    </Menu.Navigator>
  )
}
