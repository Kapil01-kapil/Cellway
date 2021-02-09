import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Image,
  Button,
  ScrollView,
  ImageBackground,
  Picker,
} from 'react-native';
import Toast from 'react-native-simple-toast';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import AuthService from '../service/AuthServece';
export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      Confirmpassword: '',
      Name: '',
      mobile: '',
      image: '',
      checkEmail: true,
      checkPassword: true,
      checkConfirmPassword: true,
      checkName: true,
      checkMobile: true,
    };
  }
  registerCall() {
    let auth = new AuthService();
    const {mobile, password, email, image} = this.state;

    auth
      .SignIn('/registers', mobile, password)
      .then(res => {
        console.log(res);
        if (res.status === 200) {
          this.props.navigation.navigate('Login');
        } else {
          Toast.show('All ready register');
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
    const {email, password, Name, mobile, Confirmpassword} = this.state;
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let mob = /^[0]?[789]\d{9}$/;
    if (Name == '') {
      Toast.show('Name is empty', Toast.LONG);
      this.setState({checkName: false});
    } else if (mob.test(mobile) == '') {
      Toast.show('Name is empty', Toast.LONG);
      this.setState({checkMobile: false});
    } else if (reg.test(email) == '') {
      Toast.show('Email is empty', Toast.LONG);
      this.setState({checkEmail: false});
    } else if (password == '') {
      Toast.show('Password is empty', Toast.LONG);
      this.setState({checkPassword: false});
    } else if (password != Confirmpassword) {
      Toast.show('Confirmpassword is empty', Toast.LONG);
      this.setState({checkConfirmPassword: false});
    } else {
      this.registerCall();
    }
  };
  onChangeText = key => text => {
    if (key == 'Name' && key == ' ') {
      this.setState({checkName: false});
    } else if (key == 'mobile' && key == ' ') {
      this.setState({checkMobile: false});
    } else if (key == 'email' && key == ' ') {
      this.setState({checkEmail: false});
    } else if (key == 'password' && key == ' ') {
      this.setState({checkPassword: false});
    } else if (key == 'Confirmpassword' && key == ' ') {
      this.setState({checkPassword: false});
    } else {
      this.setState({
        checkName: true,
        checkMobile: true,
        checkEmail: true,
        checkPassword: true,
        checkConfirmPassword: true,
      });
    }

    this.setState({[key]: text});
  };

  render() {
    const {
      email,
      password,
      Confirmpassword,
      Name,
      mobile,
      checkEmail,
      checkMobile,
      checkName,
      checkPassword,
      checkConfirmPassword,
    } = this.state;
    return (
      <ScrollView>
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
              name="ios-man"
              size={30}
              color="#4F8EF7"
              style={styles.inputIcon}
            />

            <TextInput
              style={styles.inputs}
              value={Name}
              onChangeText={this.onChangeText('Name')}
              underlineColorAndroid="rgba(0,0,0,0)"
              placeholder="Name"
              placeholderTextColor="#002f6c"
              selectionColor="#fff"
              keyboardType="ascii-capable"
              onSubmitEditing={() => this.password.focus()}
            />
          </View>
          {!checkName && (
            <Text style={{marginHorizontal: 20, color: 'red'}}>
              Please enter the valid name
            </Text>
          )}

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
              placeholder="Mobile"
              placeholderTextColor="#002f6c"
              selectionColor="#fff"
              keyboardType="number-pad"
              onSubmitEditing={() => this.password.focus()}
            />
          </View>

          {!checkMobile && (
            <Text style={{marginHorizontal: 20, color: 'red'}}>
              Please enter the valid mobile
            </Text>
          )}
          <View style={styles.inputContainer}>
            <Icon
              name="ios-mail"
              size={30}
              color="#4F8EF7"
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.inputs}
              value={email}
              onChangeText={this.onChangeText('email')}
              underlineColorAndroid="rgba(0,0,0,0)"
              placeholder="Email"
              placeholderTextColor="#002f6c"
              selectionColor="#fff"
              keyboardType="email-address"
              onSubmitEditing={() => this.password.focus()}
            />
          </View>
          {!checkEmail && (
            <Text style={{marginHorizontal: 20, color: 'red'}}>
              Please enter the valid Email
            </Text>
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
          <View style={styles.inputContainer}>
            <Icon
              name="ios-lock"
              size={30}
              color="#4F8EF7"
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.inputs}
              value={Confirmpassword}
              onChangeText={this.onChangeText('Confirmpassword')}
              underlineColorAndroid="rgba(0,0,0,0)"
              placeholder="Confirm Password"
              secureTextEntry={true}
              placeholderTextColor="#002f6c"
              ref={input => (this.password = input)}
            />
          </View>
          {!checkConfirmPassword && (
            <Text style={{marginHorizontal: 20, color: 'red'}}>
              Please enter the valid Some Password
            </Text>
          )}

          <TouchableOpacity
            style={[styles.buttonContainer, styles.loginButton]}
            onPress={this.saveData}>
            <Text style={styles.loginText}>Sign Up</Text>
          </TouchableOpacity>
          <Text
            style={{
              color: '#002f6c',
              justifyContent: 'flex-end',
              alignContent: 'flex-end',
            }}
            onPress={() => this.props.navigation.navigate('Login')}>
            {' '}
            Already registered. Login here
          </Text>
        </View>
      </ScrollView>
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
