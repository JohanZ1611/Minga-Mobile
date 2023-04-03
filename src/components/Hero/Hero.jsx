import React,{useState,useCallback} from 'react'
import { View,Text,TouchableOpacity,StyleSheet,ImageBackground,StatusBar, Dimensions} from 'react-native'
import { useFonts } from 'expo-font';
import { ToastAndroid } from 'react-native';
import { useNavigation,useFocusEffect } from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Hero() {
    const [fontsLoaded] = useFonts({
        Bold: require('../../../assets/fonts/Poppins-Bold.ttf'),
        Regular: require('../../../assets/fonts/Poppins-Regular.ttf'),
        Medium: require('../../../assets/fonts/Poppins-Medium.ttf')
    })
    const [token, setToken] = useState(null);
    const navigation = useNavigation()
    useFocusEffect(
        useCallback(() => {
          const getTokenAndUser = async () => {
            const storedToken = await AsyncStorage.getItem('token');
            setToken(storedToken);
          };
          getTokenAndUser();
        }, [])
    );

    function handleManga(){
      if(token){
        navigation.navigate('Mangas')
      }else{
        ToastAndroid.show('Sign up or log in !', ToastAndroid.LONG);
      }
    }

    if(!fontsLoaded)return null
    
  return (
    <View style={styles.container}>
        <ImageBackground source={require('../../img/img-hero.png')} resizeMode="cover" style={styles.image}>
          <Text style={styles.text}>Live the emotion of the manga</Text>
          <Text style={styles.text2}>Find the perfect manga for you</Text>
          <TouchableOpacity style={styles.btn_hero} onPress={handleManga}>
                <Text style={styles.btn_text}>Explore</Text>
          </TouchableOpacity>
          
        </ImageBackground>
        <StatusBar style='auto'/>
       
    </View>
  )
}
const altura = Dimensions.get('window').height;
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      flex: 1,
      justifyContent: 'center',
      height:altura
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

