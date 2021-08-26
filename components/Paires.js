import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    FlatList,
    TouchableOpacity,
    Image
} from 'react-native';
import {useDispatch} from 'react-redux';
import {
    dummyData,
    COLORS,
    SIZES,
    FONTS,
    icons
} from '../constants'
import {setPaireAction} from '../redux/actions';

const Paires = ({customContainerStyle, navigation}) => {

  const [paires] = React.useState(dummyData.paires)
  const dispatch = useDispatch();
  const setPaire = (paire) => dispatch(setPaireAction(paire));

  const setGlobalPaire = (paire) => {
    setPaire(paire)
    navigation.navigate('Echanger')
  }

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: SIZES.base
      }}
      onPress = {() => setGlobalPaire(item)}
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
          <Text style={{ ...FONTS.h2 }}>{item.from_currency}/</Text>
          <Text style={{ ...FONTS.h3 }}>{item.to_currency}</Text>
        </Text>
        <Text style={{ color: COLORS.gray, ...FONTS.body4 }}>
        {item.vol}</Text>
      </View>
      <View style={{ flex: 1, marginLeft: SIZES.radius }}>
        <Text>
          <Text style={{ ...FONTS.body3 }}>{item.price}</Text>
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
