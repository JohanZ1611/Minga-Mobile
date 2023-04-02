import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/core';

export default function CardsManga(props) {

  const [fontsLoaded] = useFonts({
    Bold: require('../../../assets/fonts/Poppins-Bold.ttf'),
    Regular: require('../../../assets/fonts/Poppins-Regular.ttf'),
    Medium: require('../../../assets/fonts/Poppins-Medium.ttf'),
    SemiBold: require('../../../assets/fonts/Poppins-SemiBold.ttf')
  })

  const navigation = useNavigation()

  const handleRead = () => {
    // props.navigation.navigate(`MangaDetails`, {
    //   id: props._id,
    //   chapter: 1,
    // });
    navigation.navigate('MangaDetails')
  };
  if(!fontsLoaded)return null
  return (
    <View  style={styles.card}>
      <View
        style={[
          styles.spanCard,
          props.category_.name.includes('shonen')
            ? styles.redSpan
            : props.category_.name.includes('comic')
            ? styles.orangeSpan
            : props.category_.name.includes('shojo')
            ? styles.greenSpan
            : props.category_.name.includes('seinen')
            ? styles.purpleSpan
            : null,
        ]}
      />
      <View style={styles.infCard}>
        <Text style={styles.titleCard}>{props.title_}</Text>
        <Text
          style={[
            styles.typeCard,
            props.category_.name.includes('shonen')
              ? styles.redType
              : props.category_.name.includes('comic')
              ? styles.orangeType
              : props.category_.name.includes('shojo')
              ? styles.greenType
              : props.category_.name.includes('seinen')
              ? styles.purpleType
              : null,
          ]}
        >
          {props.category_.name}
        </Text>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.btnReadManga} onPress={handleRead}>
            <Text style={styles.btnReadMangaText}>Read</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Image source={{ uri: props.photo }} style={styles.imgCard} />
    </View>
  );
}

const styles = StyleSheet.create({
    card: {
      width: '70%',
      height: 120,
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: 'rgba(0, 0, 0, 0.05)',
      borderRadius: 10,
      marginVertical: 8,
      alignSelf: 'center',
      backgroundColor: 'white',
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.03,
      shadowRadius: 4,
      elevation: 2,
    },
    spanCard: {
      height: '75%',
      width: 4,
    },
    infCard: {
      flex: 1,
      height: '100%',
      justifyContent: 'center',
      paddingLeft: 10,
    },
    imgCard: {
      width: '40%',
      height: '100%',
      resizeMode: 'cover',
      borderTopLeftRadius:50,
      borderBottomLeftRadius:50,
      borderTopRightRadius:10,
      borderBottomRightRadius:10
    },
    titleCard: {
      fontFamily: 'Medium',
      fontSize: 16,
      lineHeight: 20,
    },
    typeCard: {
      fontFamily: 'Medium',
      fontSize: 14,
      lineHeight: 17,
    },
    buttons: {
      flexDirection: 'row',
    },
    btnReadManga: {
      width: 92,
      height: 35,
      marginTop: 10,
      backgroundColor: '#D1FBF0',
      borderRadius: 50,
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.04,
        shadowRadius: 4,
        elevation: 2,
    },
    btnReadMangaText: {
        fontFamily: 'Bold',
        fontSize: 12,
        color: '#00BA88',
    },
    redSpan: {
        backgroundColor: '#EF8481',
      },
    orangeSpan: {
        backgroundColor: '#FC9C57',
      },
    greenSpan: {
        backgroundColor: '#00BA88',
      },
    purpleSpan: {
        backgroundColor: '#8883F0',
      },
    redType: {
        color: '#EF8481',
      },
    orangeType: {
        color: '#FC9C57',
      },
    greenType: {
        color: '#00BA88',
      },
    purpleType: {
        color: '#8883F0',
      },

})    