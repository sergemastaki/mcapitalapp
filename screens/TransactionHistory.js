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

const TransactionHistory = ({ navigation }) => {

    const [transactionHistory] = React.useState(dummyData.transactionHistory)

    const getTitle = (item) => {
      const s = item.type.toLowerCase()
      return `${s[0].toUpperCase()}${s.slice(1)} ${item.currency}`
    }

    const renderTypeIcon = (item) => {
      const type = item.type
      if (type === "VENTE") return (
        <AntDesign name="arrowright" size={30} color={COLORS.red} />
      )
      if (type === "ACHAT") return (
        <AntDesign name="arrowleft" size={30} color={COLORS.green} />
      )
      if (type === "DEPOT") return (
        <AntDesign name="arrowdown" size={30} color={COLORS.red} />
      )
      if (type === "RETRAIT") return (
        <AntDesign name="arrowup" size={30} color={COLORS.green} />
      )
      return (
        <AntDesign name="arrowsalt" size={30} color={COLORS.gray} />
      )
    }

    const renderStateIcon = (item) => {
      const state = item.state
      if (state === "EXECUTER") return (
        <Ionicons name="md-checkmark-circle" size={30} color={COLORS.green} />
      )
      if (state === "ANNULER") return (
        <AntDesign name="closecircle" size={30} color={COLORS.red} />
      )
      return (
        <AntDesign name="loading1" size={30} color={COLORS.yellow} />
      )
    }

    const renderItem = ({item}) => (
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingVertical: SIZES.base
        }}
        OnPress = {() => console.log(item)}
      >
        {renderTypeIcon(item)}
        <View style={{ flex: 2, marginLeft: SIZES.radius }}>
          <Text style={{ ...FONTS.h3 }}>{getTitle(item)}</Text>
          <Text style={{ color: COLORS.gray, ...FONTS.body4 }}>
          {item.date}</Text>
        </View>
        <View style={{ flex: 1, marginLeft: SIZES.radius }}>
          <Text style={{ ...FONTS.body3 }}>$ {item.montant}</Text>
          <Text style={{ color: COLORS.gray, ...FONTS.body4 }}>
          {item.amount}</Text>
        </View>
        {renderStateIcon(item)}
      </TouchableOpacity>
    )

    return (
          <ScrollView>
            <View style={{ flex:1, paddingBottom: 130 }}>
              <View
                style={{
                  marginTop: SIZES.padding,
                  padding: 20,
                  backgroundColor: COLORS.white
                }}
              >
                <FlatList
                  contentContainerStyle={{ marginTop: SIZES.radius }}
                  scrollEnabled={false}
                  data={transactionHistory}
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
            </View>
          </ScrollView>
    )
}

export default TransactionHistory;
