<<<<<<< HEAD
import { Text, View,StyleSheet,StatusBar, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { useFonts } from 'expo-font';
import FormSignin from '../FormSignin/FormSignin';
import FormRegister from '../FormRegister/FormRegister';
import { color } from 'react-native-reanimated';
=======
import { Text, View,StyleSheet,StatusBar } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font';
import FormSignin from '../FormSignin/FormSignin';
import FormRegister from '../FormRegister/FormRegister';
>>>>>>> 7523c8b5ed27a9a1737df7b6a011145a3caaa1d8
 
export default function Register() {
    const [fontsLoaded] = useFonts({
        Bold: require('../../../assets/fonts/Poppins-Bold.ttf'),
        Regular: require('../../../assets/fonts/Poppins-Regular.ttf'),
        Medium: require('../../../assets/fonts/Poppins-Medium.ttf'),
        SemiBold: require('../../../assets/fonts/Poppins-SemiBold.ttf')
    })
    if(!fontsLoaded)return null
<<<<<<< HEAD

    // const [texto,isTexto]=useState(false)

=======
>>>>>>> 7523c8b5ed27a9a1737df7b6a011145a3caaa1d8
  return (
    <View style={styles.contain}>
        <View style={styles.contain_title}>
            <Text style={styles.title_register}>Welcome!</Text>
            <Text style={styles.text_1}>Discover manga, manhua and manhwa, track your progress, have fun, read manga.</Text>
        </View>

<<<<<<< HEAD
        {/* <FormRegister/> */}
        <FormSignin/>

        <View style={styles.contain_foot}>
            <Text style={styles.text_2}>Already have an account? <Text style={styles.log}>Log in</Text></Text>
            <Text style={styles.text_3}>Go back to <Text style={styles.log}>home page</Text></Text>
=======
        <FormRegister/>

        <View style={styles.contain_foot}>
            <Text style={styles.text_2}>Already have an account? Log in</Text>
            <Text style={styles.text_3}>Go back to home page</Text>
>>>>>>> 7523c8b5ed27a9a1737df7b6a011145a3caaa1d8
        </View>
        <StatusBar style='auto'/>
    </View>
  )
}
<<<<<<< HEAD
const altura = Dimensions.get('window').height;
const styles = StyleSheet.create({
    contain:{
        flex:1,
        height:altura,
=======

const styles = StyleSheet.create({
    contain:{
        flex:1,
>>>>>>> 7523c8b5ed27a9a1737df7b6a011145a3caaa1d8
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
<<<<<<< HEAD
    },
    log:{
        fontFamily:'Bold',
        fontSize:14,
        fontStyle:'normal',
        textAlign:'center',
        color:'#F472B6'
=======
>>>>>>> 7523c8b5ed27a9a1737df7b6a011145a3caaa1d8
    }

})