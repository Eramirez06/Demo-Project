import { createAppContainer } from 'react-navigation';
import { enableScreens } from 'react-native-screens';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { createStackNavigator } from 'react-navigation-stack';

enableScreens();

//Screens - Auth
import Login from '../../screens/auth/login';
import Register from '../../screens/auth/register';

//Screen - Home
import Home from '../../screens/app/home';
import Details from '../../screens/app/details';

const appStackNavigator = createSharedElementStackNavigator(
  {
    Home: { screen: Home },
    Details: { screen: Details },
  },
  {
    initialRouteName: 'Home',
    debug: true,
    defaultNavigationOptions: {
      headerShown: null,
    },
  },
);

export const HomeNavigator = createAppContainer(appStackNavigator);

const authStackNavigator = createStackNavigator(
  {
    Login: { screen: Login },
    Register: { screen: Register },
      
  },
  {
    initialRouteName: 'Login',
    debug: true,
    defaultNavigationOptions: {
      headerShown: null,
    },
  },
);

export const AuthNavigator = createAppContainer(authStackNavigator);
