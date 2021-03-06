import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    FlatList,
    TouchableOpacity,
    Image,
    ImageBackground
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

import { Paires } from '../components'

const Home = ({ navigation }) => {
    const [currencies] = React.useState(dummyData.paires)
    const [currenciesFullNames] = React.useState(dummyData.currenciesFullNames)
    const [currenciesImages] = React.useState(dummyData.currenciesImages)

    function renderHeader() {

      const renderItem = ({item, index}) => (
        <TouchableOpacity
          style={{
            width: 180,
            height: 120,
            paddingVertical: SIZES.radius,
            paddingHorizontal: SIZES.padding,
            marginLeft: index == 0 ? SIZES.padding : 0,
            marginRight: SIZES.radius,
            borderRadius: 10,
            backgroundColor: COLORS.white
          }}
          onPress={() => console.log("Trending on press")}
        >
          <View style={{ flexDirection: 'row' }}>
            <View>
              <Image
                source={currenciesImages[item.from_currency]}
                resizedMode="cover"
                style={{
                  marginTop: 5,
                  width: 25,
                  height: 25
                }}
              />
            </View>
            <View style={{ marginLeft: SIZES.base }}>
              <Text style={{ ...FONTS.h3 }}>{currenciesFullNames[item.from_currency]}</Text>
              <Text style={{ color: COLORS.gray,
                 ...FONTS.body3 }}>{item.from_currency}</Text>
            </View>
          </View>
          <View style={{ marginLeft: SIZES.base }}>
            <Text style={{ ...FONTS.h3 }}>soon</Text>
            <Text style={{ color: item.type == 'I' ?
               COLORS.green : COLORS.red, ...FONTS.h3 }}>soon</Text>
          </View>
        </TouchableOpacity>
      )

      return (
        <View
          style= {{
            width: '100%',
            height: 220,
            ...styles.shadow
          }}
        >
          <ImageBackground
            source={images.banner}
            resizedMode="cover"
            style={{
              flex: 1,
              alignItems: 'center'
            }}
          >
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                marginTop: SIZES.padding * 3,
                width: "100%",
                alignItems: "center",
                paddingHorizontal: SIZES.padding
              }}
            >
              <TouchableOpacity
                style={{
                  flex: 1,
                  width: 35,
                  height: 35,
                  alignItems: "flex-start",
                  justifyContent: "center"
                }}
                onPress={() => navigation.openDrawer()}
              >
                <MaterialIcons
                  name="menu"
                  size={35}
                  color={COLORS.white}
                />
              </TouchableOpacity>
              <Text style={{ color: COLORS.white, ...FONTS.h2 }} >
                MCapital Exchange
              </Text>
              <TouchableOpacity
                style={{
                  flex: 1,
                  width: 35,
                  height: 35,
                  alignItems: "flex-end",
                  justifyContent: "center"
                }}
                onPress={() => console.log("Notification on press")}
              >
                <Image
                  source={icons.notification_white}
                  resizedMode="contain"
                  style={{ width: 35, height: 35, }}
                />
              </TouchableOpacity>
            </View>

            <View
              style={{
                alignSelf: 'flex-start',
                marginTop: SIZES.padding,
                bottom: '-10%'
              }}
            >
              <Text style={{ marginLeft: SIZES.padding,
                color: COLORS.white, ...FONTS.h2 }} >
                Tendance
              </Text>
              <FlatList
                contentContainerStyle={{marginTop: SIZES.base}}
                data={currencies}
                renderItem={renderItem}
                horizontal
                showsVerticalScrollIndicator={false}
              />
            </View>
          </ImageBackground>
        </View>
      )
    }

    function renderNotice() {
      return (
        <View style={{
          marginTop: SIZES.padding * 3,
          marginHorizontal: SIZES.padding,
          padding: 20,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.secondary,
          ...styles.shadow
         }}>
          <Text style={{ color: COLORS.white, ...FONTS.h3 }}>
           Investir en s??curit??
          </Text>
          <Text style={{ color: COLORS.white,
            marginTop: SIZES.base, ...FONTS.body5 }}>
            Mulumbu Capital Exchange vous permet d????changer vos cryptomonnaies en toute s??curit??. Il vous fournit un service de qualit??, fiable et rapide.
            Devenez utilisateur de MCapital Exchange en seulement 3 ??tapes :{'\n'}
            1. Compl??ter votre inscription en cliquant sur le menu puis s??enregistrer{'\n'}
            2. Compl??ter votre identit?? sous Profil{'\n'}
            3. Acc??der ?? vos actifs et explorer le march?? des cryptomonnaies
          </Text>
        </View>
      )
    }

    function renderPaires() {
      return (
        <Paires
          navigation={{...navigation}}
          customContainerStyle={{ ...styles.shadow } }
        />
      )
    }

    return (
          <ScrollView>
            <View style={{ flex:1, paddingBottom: 130 }}>
              {renderHeader()}
              {renderNotice()}
              {renderPaires()}
            </View>
          </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    }
})

export default Home;
