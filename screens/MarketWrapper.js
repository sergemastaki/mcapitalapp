import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import Market from "./Market"

const Stack = createStackNavigator();

const MarketWrapper = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Marché" component={Market} />
    </Stack.Navigator>
  );
}

export default MarketWrapper
