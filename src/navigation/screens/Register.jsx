import { Text, View } from 'react-native'
import React from 'react'


export default function Register() {
  return (
    <View style={style.contain}>
        <Text>Register</Text>
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