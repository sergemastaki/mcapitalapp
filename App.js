import React, { useEffect }  from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { CryptoDetail, Transaction } from "./screens";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { View } from "react-native";
import { Provider, useSelector, useDispatch } from 'react-redux';
import { store } from './redux/store';
import Tabs from "./navigation/tabs";
import {
  Login,
  Logout,
  Register,
  ProfilWrapper,
  MoyenPaiement } from "./screens"
import {loginStateAction} from './redux/actions';

const Drawer = createDrawerNavigator();

const App = () => {
  const {isLoggedIn} = useSelector(state => state.authReducer);
  const dispatch = useDispatch();
  const getLoginState = () => dispatch(loginStateAction());

  useEffect(() => {
    getLoginState()
  }, [])

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Principal">
        <Drawer.Screen
          name="Profil"
          component={ProfilWrapper}
          options={{title: null, drawerLabel: "Profil"}}/>
        <Drawer.Screen
          name="Principal"
          component={Tabs}
          options={{headerShown: false}} />
        <Drawer.Screen name="Moyen de paiement" component={MoyenPaiement} />
        {!isLoggedIn ? (
          <>
           <Drawer.Screen
             name="Login"
             component={Login}
             options={{title: null, drawerLabel: "Login"}} />
           <Drawer.Screen
              name="Register"
              component={Register}
              options={{title: null, drawerLabel: "Register"}} />
          </>
        ) :
        (
          <>
            <Drawer.Screen
              name="Logout"
              component={Logout}
              options={{title: null, drawerLabel: "Déconnexion"}} />
          </>
        )
      }
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
    return (
    <Provider store={store}>
        <App />
    </Provider>
    );
  }
};
