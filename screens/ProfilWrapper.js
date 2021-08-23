import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import Profil from "./Profil"
import ProfilUpdate from "./ProfilUpdate"

const Stack = createStackNavigator();

const ProfilWrapper = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profil"
        component={Profil}/>
      <Stack.Screen
        name="Profil update"
        component={ProfilUpdate}/>
    </Stack.Navigator>
  );
}

export default ProfilWrapper
