import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ScrollView,
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
import Toolbar from '../Toolbar/Toolbar';
import Icon from 'react-native-vector-icons/AntDesign';
import Toast from 'react-native-simple-toast';
import axios from 'axios';
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Pincode: '',
      Name: '',
      House: '',
      Road: '',
      City: '',
      State: '',
      Contact: '',
      Email: '',
      checkPincode: true,
      checkCity: true,
      checkEmail: true,
      checkState: true,
      checkContact: true,
      checkName: true,
      checkHouse: true,
      checkRoad: true,
    };
  }
  registerCall() {
    const url = 'https://cellway.in/mobileapp/index.php/requirement';
    const {userid, brand, model} = this.state;

    let body = new FormData();
    body.append('brand', brand);
    body.append('userid', userid);
    body.append('model', model);
    body.append('key', '5642vcb546gfnbvb7r6ewc211365vhh34');

    axios
      .post(url, body)
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
    const {
      Pincode,
      Name,
      House,
      Road,
      City,
      State,
      Contact,
      Email,
    } = this.state;
    if (Pincode == '') {
      Toast.show('Email is empty', Toast.LONG);
      this.setState({checkPincode: false});
    } else if (Name == '') {
      Toast.show('Name is empty', Toast.LONG);
      this.setState({checkName: false});
    } else if (House == '') {
      Toast.show('Name is empty', Toast.LONG);
      this.setState({checkHouse: false});
    } else if (Road == '') {
      Toast.show('Name is empty', Toast.LONG);
      this.setState({checkRoad: false});
    } else if (City == '') {
      Toast.show('Name is empty', Toast.LONG);
      this.setState({checkCity: false});
    } else if (State == '') {
      Toast.show('Name is empty', Toast.LONG);
      this.setState({checkState: false});
    } else if (Contact == '') {
      Toast.show('Name is empty', Toast.LONG);
      this.setState({checkContact: false});
    } else if (Email == '') {
      Toast.show('Name is empty', Toast.LONG);
      this.setState({checkEmail: false});
    } else {
      this.registerCall();
    }
  };
  onChangeText = key => text => {
    if (key == 'Pincode' && key == ' ') {
      this.setState({checkPincode: false});
    } else if (key == 'Name' && key == ' ') {
      this.setState({checkName: false});
    } else if (key == 'House' && key == ' ') {
      this.setState({checkHouse: false});
    } else if (key == 'Road' && key == ' ') {
      this.setState({checkRoad: false});
    } else if (key == 'City' && key == ' ') {
      this.setState({checkCity: false});
    } else if (key == 'State' && key == ' ') {
      this.setState({checkState: false});
    } else if (key == 'Contact' && key == ' ') {
      this.setState({checkContact: false});
    } else if (key == 'Email' && key == ' ') {
      this.setState({checkEmail: false});
    } else {
      this.setState({
        checkCity: true,
        checkContact: true,
        checkEmail: true,
        checkHouse: true,
        checkModel: true,
        checkName: true,
        checkPincode: true,
        checkRoad: true,
        checkState: true,
      });
    }

    this.setState({[key]: text});
  };

  render() {
    const {
      Pincode,
      Name,
      House,
      Road,
      City,
      State,
      Contact,
      Email,
      checkCity,
      checkContact,
      checkEmail,
      checkHouse,
      checkName,
      checkPincode,
      checkRoad,
      checkState,
    } = this.state;

    return (
      <ScrollView>
        <View style={styles.container}>
          <Toolbar name="Address" />
          <TextInput
            style={styles.inputBox}
            value={Pincode}
            onChangeText={this.onChangeText('Pincode')}
            underlineColorAndroid="rgba(0,0,0,0)"
            placeholder="Pincode*"
            placeholderTextColor="#002f6c"
            selectionColor="#fff"
            keyboardType="ascii-capable"
            onSubmitEditing={() => this.password.focus()}
          />
          {!checkPincode && (
            <Text style={{marginHorizontal: 20, color: 'red'}}>
              Please enter the Pincode name
            </Text>
          )}
          <TextInput
            style={styles.inputBox}
            value={Name}
            onChangeText={this.onChangeText('Name')}
            underlineColorAndroid="rgba(0,0,0,0)"
            placeholder="Name*"
            keyboardType="ascii-capable"
            placeholderTextColor="#002f6c"
            ref={input => (this.password = input)}
          />
          {!checkName && (
            <Text style={{marginHorizontal: 20, color: 'red'}}>
              Please enter the valid name
            </Text>
          )}
          <TextInput
            style={styles.inputBox}
            value={House}
            onChangeText={this.onChangeText('House')}
            underlineColorAndroid="rgba(0,0,0,0)"
            placeholder="House No., Building Name*"
            keyboardType="ascii-capable"
            placeholderTextColor="#002f6c"
            ref={input => (this.password = input)}
          />
          {!checkHouse && (
            <Text style={{marginHorizontal: 20, color: 'red'}}>
              Please enter the House No
            </Text>
          )}
          <TextInput
            style={styles.inputBox}
            value={Road}
            onChangeText={this.onChangeText('Road')}
            underlineColorAndroid="rgba(0,0,0,0)"
            placeholder="Road Name, Area, Colony*"
            keyboardType="ascii-capable"
            placeholderTextColor="#002f6c"
            ref={input => (this.password = input)}
          />
          {!checkRoad && (
            <Text style={{marginHorizontal: 20, color: 'red'}}>
              Please enter the Road Name
            </Text>
          )}
          <TextInput
            style={styles.inputBox}
            value={City}
            onChangeText={this.onChangeText('City')}
            underlineColorAndroid="rgba(0,0,0,0)"
            placeholder="City"
            keyboardType="ascii-capable"
            placeholderTextColor="#002f6c"
            ref={input => (this.password = input)}
          />
          {!checkCity && (
            <Text style={{marginHorizontal: 20, color: 'red'}}>
              Please enter the city name
            </Text>
          )}
          <TextInput
            style={styles.inputBox}
            value={State}
            onChangeText={this.onChangeText('State')}
            underlineColorAndroid="rgba(0,0,0,0)"
            placeholder="State*"
            keyboardType="ascii-capable"
            placeholderTextColor="#002f6c"
            ref={input => (this.password = input)}
          />
          {!checkState && (
            <Text style={{marginHorizontal: 20, color: 'red'}}>
              Please enter the State
            </Text>
          )}

          <TextInput
            style={styles.inputBox}
            value={Contact}
            onChangeText={this.onChangeText('Contact')}
            underlineColorAndroid="rgba(0,0,0,0)"
            placeholder="Contact no.*"
            keyboardType="ascii-capable"
            placeholderTextColor="#002f6c"
            ref={input => (this.password = input)}
          />
          {!checkContact && (
            <Text style={{marginHorizontal: 20, color: 'red'}}>
              Please enter the model Contact No.
            </Text>
          )}
          <TextInput
            style={styles.inputBox}
            value={Email}
            onChangeText={this.onChangeText('Email')}
            underlineColorAndroid="rgba(0,0,0,0)"
            placeholder="Email*"
            keyboardType="ascii-capable"
            placeholderTextColor="#002f6c"
            ref={input => (this.password = input)}
          />
          {!checkEmail && (
            <Text style={{marginHorizontal: 20, color: 'red'}}>
              Please enter the model email
            </Text>
          )}
          <TouchableOpacity
            style={[styles.buttonContainer, styles.loginButton]}
            onPress={this.saveData}>
            <Text style={styles.loginText}>Submit</Text>
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
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
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
