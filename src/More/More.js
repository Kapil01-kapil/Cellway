import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
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
export default class SecondActivity extends Component {
  render() {
    return (
      <View style={styles.MainContainer}>
        <TouchableOpacity
          style={[styles.buttonContainer, styles.loginButton]}
          onPress={() => this.props.navigation.navigate('Home')}>
          <Text style={styles.loginText}>FAQs</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.buttonContainer, styles.loginButton]}
          onPress={() => this.props.navigation.navigate('Home')}>
          <Text style={styles.loginText}>Legal</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.buttonContainer, styles.loginButton]}
          onPress={() => this.props.navigation.navigate('Home')}>
          <Text style={styles.loginText}>Booking Policy</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.buttonContainer, styles.loginButton]}
          onPress={() => this.props.navigation.navigate('Home')}>
          <Text style={styles.loginText}>For Buisness/Bank details</Text>
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
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    margin: 10,
  },

  TextStyle: {
    fontSize: 23,
    textAlign: 'center',
    color: '#000',
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
    margin: 15,
    width: 300,
    borderRadius: 10,
  },
  loginButton: {
    backgroundColor: '#002f6c',
  },
  loginText: {
    color: 'white',
  },
});
