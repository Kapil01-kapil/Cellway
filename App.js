/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from './src/Login/Login';
import Under from './src/Under/Under';
import ForgotPassword from './src/ForgotPassword/ForgotPassword';
import Otp from './src/OTP/Otp';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/store';
import Register from './src/Register/Register';
import Splash from './src/Splash';
import DrawerNavigator from './src/DrawerNavigator/DrawerNavigator';
import Destination from './src/Destination/Destination';
import Screen from './src/Screen';
import Profile from './src/Profile/Profile';
import Contact from './src/Contact/Contact';
import Address from './src/Address/Address';
import Booking from './src/Booking/Booking';
import Kapil from './src/Kapil';
import SecondUder from './src/SecondUder/SecondUder';
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppContainer />
        </PersistGate>
      </Provider>
    );
  }
}
const noTransitionConfig = () => ({
  transitionSpec: {
    duration: 0,
    timing: Animated.timing,
    easing: Easing.step0,
  },
});
const Stack = createStackNavigator(
  {
    Splash: {screen: Splash},
    Login: {screen: Login},
    ForgotPassword: {screen: ForgotPassword},
    Otp: {screen: Otp},
    Register: {screen: Register},
    Destination: {screen: Destination},
    DrawerNavigator: {screen: DrawerNavigator},
    Screen: {screen: Screen},
    Profile: {screen: Profile},
    Contact: {screen: Contact},
    Under: {screen: Under},
    Address: {screen: Address},
    Booking: {screen: Booking},
    Kapil: {screen: Kapil},
    SecondUder: {screen: SecondUder},
  },
  {
    headerMode: null,
    initialRouteName: 'Destination',
  },
);

const AppContainer = createAppContainer(Stack);

export default App;
