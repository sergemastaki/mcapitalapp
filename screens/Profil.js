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
import {getUserInfoAction} from '../redux/actions';

const Profil = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [error, setError] = useState(false);

  const {isLoggedIn} = useSelector(state => state.authReducer);
  const navigateIfNotLoggedIn = () => {
      if(!isLoggedIn) navigation.navigate('Login')
  }

  const dispatch = useDispatch();
  const getUserInfo = () => dispatch(getUserInfoAction());

  const fetchUserInfo = () => {
    setError(false)
    getUserInfo()
     .then((data) => {
       setEmail(data.email)
       setName(data.username)
       setNumber(data.profile.numero)
     })
     .catch(function (error) {
       setError(true)
     })
  }

  useFocusEffect(
    React.useCallback(() => {
      navigateIfNotLoggedIn()
      fetchUserInfo()
    }, [isLoggedIn])
  );

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
              <Text style={{
                color: COLORS.black,
                marginTop: SIZES.radius,
                ...FONTS.h3
              }}>
                Email:
              </Text>
              <Text style={{...styles.input}} selectable>
                {email}
              </Text>
              <Text style={{
                color: COLORS.black,
                marginTop: SIZES.radius,
                ...FONTS.h3
              }}>
                Nom:
              </Text>
              <Text style={{...styles.input}} selectable>
                {name}
              </Text>
              <Text style={{
                color: COLORS.black,
                marginTop: SIZES.radius,
                ...FONTS.h3
              }}>
                Numero:
              </Text>
              <Text style={{...styles.input}} selectable>
                {number}
              </Text>
              <TouchableOpacity
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: SIZES.radius,
                  height: 50,
                  backgroundColor: COLORS.green
                }}
                onPress={() => navigation.navigate('Profil update', {
                  info: {}
                })}
              >
                <Text style={{ color: COLORS.white, ...FONTS.h3 }}>
                  Modifier
                </Text>
              </TouchableOpacity>
            </View>
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
