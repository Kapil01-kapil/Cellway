import React from 'react';
import {
  View,
  Text,
  Image,
  AsyncStorage,
  ActivityIndicator,
  Alert,
} from 'react-native';
import Login from './Login/Login';
import DrawerNavigator from './DrawerNavigator/DrawerNavigator';
import {connect} from 'react-redux';
import {isEmpty} from 'lodash';
class SplashScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isLoggedIn: false};
  }
  componentDidMount() {
    setTimeout(() => {
      //  this._retrieveData();
      if (isEmpty(this.props.user.email)) {
        this.props.navigation.replace('Login');
      } else {
        this.props.navigation.replace('DrawerNavigator');
      }
      // this._retrieveData();
    }, 2000);
  }
  /* _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('isLoggedIn');
      const mobile = await AsyncStorage.getItem('mobile');
      const password = await AsyncStorage.getItem('password');

      if (value !== null) {
        // We have data!!
        console.log(value);
        if (value == 'true') {
          this.props.navigation.replace('DrawerNavigator', {
            mobile: mobile,
            password: password,
          });
        } else {
          this.props.navigation.replace('Login');
        }
      } else {
        this.props.navigation.replace('Login');
      }
    } catch (error) {
       Error retrieving data
    }
  };
  */

  render() {
    return (
      <View style={styles.viewStyles}>
        <Image
          style={{width: 200, height: 200}}
          source={require('./assets/splash_logo.gif')}
        />
      </View>
    );
  }
}

const styles = {
  viewStyles: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: '#2873F0',
  },
  textStyles: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
  },
};

const mapStateToProps = state => ({user: state.saveUser});

export default connect(mapStateToProps, null)(SplashScreen);
