import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';

export default function Description() {
    const [fontsLoaded] = useFonts({
        Bold: require('../../../assets/fonts/Poppins-Bold.ttf'),
        Regular: require('../../../assets/fonts/Poppins-Regular.ttf'),
        Medium: require('../../../assets/fonts/Poppins-Medium.ttf'),
        SemiBold: require('../../../assets/fonts/Poppins-SemiBold.ttf')
    })

    const description = useSelector((store) => store.mangas.manga.description);

    if(!fontsLoaded)return null
    
    return (
        <View style={styles.container}>
            <Text style={styles.description}>{description}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        width:'90%'
    },
    description: {
    width: '100%',
    marginTop: 27,
    fontFamily:'Regular',
    fontSize: 12,
    lineHeight:20,
    color: '#424242',
    },
});