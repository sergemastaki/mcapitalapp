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

const Achat = ({ route,navigation }) => {
  const [quantityUSDT, setQuantityUSDT] = useState('');
  const [prix, setPrix] = useState('');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const dispatch = useDispatch();
  const executeTransaction = () => dispatch(executeTransactionAction({
    ...emptyTransaction,
    type: 'ACHAT',
    from_currency:  'USDT',
    to_currency: currency,
    montant: quantityUSDT,
    taux: !order ? prix : 1
  }));

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
  const { currency, order } = route.params;

  const renderEquivalentCrypto = () => (
    <>
      <Text style={{
        color: COLORS.black,
        marginTop: SIZES.radius,
        ...FONTS.h3
      }}>
        <Text>Equivalent : </Text>
        {
          !order ?
          (
            <Text style={{color: COLORS.red, ...FONTS.h3}}>
              { prix==0 ? 0 : quantityUSDT/prix } { currency }
            </Text>
          ) :
          (
            <Text style={{color: COLORS.red, ...FONTS.h3}}>
              { quantityUSDT/5 } { currency }
            </Text>
          )
      }
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
              <Text style={{
                color: COLORS.black,
                marginTop: SIZES.radius,
                ...FONTS.h3
              }}>
                Quantit?? de USDT:
              </Text>
              <SafeAreaView>
                <TextInput
                 style={styles.input}
                 placeholder="0"
                 keyboardType="numeric"
                 onChangeText={text => setQuantityUSDT(text)}
                />
              </SafeAreaView>
              {
                !order ?
                (
                  <>
                    <Text style={{
                      color: COLORS.black,
                      marginTop: SIZES.radius,
                      ...FONTS.h3
                    }}>
                      Prix:
                    </Text>
                    <SafeAreaView>
                      <TextInput
                       style={styles.input}
                       placeholder="0"
                       keyboardType="numeric"
                       onChangeText={text => setPrix(text)}
                      />
                    </SafeAreaView>
                  </>
                ) : null
              }
              { renderEquivalentCrypto() }
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

export default Achat;
