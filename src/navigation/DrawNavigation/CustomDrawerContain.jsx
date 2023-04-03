import React,{useState,useCallback} from 'react'
import { useFocusEffect } from '@react-navigation/native';
import { Text, View,Image,FlatList,StyleSheet,TouchableOpacity} from 'react-native'
import { useFonts } from 'expo-font';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function CustomDrawerContain({navigation,handleLogout}) {
  
  const [fontsLoaded] = useFonts({
    Bold: require('../../../assets/fonts/Poppins-Bold.ttf'),
    Regular: require('../../../assets/fonts/Poppins-Regular.ttf'),
    Medium: require('../../../assets/fonts/Poppins-Medium.ttf'),
    SemiBold: require('../../../assets/fonts/Poppins-SemiBold.ttf')
  })

  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  useFocusEffect(
    useCallback(() => {
      const getTokenAndUser = async () => {
        const storedToken = await AsyncStorage.getItem('token');
        const storedUser = await AsyncStorage.getItem('user');
  
        if (!storedToken) {
          AsyncStorage.setItem('user', JSON.stringify({
            name: '',
            mail: '',
            photo: ''
          }));
        }
  
        setToken(storedToken);
        setUser(JSON.parse(storedUser));
      };
  
      getTokenAndUser();
    }, [])
  );


  let listArray =[
    {title:'Home',route:'Home'},
    {title:'Register',route:'Register'},
    {title:'Login',route:'Login'},
    {title:'Mangas',route:'Mangas'},
    {title:'Logout',route:'Logout'},
    
  ]

  if (token) {
    listArray = listArray.filter((item) => item.title !== 'Register' && item.title !== 'Login');
  }

  if(!token){
    listArray = listArray.filter((item) => item.title !== 'Logout' && item.title !== 'Mangas');
  }

  const [selectedId, setSelectedId] = useState();

  const Item = ({item, onPress, backgroundColor, textColor}) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
      <Text style={[styles.title, {color: textColor}]}>{item.title}</Text>
    </TouchableOpacity>
  );

  const renderItem = ({item}) => {
    const backgroundColor = item.title === selectedId ? 'white' : 'transparent';
    const color = item.title === selectedId ?  '#F472B6':'white';

    return (
      <Item
        item={item}
        onPress={() => {
          setSelectedId(item.route);
          if (item.title === 'Logout') {
            handleLogout();
          } else {
            navigation.navigate({ name: item.route });
          }
          
        }}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  if(!fontsLoaded)return null
  return (
    <View style={{flex:1}}>
      <View style={{flex:0.15,paddingHorizontal:25,display:'flex',flexDirection:'row',alignItems:'center',gap:10}}>
        {token?<Image source={{ uri: user?.photo || 'https://i.postimg.cc/fyJsspq8/image.png' }} style={{height:65,width:65,borderRadius:50}}/>:<Image source={require('../../img/photoProfile.png')} style={{height:65,width:65,borderRadius:50}}/>}
        <View  style={{flex:1,display:'flex',flexDirection:'column',gap:5}}>
          {token?<Text style={{fontFamily:'SemiBold',fontSize:16,color:'white'}}>{user?.name || '' }</Text>:<Text style={{fontFamily:'SemiBold',fontSize:16,color:'white'}}>User Name</Text>}
          {token?<Text style={{fontFamily:'Medium',fontSize:12,color:'white'}}>{user?.mail || '' }</Text>:<Text style={{fontFamily:'Medium',fontSize:12,color:'white'}}>UserEmail@gmail.com</Text>}
        </View>
      </View>
      <View style={{flex:0.85}}>
        <FlatList data={listArray} renderItem={renderItem} extraData={selectedId}/>
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    alignItems:'center',
    padding: 12,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius:8
  },
  title: {
    fontSize: 15,
    fontFamily:'SemiBold',
    color:'white'
  },
  
});