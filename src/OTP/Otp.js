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
export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      OTP: '',
      password: '',
      Confirmpassword: '',
      error: ' ',
      isLoading: false,
      checkOTP: true,
      checkPassword: true,
      checkConfirmPassword: true,
    };
  }

  saveData = () => {
    const {OTP, password, Confirmpassword} = this.state;

    if (OTP == '') {
      this.setState({checkOTP: false});
    }
    if (password == '') {
      Toast.show('Password is empty', Toast.LONG);
      this.setState({checkPassword: false});
    } else if (password != Confirmpassword) {
      Toast.show('Confirmpassword is empty', Toast.LONG);
      this.setState({checkConfirmPassword: false});
    } else {
      this.props.navigation.navigate('Home');
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
    } else if (key == 'password' && key == ' ') {
      this.setState({checkPassword: false});
    } else if (key == 'Confirmpassword' && key == ' ') {
      this.setState({checkConfirmPassword: false});
    } else {
      this.setState({
        checkOTP: true,
        checkPassword: true,
        checkConfirmPassword: true,
      });
    }

    this.setState({[key]: text});
  };

  ButtonLIst = () => {
    if (this.saveData) {
      this.props.navigation.navigate('Login');
    }
  };
  render() {
    const {
      OTP,
      checkOTP,
      password,
      Confirmpassword,
      checkPassword,
      checkConfirmPassword,
    } = this.state;

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
            name="md-key"
            size={30}
            color="#4F8EF7"
            style={styles.inputIcon}
          />

          <TextInput
            style={styles.inputs}
            value={OTP}
            onChangeText={this.onChangeText('OTP')}
            underlineColorAndroid="rgba(0,0,0,0)"
            placeholder="Enter your Otp."
            placeholderTextColor="#002f6c"
            selectionColor="#fff"
            maxLength={4}
            keyboardType="phone-pad"
            onSubmitEditing={() => this.password.focus()}
          />
        </View>
        {!checkOTP && (
          <Text style={{color: 'red'}}>Please enter the valid OTP</Text>
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
            placeholder="New Password"
            placeholderTextColor="#002f6c"
            selectionColor="#fff"
            keyboardType="phone-pad"
            onSubmitEditing={() => this.password.focus()}
          />
        </View>
        {!checkPassword && (
          <Text style={{color: 'red'}}>Please enter the valid password</Text>
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
            placeholderTextColor="#002f6c"
            selectionColor="#fff"
            keyboardType="phone-pad"
            onSubmitEditing={() => this.password.focus()}
          />
        </View>
        {!checkConfirmPassword && (
          <Text style={{color: 'red'}}>
            Confirm Password should match as Password
          </Text>
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
