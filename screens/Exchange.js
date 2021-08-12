import React from 'react';
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

import {
    dummyData,
    COLORS,
    SIZES,
    FONTS,
    icons
} from '../constants'

const Exchange = ({ navigation }) => {

    const [transactionHistory] = React.useState(dummyData.transactionHistory)

    const renderVente = ({item}) => (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingVertical: SIZES.base
        }}
        OnPress = {() => console.log(item)}
      >
        <Image
          source={icons.transaction}
          style={{
            width: 30,
            height: 30,
            tintColor: COLORS.green
          }}
        />
        <View style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginLeft: SIZES.radius }}>
          <Text style={{ ...FONTS.h3,
            color: COLORS.green }}>{item.montant}</Text>
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
        OnPress = {() => console.log(item)}
      >
        <Image
          source={icons.transaction}
          style={{
            width: 30,
            height: 30,
            tintColor: COLORS.red
          }}
        />
        <View style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginLeft: SIZES.radius }}>
          <Text style={{ ...FONTS.h3,
            color: COLORS.red }}>{item.montant}</Text>
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
              <Text style={{ ...FONTS.h2 }}>BTC/USDT</Text>
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
                <Text style={{ ...FONTS.h3 }}>Ventes</Text>
                <FlatList
                  contentContainerStyle={{ marginTop: SIZES.base }}
                  scrollEnabled={true}
                  data={transactionHistory}
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
                <Text style={{ ...FONTS.h3 }}>Demandes</Text>
                <FlatList
                  contentContainerStyle={{ marginTop: SIZES.base }}
                  scrollEnabled={true}
                  data={transactionHistory}
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
              <TouchableOpacity style={{ ...styles.button,
                backgroundColor: COLORS.green }}>
                <Text style={{ color: COLORS.white, ...FONTS.h2 }}>
                  Acheter
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ ...styles.button,
                backgroundColor: COLORS.red }}>
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