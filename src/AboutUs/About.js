import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View>
        <Text style={{fontSize: 18, color: 'black', padding: 10}}>
          AT your Cellway our motto is to Props
        </Text>
      </View>
    );
  }
}
