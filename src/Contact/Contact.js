import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';
export default class COntact extends Component {
  constructor(props) {
    super(props);
    this.state = {isLoading: true, data: ''};
  }

  componentDidMount() {
    axios.get('https://reqres.in/api/users/2').then(res => {
      this.setState({
        isLoading: false,
        data: res.data.data,
      });
    });
  }

  render() {
    const {id, first_name, last_name, avatar} = this.state.data;

    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View
        style={{justifyContent: 'center', alignItems: 'center', padding: 10}}>
        <Text
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            color: 'black',
            fontSize: 20,
          }}>
          info@cellway.in
        </Text>
        <Text
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            color: 'black',
            fontSize: 18,
          }}>
          94734845487
        </Text>
      </View>
    );
  }
}
