import React, { useEffect, useState,useCallback} from 'react';
import { useRoute, useNavigation,useFocusEffect} from '@react-navigation/native';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ChapterComponent from '../ChapterComponent/ChapterComponent';
import mangasActions from '../../store/Mangas/actions';

const { read_chapters } = mangasActions;

export default function ChaptersList() {
  const { id } = useRoute().params;

  const [page,setPage] = useState(1)

  const dispatch = useDispatch();

  const chapters = useSelector(store => store.mangas.chapters);
  const count = useSelector(store => store.mangas.count);

  
  const navigation = useNavigation();
  

  // BOTONES DE PAGINADO

  const [token, setToken] = useState(null);
    useFocusEffect(
        useCallback(() => {
          const getTokenAndUser = async () => {
            const storedToken = await AsyncStorage.getItem('token');
            setToken(storedToken);
          };
          getTokenAndUser();
        }, [])
    );

    

  function handleClickPrev() {
    if (page > 1) {
      setPage(page - 1)
      let headers = { headers: { 'Authorization': `Bearer ${token}` } }
      dispatch(read_chapters({ id, page: page,headers }));
    }
  }
  
  function handleClickNext() {
    if (chapters[3]) {
      if (count !== chapters[3].order) {
        setPage(page + 1)
        let headers = { headers: { 'Authorization': `Bearer ${token}` } }
        dispatch(read_chapters({ id, page: page,headers }));
      }
    }
  }

  

  let displayPagination = 'buttonPagination';
  if (count < 5) {
    displayPagination = 'buttonPagination displayPagination';
  }

  return (
    <View style={styles.chaptersList}>
      {chapters.map((chapter) => (
        <ChapterComponent key={chapter.title} title={chapter.title} order={chapter.order} cover_photo={chapter.cover_photo} _id={chapter._id} />
      ))}

      <View style={styles.paginationButtonsDetails}>
        <TouchableOpacity style={[styles.buttonPagination, styles.buttonPrev, count < 5 && styles.displayPagination]} onPress={handleClickPrev}>
          <Text style={styles.buttonText}>{'<'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.buttonPagination, styles.buttonNext, count < 5 && styles.displayPagination]} onPress={handleClickNext}>
          <Text style={styles.buttonText}>{'>'}</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
    chaptersList: {
      marginTop: 45.56,
      display: 'flex',
      flexDirection: 'column',
      gap: 50,
      width: '100%',
      alignItems: 'center',
    },
    paginationButtonsDetails: {
      display: 'flex',
      flexDirection:'row',
      gap: 20,
    },
    buttonPagination: {
      width: 30,
      height: 30,
      borderRadius: 50,
      backgroundColor: '#F97316',
      color: 'whitesmoke',
      borderWidth: 0.5,
      borderColor: '#d6d6d6',
      shadowColor: 'rgba(0, 0, 0, 0.15)',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 3,
      shadowRadius: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonPaginationHover: {
      backgroundColor: '#ff9448',
      borderWidth: 0.5,
      borderColor: '#ff9448',
      transition: 'all 0.3s ease',
    },
    displayPagination: {
      display: 'none',
    },
  });