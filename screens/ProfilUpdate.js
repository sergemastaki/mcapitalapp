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
    TextInput
} from 'react-native';
import axios from 'axios'
import { MaterialIcons } from '@expo/vector-icons';

import {
    dummyData,
    COLORS,
    SIZES,
    FONTS,
    icons,
    images
} from '../constants'

const ProfilUpdate = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [errorEmail, setErrorEmail] = useState(false);
    const [name, setName] = useState('');
    const [errorName, setErrorName] = useState(false);
    const [number, setNumber] = useState('');
    const [errorNumber, setErrorNumber] = useState(false);

    const validate = () => {
       setErrorEmail(email.length === 0)
       setErrorName(name.length === 0)
       setErrorNumber(number.length === 0)
       return (
         !errorName &&
         !errorEmail &&
         !errorNumber
       )
    }

    const update = () => {
      validate()
    }

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
                  Inscrivez-vous
                </Text>
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
                   placeholder="do@john.com"
                   onChangeText={text => setEmail(text)}
                  />
                </SafeAreaView>
                {
                  errorEmail ? (
                  <Text style={{
                    color: COLORS.red,
                    ...FONTS.h4
                  }}>
                    L'email est obligatoire
                  </Text>
                  ) : null
                }
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
                   placeholder="madara"
                   onChangeText={text => setName(text)}
                  />
                </SafeAreaView>
                {
                  errorName ? (
                  <Text style={{
                    color: COLORS.red,
                    ...FONTS.h4
                  }}>
                    Le nom est obligatoire
                  </Text>
                  ) : null
                }
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
                   onChangeText={text => setNumber(text)}
                  />
                </SafeAreaView>
                {
                  errorNumber ? (
                  <Text style={{
                    color: COLORS.red,
                    ...FONTS.h4
                  }}>
                    Le numéro est obligatoire
                  </Text>
                  ) : null
                }
                <TouchableOpacity
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: SIZES.radius,
                    height: 50,
                    backgroundColor: COLORS.green
                  }}
                  onPress={() => update()}
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

export default ProfilUpdate;
