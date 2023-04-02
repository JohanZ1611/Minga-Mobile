import { Text, View, StyleSheet,ScrollView,StatusBar } from 'react-native'
import React,{useRef} from 'react'
import { useFocusEffect } from '@react-navigation/core'
import Hero from '../../components/Hero/Hero'
import Register from '../../components/Register/Register'


export default function Index() {
  const scrollViewRef = useRef(null)

  useFocusEffect(()=>{
    scrollViewRef.current.scrollTo({ x: 0, y: 0, animated: true })
  })
  return (
    <ScrollView ref={scrollViewRef} >
      <View >
        <Hero/>
        <Register/>
      </View>
  </ScrollView>
  )
}

