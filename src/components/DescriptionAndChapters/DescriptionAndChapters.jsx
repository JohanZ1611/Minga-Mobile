import React, { useState, useRef, useEffect } from 'react';
import { View, Text, Switch,StyleSheet} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import eventsActions from '../../store/checks/actions';
import Description from '../Description/Description';
import ChaptersList from '../ChaptersList/ChaptersList';

const { captureState } = eventsActions;

export default function DescriptionAndChapters() {
  const inputRef = useRef();
  const dispatch = useDispatch();
  const isChecked = useSelector(store => store.checks.checked);

  function handleChange(checked) {
    dispatch(captureState({ buttonState: checked }));
  }

  return (
    <View style={styles.container}>
      <View style={styles.btnContainer}>
        <Switch
          ref={inputRef}
          value={isChecked}
          onValueChange={handleChange}
          style={{ userSelect: 'none' }}
        />
        <Text>{isChecked ? 'Chapters' : 'Manga'}</Text>
      </View>
      {isChecked ? <ChaptersList /> :<Description />  }
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    btnContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
    },
    switchText: {
        fontSize: 16,
        color: '#9D9D9D',
    },
});