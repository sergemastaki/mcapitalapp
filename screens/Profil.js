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
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

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
              <SafeAreaView>
                <TextInput
                 style={styles.input}
                 placeholder="dyglo@gmail.com"
                />
              </SafeAreaView>
              <Text style={{
                color: COLORS.black,
                marginTop: SIZES.radius,
                ...FONTS.h3
              }}>
                Nom:
              </Text>
              <SafeAreaView>
                <TextInput
                 style={styles.input}
                 placeholder="dyglo"
                />
              </SafeAreaView>
              <Text style={{
                color: COLORS.black,
                marginTop: SIZES.radius,
                ...FONTS.h3
              }}>
                Numero:
              </Text>
              <SafeAreaView>
                <TextInput
                 style={styles.input}
                 placeholder="+243997055222"
                />
              </SafeAreaView>
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
