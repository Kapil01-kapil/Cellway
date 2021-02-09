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
export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mobile: '',
      password: '',
      error: ' ',
      isLoading: false,
      checkMobile: true,
      checkPassword: true,
    };
  }
  Buttonn() {
    const url = 'http://api.msg91.com/api/sendhttp.php';
    body.append('authkey', '290873ACnsgu9J5d5fd88f');

    axios
      .post(url, body)
      .then(res => {
        console.log(res);
        if (res.status === 200) {
          this.props.navigation.navigate('Otp');
        } else {
          Toast.show('Authorization failed');
        }
      })
      .catch(err => {
        console.log(err);
        alert(
          'Request Failed :Check the ip address Entered:Problem with server ',
        );
      });
  }
  registerCall() {
    const url = 'https://cellway.in/mobileapp/index.php/forgetpassword?key';
    const {mobile, password} = this.state;

    let body = new FormData();
    body.append('mobile', mobile);
    body.append('password', password);

    body.append('key', '5642vcb546gfnbvb7r6ewc211365vhh34');

    axios
      .post(url, body)
      .then(res => {
        console.log(res);
        if (res.status === 200) {
          this.props.navigation.navigate('Otp');
        } else {
          Toast.show('Authorization failed');
        }
      })
      .catch(err => {
        console.log(err);
        alert(
          'Request Failed :Check the ip address Entered:Problem with server ',
        );
      });
  }

  saveData = () => {
    const {mobile, password} = this.state;
    let reg = /^[0]?[789]\d{9}$/;
    if (reg.test(mobile) == '') {
      this.setState({checkMobile: false});
    } else {
      this.registerCall();
    }
  };
  setAsyncStorage() {
    try {
      const isloggedin = this.props.state(true);
      AsyncStorage.setItem('isLoggedIn', 'YES');
      this.props.navigation.navigate('Home');
    } catch (error) {
      console.log(error);
    }
  }
  onChangeText = key => text => {
    console.log(text);
    if (key == 'mobile' && key == ' ') {
      this.setState({checkMobile: false});
    } else {
      this.setState({checkMobile: true});
    }

    this.setState({[key]: text});
  };

  ButtonLIst = () => {
    if (this.saveData) {
      this.props.navigation.navigate('Home');
    }
  };
  render() {
    const {mobile, checkMobile} = this.state;

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
        <Text style={{fontSize: 18, color: '#002f6c', marginTop: 10}}>
          It's okay! change your password
        </Text>
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

        <TouchableOpacity
          style={[styles.buttonContainer, styles.loginButton]}
          onPress={this.saveData}>
          <Text style={styles.loginText}>Continue</Text>
        </TouchableOpacity>
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
