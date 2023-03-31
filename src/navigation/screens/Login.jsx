import { Text, View, StyleSheet } from 'react-native'
import React from 'react'


export default function Login() {
  return (
    <View style={style.contain}>
        <Text>Login</Text>
    </View>
  )
}

const style = StyleSheet.create({
    contain:{
        width:'100%',
        height:'100%',
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    },
    
})