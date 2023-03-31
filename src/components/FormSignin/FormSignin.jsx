import { Text, View,StyleSheet,TouchableOpacity,Image,TouchableHighlight,StatusBar } from 'react-native'
import React,{useState} from 'react'
import { useFonts } from 'expo-font'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import apiUrl from '../../configHost'
import InputForm from '../InputForm/InputForm'




export default function FormSignin() {

  const [mail,setMail] = useState('')
  const [pass,setPass] = useState('')

  const [fontsLoaded] = useFonts({
    Bold: require('../../../assets/fonts/Poppins-Bold.ttf'),
    Regular: require('../../../assets/fonts/Poppins-Regular.ttf'),
    Medium: require('../../../assets/fonts/Poppins-Medium.ttf')
  })
  if(!fontsLoaded)return null

  const handlePress = async() => {
    

    if (mail.length > 0 && pass.length > 0) {  
      
      const data ={
        mail:mail,
        password:pass
      }
      console.log(data);
      // let url = apiUrl + 'auth/signin'
      let url = apiUrl + 'auth/signin'
      console.log(url);
      try{

        await axios.post(url,data)
        .then(
          res => {
            console.log(res.data.user);
            console.log(res.data.token);
            AsyncStorage.setItem('token',res.data.token)
            AsyncStorage.setItem('user',JSON.stringify({
              name:res.data.user.name,
              mail:res.data.user.mail,
              photo: res.data.user.photo
            }))
            
        })

      }catch(err){
        console.log(err);
        // console.log(err.response.data);
      }

    } else {
      console.log('completa todos los campos');
      // toast.success('La acción se ha completado exitosamente!');
    }
  }

  return (
    <View style={styles.contain}>
        
        <View style={styles.contain_inputs}>         
          <InputForm value={setMail} imagen={'@.png'}  board={'email-address'} capitalize={'none'} autoComplet={'email'} type={'emailAddress'} holder={'Example@gmail.com'}/>
          <InputForm value={setPass} imagen={'lock1.png'} secure={true} board={'default'} capitalize={'none'} autoComplet={'password'} type={'password'} holder={'Password'}/>
        </View>
        <View style={styles.contain_btn}>
          <View style={styles.shadowProp}>
            <TouchableHighlight style={styles.btn_signin} onPress={handlePress} >
              <Text style={styles.text_sign}>Sign in</Text>
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
    height:'auto',
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
