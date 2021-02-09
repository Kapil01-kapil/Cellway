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
import {isEmpty} from 'lodash';
import {saveUser, Update} from '../store/action';
import {connect} from 'react-redux';
import AuthService from '../service/AuthServece';
class Profile extends Component {
  constructor(props) {
    super(props);
    const {user} = this.props;
    this.state = {
      email: user.email,
      name: user.name,
      userid: '55685',
      mobile: user.mobile,
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
    const {userid, mobile, email, image, name} = this.state;
    // console.log(body);
    let params = {
      email: email,
      mobile: mobile,
      name: name,
    };
    console.log(params);
    auth
      .Profile('/updateprofile', userid, mobile, email, image, name)
      .then(res => {
        console.log(res);

        if (res.status === 200) {
          this.props.navigation.navigate('DrawerNavigator');
          this.props.Update(params);
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
    const {email, password, name, mobile, Confirmpassword} = this.state;
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let mob = /^[0]?[789]\d{9}$/;
    if (name == '') {
      Toast.show('name is empty', Toast.LONG);
      this.setState({name: 'name'});
      this.setState({checkName: false});
    } else if (mob.test(mobile) == '') {
      Toast.show('Name is empty', Toast.LONG);
      this.setState({checkMobile: false});
    } else if (reg.test(email) == '') {
      Toast.show('Email is empty', Toast.LONG);
      this.setState({checkEmail: false});
    } else {
      this.registerCall();
    }
  };
  onChangeText = key => text => {
    if (key == 'name' && key == ' ') {
      this.setState({checkName: false});
    } else if (key == 'mobile' && key == ' ') {
      this.setState({checkMobile: false});
    } else if (key == 'email' && key == ' ') {
      this.setState({checkEmail: false});
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
      name,
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
              value={name}
              onChangeText={this.onChangeText('name')}
              underlineColorAndroid="rgba(0,0,0,0)"
              placeholder="name"
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

            <Text
              style={{
                height: 45,
                padding: 10,
                borderBottomColor: '#FFFFFF',
                flex: 1,
              }}>
              {mobile}
            </Text>
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

          <TouchableOpacity
            style={[styles.buttonContainer, styles.loginButton]}
            onPress={this.saveData}>
            <Text style={styles.loginText}>Update</Text>
          </TouchableOpacity>
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

const mapDispatchToProps = {
  Update,
};
const mapStateToProps = state => ({user: state.saveUser});
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
