import React from 'react'
import { View,Text,Image,StyleSheet} from 'react-native'

export default function Hero() {
  return (
    <View style={style.contain}>
        <Image style={style.img_hero} source={require('../../img/img-hero.png')} resizeMode="cover"/>
    </View>
  )
}

const style = StyleSheet.create({
    contain:{
        width:'100%',
        height:'100%',
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    },
    img_hero:{
        width:'100%',
        height:'100%'
    }
})





