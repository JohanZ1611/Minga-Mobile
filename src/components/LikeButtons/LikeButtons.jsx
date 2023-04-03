import React from 'react'
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import ThumbsUp from '../../img/ThumbsUp.png';
import ThumbsDown from '../../img/ThumbsDown.png';
import Surprised from '../../img/Surprised.png';
import InLove from '../../img/InLove.png';

export default function LikeButtons() {
    return (
        <View style={styles.container}>
          <TouchableOpacity style={styles.button}>
            <Image source={ThumbsUp} style={styles.image} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Image source={ThumbsDown} style={styles.image} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Image source={Surprised} style={styles.image} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Image source={InLove} style={styles.image} />
          </TouchableOpacity>
        </View>
      );
    
}

const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      width: '100%',
      gap:25
    },
    button: {
      width: 60,
      height: 60,
    },
    image: {
      width: '100%',
      height: '100%',
      resizeMode: 'contain',
    },
    
});