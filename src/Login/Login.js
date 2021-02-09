import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Image,
  ImageBackground,
  Animated,
  Easing,
  Button,
} from 'react-native';
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import Toast from 'react-native-simple-toast';
import axios from 'axios';
import Modal from 'react-native-modal';
import {saveUser} from '../store/action';
import {connect} from 'react-redux';

import AuthService from '../service/AuthServece';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mobile: '',
      password: '',
      error: ' ',
      isLoading: false,
      checkMobile: true,
      checkPassword: true,
      status: '',
      wholeResult: '',
    };
  }
  registerCall() {
    let auth = new AuthService();
    const {mobile, password} = this.state;

    auth
      .login('/login', mobile, password)
      .then(res => {
        if (res.status === 200) {
          this.props.navigation.navigate('DrawerNavigator');
          this.props.saveUser(res.data);
        } else {
          Toast.show('Authorization failed');
        }
      })
      .catch(function(error) {
        Toast.show('result:' + error);
      });
  }
  saveData = () => {
    const {mobile, password} = this.state;

    let reg = /^[0]?[789]\d{9}$/;
    if (reg.test(mobile) == '') {
      this.setState({checkMobile: false});
    } else if (password == '') {
      Toast.show('password is empty', Toast.LONG);
      this.setState({checkPassword: false});
    } else {
      this.registerCall();
    }
  };
  logInUser() {
    this.props.screenProps.isLoggedIn();
  }
  onChangeText = key => text => {
    if (key == 'mobile' && key == ' ') {
      this.setState({checkMobile: false});
    } else if (key == 'password' && key == ' ') {
      this.setState({checkPassword: false});
    } else {
      this.setState({checkMobile: true, checkPassword: true});
    }

    this.setState({[key]: text});
  };

  ButtonLIst = () => {
    if (this.saveData) {
      this.props.navigation.navigate('Home');
    }
  };
  render() {
    const {mobile, password, checkMobile, checkPassword} = this.state;

    return (
      <View style={styles.container}>
        <Image
          style={{
            width: 100,
            height: 100,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 30,
          }}
          source={require('../assets/logo.png')}
        />
        <View style={styles.inputContainer}>
          <Icon
            name="md-phone-portrait"
            size={30}
            color="#4F8EF7"
            style={styles.inputIcon}
          />

          <TextInput
            style={styles.inputs}
            value={mobile}
            onChangeText={this.onChangeText('mobile')}
            underlineColorAndroid="rgba(0,0,0,0)"
            placeholder="Mobile No."
            placeholderTextColor="#002f6c"
            maxLength={10}
            selectionColor="#fff"
            keyboardType="phone-pad"
            onSubmitEditing={() => this.password.focus()}
          />
        </View>
        {!checkMobile && (
          <Text style={{color: 'red'}}>Please enter the valid mobile</Text>
        )}
        <View style={styles.inputContainer}>
          <Icon
            name="ios-lock"
            size={30}
            color="#4F8EF7"
            style={styles.inputIcon}
          />
          <TextInput
            style={styles.inputs}
            value={password}
            onChangeText={this.onChangeText('password')}
            underlineColorAndroid="rgba(0,0,0,0)"
            placeholder="Password"
            secureTextEntry={true}
            placeholderTextColor="#002f6c"
            ref={input => (this.password = input)}
          />
        </View>
        {!checkPassword && (
          <Text style={{marginHorizontal: 20, color: 'red'}}>
            Please enter the valid Password
          </Text>
        )}

        <Text
          style={{
            color: '#002f6c',
            justifyContent: 'flex-end',
            alignContent: 'flex-end',
            paddingBottom: 10,

            paddingLeft: 150,
          }}
          onPress={() => this.props.navigation.navigate('ForgotPassword')}>
          {' '}
          forgot password?
        </Text>
        <TouchableOpacity
          style={[styles.buttonContainer, styles.loginButton]}
          onPress={this.saveData}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
        <Text
          style={{
            color: '#000',
            justifyContent: 'flex-end',
            paddingLeft: 150,
          }}
          onPress={() => this.props.navigation.navigate('Register')}>
          {' '}
          Create New Account
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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

const mapDispatchToProps = {
  saveUser,
};
export default connect(null, mapDispatchToProps)(Login);
