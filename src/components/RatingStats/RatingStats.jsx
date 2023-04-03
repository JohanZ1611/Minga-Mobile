import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { useFonts } from 'expo-font';

export default function RatingStats() {

    const [fontsLoaded] = useFonts({
        Bold: require('../../../assets/fonts/Poppins-Bold.ttf'),
        Regular: require('../../../assets/fonts/Poppins-Regular.ttf'),
        Medium: require('../../../assets/fonts/Poppins-Medium.ttf'),
        SemiBold: require('../../../assets/fonts/Poppins-SemiBold.ttf')
    })

  const count = useSelector((store) => store.mangas.count);

  if(!fontsLoaded)return null

  return (
    <View style={styles.ratingStats}>
      <View style={styles.componentRating}>
        <Text style={styles.rating1}>4.5/5</Text>
        <Text style={styles.rating2}>Rating</Text>
      </View>
      <View style={styles.componentRating}>
        <Text style={styles.rating1}>{count}</Text>
        <Text style={styles.rating2}>Chapters</Text>
      </View>
      <View style={styles.componentRating3}>
        <Text style={styles.rating1}>Eng</Text>
        <Text style={styles.rating2}>Language</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    ratingStats: {
      backgroundColor: '#FFFFFF',
      display: 'flex',
      flexDirection:'row',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 17,
      paddingHorizontal: 0,
      shadowColor: 'rgba(0, 0, 0, 0.15)',
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 7,
      borderRadius: 20,
      marginTop: 25,
      marginBottom: 37,
    },
    rating1: {
      fontFamily:'Regular',
      fontSize: 24,
      lineHeight: 36,
      textAlign: 'center',
      color: '#424242',
    },
    rating2: {
      fontFamily:'Regular',
      fontSize: 12,
      lineHeight: 18,
      textAlign: 'center',
      color: '#9D9D9D',
    },
    componentRating: {
      paddingVertical: 0,
      paddingHorizontal: 25.63,
      alignItems: 'center',
      borderRightWidth: 1,
      borderColor: '#9D9D9D',
    },
    componentRating3: {
        paddingVertical: 0,
        paddingHorizontal: 25.63,
        alignItems: 'center',
        
      },
  });