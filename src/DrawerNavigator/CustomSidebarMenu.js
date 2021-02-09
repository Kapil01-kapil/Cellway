import React, {Component} from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Profile from '../Profile/Profile';
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogFooter,
  DialogButton,
  SlideAnimation,
  ScaleAnimation,
} from 'react-native-popup-dialog';
import AuthService from '../service/AuthServece';
import {connect} from 'react-redux';
import {Logout} from '../store/action';
class CustomSidebarMenu extends Component {
  constructor(props) {
    super(props);
    const {user} = this.props;
    this.state = {
      name: user.name,
    };

    this.items = [
      {
        navOptionThumb: 'ios-home',
        navOptionName: 'Home',
        screenToNavigate: 'NavScreen1',
      },
      {
        navOptionThumb: 'ios-repeat',
        navOptionName: 'Repair your gadget',
        screenToNavigate: 'NavScreen2',
      },
      {
        navOptionThumb: 'ios-camera',
        navOptionName: 'Your Requirement',
        screenToNavigate: 'NavScreen3',
      },
      {
        navOptionThumb: 'ios-recording',
        navOptionName: 'My Order',
        screenToNavigate: 'NavScreen4',
      },
      {
        navOptionThumb: 'ios-document',
        navOptionName: 'About Us',
        screenToNavigate: 'NavScreen5',
      },
      {
        navOptionThumb: 'md-share',
        navOptionName: 'Share',
        screenToNavigate: 'NavScreen6',
      },
      {
        navOptionThumb: 'ios-contact',
        navOptionName: 'Contact',
        screenToNavigate: 'NavScreen7',
      },
      {
        navOptionThumb: 'ios-more',
        navOptionName: 'More',
        screenToNavigate: 'NavScreen8',
      },
    ];
  }
  state = {
    defaultAnimationDialog: false,
    scaleAnimationDialog: false,
    slideAnimationDialog: false,
  };
  registerCall() {
    const {userid, mobile, email, image, name} = this.state;
    let auth = new AuthService();

    auth
      .CustomSidebarMenu('/getprofile', userid, mobile, email, image, name)
      .then(res => {
        console.log(res);

        if (res.status === 200) {
          this.props.navigation.navigate('Profile');
          // this.props.saveUser(res.data);
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

  Buttom = () => {
    this.props.navigation.navigate('Login');
    this.setState({slideAnimationDialog: false});
    this.props.Logout();
  };
  But = () => {
    this.setState({slideAnimationDialog: false});
  };
  Buttttttt = () => {
    this.props.navigation.navigate('Profile');
  };
  render() {
    const {name} = this.state;
    return (
      <View style={styles.sideMenuContainer}>
        {/*Top Large Image */}
        <View style={{width: '100%'}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              padding: 25,
              backgroundColor: '#2873F9',
              justifyContent: 'space-between',
            }}>
            <Image
              source={require('../assets/logo.png')}
              style={{width: 100, height: 100}}
            />
            <Text
              onPress={this.Buttttttt}
              style={{
                fontSize: 16,
                paddingLeft: 20,
                color: '#FFF',
              }}>
              {name}
            </Text>
          </View>
        </View>
        <View style={{width: '100%'}}>
          {this.items.map((item, key) => (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingTop: 10,
                paddingBottom: 10,
                backgroundColor:
                  global.currentScreenIndex === key ? '#e0dbdb' : '#ffffff',
              }}
              key={key}>
              <View style={{marginRight: 10, marginLeft: 20}}>
                <Icon name={item.navOptionThumb} size={25} color="#808080" />
              </View>
              <Text
                style={{
                  fontSize: 15,
                  color:
                    global.currentScreenIndex === key ? '#2873F9' : 'black',
                }}
                onPress={() => {
                  global.currentScreenIndex = key;
                  this.props.navigation.navigate(item.screenToNavigate);
                }}>
                {item.navOptionName}
              </Text>
            </View>
          ))}
        </View>
        <View style={{width: '100%'}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingTop: 10,
              paddingBottom: 10,
            }}>
            <View style={{marginRight: 10, marginLeft: 20}}>
              <Icon name="ios-log-out" size={25} color="#808080" />
            </View>
            <Text
              style={{
                fontSize: 15,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => {
                this.setState({
                  slideAnimationDialog: true,
                });
              }}>
              Logout
            </Text>
          </View>
        </View>
        <Dialog
          onDismiss={() => {
            this.setState({slideAnimationDialog: false});
          }}
          onTouchOutside={() => {
            this.setState({slideAnimationDialog: false});
          }}
          visible={this.state.slideAnimationDialog}>
          <View style={{width: 300, borderWidth: 1, borderColor: '#E7E7E7'}}>
            <Text
              style={{
                fontSize: 20,
                justifyContent: 'center',
                padding: 10,
                alignItems: 'center',
              }}>
              Logout
            </Text>

            <Text
              style={{
                fontSize: 15,
                justifyContent: 'center',
                padding: 20,
                alignItems: 'center',
              }}>
              Do you want exit
            </Text>
            <View
              style={{
                height: 1,
                width: '100%',
                marginTop: 10,
                backgroundColor: '#E7E7E7',
              }}
            />

            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{marginLeft: 20, marginRight: 20}}
                onPress={this.Buttom}>
                Ok
              </Text>
              <View
                style={{
                  backgroundColor: '#e7e7e7',
                  height: 30,
                  width: 1,
                  marginLeft: 20,
                  marginRight: 20,
                }}
              />
              <Text
                style={{marginLeft: 20, marginRight: 20}}
                onPress={this.But}>
                Cancel
              </Text>
            </View>
          </View>
        </Dialog>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  sideMenuContainer: {
    width: '100%',

    alignItems: 'center',
  },
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 150,
    height: 150,
    marginTop: 20,
    borderRadius: 150 / 2,
  },
});

const mapDispatchToProps = {
  Logout,
};
const mapStateToProps = state => ({user: state.saveUser});
export default connect(mapStateToProps, mapDispatchToProps)(CustomSidebarMenu);
