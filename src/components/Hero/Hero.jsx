import React from 'react'
<<<<<<< HEAD
import { View,Text,TouchableOpacity,StyleSheet,ImageBackground,StatusBar, Dimensions} from 'react-native'
=======
import { View,Text,TouchableOpacity,StyleSheet,ImageBackground,StatusBar} from 'react-native'
>>>>>>> 7523c8b5ed27a9a1737df7b6a011145a3caaa1d8
import { useFonts } from 'expo-font';


export default function Hero() {
    const [fontsLoaded] = useFonts({
        Bold: require('../../../assets/fonts/Poppins-Bold.ttf'),
        Regular: require('../../../assets/fonts/Poppins-Regular.ttf'),
        Medium: require('../../../assets/fonts/Poppins-Medium.ttf')
    })
    if(!fontsLoaded)return null
<<<<<<< HEAD
    function handleHola(){
      console.log('hola');
    }
=======
>>>>>>> 7523c8b5ed27a9a1737df7b6a011145a3caaa1d8
  return (
    <View style={styles.container}>
        <ImageBackground source={require('../../img/img-hero.png')} resizeMode="cover" style={styles.image}>
          <Text style={styles.text}>Live the emotion of the manga</Text>
          <Text style={styles.text2}>Find the perfect manga for you</Text>
<<<<<<< HEAD
          <TouchableOpacity style={styles.btn_hero} onPress={handleHola}>
=======
          <TouchableOpacity style={styles.btn_hero}>
>>>>>>> 7523c8b5ed27a9a1737df7b6a011145a3caaa1d8
                <Text style={styles.btn_text}>Explore</Text>
          </TouchableOpacity>
          
        </ImageBackground>
        <StatusBar style='auto'/>
    </View>
  )
}
<<<<<<< HEAD
const altura = Dimensions.get('window').height;
const styles = StyleSheet.create({
    container: {
      flex: 1,
=======

const styles = StyleSheet.create({
    container: {
      flex: 1,
    //   minHeight:'100%',
>>>>>>> 7523c8b5ed27a9a1737df7b6a011145a3caaa1d8
    },
    image: {
      flex: 1,
      justifyContent: 'center',
<<<<<<< HEAD
      height:altura
=======
>>>>>>> 7523c8b5ed27a9a1737df7b6a011145a3caaa1d8
    },
    text: {
      color: 'white',
      fontSize: 40,
      fontFamily:'Bold',
      textAlign: 'center',
      marginLeft:14,
      marginRight:14
    },
    text2: {
        color: 'white',
        fontSize: 20,
        lineHeight: 45,
        fontFamily:'Regular',
        textAlign: 'center',
    },
    btn_hero:{
        
        backgroundColor:'#F472B6',
        borderRadius:50000,
        paddingVertical:15,
        width:'80%',
        alignSelf:'center',
        marginTop:20 
    },
    btn_text:{
        textAlign:'center',
        color:'white',
        fontSize: 20,
        lineHeight: 30,
        fontFamily:'Medium'
    }
});

