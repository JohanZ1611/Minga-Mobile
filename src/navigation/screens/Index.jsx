import { Text, View, StyleSheet,ScrollView,StatusBar } from 'react-native'
import React from 'react'
import Hero from '../../components/Hero/Hero'
import Register from '../../components/Register/Register'

export default function Index() {
  return (
    <ScrollView>
            <Hero/>
            <Register/>
    </ScrollView>
  )
}

