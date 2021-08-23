import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    FlatList,
    TouchableOpacity,
    ImageBackground,
    SafeAreaView,
    TextInput,
    Picker
} from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';

import {
    dummyData,
    COLORS,
    SIZES,
    FONTS,
    icons,
    images
} from '../constants'
import {loginAction} from '../redux/actions';

const Retrait = ({ route,navigation }) => {
  const [quantity, setQuantity] = useState('');
  const [moyen, setMoyen] = useState('');
  const [error, setError] = useState(false);

  const dispatch = useDispatch();
  const loginUser = () => dispatch(loginAction({
    username: email,
    password: password
  }));


  const executer = () => {
    setError(false)

  }
  const { currency } = route.params;
  return (
          <View style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
          }}>
            <View style={{
              marginBottom: SIZES.padding * 4.5,
              marginHorizontal: SIZES.padding,
              padding: 20,
              width: '80%',
              borderRadius: SIZES.radius,
              backgroundColor: COLORS.white,
              ...styles.shadow
             }}>

          </View>
        )
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
    },
    input: {
      borderWidth: 1,
      borderColor: COLORS.primary,
      borderRadius: 5,
      paddingHorizontal: SIZES.base,
      height: 40,
      marginVertical: SIZES.base
    }
})

export default Retrait;
