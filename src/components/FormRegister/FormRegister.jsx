import {  View,StyleSheet,StatusBar,TextInput,TouchableOpacity,Text,Image,TouchableHighlight } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font';

export default function FormRegister() {
  const [fontsLoaded] = useFonts({
    Bold: require('../../../assets/fonts/Poppins-Bold.ttf'),
    Regular: require('../../../assets/fonts/Poppins-Regular.ttf'),
    Medium: require('../../../assets/fonts/Poppins-Medium.ttf')
})
if(!fontsLoaded)return null
  return (
    <View style={styles.contain}>
        
        <View style={styles.contain_inputs}>
          <TextInput style={styles.input_text}></TextInput>
          <TextInput style={styles.input_text}></TextInput>
          <TextInput style={styles.input_text}></TextInput>
          <TextInput style={styles.input_text}></TextInput>
        </View>
        <View style={styles.contain_btn}>
          <View style={styles.shadowProp}>
            <TouchableHighlight style={styles.btn_signin}>
              <Text style={styles.text_sign}>Sign up</Text>
            </TouchableHighlight>
          </View>
            
          <TouchableOpacity style={styles.btn_google}>
              <Image source={require('../../img/Google.png')}/>
              <Text style={styles.btn_text}>Sign in with Google</Text>
          </TouchableOpacity>
        </View>


        <StatusBar style='auto'/>
    </View>
  )
}

const styles = StyleSheet.create({
  contain:{
    height:420,
    width:'70%',
    justifyContent:'space-between',
    alignItems:'center'
  },
  contain_inputs:{
    height:300,
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
    gap:25
  },
  contain_btn:{
    height:120,
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
    gap:20
  },
  input_text:{
    width:'100%',
    height:40,
    backgroundColor:'#FAFCFC', 
    borderColor: 'rgba(31, 31, 31, 0.5)', 
    borderWidth: 1, 
    borderRadius: 10, 
  },
  btn_signin:{
    width:'100%',
    height:40,
    backgroundColor:'#F472B6',
    borderRadius: 10, 
    padding: 10, 
    marginHorizontal: -5,
    marginVertical: -5,
    
  },
  shadowProp: {
    width:'100%',
    height:40,
    backgroundColor: '#f4b333',
    marginHorizontal: 30,
    borderRadius: 10,
  },
  btn_google:{
    width:'100%',
    height:40,
    borderColor: 'rgba(31, 31, 31, 0.5)', 
    borderWidth: 1, 
    borderRadius: 10, 
    padding: 10, 
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    gap:4
  },
  btn_text:{
    textAlign:'center',
    color: '#1F1F1F',
    opacity: 0.5,
    fontSize: 14,
    fontFamily:'Medium'
  },
  text_sign:{
    textAlign:'center',
    color:'white',
    fontSize: 14,
    fontFamily:'Bold'
  }



})