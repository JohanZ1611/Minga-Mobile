import { useFonts } from 'expo-font';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

export default function NoCard() {
    
    const [fontsLoaded] = useFonts({
        Bold: require('../../../assets/fonts/Poppins-Bold.ttf'),
        Regular: require('../../../assets/fonts/Poppins-Regular.ttf'),
        Medium: require('../../../assets/fonts/Poppins-Medium.ttf'),
        SemiBold: require('../../../assets/fonts/Poppins-SemiBold.ttf')
    })
  const text = useSelector(store => store.text.text);
  if(!fontsLoaded)return null
  return (
    <View style={styles.nocard}>
      <Text style={styles.textnocard}>
        No matches in the Search "{text}"
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
    nocard: {
        width:'80%',
        height:50,
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:30
    },
    textnocard: {
        textAlign: 'center',
        fontFamily: 'SemiBold',
        fontSize: 16,
    },
});