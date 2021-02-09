import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import TextTicker from 'react-native-text-ticker';
import axios from 'axios';
const {width, height} = Dimensions.get('window');
import AuthService from '../service/AuthServece';
export default class Screen1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      video: {width: undefined, height: undefined, duration: undefined},
      thumbnailUrl: undefined,
      videoUrl: undefined,
      data: '',
      articles: [],
      refreshing: true,
    };
  }

  componentDidMount() {
    let auth = new AuthService();
    auth.Home('/gethomecategory').then(res => {
      console.log(res.data.data[0].allmobile);
      console.log('@Kapil COMPONENT DID MOUNT');
      this.setState({
        isLoading: false,
        data: res.data.data[0].allmobile,
      });
    });
  }

  renderItem(item) {
    const {id, brand, sale_amount, image, gb} = item.item;
    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate('Booking')}>
        <View>
          <View style={{flexDirection: 'row'}}>
            <Image
              style={{width: 80, height: 60, padding: 10, margin: 10}}
              source={{uri: image}}
            />
            <View style={{backgroundColor: '#e7e7e7', height: 80, width: 1}} />
            <View style={{padding: 10}}>
              <Text style={{fontSize: 15}}>{brand}</Text>
              <Text style={{fontSize: 10}}>{gb}</Text>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'bold',
                  color: 'black',
                }}>
                {sale_amount}
              </Text>
            </View>
          </View>
          <View
            style={{backgroundColor: '#e7e7e7', height: 1, width: '100%'}}
          />
        </View>
      </TouchableOpacity>
    );
  }
  render() {
    return (
      <View style={styles.MainContainer}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-start',
            padding: 10,
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Destination')}>
            <Image
              style={{width: 60, height: 60}}
              source={{
                uri:
                  'https://sathya.in/Media/Default/Thumbs/0030/0030930-vivo-mobile-v15-royal-blue6gb-ram64gb-storage.jpg',
              }}
            />
            <Text
              style={{padding: 5}}
              onPress={() => this.props.navigation.navigate('Otp')}>
              Mobile
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Destination')}>
            <Image
              style={{width: 60, height: 60}}
              source={{
                uri:
                  'https://images.samsung.com/is/image/samsung/es-galaxy-tab-s3-4g-sm-t825nzkaphe-frontblack-61497224?$PD_GALLERY_L_JPG$',
              }}
            />
            <Text
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                padding: 5,
              }}>
              Tablet
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Destination')}>
            <Image
              style={{width: 60, height: 60}}
              source={{
                uri:
                  'https://brain-images-ssl.cdn.dixons.com/2/4/10185442/u_10185442.jpg',
              }}
            />
            <Text style={{padding: 5}}>Accessories</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Destination')}>
            <Image
              style={{
                width: 60,
                height: 60,
                justifyContent: 'center',
                alignItems: 'center',
                alignContent: 'center',
              }}
              source={{
                uri:
                  'https://cdn4.iconfinder.com/data/icons/meBaze-Freebies/512/add-more.png',
              }}
            />
            <Text style={{padding: 5}}>More</Text>
          </TouchableOpacity>
        </View>
        <View style={{backgroundColor: '#2873F0', height: 50}}>
          <TextTicker
            style={{
              fontSize: 15,
              color: '#FFF',
              padding: 10,
              paddingLeft: 5,
              paddingRight: 5,
            }}
            duration={6000}
            loop
            bounce
            repeatSpacer={50}
            marqueeDelay={2000}>
            Due to some tecniqual issue COD cash on delivery will be not
            available for next days thank you
          </TextTicker>
        </View>
        <Image
          style={{
            width: '100%',
            height: 200,

            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
          }}
          source={{
            uri: 'https://i.ytimg.com/vi/JN1OflMz2J4/maxresdefault.jpg',
          }}
        />
        <View>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              color: 'black',
              padding: 10,
            }}>
            LATEST ARRIVALS
          </Text>
          <View
            style={{backgroundColor: '#e7e7e7', height: 1, width: '100%'}}
          />
        </View>
        <FlatList
          data={this.state.data}
          renderItem={this.renderItem.bind(this)}
          keyExtractor={item => item.id}
          refreshing={this.state.refreshing}
          onRefresh={this.handleRefresh}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});
