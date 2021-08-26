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
import {executeTransactionAction, emptyTransaction} from '../redux/actions';

const Retrait = ({ route,navigation }) => {
  const [montant, setMontant] = useState('');
  const [wallet, setWallet] = useState('');
  const [moyen, setMoyen] = useState('');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const dispatch = useDispatch();
  const executeTransaction = () => dispatch(executeTransactionAction({
    ...emptyTransaction,
    type: 'RETRAIT',
    from_currency: currency,
    montant: montant,
    wallet: isFiat() ? 'none' : wallet,
    moyen: isFiat() ? moyen : 'none',
  }));

  const isFiat = () => (currency === 'USDT' || currency ==='USD')

  const executer = () => {
    setError(false)
    executeTransaction()
     .then((token) => {
       navigation.navigate('Actifs')
     })
     .catch(function (error) {
       setError(true)
       console.log(error.message)
       //setErrorMessage(error)
     })
  }
  const { currency } = route.params;

  const renderCrypto = () => (
    <>
      <Text style={{
        color: COLORS.black,
        marginTop: SIZES.radius,
        ...FONTS.h3
      }}>
        Adresse de wallet:
      </Text>
      <SafeAreaView>
        <TextInput
         style={styles.input}
         placeholder="1GyWgXtkVG5gsm9Ym1rkHoJHAftmPnTHQj"
         keyboardType="numeric"
         onChangeText={text => setWallet(text)}
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
        Moyen retrait:
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
    </>
  )

  const renderFrais = () => (
    <>
      <Text style={{
        color: COLORS.black,
        marginTop: SIZES.radius,
        ...FONTS.h3
      }}>
        <Text>Total(+frais) : </Text>
        <Text style={{color: COLORS.red, ...FONTS.h3}}>{montant * 2.15}</Text>
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
              { renderFrais() }
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
                   {errorMessage}
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

export default Retrait;
