import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import Actifs from "./Actifs"
import ActifTransaction from "./ActifTransaction"

const Stack = createStackNavigator();

const ActifsWrapper = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Actifs" component={Actifs} />
      <Stack.Screen name="Transaction" component={ActifTransaction} />
    </Stack.Navigator>
  );
}

export default ActifsWrapper
