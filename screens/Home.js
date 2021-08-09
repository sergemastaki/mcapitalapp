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

import {
    dummyData,
    COLORS,
    SIZES,
    FONTS,
    icons,
    images
} from '../constants'

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
          onPress={() => console.log("Notification on press")}
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
            backgroundColor: 'black',
            width: '100%',
            height: 290,
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
                marginTop: SIZES.padding * 2,
                width: "100%",
                alignItems: "flex-end",
                paddingHorizontal: SIZES.padding
              }}
            >
              <TouchableOpacity
                style={{
                  width: 35,
                  height: 35,
                  alignItems: "center",
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
                justifyContent: 'center'
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
              />
            </View>
          </ImageBackground>
        </View>
      )
    }

    return (
          <ScrollView>
            <View style={{ flex:1, paddingBottom: 130 }}>
              {renderHeader()}
              
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
