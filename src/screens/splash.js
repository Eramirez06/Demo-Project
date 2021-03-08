import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import auth from '@react-native-firebase/auth';

//Routes
import { HomeNavigator, AuthNavigator } from '../routes/app';

//Custom
import Network from '../components/network';

let eventConnected;
let authChanged;

class Splash extends Component {
  state = {
    isConnected: true,
    logged: auth().currentUser ? true : false,
  };

  componentDidMount = () => {
    eventConnected = NetInfo.addEventListener((state) => {
      this.setState({ isConnected: state.isConnected });
    });
    this.validateUserLogged();
  };

  validateUserLogged = () => {
    authChanged = auth().onAuthStateChanged((user) => {
			if (user) {
				this.setState({ logged: true });
			} else {
				this.setState({ logged: false });
			}
		});
  }

  componentWillUnmount = () => {
    eventConnected();
    authChanged();
  };

  render() {
    const { isConnected, logged } = this.state;
    return (
      <>
        {logged ? <HomeNavigator /> : <AuthNavigator />}
        <Network isConnected={isConnected} />
      </>
    );
  }
}
export default Splash;
