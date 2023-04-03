import React,{useEffect,useCallback,useState} from 'react'
import { Text, View,StyleSheet,ScrollView } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { useRoute,useFocusEffect } from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DetailsMain from '../DetailsMain/DetailsMain';
import LikeButtons from '../LikeButtons/LikeButtons';
import RatingStats from '../RatingStats/RatingStats';
import DescriptionAndChapters from '../DescriptionAndChapters/DescriptionAndChapters';
import MangaAction from '../../store/Mangas/actions'
const { read_manga, read_chapters } = MangaAction;

export default function DetailsManga() {
    const dispatch = useDispatch();
    const route = useRoute();
    const { id } = route.params;
    const page = 1

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

    useEffect(() => {  
        let headers = { headers: { 'Authorization': `Bearer ${token}` } }
        dispatch(read_manga({ id: id ,headers }));
        dispatch(read_chapters({ id: id, page: page, headers }));
    }, []);
    
    

    return (
        <ScrollView>
            <View style={styles.MangaDetails}>
                <DetailsMain />
                <LikeButtons />
                <RatingStats />
                <DescriptionAndChapters />
            </View>
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    MangaDetails: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '80%',
      paddingTop: 95,
      paddingLeft: 17,
      paddingRight: 17,
      paddingBottom: 28,
      backgroundColor: '#EBEBEB',
    },
  });