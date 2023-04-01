import { Text, View,StyleSheet,StatusBar, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { useFonts } from 'expo-font';
import { useNavigation,useFocusEffect } from '@react-navigation/native';
import FormSignin from '../FormSignin/FormSignin';
import FormRegister from '../FormRegister/FormRegister';

 
export default function Register({login}) {
    const [fontsLoaded] = useFonts({
        Bold: require('../../../assets/fonts/Poppins-Bold.ttf'),
        Regular: require('../../../assets/fonts/Poppins-Regular.ttf'),
        Medium: require('../../../assets/fonts/Poppins-Medium.ttf'),
        SemiBold: require('../../../assets/fonts/Poppins-SemiBold.ttf')
    })
    

    const [texto,isTexto]=useState(false)
    const textLogin = texto ? 'Sign up' : 'Log in'
    const textWel = texto ? 'back' : ''
    const tipeForm = texto ? <FormSignin/>:<FormRegister/>

    const navigation = useNavigation()

    const handleText = () => {
        isTexto(!texto)
    }
    const handleHome =()=>{
        
        navigation.navigate('Home')
    }
    useFocusEffect(()=>{
        isTexto(Boolean(login))
    })

    if(!fontsLoaded)return null
  return (
    <View style={styles.contain}>
        <View style={styles.contain_title}>
            <Text style={styles.title_register}>Welcome <Text style={{color:'#F472B6'}}>{textWel}</Text>!</Text>
            <Text style={styles.text_1}>Discover manga, manhua and manhwa, track your progress, have fun, read manga.</Text>
        </View>

        {tipeForm}

        <View style={styles.contain_foot}>
            <Text style={styles.text_2}>Already have an account? <Text style={styles.log} onPress={handleText}>{textLogin}</Text></Text>
            <Text style={styles.text_3}>Go back to <Text style={styles.log} onPress={handleHome}>home page</Text></Text>
        </View>
        <StatusBar style='auto'/>
    </View>
  )
}
const altura = Dimensions.get('window').height;
const styles = StyleSheet.create({
    contain:{
        flex:1,
        height:altura,
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
    },
    contain_title:{
        width:'70%',
        height:80,
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
    },
    contain_foot:{
        width:'70%',
        height:80,
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
    },
    title_register:{
        fontFamily:'SemiBold',
        fontSize:32,
        fontStyle:'normal'
    },
    text_1:{
        fontFamily:'SemiBold',
        fontSize:12,
        fontStyle:'normal',
        textAlign:'center'
    },
    text_2:{
        fontFamily:'Medium',
        fontSize:14,
        fontStyle:'normal',
        textAlign:'center'
    },
    text_3:{
        fontFamily:'Medium',
        fontSize:14,
        fontStyle:'normal',
        textAlign:'center'
    },
    log:{
        fontFamily:'Bold',
        fontSize:14,
        fontStyle:'normal',
        textAlign:'center',
        color:'#F472B6'
    }

})