import React,{useEffect} from 'react'
import { Text, View,StyleSheet } from 'react-native'
import { useDispatch } from 'react-redux';
import { useRoute } from '@react-navigation/core';
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


    useEffect(() => {
        dispatch(read_manga({ id: id }));
        dispatch(read_chapters({ id: id, page: page }));
    }, []);
    
    return (
        <View style={styles.MangaDetails}>
            <DetailsMain />
            <LikeButtons />
            <RatingStats />
            <DescriptionAndChapters />
        </View>
    );
}


const styles = StyleSheet.create({
    MangaDetails: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    },
});