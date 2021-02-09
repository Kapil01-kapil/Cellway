import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  ScrollView,
  Image,
  TouchableHighlight,
  ImageBackground,
} from 'react-native';
import TextTicker from 'react-native-text-ticker';
import axios from 'axios';
import AuthService from '../service/AuthServece';
const {width, height} = Dimensions.get('window');
import Toolbar from '../Toolbar/Toolbar';
type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
      seven: '7000',
      fift: '7000-15000',
      third: '15000-3000',
      kkas: 'above-7000',
    };
  }

  componentDidMount() {
    this.makeRequest();
  }

  makeRequest = () => {
    let auth = new AuthService();
    auth.Home('/gethomecategory').then(res => {
      console.log(res.data.data[0].mobilebrand);
      console.log('@Kapil COMPONENT DID MOUNT');
      this.setState({
        isLoading: false,
        data: res.data.data[0].mobilebrand,
      });
    });
  };

  registerCall() {
    let auth = new AuthService();
    const {type} = this.state;

    auth
      .Destination('/getfilter_price', type)
      .then(res => {
        if (res.status === 200) {
          this.props.navigation.navigate('DrawerNavigator');
          this.props.saveUser(res.data);
        } else {
          Toast.show('Authorization failed');
        }
      })
      .catch(auth.handleError);
  }

  getListViewItem(item) {
    // Alert.alert(item.battery, item.mobile_display + '\n' + item.rear_camera);
    this.props.navigation.navigate('SecondUder', {item});
  }
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
        <Toolbar name="Destination" />
        <ScrollView>
          <View
            style={{
              backgroundColor: '#FFF',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-start',
                backgroundColor: '#FFF',
                padding: 10,
                justifyContent: 'space-between',
              }}>
              <TouchableHighlight
                onPress={() =>
                  this.props.navigation.navigate('Under', {
                    item: this.state.user,
                  })
                }>
                <ImageBackground
                  style={{
                    width: 70,
                    height: 70,
                    padding: 15,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  source={{
                    uri:
                      'http://www.regeneracomsports.com/file/player-filter-2-red.png',
                  }}>
                  <Text style={{color: '#FFF'}}>7000</Text>
                </ImageBackground>
              </TouchableHighlight>
              <TouchableHighlight
                onPress={() =>
                  this.props.navigation.navigate('Under', {
                    item: this.state.fift,
                  })
                }>
                <ImageBackground
                  style={{
                    width: 70,
                    height: 70,
                    padding: 15,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  source={{
                    uri:
                      'http://www.regeneracomsports.com/file/player-filter-2-red.png',
                  }}>
                  <Text style={{color: '#FFF'}}>7000-15000</Text>
                </ImageBackground>
              </TouchableHighlight>
              <TouchableHighlight
                onPress={() =>
                  this.props.navigation.navigate('Under', {
                    item: this.state.third,
                  })
                }>
                <ImageBackground
                  style={{
                    width: 70,
                    height: 70,
                    padding: 15,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  source={{
                    uri:
                      'http://www.regeneracomsports.com/file/player-filter-2-red.png',
                  }}>
                  <Text style={{color: '#FFF'}}>15000-3000</Text>
                </ImageBackground>
              </TouchableHighlight>
              <TouchableHighlight
                onPress={() =>
                  this.props.navigation.navigate('Under', {
                    item: this.state.kkas,
                  })
                }>
                <ImageBackground
                  style={{
                    width: 70,
                    height: 70,
                    padding: 15,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  source={{
                    uri:
                      'http://www.regeneracomsports.com/file/player-filter-2-red.png',
                  }}>
                  <Text style={{color: '#FFF'}}>above 7000</Text>
                </ImageBackground>
              </TouchableHighlight>
            </View>
            <FlatList
              data={this.state.data}
              keyExtractor={item => item.id}
              numColumns={2}
              refreshing={this.state.refreshing}
              onRefresh={this.handleRefresh}
              renderItem={({item}) => (
                <TouchableHighlight>
                  <View
                    style={{
                      backgroundColor: '#FFF',
                      padding: 5,
                      marginTop: 10,
                    }}>
                    <TouchableHighlight>
                      <View style={{backgroundColor: '#FFF'}}>
                        <ImageBackground
                          style={{
                            width: 165,
                            height: 100, // Set border width.
                            borderWidth: 1,
                            borderColor: '#E7E7E7',
                            borderBottomColor: '#F5FCFF',
                            backgroundColor: '#FFFFFF',
                            borderRadius: 10,
                            borderBottomWidth: 1,
                          }}
                          onPress={this.getListViewItem.bind(this, item)}
                          source={{uri: item.brand_icon}}>
                          <Text
                            style={{
                              justifyContent: 'center',
                              alignItems: 'center',
                              color: '#FFF',
                              height: '100%',
                              width: '100%',
                              textAlign: 'center',
                            }}
                            onPress={this.getListViewItem.bind(this, item)}>
                            {item.brand_name}
                          </Text>
                        </ImageBackground>
                      </View>
                    </TouchableHighlight>
                  </View>
                </TouchableHighlight>
              )}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}
