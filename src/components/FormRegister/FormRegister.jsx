import {  View,StyleSheet,StatusBar,TouchableOpacity,Text,Image,TouchableHighlight,ToastAndroid } from 'react-native'
import React,{useState} from 'react'
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/core';
import axios from 'axios';
import apiUrl from '../../configHost';
import InputForm from '../InputForm/InputForm';


export default function FormRegister() {

  const [name,setName] = useState('')
  const [mail,setMail] = useState('')
  const [photo,setPhoto] = useState('')
  const [pass,setPass] = useState('')
  

  const [fontsLoaded] = useFonts({
    Bold: require('../../../assets/fonts/Poppins-Bold.ttf'),
    Regular: require('../../../assets/fonts/Poppins-Regular.ttf'),
    Medium: require('../../../assets/fonts/Poppins-Medium.ttf')
  })
  
  const navigate = useNavigation()

  const handlePress = async () => {
    try {
      if (name.length > 0 && mail.length > 0 && photo.length > 0 && pass.length > 0) {
        const data = {
          name: name,
          mail: mail,
          photo: photo,
          password: pass,
        };
        let url = apiUrl + 'auth/signup';
        await axios.post(url, data);
        ToastAndroid.show('User Successfully Created', ToastAndroid.SHORT);
        ToastAndroid.show('We have sent you a verification email', ToastAndroid.LONG);
        clearForm();
        navigate.reset({
          index: 0,
          routes: [{ name: 'Home' }],
        });
      } else {
        ToastAndroid.show('Complete all fields', ToastAndroid.LONG);
      }
    } catch (error) {
      if(typeof error.response.data.message === 'string'){
        ToastAndroid.show(error.response.data.message, ToastAndroid.LONG);
      }else{
          error.response.data.message.forEach(err => ToastAndroid.show(err, ToastAndroid.LONG))
      }
    }
  };


  const clearForm = () => {
    setName('');
    setMail('');
    setPhoto('');
    setPass('');
  }
  
  if(!fontsLoaded)return null
return (
    <View style={styles.contain}>
        
        <View style={styles.contain_inputs}>
          <InputForm value={setName} imagen={'profile.png'}  board={'default'} capitalize={'words'} autoComplet={'name'} type={'givenName'} holder={'Name'}/>
          <InputForm value={setMail} imagen={'@.png'}  board={'email-address'} capitalize={'none'} autoComplet={'email'} type={'emailAddress'} holder={'Example@gmail.com'}/>
          <InputForm value={setPhoto} imagen={'camera.png'}  board={'url'} capitalize={'none'} autoComplet={'url'} type={'URL'} required={true} holder={'URL Photo'}/>
          <InputForm value={setPass} imagen={'lock1.png'} secure={true} board={'default'} capitalize={'none'} autoComplet={'password'} type={'password'} holder={'Password'}/>
        </View>
        <View style={styles.contain_btn}>
          <View style={styles.shadowProp}>
            <TouchableHighlight style={styles.btn_signin} onPress={handlePress} >
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