import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
    Text,
    FlatList,
    TouchableOpacity,
    Image
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import {useSelector, useDispatch} from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';

import {
    dummyData,
    COLORS,
    SIZES,
    FONTS,
    icons
} from '../constants'
import {getOrdersAction} from '../redux/actions';

const Exchange = ({ route, navigation }) => {
    const [error, setError] = useState(false);
    const [orders, setOrders] = useState(false);
    const { paire } = useSelector(state => state.currencyReducer)

    const dispatch = useDispatch();
    const getOrders = () => dispatch(getOrdersAction());

    const fetchOrders = () => {
      setError(false)
      getOrders()
       .then((data) => {
         setOrders(data)
       })

       .catch(function (error) {
         setError(true)
       })
    }

    useFocusEffect(
      React.useCallback(() => {
        fetchOrders()
      }, [])
    );

    const renderVente = ({item}) => (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingVertical: SIZES.base
        }}
        OnPress = {() => console.log(item)}
      >
        <View style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center" }}>
          <Text style={{ ...FONTS.h4,
            color: COLORS.red }}>$ {item.montant}</Text>
        </View>
        <View style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginLeft: SIZES.radius }}>
          <Text style={{ ...FONTS.h4,
            color: COLORS.red }}>{item.taux}</Text>
        </View>
        <View style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginLeft: SIZES.radius }}>
          <Text style={{ ...FONTS.h4,
            color: COLORS.red }}>$ {item.montant * item.taux}</Text>
        </View>
        <TouchableOpacity style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginHorizontal: SIZES.base,
          height: 30,
          backgroundColor: COLORS.red,
          borderRadius: 5
        }}
        onPress={() => navigation.navigate('Achat', {
          type: "Achat",
          currency: currency,
          order: item
        })}
        >
          <Text style={{ color: COLORS.white, ...FONTS.h3 }}>
            Acheter
          </Text>
        </TouchableOpacity>
      </View>
    )

    const renderDemande = ({item}) => (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingVertical: SIZES.base
        }}
      >
        <View style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center" }}>
          <Text style={{ ...FONTS.h4,
            color: COLORS.green }}>$ {item.montant}</Text>
        </View>
        <View style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginLeft: SIZES.radius }}>
          <Text style={{ ...FONTS.h4,
            color: COLORS.green }}>{item.taux}</Text>
        </View>
        <View style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginLeft: SIZES.radius }}>
          <Text style={{ ...FONTS.h4,
            color: COLORS.green }}>$ {item.montant * item.taux}</Text>
        </View>
        <TouchableOpacity style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginHorizontal: SIZES.base,
          height: 30,
          backgroundColor: COLORS.green,
          borderRadius: 5
        }}
        onPress={() => navigation.navigate('Vente', {
          type: "Vendre",
          currency: currency,
          order: item
        })}
        >
          <Text style={{ color: COLORS.white, ...FONTS.h3 }}>
            Vendre
          </Text>
        </TouchableOpacity>
      </View>
    )

    return (
          <ScrollView>
            <View style={{
              flex:1,
              marginTop: SIZES.padding,
              marginHorizontal: SIZES.radius
            }}>
              <Text style={{ ...FONTS.h2 }}>
                {paire.from_currency}/{paire.to_currency}
              </Text>
            </View>
            <View style={{
              flex:1,
              height: 190,
              marginHorizontal: SIZES.radius
            }}
            >
              <View
                style={{
                  marginTop: SIZES.base,
                  padding: 20,
                  backgroundColor: COLORS.white
                }}
              >
                <FlatList
                  scrollEnabled={true}
                  data={orders}
                  keyExtractor={item => item.id.toString()}
                  renderItem={renderVente}
                  showsVerticalScrollIndicator={false}
                  ItemSeparatorComponent={() => {
                    return (
                      <View style={{ width: "100%", height: 1,
                      backgroundColor: COLORS.lightGray }}>
                      </View>
                    )
                  }}
                />
              </View>
            </View>
            <View style={{
              flex:1,
              height: 210,
              marginHorizontal: SIZES.radius,
              marginTop: SIZES.padding,
              paddingBottom: 20
            }}
            >
              <View
                style={{
                  marginTop: SIZES.base,
                  padding: 20,
                  backgroundColor: COLORS.white
                }}
              >
                <FlatList
                  scrollEnabled={true}
                  data={orders}
                  keyExtractor={item => item.id.toString()}
                  renderItem={renderDemande}
                  showsVerticalScrollIndicator={false}
                  ItemSeparatorComponent={() => {
                    return (
                      <View style={{ width: "100%", height: 1,
                      backgroundColor: COLORS.lightGray }}>
                      </View>
                    )
                  }}
                />
              </View>
            </View>
            <View style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "center",
              marginTop: SIZES.radius
            }}
            >
              <TouchableOpacity
                style={{ ...styles.button,
                  backgroundColor: COLORS.green }}
                onPress={() => navigation.navigate('Achat', {
                  type: "Acheter",
                  currency: currency,
                  order: null
                })}
              >
                <Text style={{ color: COLORS.white, ...FONTS.h2 }}>
                  Acheter
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ ...styles.button,
                  backgroundColor: COLORS.red }}
                onPress={() => navigation.navigate('Vente', {
                  type: "Vendre",
                  currency: currency,
                  order: null
                })}
              >
                <Text style={{ color: COLORS.white, ...FONTS.h2 }}>
                  Vendre
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
    )
}

const styles = StyleSheet.create({
    button: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginHorizontal: SIZES.base,
      height: 50,
      width: 100,
      borderRadius: 5
    }
})

export default Exchange;
