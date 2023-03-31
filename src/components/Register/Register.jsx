import { Text, View,StyleSheet,StatusBar } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font';
import FormSignin from '../FormSignin/FormSignin';
import FormRegister from '../FormRegister/FormRegister';
 
export default function Register() {
    const [fontsLoaded] = useFonts({
        Bold: require('../../../assets/fonts/Poppins-Bold.ttf'),
        Regular: require('../../../assets/fonts/Poppins-Regular.ttf'),
        Medium: require('../../../assets/fonts/Poppins-Medium.ttf'),
        SemiBold: require('../../../assets/fonts/Poppins-SemiBold.ttf')
    })
    if(!fontsLoaded)return null
  return (
    <View style={styles.contain}>
        <View style={styles.contain_title}>
            <Text style={styles.title_register}>Welcome!</Text>
            <Text style={styles.text_1}>Discover manga, manhua and manhwa, track your progress, have fun, read manga.</Text>
        </View>

        <FormRegister/>

        <View style={styles.contain_foot}>
            <Text style={styles.text_2}>Already have an account? Log in</Text>
            <Text style={styles.text_3}>Go back to home page</Text>
        </View>
        <StatusBar style='auto'/>
    </View>
  )
}

const styles = StyleSheet.create({
    contain:{
        flex:1,
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
    }

})