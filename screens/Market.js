import React from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
} from 'react-native';

import { Paires } from '../components'

const Market = ({ navigation }) => {
    return (
          <ScrollView>
            <View style={{ flex:1, paddingBottom: 130 }}>
              <Paires customContainerStyle={{ ...styles.customContainer }}/>
            </View>
          </ScrollView>
    )
}

const styles = StyleSheet.create({
    customContainer: {
        marginHorizontal: 0,
        borderRadius: 0,
    }
})

export default Market;
