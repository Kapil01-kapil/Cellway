import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: [],
      purchase_cat_name: '',
      product_category: '',
      brand: '',
      series_name: '',
      model: '',
      battery: '',
      model_id: '',
      gb: '',
      warrenty: '',
      warrenty_month: '',
      sale_amount: '',
      mobile_display: '',
      rear_camera: '',
      front_camera: '',
      image: '',
    };
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
        <Text>{this.props.navigation.state.params.item.battery}</Text>
        <Image
          style={{
            width: 80,
            height: 80,
            marginRight: 15,
            padding: 10,
          }}
          source={{uri: this.props.navigation.state.params.item.image}}
        />
      </View>
    );
  }
}
