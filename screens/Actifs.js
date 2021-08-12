import React from 'react';
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

import {
    dummyData,
    COLORS,
    SIZES,
    FONTS,
    icons,
    images
} from '../constants'

const Actifs = ({ navigation }) => {

  const [trending] = React.useState(dummyData.trendingCurrencies)

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
          <Text style={{ ...FONTS.h3 }}>{item.currency}</Text>
          <Text style={{ color: COLORS.gray,
             ...FONTS.body3 }}>{item.code}</Text>
        </View>
      </View>
      <View style={{ flex: 1, alignItems: "center" }}>
        <Text style={{ ...FONTS.h2 }}>{item.amount}</Text>
      </View>
      <View style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        marginTop: SIZES.radius
      }}
      >
        <TouchableOpacity style={{ ...styles.button }}>
          <Text style={{ color: COLORS.white, ...FONTS.h3 }}>
            Depot
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ ...styles.button }}>
          <Text style={{ color: COLORS.white, ...FONTS.h3 }}>
            Retrait
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ ...styles.button }}>
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
                  marginTop: SIZES.padding,
                  padding: 20
                }}
              >
                <Text style={{ ...FONTS.h2 }}>Actifs</Text>
                <FlatList
                  contentContainerStyle={{ marginTop: SIZES.radius }}
                  scrollEnabled={false}
                  data={trending}
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
