import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    ImageBackground,
    SafeAreaView,
    TextInput
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

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

const Profil = ({ navigation }) => {
  const {isLoggedIn} = useSelector(state => state.authReducer);
  const navigateIfNotLoggedIn = () => {
      if(!isLoggedIn) navigation.navigate('Login')
  }

  useFocusEffect(
    React.useCallback(() => {
      navigateIfNotLoggedIn()
    }, [isLoggedIn])
  );

    return (
            <View style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center"
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

export default Profil;
