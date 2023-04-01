import React, { useState } from 'react'
import { Text, View,StyleSheet,TextInput,Image} from 'react-native'



export default function InputForm(props) {
    
    
  return (
    <View style={styles.contain}>
        <TextInput onChangeText={props.value}  style={styles.input_text} 
        secureTextEntry={props.secure} keyboardType={props.board} autoCapitalize={props.capitalize} 
        autoComplete={props.autoComplete} textContentType={props.type} required={true} placeholder={props.holder}>
        </TextInput>
        {/* <Image source={require(`../../img/${props.image}`)} /> */}
    </View>
  )
}

const styles = StyleSheet.create({
    contain:{
        width:'100%',
        height:40, 
        backgroundColor:'#FAFCFC', 
        borderColor: 'rgba(31, 31, 31, 0.5)', 
        borderWidth: 1, 
        borderRadius: 10, 
        paddingHorizontal:10,
        display:'flex',
        flexDirection:'row',
        alignItems:'center'
    },
    input_text:{
        width:'95%',
        height:'100%',
    },
    
})
