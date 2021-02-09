import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 10,
          }}>
          <Text style={{color: '#002f6c'}}>Products</Text>
          <Text style={{color: '#002f6c'}}>GB</Text>
          <Text style={{color: '#002f6c'}}>Amount</Text>
          <Text style={{color: '#002f6c'}}>Data</Text>
        </View>
        <View
          style={{
            height: 1,
            width: '100%',
            backgroundColor: 'black',
            marginTop: 10,
          }}
        />
      </View>
    );
  }
}
