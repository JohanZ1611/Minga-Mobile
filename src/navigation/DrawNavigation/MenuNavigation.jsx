import React,{useEffect,useState, useCallback} from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawerHeader from './CustomDrawerHeader';
import CustomDrawerContain from './CustomDrawerContain';
import { useNavigation,useFocusEffect } from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';
import apiUrl from '../../configHost';
import axios from 'axios';
import Logout from '../../navigation/screens/Logout';
import Index from '../screens/Index';
import Login from '../screens/Login';
import Mangas from '../screens/Mangas';
import Register from '../../components/Register/Register';
import MangaDetails from '../screens/MangaDetails';

const Menu = createDrawerNavigator()

export default function MenuNavigation() {
  const [token, setToken] = useState(null);
  const navigate = useNavigation();

  useFocusEffect(
    useCallback(() => {
      const getTokenAndUser = async () => {
        const storedToken = await AsyncStorage.getItem('token');
        setToken(storedToken);
      };
      getTokenAndUser();
    }, [])
  );

  const handleLogout = async () => {
    let url = apiUrl + 'auth/token';
    let headers = { headers: { 'Authorization': `Bearer ${token}` } };

    try {
      await axios.post(url, null, headers);
      await AsyncStorage.setItem('token', '');
      await AsyncStorage.setItem('user', JSON.stringify({
        name: '',
        mail: '',
        photo: ''
      }));

      console.log('cerrado sesion');
      navigate.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      });
    } catch (err) {
      console.log(err);
    }
  }

  useFocusEffect(
    useCallback(() => {
      const getTokenAndUser = async () => {
        const storedToken = await AsyncStorage.getItem('token');
        setToken(storedToken);
      };
      getTokenAndUser();
    }, [])
  );

  return (
    <Menu.Navigator
      screenOptions={{
        drawerStyle:{ backgroundColor: '#F472B6' },
        
        // headerLeft: (route) => (
        //   console.log(route.navigation),
        //   <CustomDrawerHeader />
        // ),
        headerTintColor:'#F472B6',
        headerTransparent:true
      }}
      drawerContent={(props) => <CustomDrawerContain {...props} navigation={props.navigation} handleLogout={handleLogout}/>}
    >
      <Menu.Screen name='Home' component={Index}/>
      {token? null :<Menu.Screen name='Register' component={Register}/>}
      {token? null :<Menu.Screen name='Login' component={Login}/>}   
      {token?<Menu.Screen name='Mangas' component={Mangas} />:null}
      {token? <Menu.Screen name='Logout' component={Logout} options={{title: 'Logout'}} />: null}
      <Menu.Screen name='MangaDetails' component={MangaDetails} />
    </Menu.Navigator>
  );
}