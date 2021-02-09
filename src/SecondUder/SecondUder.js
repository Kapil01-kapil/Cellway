import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  Alert,
  ScrollView,
  TouchableHighlight,
  Image,
  ImageBackground,
} from 'react-native';
import TextTicker from 'react-native-text-ticker';
import axios from 'axios';
import AuthService from '../service/AuthServece';
import Toolbar from '../Toolbar/Toolbar';
const {width, height} = Dimensions.get('window');
type Props = {};
export default class App extends Component<Props> {
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
      brand_name: '',
    };
  }
  getListViewItem(item) {
    // Alert.alert(item.battery, item.mobile_display + '\n' + item.rear_camera);
    this.props.navigation.navigate('Booking', {item});
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
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={{}}>
        <Toolbar name={this.props.navigation.state.params.item.brand_name} />
        <FlatList
          data={this.state.data}
          keyExtractor={item => item.id}
          refreshing={this.state.refreshing}
          onRefresh={this.handleRefresh}
          renderItem={({item}) => (
            <TouchableHighlight
              onPress={() => this.props.navigation.navigate('Booking', {item})}>
              <View
                style={{
                  backgroundColor: '#FFF',
                  padding: 10,
                  marginTop: 10,
                  margin: 10,
                  borderWidth: 1,
                  borderColor: '#E7E7E7',
                  borderBottomColor: '#F5FCFF',
                  backgroundColor: '#FFFFFF',
                  borderRadius: 1,
                  borderBottomWidth: 1,
                }}>
                <View style={{backgroundColor: '#FFF', flexDirection: 'row'}}>
                  <Image
                    style={{
                      width: 80,
                      height: 80,
                      marginRight: 15,
                      padding: 10,
                    }}
                    source={{uri: item.image}}
                  />
                  <View style={{margin: 10}}>
                    <Text onPress={this.getListViewItem.bind(this, item)}>
                      {item.brand +
                        ' ' +
                        item.model +
                        '' +
                        ' ' +
                        item.gb +
                        ' ' +
                        'Gb'}
                    </Text>
                    <Text onPress={this.getListViewItem.bind(this, item)}>
                      {'Warrenty' + ' ' + item.warrenty}
                    </Text>
                    <Text
                      style={{fontWeight: 'bold'}}
                      onPress={this.getListViewItem.bind(this, item)}>
                      {'₹' + ' ' + item.sale_amount}
                    </Text>
                  </View>
                </View>
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
                </View>
              </View>
            </TouchableHighlight>
          )}
        />
      </View>
    );
  }
}
