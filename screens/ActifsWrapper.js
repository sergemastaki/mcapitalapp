import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import Actifs from "./Actifs"
import Depot from "./Depot"
import Retrait from "./Retrait"
import Swap from "./Swap"
import ActifTransaction from "./ActifTransaction"

const Stack = createStackNavigator();

const ActifsWrapper = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Actifs" component={Actifs} />
      <Stack.Screen name="Depot" component={Depot} />
      <Stack.Screen name="Retrait" component={Retrait} />
      <Stack.Screen name="Swap" component={Swap} />
      <Stack.Screen name="Transaction" component={ActifTransaction} />
    </Stack.Navigator>
  );
}

export default ActifsWrapper
