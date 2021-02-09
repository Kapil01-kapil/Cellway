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
import Icon from 'react-native-vector-icons/AntDesign';
import Toast from 'react-native-simple-toast';
import axios from 'axios';
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: '',
      color: '',
      model: '',
      description: '',

      checkColor: true,
      checkBrand: true,
      checkModel: true,
      checkDescription: true,
    };
  }
  registerCall() {
    const url = 'https://cellway.in/mobileapp/index.php/requirement';
    const {userid, brand, model, color, description} = this.state;

    let body = new FormData();
    body.append('userid', userid);
    body.append('brand', brand);
    body.append('model', model);
    body.append('color', color);
    body.append('description', description);
    body.append('key', '5642vcb546gfnbvb7r6ewc211365vhh34');

    axios
      .post(url, body)
      .then(res => {
        console.log(res);
        if (res.status === 200) {
          this.props.navigation.navigate('Home');
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
    const {brand, color, model, description} = this.state;
    if (brand == '') {
      Toast.show('Email is empty', Toast.LONG);
      this.setState({checkBrand: false});
    } else if (model == '') {
      Toast.show('model is empty', Toast.LONG);
      this.setState({checkModel: false});
    } else if (color == '') {
      Toast.show('color is empty', Toast.LONG);
      this.setState({checkColor: false});
    } else if (description == '') {
      Toast.show('description is empty', Toast.LONG);
      this.setState({checkDescription: false});
    } else {
      this.registerCall();
    }
  };

  onChangeText = key => text => {
    if (key == 'brand' && key == ' ') {
      this.setState({checkBrand: false});
    } else if (key == 'color' && key == ' ') {
      this.setState({checkMobile: false});
    } else if (key == 'model' && key == ' ') {
      this.setState({checkModel: false});
    } else if (key == 'description' && key == ' ') {
      this.setState({checkDescription: false});
    } else {
      this.setState({
        checkColor: true,
        checkModel: true,
        checkBrand: true,
        checkDescription: true,
      });
    }

    this.setState({[key]: text});
  };

  render() {
    const {
      brand,
      color,
      model,
      description,
      checkColor,
      checkModel,
      checkBrand,
      checkDescription,
    } = this.state;

    return (
      <View style={styles.container}>
        <TextInput
          style={styles.inputBox}
          value={brand}
          onChangeText={this.onChangeText('brand')}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="brand"
          placeholderTextColor="#002f6c"
          selectionColor="#fff"
          keyboardType="ascii-capable"
          onSubmitEditing={() => this.password.focus()}
        />
        {!checkBrand && (
          <Text style={{marginHorizontal: 20, color: 'red'}}>
            Please enter the brand name
          </Text>
        )}
        <TextInput
          style={styles.inputBox}
          value={model}
          onChangeText={this.onChangeText('model')}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="model"
          keyboardType="ascii-capable"
          placeholderTextColor="#002f6c"
        />
        {!checkModel && (
          <Text style={{marginHorizontal: 20, color: 'red'}}>
            Please enter the model name
          </Text>
        )}
        <TextInput
          style={styles.inputBox}
          value={color}
          onChangeText={this.onChangeText('color')}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="color"
          keyboardType="ascii-capable"
          placeholderTextColor="#002f6c"
        />
        {!checkColor && (
          <Text style={{marginHorizontal: 20, color: 'red'}}>
            Please enter the color
          </Text>
        )}
        <TextInput
          style={styles.inputBox}
          value={description}
          onChangeText={this.onChangeText('description')}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="description"
          keyboardType="ascii-capable"
          placeholderTextColor="#002f6c"
        />
        {!checkDescription && (
          <Text style={{marginHorizontal: 20, color: 'red'}}>
            Please enter the description
          </Text>
        )}
        <TouchableOpacity
          style={[styles.buttonContainer, styles.loginButton]}
          onPress={this.saveData}>
          <Text style={styles.loginText}>Submit</Text>
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
