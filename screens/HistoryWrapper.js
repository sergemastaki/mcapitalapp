import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import {useSelector, useDispatch} from 'react-redux'
import { useFocusEffect } from '@react-navigation/native';
import TransactionHistory from "./TransactionHistory"

const Stack = createStackNavigator();

const HistoryWrapper = ({ navigation }) => {
  const {isLoggedIn} = useSelector(state => state.authReducer);
  const navigateIfNotLoggedIn = () => {
      if(!isLoggedIn) navigation.navigate('Login')
  }

  useFocusEffect(
    React.useCallback(() => {
      navigateIfNotLoggedIn()
    }, [isLoggedIn])
  );

  return (
    <Stack.Navigator>
      <Stack.Screen name="Historique de transactions" component={TransactionHistory} />
    </Stack.Navigator>
  );
}

export default HistoryWrapper
