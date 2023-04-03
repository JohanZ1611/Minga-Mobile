import React from 'react';
import { View, Text, Image, TouchableOpacity,StyleSheet } from 'react-native';
import icon_comment from '../../img/icon_comment.png';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useFonts } from 'expo-font';

export default function ChapterComponent(props) {
    const [fontsLoaded] = useFonts({
        Bold: require('../../../assets/fonts/Poppins-Bold.ttf'),
        Regular: require('../../../assets/fonts/Poppins-Regular.ttf'),
        Medium: require('../../../assets/fonts/Poppins-Medium.ttf'),
        SemiBold: require('../../../assets/fonts/Poppins-SemiBold.ttf')
    })

    const {id} = useRoute().params

    const chapter = { ...props };
    const comments = Math.floor(Math.random() * 200);

    const navigation = useNavigation();

    function handleNavigate() {
        navigation.navigate(`Chapters`, { id: chapter._id, pag:0 ,mangaId:id});
    }
    if(!fontsLoaded)return null
    return (
        <View style={styles.chapterComponent} >
            <Image source={{ uri: chapter.cover_photo }} style={styles.chapterCover} />
            <View style={styles.chapterInfo}>
                <Text style={styles.chapterTitle}>{chapter.title}</Text>
                <View style={styles.chapterComments}>
                    <Image source={icon_comment} style={styles.commentIcon} />
                    <Text>{comments}</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.readButton} onPress={handleNavigate}>
                <Text style={styles.readButtonText}>Read</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    chapterComponent: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
    chapterCover: {
        width: 83,
        height: 73.78,
        borderRadius: 8,
        resizeMode: 'cover',
        overflow: 'hidden',
      },
      chapterInfo: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: 82,
        width: 200,
        marginLeft: 26,
        marginRight: 11,
      },
    chapterTitle: {
        fontFamily:'Regular',
        fontSize: 20,
        lineHeight: 30,
        color: '#000000',
      },
      chapterComments: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
      },
    commentIcon: {
        width: 37,
        height: 29,
        resizeMode: 'contain',
      },
    readButton: {
        height: 50,
        width: 100,
        borderRadius: 50000,
        backgroundColor: '#F97316',
        alignItems: 'center',
        justifyContent: 'center',
      },
    readButtonText: {
        fontFamily:'Bold',
        fontSize: 20,
        lineHeight: 36,
        color: '#FFFFFF',
      },
})