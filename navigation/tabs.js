import React from "react";
import {
    View,
    Image,
    TouchableOpacity,
    Text,
    StyleSheet
} from "react-native";
import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs"
import { LinearGradient } from 'expo-linear-gradient';
import { Entypo } from '@expo/vector-icons';
import { Home, Market, TransactionHistory, ActifsWrapper, Exchange } from "../screens"
import { COLORS, FONTS, icons } from "../constants"

const Tab = createBottomTabNavigator()

const TabBarCustomButton = ({children, onPress}) => {
  return (
    <TouchableOpacity
      style={{
        top: -20,
        justifyContent: 'center',
        alignItems: 'center',
        ...styles.shadow
      }}
      onPress={onPress}
    >
      <LinearGradient
       colors={[COLORS.primary, COLORS.secondary]}
       style={{
        width: 70,
        height: 70,
        borderRadius: 35,
      }}>
        {children}
      </LinearGradient>
    </TouchableOpacity>
  )
}

const Tabs = () => {
    return (
        <Tab.Navigator
          tabBarOptions={{
            showLabel: false,
            style: {
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              elevation: 0,
              backgroundColor: COLORS.primary,
              borderTopColor: 'transparent',
              height: 200
            }
          }}
          screenOptions={{
            headerShown: false
          }}
        >
            <Tab.Screen
                name="Acceuil"
                component={Home}
                options={{
                  tabBarIcon: ({focused}) => (
                    <View style={{ alignItems: 'center',
                    justifyContent: 'center' }}>
                      <Image
                        source={icons.home}
                        resizedMode="contain"
                        style={{
                          width: 30,
                          height: 30,
                          tintColor: focused ? COLORS.primary : COLORS.black
                        }}
                      />
                      <Text style={{ color: focused ? COLORS.primary : COLORS.black,
                      ...FONTS.body5 }}>
                        Acceuil
                      </Text>
                    </View>
                  )
                }}
            />
            <Tab.Screen
                name="Marché"
                component={Market}
                options={{
                  tabBarIcon: ({focused}) => (
                    <View style={{ alignItems: 'center',
                    justifyContent: 'center' }}>
                      <Image
                        source={icons.line_graph}
                        resizedMode="contain"
                        style={{
                          width: 30,
                          height: 30,
                          tintColor: focused ? COLORS.primary : COLORS.black
                        }}
                      />
                      <Text style={{ color: focused ? COLORS.primary : COLORS.black,
                      ...FONTS.body5 }}>
                        Marché
                      </Text>
                    </View>
                  )
                }}
            />
            <Tab.Screen
                name="Echanger"
                component={Exchange}
                options={{
                  tabBarIcon: ({focused}) => (
                      <Image
                        source={icons.transaction}
                        resizedMode="contain"
                        style={{
                          width: 30,
                          height: 30,
                          tintColor: COLORS.white
                        }}
                    />
                  ),
                  tabBarButton: (props) => (
                    <TabBarCustomButton {...props}/>
                  )
                }}
            />
            <Tab.Screen
                name="Actifs"
                component={ActifsWrapper}
                options={{
                  tabBarIcon: ({focused}) => (
                    <View style={{ alignItems: 'center',
                    justifyContent: 'center' }}>
                      <Image
                        source={icons.pie_chart}
                        resizedMode="contain"
                        style={{
                          width: 30,
                          height: 30,
                          tintColor: focused ? COLORS.primary : COLORS.black
                        }}
                      />
                      <Text style={{ color: focused ? COLORS.primary : COLORS.black,
                      ...FONTS.body5 }}>
                        Actifs
                      </Text>
                    </View>
                  )
                }}
            />
            <Tab.Screen
                name="Transaction history"
                component={TransactionHistory}
                options={{
                  tabBarIcon: ({focused}) => (
                    <View style={{ alignItems: 'center',
                    justifyContent: 'center' }}>
                      <Entypo
                        name="list"
                        size={30}
                        color={focused ? COLORS.primary : COLORS.black}
                      />
                      <Text style={{ color: focused ? COLORS.primary : COLORS.black,
                      ...FONTS.body5 }}>
                        History
                      </Text>
                    </View>
                  )
                }}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: COLORS.primary,
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5
    }
})

export default Tabs;
