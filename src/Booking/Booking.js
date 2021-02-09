import React, {Component} from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import Toolbar from '../Toolbar/Toolbar';
import ViewPager from '@react-native-community/viewpager';

//var ViewPager = require('./ViewPager');
export default class MyPager extends React.Component {
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
        <Toolbar name="Address" />

        <View style={{padding: 10}}>
          <ViewPager
            style={{
              height: 200,
              padding: 10,
            }}
            pageMargin={5}
            initialPage={0}>
            <View
              style={{
                width: 80,
                height: 200,
                borderColor: 'green',
                borderWidth: 1,
              }}>
              <Image
                source={{
                  uri: this.props.navigation.state.params.item.image,
                }}
                style={{
                  width: '100%',
                  height: 200,
                  borderColor: 'green',
                  borderWidth: 1,
                }}
              />
            </View>
            <View
              style={{
                width: 80,
                height: 200,
                borderColor: 'green',
                borderWidth: 1,
              }}>
              <Image
                source={{
                  uri: this.props.navigation.state.params.item.image,
                }}
                style={{
                  width: '100%',
                  height: 200,
                  borderColor: 'green',
                  borderWidth: 1,
                }}
              />
            </View>
            <View
              style={{
                width: 80,
                height: 200,
                borderColor: 'green',
                borderWidth: 1,
              }}>
              <Image
                source={{
                  uri: this.props.navigation.state.params.item.image,
                }}
                style={{
                  width: '100%',
                  height: 200,
                  borderColor: 'green',
                  borderWidth: 1,
                }}
              />
            </View>
          </ViewPager>
          <Text style={{marginTop: 10}}>
            {this.props.navigation.state.params.item.brand +
              ' ' +
              this.props.navigation.state.params.item.model +
              '' +
              ' ' +
              this.props.navigation.state.params.item.gb}
          </Text>
          <Text style={{fontWeight: 'bold'}}>
            {'₹' + ' ' + this.props.navigation.state.params.item.sale_amount}
          </Text>
          <Text>
            {'Warrenty' +
              ' ' +
              this.props.navigation.state.params.item.warrenty}
          </Text>
          <Text>
            {'Battery :' +
              ' ' +
              this.props.navigation.state.params.item.battery}
          </Text>
          <Text>
            {'Display Size' +
              '' +
              this.props.navigation.state.params.item.mobile_display}
          </Text>
          <Text>
            {'Rear Camera' +
              ' ' +
              this.props.navigation.state.params.item.rear_camera}
          </Text>
          <Text>
            {'Front Camera' +
              ' ' +
              this.props.navigation.state.params.item.front_camera}
          </Text>
          <Text>Remark like new</Text>
          <Text style={{marginBottom: 10}}>Condition **</Text>
          <View style={styles.container}>
            <TouchableOpacity
              style={[styles.buttonContainer, styles.loginButton]}
              onPress={() => this.props.navigation.navigate('Address')}>
              <Text style={styles.loginText}>Book Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewPager: {
    flex: 1,
    padding: 30,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputBox: {
    width: 300,
    backgroundColor: '#eeeeee',
    borderRadius: 5,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#000',
    marginVertical: 10,
  },
  button: {
    width: 300,
    backgroundColor: '#000',
    borderRadius: 5,
    marginVertical: 10,
    paddingVertical: 12,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center',
  },

  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    borderBottomWidth: 1,
    width: 290,
    marginTop: 10,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputs: {
    height: 45,

    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  inputIcon: {
    width: 30,
    height: 30,

    marginLeft: 15,
    justifyContent: 'center',
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 300,
    borderRadius: 10,
  },
  loginButton: {
    backgroundColor: '#2873F0',
  },
  loginText: {
    color: 'white',
  },
});
