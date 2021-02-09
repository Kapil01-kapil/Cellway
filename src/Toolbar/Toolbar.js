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
} from 'react-native';
import {withNavigation} from 'react-navigation';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/AntDesign';

class Toolbar extends Component {
  updateState = () => {
    this.setState({myState: 'The state is updated'});
  };
  render() {
    return (
      <View style={styles.toolbar}>
        <Icon
          name="arrowleft"
          style={{fontSize: 24, color: '#eeeeee', marginLeft: 10}}
          onPress={() => this.props.navigation.goBack(null)}></Icon>
        <Text
          style={{
            borderRadius: 25,
            fontSize: 16,
            marginEnd: 20,
            color: '#fff',
            textAlign: 'center',
            fontWeight: 'bold',
            flex: 1,
          }}>
          {this.props.name}
        </Text>
      </View>
    );
  }
}
var styles = StyleSheet.create({
  toolbar: {
    backgroundColor: '#2873F0',
    paddingTop: 10,
    width: '100%',
    paddingBottom: 20,
    flexDirection: 'row',
  },
  toolbarButton: {
    width: 50,
    color: '#fff',
    textAlign: 'center',
  },
  toolbarTitle: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    flex: 1,
  },
});

export default withNavigation(Toolbar);
