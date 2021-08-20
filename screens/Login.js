import React, { useState } from 'react';
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

import { MaterialIcons } from '@expo/vector-icons';
import axios from 'axios';

import {
    dummyData,
    COLORS,
    SIZES,
    FONTS,
    icons,
    images
} from '../constants'

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const api = axios.create({
    baseURL: "http://10.0.2.2:8000"
    });

  const login = () => {
     setError(false)
     api
       .post('/api/api-token-auth/', {
         username: email,
         password: password
       })
       .then(function (response) {
         // handle success
         alert(JSON.stringify(response.data));
       })
       .catch(function (error) {
         setError(true)
       })
    };

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
                  Login
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
                <Text style={{
                  color: COLORS.black,
                  marginTop: SIZES.radius,
                  ...FONTS.h3
                }}>
                  Mot de passe:
                </Text>
                <SafeAreaView>
                  <TextInput
                   style={styles.input}
                   secureTextEntry={true}
                   onChangeText={text => setPassword(text)}
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
                  onPress={() => login()}
                >
                  <Text style={{ color: COLORS.white, ...FONTS.h3 }}>
                   Login
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
                <TouchableOpacity
                  style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: SIZES.padding
                  }}
                  onPress={() => login()}
                >
                  <Text style={{ textDecorationLine: 'underline',
                  color: COLORS.primary, ...FONTS.h4 }}>
                   Vous n'avez pas de compte? creer
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

export default Login;
