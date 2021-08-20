import React, { useEffect }  from 'react';
import { CryptoDetail, Transaction } from "./screens";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { View } from "react-native";
import Tabs from "./navigation/tabs";
import { Login } from "./screens"
import { Register } from "./screens"

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Principal">
        <Drawer.Screen name="Profil" component={Login} />
        <Drawer.Screen
          name="Principal"
          component={Tabs}
          options={{headerShown: false}} />
        <Drawer.Screen name="Moyen de paiement" component={Register} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default props => {
  let [fontsLoaded] = useFonts({
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

      </View>
    );
  } else {
    return <App />;
  }
};
