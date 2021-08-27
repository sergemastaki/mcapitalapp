import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    FlatList,
    TouchableOpacity,
    Image,
    Button
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import {
    dummyData,
    COLORS,
    SIZES,
    FONTS,
    icons,
    images
} from '../constants'
import {getCurrenciesSoldesAction} from '../redux/actions';

const Actifs = ({ navigation }) => {

  const [trending] = React.useState(dummyData.trendingCurrencies)
  const [currenciesSoldes, setCurrenciesSoldes] = useState(false);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const getCurrenciesSoldes = () => dispatch(getCurrenciesSoldesAction());

  const fetchCurrenciesSoldes = () => {
    setError(false)
    getCurrenciesSoldes()
     .then((data) => {
       setCurrenciesSoldes(data)
     })
     .catch(function (error) {
       setError(true)
     })
  }

  useFocusEffect(
    React.useCallback(() => {
      fetchCurrenciesSoldes()
    }, [])
  );

  const colorButton = (currency) => {
    if(currency==='USDT' || currency==='USD') return COLORS.green
    return COLORS.gray
  }

  const renderItem = ({item, index}) => (
    <View
      style={{
        paddingVertical: SIZES.padding,
        paddingHorizontal: SIZES.padding,
        marginTop: SIZES.padding,
        borderRadius: 10,
        backgroundColor: COLORS.white
      }}
      onPress={() => console.log("Trending on press")}
    >
      <View
        style={{ flexDirection: "row" }}
      >
        <View>
          <Image
            source={trending[0].image}
            resizedMode="cover"
            style={{
              marginTop: 5,
              width: 25,
              height: 25
            }}
          />
        </View>
        <View style={{ marginLeft: SIZES.base }}>
          <Text style={{ ...FONTS.h3 }}>{item.name}</Text>
          <Text style={{ color: COLORS.gray,
             ...FONTS.body3 }}>{item.name}</Text>
        </View>
      </View>
      <View style={{ flex: 1, alignItems: "center" }}>
        <Text style={{ ...FONTS.h2 }}>{item.solde}</Text>
      </View>
      <View style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        marginTop: SIZES.radius
      }}
      >
        <TouchableOpacity
          style={{ ...styles.button }}
          onPress={() => navigation.navigate('Depot', {
            currency: item.name,
            type: "Depot"
          })}
        >
          <Text style={{ color: COLORS.white, ...FONTS.h3 }}>
            Depot
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ ...styles.button }}
          onPress={() => navigation.navigate('Retrait', {
            currency: item.name,
            type: "Retrait"
          })}
        >
          <Text style={{ color: COLORS.white, ...FONTS.h3 }}>
            Retrait
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ ...styles.button, backgroundColor: colorButton(item.name) }}
          disabled={!(item.name==='USDT' || item.name==='USD')}
          onPress={() => navigation.navigate('Swap', {
            currency: item.name,
            type: "Swap"
          })}
        >
          <Text style={{ color: COLORS.white, ...FONTS.h3 }}>
            Swap
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )

  return (
          <ScrollView>
            <View style={{ flex:1, paddingBottom: 130 }}>
              <View
                style={{
                  marginTop: SIZES.base,
                  padding: 20
                }}
              >
                <FlatList
                  scrollEnabled={false}
                  data={currenciesSoldes}
                  keyExtractor={item => item.id.toString()}
                  renderItem={renderItem}
                  showsVerticalScrollIndicator={false}
                />
              </View>
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
      height: 30,
      backgroundColor: COLORS.green,
      borderRadius: 5
    }
})

export default Actifs
