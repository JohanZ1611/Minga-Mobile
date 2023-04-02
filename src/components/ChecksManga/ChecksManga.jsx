import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { captureChecks } from '../../store/checks/actions';
import axios from 'axios';
import apiUrl from '../../configHost.js';

export default ChecksManga = () => {

  const dispatch = useDispatch();
  const url = apiUrl + 'mangas/category-manga';

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios.get(url)
      .then(response => setCategories(response.data.categories))
      .catch(e => {
        console.log(e);
      })
  }, [url]);

  const category_name = categories.map(cat => cat.name);
  const category_id = categories.map(cat => cat._id);

  const checkboxValues = useSelector(store => store.checks.checks);

  const handleCheck = (value) => {
    let newValues;
    if (checkboxValues.includes(value)) {
      newValues = checkboxValues.filter(v => v !== value);
    } else {
      newValues = [...checkboxValues, value];
    }
    dispatch(captureChecks({inputCheck:newValues}));
  };

  return (
    <View style={styles.formChecks}>
      <TouchableOpacity style={[styles.checkBtn, checkboxValues.includes(category_id[0]) ? styles.selectedBtn : null]} onPress={() => handleCheck(category_id[0])}>
        <Text style={styles.checkLabel}>{category_name[0]}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.checkBtn, checkboxValues.includes(category_id[1]) ? styles.selectedBtn : null]} onPress={() => handleCheck(category_id[1])}>
        <Text style={styles.checkLabel}>{category_name[1]}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.checkBtn, checkboxValues.includes(category_id[2]) ? styles.selectedBtn : null]} onPress={() => handleCheck(category_id[2])}>
        <Text style={styles.checkLabel}>{category_name[2]}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.checkBtn, checkboxValues.includes(category_id[3]) ? styles.selectedBtn : null]} onPress={() => handleCheck(category_id[3])}>
        <Text style={styles.checkLabel}>{category_name[3]}</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
    formChecks: {
      width: 3,
      height: 2,
      marginLeft: 3,
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'center',
    },
    // inputChecks: {
    //   display: 'none',
    // },
    // classChecks1: {
    // //   fontFamily: 'Poppins',
    // //   fontStyle: 'normal',
    // //   fontWeight: '700',
    //   fontSize: '1.3vh',
      
    //   backgroundColor: '#999999',
    //   shadowColor: 'rgba(0, 0, 0, 0.04)',
    //   shadowOffset: { width: 0, height: 2 },
    //   shadowRadius: 4,
    //   borderRadius: '5.3vh',
    //   padding: '1.3vh',
    //   color: 'white',
    //   cursor: 'pointer',
    // },
    // classChecks2: {
    // //   fontFamily: 'Poppins',
    // //   fontStyle: 'normal',
    // //   fontWeight: '700',
    //   fontSize: '1.3vh',
      
    //   backgroundColor: '#FFE0DF',
    //   shadowColor: 'rgba(0, 0, 0, 0.04)',
    //   shadowOffset: { width: 0, height: 2 },
    //   shadowRadius: 4,
    //   borderRadius: '5.3vh',
    //   padding: '1.3vh',
    //   color: '#EF8481',
    //   cursor: 'pointer',
    // },
    // classChecks3: {
    // //   fontFamily: 'Poppins',
    // //   fontStyle: 'normal',
    // //   fontWeight: '700',
    //   fontSize: '1.3vh',
      
    //   backgroundColor: '#FFDFC8',
    //   shadowColor: 'rgba(0, 0, 0, 0.04)',
    //   shadowOffset: { width: 0, height: 2 },
    //   shadowRadius: 4,
    //   borderRadius: '5.3vh',
    //   padding: '1.3vh',
    //   color: '#FC9C57',
    //   cursor: 'pointer',
    // },
    // classChecks4: {
    // //   fontFamily: 'Poppins',
    // //   fontStyle: 'normal',
    // //   fontWeight: '700',
    //   fontSize: '1.3vh',
      
    //   backgroundColor: '#D1FBF0',
    //   shadowColor: 'rgba(0, 0, 0, 0.04)',
    //   shadowOffset: { width: 0, height: 2 },
    //   shadowRadius: 4,
    //   borderRadius: '5.3vh',
    //   padding: '1.3vh',
    //   color: '#00BA88',
    //   cursor: 'pointer',
    // },
    // classChecks5: {
    // //   fontFamily: 'Poppins',
    // //   fontStyle: 'normal',
    // //   fontWeight: '700',
    //   fontSize: '1.3vh',
      
    //   backgroundColor: '#E0DBFF',
    //   shadowColor: 'rgba(0, 0, 0, 0.04)',
    //   shadowOffset: { width: 0, height: 2 },
    //   shadowRadius: 4,
    //   borderRadius: '5.3vh',
    //   padding: '1.3vh',
    //   color: '#8883F0',
    //   cursor: 'pointer',
    // },
    selectChecks1: {
      backgroundColor: '#424242',
      color: 'white',
    },
    selectChecks2: {
        backgroundColor: '#EF8481',
        color: '#FFE0DF',
      },
    selectChecks3: {
        backgroundColor: '#FC9C57',
        color: '#FFDFC8',
      },
    selectChecks4: {
        backgroundColor: '#00BA88',
        color: '#D1FBF0',
      },
    selectChecks5: {
        backgroundColor: '#8883F0',
        color: '#E0DBFF',
      },
})    