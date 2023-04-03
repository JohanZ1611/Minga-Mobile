import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity,StyleSheet,ImageBackground } from 'react-native';
import apiUrl from '../../configHost.js';

export default function Chapters() {
  const navigation = useNavigation();
  const route = useRoute();
  const { id,mangaId} = route.params;
  const url = apiUrl + 'chapters/';
  
  const [chapter, setChapter] = useState({});
  const [next, setNext] = useState('');
  const [prev, setPrev] = useState('');
  const [page, setPage] = useState(0);


  useEffect(() => {
    axios
      .get(url + id)
      .then((response) => { 
        setChapter(response.data.chapter);
        setPrev(response.data.prev);
        setNext(response.data.next);
      })
      .catch((error) => console.log(error));
  }, []);

  

  let handlePrev = () => {
    if(page === 0){
        setTimeout(() => {
            navigation.navigate('MangaDetails',{id:mangaId});
          }, 100);
    }else {
      setPage(page - 1);
    } 
  };

  let handleNext = () => {
    if (page === chapter.pages.length - 1) {
        setTimeout(() => {
            navigation.navigate('MangaDetails',{id:mangaId});
          }, 100);;
    } else {
      setPage(page + 1);
    }
  };

  
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>Cap N° {chapter.order} - {chapter.title}</Text>
      </View>
      <View style={styles.chapters}>
        <ImageBackground style={styles.image} source={{ uri: chapter.pages?.[page] }} alt="comicimage" >
            <TouchableOpacity style={styles.prev} onPress={handlePrev}>
              <Image style={styles.prevImg} source={require('../../img/flechaPrev.png')} alt="prevarrow" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.next} onPress={handleNext}>
              <Image style={styles.nextImg} source={require('../../img/flechaNext.png')} alt="nextarrow" />
            </TouchableOpacity>
        </ImageBackground>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      backgroundColor:'#FF5722',
      height: '8%',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    titleText:{
        color: 'white',
    },
    chapters: {
      height: '70%',
      width: '100%',
      display: 'flex',
      flexDirection:'row',
      justifyContent: 'center',
      alignItems: 'center'
    },
    image: {
      resizeMode: 'contain',
      height: '100%',
      width: '100%',
      flexDirection:'row'
    },
    prev: {
      height: '100%',
      width: '50%',
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent:'center'
    },
    prevImg: {
      marginLeft:10
    },
    next: {
        height: '100%',
        width: '50%',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent:'center'
    },
    nextImg: {
      marginRight: 10
    }
  });