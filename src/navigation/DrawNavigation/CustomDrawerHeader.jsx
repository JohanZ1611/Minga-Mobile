import React from 'react';
import { Image, TouchableOpacity } from 'react-native';


export default function CustomDrawerHeader({ navigation }) {
  return (
    <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
      <Image
        source={require('../../img/Menu.png')}
        style={{ width: 40, height: 40, marginLeft: 10 }}
      />
    </TouchableOpacity>
  )
}
