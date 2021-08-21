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

const ActifTransaction = ({ route,navigation }) => {
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
  const { type } = route.params;
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
              <Text style={{ color: COLORS.primary, ...FONTS.h2 }}>
                {type}
              </Text>
              <Text style={{
                color: COLORS.black,
                marginTop: SIZES.radius,
                ...FONTS.h3
              }}>
                Quantité:
              </Text>
              <SafeAreaView>
                <TextInput
                 style={styles.input}
                 placeholder="0"
                 keyboardType="numeric"
                 onChangeText={text => setQuantity(text)}
                />
              </SafeAreaView>
              <Text style={{
                color: COLORS.black,
                marginTop: SIZES.radius,
                ...FONTS.h3
              }}>
                Moyen:
              </Text>
              <SafeAreaView>
                <Picker
                  style={styles.input}
                  selectedValue={moyen}
                  style={{ height: 50, width: 150 }}
                  onValueChange={(itemValue, itemIndex) => setMoyen(itemValue)}
                >
                  <Picker.Item label="Airtel money" value="airtel" />
                  <Picker.Item label="Orange money" value="orange" />
                  <Picker.Item label="Visa" value="visa" />
                </Picker>
              </SafeAreaView>
              <TouchableOpacity
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: SIZES.radius,
                  height: 50,
                  backgroundColor: COLORS.green
                }}
                onPress={() => executer()}
              >
                <Text style={{ color: COLORS.white, ...FONTS.h3 }}>
                 Executer
                </Text>
              </TouchableOpacity>
              {
                error ? (
                <View
                  style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: SIZES.padding
                  }}
                >
                  <Text style={{ color: COLORS.red, ...FONTS.h4 }}>
                   Email ou Mot de passe incorrect
                  </Text>
                </View>
                ) : null
              }
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

export default ActifTransaction;
