import React from 'react'
import { Text, View,StyleSheet,Dimensions,Image,TextInput,ImageBackground,TouchableOpacity} from 'react-native'
import { useEffect, useRef, useState,useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation, useRoute,useFocusEffect } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ChecksManga from '../ChecksManga/ChecksManga';
import NoCard from '../NoCard/NoCard';
import MangasAction from '../../store/Mangas/actions';
import TextAction from '../../store/search/actions'
import TypeManga from '../../components/TypeManga/TypeManga'
import CardsManga from '../CardsManga/CardsManga';


const {read_mangas} = MangasAction
const {captureText} = TextAction

export default function Manga() {

    const [fontsLoaded] = useFonts({
        Bold: require('../../../assets/fonts/Poppins-Bold.ttf'),
        Regular: require('../../../assets/fonts/Poppins-Regular.ttf'),
        Medium: require('../../../assets/fonts/Poppins-Medium.ttf'),
        SemiBold: require('../../../assets/fonts/Poppins-SemiBold.ttf')
    })

    const [reload, setReload] = useState(false);
    let [page,setPage] = useState(1)
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [title,setTitle] = useState('')
    const mangas = useSelector((state) => state.mangas.mangas);
    const defaultText = useSelector((state) => state.text.text);
    const defaultChecks = useSelector((state) => state.checks.checks);

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
        dispatch(read_mangas({ inputText: defaultText, inputCheck: defaultChecks, inputPage: page,headers }));
    }, [page, defaultText, defaultChecks, reload]);


    function handleChange(text) {
        setTitle(text);
        setReload(!reload);
        dispatch(captureText({ inputText: text }));
    }
    
    if(!fontsLoaded)return null
  return (
    <View style={styles.manga}>
        <ImageBackground style={styles.imgSearch} source={require('../../img/img-manga.png')} resizeMode="cover">
            <Text style={styles.namePage}>Manga</Text>
            <View style={styles.contSearchManga}>
                <Image style={{width:25,height:25,marginLeft:10}} source={require('../../img/Search.png')}/>
                <TextInput value={title} defaultValue={defaultText} style={styles.inputSearch} placeholder='Find your manga here' onChangeText={handleChange} />
            </View>
        </ImageBackground>
        
        <View style={styles.cardManga}>
            <View style={styles.contChecks}>
                <TypeManga />
                {/* <ChecksManga /> */}
            </View>
            <View style={styles.contCards}>
                {mangas.length ? mangas.map((manga) => (
                    <CardsManga key={manga._id} title_={manga.title} category_={manga.category_id} photo={manga.cover_photo} _id={manga._id}/>
                )) : <NoCard />}
            </View>
            
            <View style={styles.pageManga}>
                {
                    page === 1 ? <></> :
                        <TouchableOpacity style={styles.btnPrev} onPress={() => {setPage(page-1)}}>
                            <Text style={styles.PrevText}>Prev</Text>
                        </TouchableOpacity>
                }
                {
                    mangas.length == 6 || mangas.length == 10 ?
                        <TouchableOpacity style={styles.btnNext} onPress={() => {setPage(page+1)}}>
                            <Text style={styles.NextText}>Next</Text>
                        </TouchableOpacity> : <></>
                }
            </View>
        </View>
    </View>
  )
}

const altura = Dimensions.get('window').height;
const styles = StyleSheet.create({
    manga: {
      minHeight: 'auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingBottom:150
    },
    namePage: {
      fontFamily: 'SemiBold',
      fontSize: 40,
      color: '#FFFFFF',
    },
    contSearchManga: {
      width: '80%',
      height: 40,
      backgroundColor: '#EBEBEB',
      borderRadius: 10,
      display: 'flex',
      flexDirection:'row',
      alignItems: 'center',
      gap:20,
    },
    imgSearch: {
      width: '100%',
      height: 360,
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      gap:20
    },
    inputSearch: {
      width: '80%',
      fontFamily: 'Regular',
      fontSize: 14,
      backgroundColor: 'transparent',
      borderWidth: 0,
    },
    cardManga: {
      width: '100%',
      height: 'auto',
      position: 'relative',
      bottom: '5%',
      paddingTop:40,
      backgroundColor: '#FFFFFF',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.11,
      shadowRadius: 6.68,
      elevation: 5,
      borderRadius: 50,
      display: 'flex',
      flexDirection: 'column',
      alignItems:'center'
    },
    contChecks: {
      height: '17%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    contCards: {
        height: 'auto',
        marginTop:60,
        display: 'flex',
        alignItems:'center',
    },
    pageManga: {
      width:'60%',
      height: '4%',
      marginTop:'10%',
      display: 'flex',
      flexDirection:'row',
      justifyContent: 'center',
      alignItems: 'center',
      gap:20
    },
    btnPrev: {
        width: 92,
        height: 35,
        backgroundColor: '#FFE0DF',
        borderRadius: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    PrevText:{
        fontFamily:'Bold',
        fontSize: 12,
        color: '#EF8481',
    },
    btnNext: {
        width: 92,
        height: 35,     
        backgroundColor: '#D1FBF0',
        borderRadius: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      NextText:{
        fontFamily: 'Bold',
        fontSize: 12,
        color: '#00BA88',
      }

})      