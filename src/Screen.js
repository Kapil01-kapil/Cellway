import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  AppRegistry,
  Alert,
  View,
  FlatList,
  Dimensions,
  ScrollView,
  TouchableHighlight,
  Image,
  ImageBackground,
} from 'react-native';
import TextTicker from 'react-native-text-ticker';
import axios from 'axios';
import AuthService from './service/AuthServece';
import Toolbar from './Toolbar/Toolbar';
const {width, height} = Dimensions.get('window');

export default class FlatListBasics extends Component {
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

  componentDidMount() {
    this.makeRequest();
  }

  makeRequest = () => {
    let auth = new AuthService();
    auth.Destination('/getfilter_price').then(res => {
      this.setState({
        isLoading: false,
        data: res.data.data,
      });
    });
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '100%',
          backgroundColor: '#000',
        }}
      />
    );
  };
  //handling onPress action
  getListViewItem(item) {
    Alert.alert(item.battery, item.mobile_display + '\n' + item.rear_camera);
    this.props.navigation.navigate('Kapil', {item});
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.data}
          renderItem={({item}) => (
            <View style={{margin: 5}}>
              <Text onPress={this.getListViewItem.bind(this, item)}>
                {'Battery :' + ' ' + item.battery}
              </Text>
              <Text onPress={this.getListViewItem.bind(this, item)}>
                {'Display Size' + '' + item.mobile_display}
              </Text>
              <Text onPress={this.getListViewItem.bind(this, item)}>
                {'Rear Camera' + ' ' + item.rear_camera}
              </Text>
              <Text onPress={this.getListViewItem.bind(this, item)}>
                {'Front Camera' + ' ' + item.front_camera}
              </Text>
              <Image
                style={{
                  width: 80,
                  height: 80,
                  marginRight: 15,
                  padding: 10,
                }}
                source={{uri: item.image}}
              />
            </View>
          )}
          ItemSeparatorComponent={this.renderSeparator}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => FlatListBasics);
