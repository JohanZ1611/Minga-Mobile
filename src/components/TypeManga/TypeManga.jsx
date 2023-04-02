import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import adventuresImg from '../../img/adventure.png';
import nostalgicImg from '../../img/nostalgic.png';
import popularImg from '../../img/popular.png';

export default TypeManga = () => {
    const [fontsLoaded] = useFonts({
        Bold: require('../../../assets/fonts/Poppins-Bold.ttf'),
        Regular: require('../../../assets/fonts/Poppins-Regular.ttf'),
        Medium: require('../../../assets/fonts/Poppins-Medium.ttf'),
        SemiBold: require('../../../assets/fonts/Poppins-SemiBold.ttf')
    })
    if(!fontsLoaded)return null
  return (
    <View style={styles.typeMangas}>
      <Text style={styles.nameTypemanga}>Explore</Text>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.button}>
          <ImageBackground source={adventuresImg} style={styles.backgroundImg}>
            <Text style={styles.buttonText}>Adventurers</Text>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <ImageBackground source={nostalgicImg} style={styles.backgroundImg}>
            <Text style={styles.buttonText}>Nostalgic</Text>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <ImageBackground source={popularImg} style={styles.backgroundImg}>
            <Text style={styles.buttonText}>Popular</Text>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  typeMangas: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '70%',
    height: 90,
  },
  nameTypemanga: {
    fontFamily: 'Medium',
    fontSize: 24,
    lineHeight: 24,
    alignSelf: 'flex-start',
    marginTop:4 ,
    paddingTop:2
  },
  btnContainer: {
    height: '100%',
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: '1%',
    justifyContent: 'space-between',
    gap:10
  },
  button: {
    borderRadius: 8,
    overflow: 'hidden',
    width: '33%',
    height: '100%',
  },
  buttonText: {
    fontFamily: 'Medium',
    fontSize: 14,
    color: 'white',
    alignSelf: 'center',
    paddingBottom: '2%',
  },
  backgroundImg: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },
});