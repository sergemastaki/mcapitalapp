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

const image = { uri: "https://reactjs.org/logo-og.png" };

const Home = ({ navigation }) => {

    const [trending] = React.useState(dummyData.trendingCurrencies)

    function renderHeader() {

      const renderItem = ({item, index}) => (
        <TouchableOpacity
          style={{
            width: 180,
            height: 180,
            paddingVertical: SIZES.padding,
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
                source={item.image}
                resizedMode="cover"
                style={{
                  marginTop: 5,
                  width: 25,
                  height: 25
                }}
              />
            </View>
            <View style={{ marginLeft: SIZES.base }}>
              <Text style={{ ...FONTS.h2 }}>{item.currency}</Text>
              <Text style={{ color: COLORS.gray,
                 ...FONTS.body3 }}>{item.code}</Text>
            </View>
          </View>
          <View style={{ marginLeft: SIZES.base }}>
            <Text style={{ ...FONTS.h2 }}>{item.amount}</Text>
            <Text style={{ color: item.type == 'I' ?
               COLORS.green : COLORS.red, ...FONTS.h3 }}>{item.changes}</Text>
          </View>
        </TouchableOpacity>
      )

      return (
        <View
          style= {{
            width: '100%',
            height: 320,
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
                onPress={() => console.log("Notification on press")}
              >
                <MaterialIcons
                  name="menu"
                  size={35}
                  color={COLORS.white}
                />
              </TouchableOpacity>
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
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: SIZES.padding * 2
              }}
            >
              <Text style={{ color: COLORS.white, ...FONTS.h2 }} >
                MCapital Exchanger
              </Text>
            </View>

            <View
              style={{
                alignSelf: 'flex-start',
                bottom: '-20%'
              }}
            >
              <Text style={{ marginLeft: SIZES.padding,
                color: COLORS.white, ...FONTS.h2 }} >
                Trending
              </Text>
              <FlatList
                contentContainerStyle={{marginTop: SIZES.base}}
                data={trending}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
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
          marginTop: SIZES.padding * 4.5,
          marginHorizontal: SIZES.padding,
          padding: 20,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.secondary,
          ...styles.shadow
         }}>
          <Text style={{ color: COLORS.white, ...FONTS.h3 }}>
           Investir en sécurité
          </Text>
          <Text style={{ color: COLORS.white,
            marginTop: SIZES.base, ...FONTS.body4 }}>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit,
           sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
           Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </Text>
          <TouchableOpacity
            style={{ marginTop: SIZES.base }}
            onPress={() => console.log("Tuto more on press")}
          >
            <Text style={{ textDecorationLine: 'underline',
            color: COLORS.green, ...FONTS.h3 }}>
             Learn more
            </Text>
          </TouchableOpacity>
        </View>
      )
    }

    function renderPaires() {
      return (
        <Paires
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
