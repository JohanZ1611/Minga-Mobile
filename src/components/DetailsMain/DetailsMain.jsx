import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { useFonts } from 'expo-font';

export default function DetailsMain() {
    const [fontsLoaded] = useFonts({
        Bold: require('../../../assets/fonts/Poppins-Bold.ttf'),
        Regular: require('../../../assets/fonts/Poppins-Regular.ttf'),
        Medium: require('../../../assets/fonts/Poppins-Medium.ttf'),
        SemiBold: require('../../../assets/fonts/Poppins-SemiBold.ttf')
    })
    let manga = useSelector(store => store.mangas.manga)

    let category = manga.category_id?.name;
    let company = manga.company_id?.name;

    if(!fontsLoaded)return null
    return (
        <View style={styles.detailsMain}>
          <Image style={styles.detailsMainImg} source={{ uri: manga.cover_photo }} />
          <Text style={styles.detailsMainTitle}>{manga.title}</Text>
          <View style={styles.categoryDetails}>
            <Text style={[styles.categoryDetailsH3, styles[category]]}>{category}</Text>
            <Text style={styles.categoryDetailsP}>{company}</Text>
          </View>
        </View>
    )
}


const styles = StyleSheet.create({
    detailsMain: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 16,
      width: '100%',
    },
    detailsMainImg: {
      height: 352,
      width: '100%',
      borderRadius: 8,
      resizeMode:'cover'
    },
    detailsMainTitle: {
      alignSelf: 'flex-start',
      fontSize: 40,
      fontFamily:'Regular',
      letterSpacing: 0,
    },
    categoryDetails: {
      display: 'flex',
      flexDirection:'row',
      width: '100%',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 65,
    },
    categoryDetailsH3: {
        fontFamily:'Medium',
        padding:10,
        borderRadius:50
    },
    categoryDetailsP: {
      fontFamily:'Medium',
      fontSize: 20,
      color: '#9D9D9D',
    },
    shonen: {
      backgroundColor: '#FFE0DF',
      color: '#EF8481',
    },
    comic: {
      backgroundColor: '#FFDFC8',
      color: '#FC9C57',
    },
    shojo: {
      backgroundColor: '#D1FBF0',
      color: '#00BA88',
    },
    seinen: {
      backgroundColor: '#8883F0',
      color: '#E0DBFF',
    },
});

