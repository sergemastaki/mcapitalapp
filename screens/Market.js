import React from 'react';
import {
    View,
    ScrollView,
} from 'react-native';

import { Paires } from '../components'

const Market = ({ navigation }) => {
    return (
          <ScrollView>
            <View style={{ flex:1, paddingBottom: 130 }}>
              <Paires/>
            </View>
          </ScrollView>
    )
}

export default Market;
