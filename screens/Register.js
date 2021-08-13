import React from 'react';
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

import {
    dummyData,
    COLORS,
    SIZES,
    FONTS,
    icons,
    images
} from '../constants'

const Register = ({ navigation }) => {

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
                   placeholder="madara"
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
                  />
                </SafeAreaView>
                <Text style={{
                  color: COLORS.black,
                  marginTop: SIZES.radius,
                  ...FONTS.h3
                }}>
                  Confirmer votre mot de passe:
                </Text>
                <SafeAreaView>
                  <TextInput
                   style={styles.input}
                   secureTextEntry={true}
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
                  onPress={() => console.log("Login on press")}
                >
                  <Text style={{ color: COLORS.white, ...FONTS.h3 }}>
                    Inscription
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

export default Register;
