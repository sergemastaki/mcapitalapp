import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    FlatList,
    TouchableOpacity,
    Image
} from 'react-native';

import {
    dummyData,
    COLORS,
    SIZES,
    FONTS,
    icons
} from '../constants'

const Paires = ({customContainerStyle}) => {

  const [paires] = React.useState(dummyData.transactionHistory)

  const renderItem = ({item}) => (
    <TouchableOpacity
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
          tintColor: COLORS.primary
        }}
      />
      <View style={{ flex: 2, marginLeft: SIZES.radius }}>
        <Text>
          <Text style={{ ...FONTS.h2 }}>USDT/</Text>
          <Text style={{ ...FONTS.h3 }}>BTC</Text>
        </Text>
        <Text style={{ color: COLORS.gray, ...FONTS.body4 }}>
        {item.date}</Text>
      </View>
      <View style={{ flex: 1, marginLeft: SIZES.radius }}>
        <Text>
          <Text style={{ ...FONTS.body3 }}>{item.amount}</Text>
        </Text>
      </View>
      <Image
        source={icons.right_arrow}
        style={{
          width: 30,
          height: 30,
          tintColor: COLORS.black
        }}
      />
    </TouchableOpacity>
  )

  return (
    <View
      style={{
        marginTop: SIZES.padding,
        marginHorizontal: SIZES.padding,
        padding: 20,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.white,
        ...customContainerStyle
      }}
    >
      <Text style={{ ...FONTS.h2 }}>Paires</Text>
      <FlatList
        contentContainerStyle={{ marginTop: SIZES.radius }}
        scrollEnabled={false}
        data={paires}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
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
  )
}

export default Paires;
