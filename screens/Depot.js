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

const Depot = ({ route,navigation }) => {
  const [quantity, setQuantity] = useState('');
  const [montant, setMontant] = useState('');
  const [hash, setHash] = useState('');
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

  const renderCrypto = () => (
    <>
      <Text style={{
        color: COLORS.black,
        marginTop: SIZES.radius,
        ...FONTS.h3
      }}>
        Adresse:
      </Text>
      <Text style={{aliText: 'center',...styles.input}} selectable>
        {"1GyWgXtkVG5gsm9Ym1rkHoJHAftmPnTHQj"}
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
    </>
  )

  const renderFiat = () => (
    <>
      <Text style={{
        color: COLORS.black,
        marginTop: SIZES.radius,
        ...FONTS.h3
      }}>
        Montant:
      </Text>
      <SafeAreaView>
        <TextInput
         style={styles.input}
         placeholder="0"
         keyboardType="numeric"
         onChangeText={text => setMontant(text)}
        />
      </SafeAreaView>
      <Text style={{
        color: COLORS.black,
        marginTop: SIZES.radius,
        ...FONTS.h3
      }}>
        Moyen dépot:
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
      <Text style={{
        color: COLORS.black,
        marginTop: SIZES.radius,
        ...FONTS.h3
      }}>
        Numéro:
      </Text>
      <Text style={styles.input} selectable>
        {"+243997028901"}
      </Text>
    </>
  )

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
                {currency}
              </Text>
              {
                (currency === 'USDT' || currency ==='USD') ?
                  renderFiat() :
                  renderCrypto()
              }
              <Text style={{
                color: COLORS.black,
                marginTop: SIZES.radius,
                ...FONTS.h3
              }}>
                TXID:
              </Text>
              <SafeAreaView>
                <TextInput
                 style={styles.input}
                 placeholder="a1062db53e416d8fa109f23b7094a21e5b2645e16c5cf532fc90e4d8fbf5d48d"
                 onChangeText={text => setHash(text)}
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
                   Problem
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

export default Depot;
