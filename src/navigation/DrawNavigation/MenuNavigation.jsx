import React from 'react'
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Index from '../screens/Index';
import Login from '../screens/Login';
import Register from '../../components/Register/Register';

const Menu = createDrawerNavigator()

export default function MenuNavigation() {
  return (
    <Menu.Navigator>
        <Menu.Screen name='Home' component={Index}/>
        <Menu.Screen name='Register' component={Register}/>
        <Menu.Screen name='Login' component={Login}/>
    </Menu.Navigator>
  )
}
