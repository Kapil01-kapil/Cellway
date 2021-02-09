import React, {Component} from 'react';
//import react in our code.
import {
  StyleSheet,
  AsyncStorage,
  Alert,
  View,
  SafeAreaView,
  Text,
  ActivityIndicator,
  Dimensions,
  TextInput,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import {
  DrawerItems,
  DrawerActions,
  createDrawerNavigator,
} from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

//Import all the screens
import Screen1 from '../Home/Home';
import Repair from '../Repair/Repair';
import Screen3 from '../Requirement/Requirement';
import Screen4 from '../MyOrder/MyOrder';
import Screen5 from '../AboutUs/About';
import Screen6 from '../Share/Share';
import Screen7 from '../Contact/Contact';
import Screen8 from '../More/More';
import Screen9 from '../Dialog/DialogContent';
import Otp from '../OTP/Otp';

//Import Custom Sidebar
import CustomSidebarMenu from './CustomSidebarMenu';

global.currentScreenIndex = 0;
class NavigationDrawerStructure extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
    };
  }
  ShareMessage = () => {
    //Here is the Share API
    Share.share({
      message: this.state.inputValue.toString(),
    })
      //after successful share return result
      .then(result => console.log(result))
      //If any thing goes wrong it comes here
      .catch(errorMsg => console.log(errorMsg));
  };
  //Top Navigation Header with Donute Button
  toggleDrawer = () => {
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          {/*Donute Button Image */}
          <Icon
            name="ios-menu"
            size={30}
            color="#FFF"
            style={{width: 25, height: 25, marginLeft: 5}}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
const FirstActivity_StackNavigator = createStackNavigator({
  First: {
    screen: Screen1,
    navigationOptions: ({navigation}) => ({
      title: 'Home',
      headerLeft: () => (
        <NavigationDrawerStructure navigationProps={navigation} />
      ),
      headerStyle: {
        backgroundColor: '#2873F9',
      },
      headerTintColor: '#fff',
    }),
  },
});
const Screen2_StackNavigator = createStackNavigator({
  Second: {
    screen: Repair,
    navigationOptions: ({navigation}) => ({
      title: 'Repair your gadget',
      headerLeft: () => (
        <NavigationDrawerStructure navigationProps={navigation} />
      ),

      headerStyle: {
        backgroundColor: '#2873F9',
      },
      headerTintColor: '#fff',
    }),
  },
});

const Screen3_StackNavigator = createStackNavigator({
  Third: {
    screen: Screen3,
    navigationOptions: ({navigation}) => ({
      title: 'Your Requirement',
      headerLeft: () => (
        <NavigationDrawerStructure navigationProps={navigation} />
      ),
      headerStyle: {
        backgroundColor: '#2873F9',
      },
      headerTintColor: '#fff',
    }),
  },
});
const Screen4_StackNavigator = createStackNavigator({
  Third: {
    screen: Screen4,
    navigationOptions: ({navigation}) => ({
      title: 'My Order',
      headerLeft: () => (
        <NavigationDrawerStructure navigationProps={navigation} />
      ),
      headerStyle: {
        backgroundColor: '#2873F9',
      },
      headerTintColor: '#fff',
    }),
  },
});
const Screen5_StackNavigator = createStackNavigator({
  Third: {
    screen: Screen5,
    navigationOptions: ({navigation}) => ({
      title: 'About Us',
      headerLeft: () => (
        <NavigationDrawerStructure navigationProps={navigation} />
      ),
      headerStyle: {
        backgroundColor: '#2873F9',
      },
      headerTintColor: '#fff',
    }),
  },
});

const Screen6_StackNavigator = createStackNavigator({
  Third: {
    screen: Screen6,
    navigationOptions: ({navigation}) => ({
      title: 'Share',
      headerLeft: () => (
        <NavigationDrawerStructure navigationProps={navigation} />
      ),
      headerStyle: {
        backgroundColor: '#2873F9',
      },
      headerTintColor: '#fff',
    }),
  },
});

const Screen7_StackNavigator = createStackNavigator({
  Third: {
    screen: Screen7,
    navigationOptions: ({navigation}) => ({
      title: 'Contact',
      headerLeft: () => (
        <NavigationDrawerStructure navigationProps={navigation} />
      ),
      headerStyle: {
        backgroundColor: '#2873F9',
      },
      headerTintColor: '#fff',
    }),
  },
});

const Screen8_StackNavigator = createStackNavigator({
  Third: {
    screen: Screen8,
    navigationOptions: ({navigation}) => ({
      title: 'More',
      headerLeft: () => (
        <NavigationDrawerStructure navigationProps={navigation} />
      ),
      headerStyle: {
        backgroundColor: '#2873F9',
      },
      headerTintColor: '#fff',
    }),
  },
});

const DrawerNavigatorExample = createDrawerNavigator(
  {
    NavScreen1: {
      screen: FirstActivity_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Home',
      },
    },
    NavScreen2: {
      screen: Screen2_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Demo Screen 2',
      },
    },
    NavScreen3: {
      screen: Screen3_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Demo Screen 3',
      },
    },
    NavScreen4: {
      screen: Screen4_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Demo Screen 4',
      },
    },
    NavScreen5: {
      screen: Screen5_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Demo Screen 4',
      },
    },
    NavScreen6: {
      screen: Screen6_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Demo Screen 4',
      },
    },
    NavScreen7: {
      screen: Screen7_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Demo Screen 4',
      },
    },
    NavScreen8: {
      screen: Screen8_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Demo Screen 4',
      },
    },
  },

  {
    //For the Custom sidebar menu we have to provide our CustomSidebarMenu
    contentComponent: CustomSidebarMenu,
    //Sidebar width

    drawerWidth: Dimensions.get('window').width - 130,
  },
);
export default createAppContainer(DrawerNavigatorExample);
