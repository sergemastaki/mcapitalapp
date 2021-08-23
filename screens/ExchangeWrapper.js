import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import Exchange from "./Exchange"
import Vente from "./Vente"
import Achat from "./Achat"

const Stack = createStackNavigator();

const ExchangeWrapper = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Exchange" component={Exchange} />
      <Stack.Screen name="Achat" component={Achat} />
      <Stack.Screen name="Vente" component={Vente} />
    </Stack.Navigator>
  );
}

export default ExchangeWrapper
