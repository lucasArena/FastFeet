import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import SignIn from './pages/SignIn';

import Orders from './pages/Orders';
import Profile from './pages/Profile';

import DeliveryDetails from './pages/Details/DeliveryDetails';
import CreateProblem from './pages/Details/CreateProblem';
import ViewProblems from './pages/Details/ViewProblems';
import ConfirmDelivery from './pages/Details/ConfirmDelivery';

export default (signedIn = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          SignIn,
        }),
        App: createBottomTabNavigator(
          {
            Orders,
            Profile,
            Details: createStackNavigator(
              {
                DeliveryDetails,
                CreateProblem,
                ViewProblems,
                ConfirmDelivery,
              },
              {
                defaultNavigationOptions: {
                  headerTintColor: '#FFF',
                  headerTitleAlign: 'center',
                  headerLeftContainerStyle: {
                    marginLeft: 20,
                  },
                  headerStyle: {
                    elevation: 0,
                    backgroundColor: '#7159c1',
                    borderBottomWidth: 0,
                  },
                },
              }
            ),
          },
          {
            tabBarOptions: {
              activeTintColor: '#8469E7',
              inactiveTintColor: '#999',
              style: {
                backgroundColor: 'rgba(255,255,255,0.15)',
              },
            },
          }
        ),
      },
      {
        initialRouteName: signedIn ? 'App' : 'Sign',
      }
    )
  );
